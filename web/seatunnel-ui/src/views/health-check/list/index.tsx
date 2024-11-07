import { defineComponent, toRefs, onMounted, ref, computed, nextTick, Ref } from 'vue'
import { NSpace, NCard, NDataTable } from 'naive-ui'
import styles from '../../datasource/index.module.scss'
import { useTable } from './use-table'
import Button from 'naive-ui/lib/button/src/Button'
import { getClusterStatus, getClusterMembers, checkDatabaseConnection, getClusterHealthMetrics } from '@/service/health-status/hazelcastStatusServices'
import { status } from 'nprogress'
import axios from 'axios'

interface Member {
  id: string;
  address: string;
  status: string;
}

export interface ClusterStatusResponse {
  clusterSize: number;
  nodes: { active: boolean }[];
  // Add other properties if present in the actual response
}

const UserManageList = defineComponent({
  setup() {
    let clusterStatus = ref<string>('');
    const nodeStatus = ref<string>('');
    const numClusters = ref<number>(0);
    const numNodes = ref<number>(0);
    const allConnectionCount = ref<number>(0);
    const migrationQueueSize = ref<number>(0);
    const systemLoad = ref<number>(0);
    const databaseStatus = ref<string>('Disconnected');
    const members = ref<Member[]>([]);
    const allNodes = ref<any[]>([]);
    const isActive = computed(() => nodeStatus.value === 'Active');
    const isInActive = computed(() => nodeStatus.value === 'Inactive');
    const statusText: Ref<HTMLElement | null> = ref(null);
    const statusText2: Ref<HTMLElement | null> = ref(null);
    const connectionCount = ref(0);
    const activeConnectionCount = ref(0);
    const totalConnectionCount = ref<number>(0);
    const totalActiveConnectionCount = ref<number>(0);

    const { state } = useTable();

    // Fetching Cluster Status

    const fetchData = async () => {
      try {
        const response = await getClusterStatus();
        if (response) {
          response.data = response;
          const clusterSize = response.data.clusterSize;
          const nodes = response.data.nodes;
          
          let memberId = 1; 
        
        members.value = nodes.map((member: any) => ({
          id: memberId++,
          address: member.address,
          status: member.address.active == 'false' ? 'Inactive' : 'Active'
        }));
        clusterStatus = computedClusterStatus;
        
        } else {
          console.error('Error: Undefined data received from API response');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    // Fetching Database Connection

    const fetchDatabaseStatus = async () => {
      try {
        const response = await checkDatabaseConnection();
    
        // Ensure the response structure matches the expected format
        if (response && response.data && typeof response.data.isdatabaseconnected !== 'undefined') {
          databaseStatus.value = response.data.isdatabaseconnected ? 'Connected' : 'Disconnected';
        } else {
          console.error('Unexpected response structure:', response);
          databaseStatus.value = 'Connection Issue';
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error fetching database status:', error.message);
        } else {
          console.error('Unknown error:', error);
        }
        databaseStatus.value = 'Connection Issue';
      }
    };    
    

    // Fetching All Nodes Data

    const fetchAllNodesData = async () => {
      try {
        const response = await getClusterHealthMetrics();
  
        // Check if the response data is not undefined
        if (response) {
          const responseData = response;
          const key = Object.keys(responseData)[0];
          const jsonData = JSON.parse(responseData[key].replace(/"([^"]+)":\s*"([^"]+)"/g, (match, key, value) => {
            const cleanedKey = key.replace(/"| /g, '').replace(/\./g, '');
            const cleanedValue = value.replace(/"| /g, '');
            return `"${cleanedKey}": "${cleanedValue}"`;
          }));
    
          // Extract connectionCount, activeConnectionCount , migrationQueueSize and systemLoad from jsonData
          totalConnectionCount.value = jsonData.connectioncount;
          totalActiveConnectionCount.value = jsonData.connectionactivecount;
          migrationQueueSize.value = jsonData.physicalmemoryfree;
          systemLoad.value = jsonData.loadsystem;

        } else {
          console.error('Error: Undefined data received from API response');
        }
      } catch (error) {
        console.error('Error fetching all nodes data:', error);
      }
    };

    const requestData = async () => {
      // await fetchClusterData();
      await fetchDatabaseStatus();
      await fetchAllNodesData();
      await fetchData();
      
      nextTick(() => {
        if (statusText.value) {
          statusText.value.textContent = clusterStatus.value;
          
        }
      });
    };

    const computedClusterStatus = computed(() => {
      return members.value.every(member => member.status === 'Active') ? 'Active' : 'Inactive';
    });

    onMounted(() => {
      requestData();
    });

    return {
      ...toRefs(state),
      nodeStatus,
      numClusters,
      numNodes,
      clusterStatus: computedClusterStatus,
      connectionCount,
      activeConnectionCount,
      allConnectionCount,
      migrationQueueSize,
      systemLoad,
      databaseStatus,
      members,
      allNodes,
      isActive,
      isInActive,
      requestData,
      statusText,
      statusText2,
      totalConnectionCount,
      totalActiveConnectionCount
    };
  },

  render() {
    return (
      <NSpace vertical class="health-status-wrap" style="width: 100%">
        <NCard title="Cluster Health Status" />
        <div class="flex gap-5">
          <NCard>
            <cv-grid class="p-0">
              <cv-row>
              <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class={['type', { active: this.clusterStatus === 'Active', inactive: this.clusterStatus !== 'Active' }]}>
                        <div class="title">
                          <div class={['indicator engines', { active: this.clusterStatus === 'Active', inactive: this.clusterStatus !== 'Active' }]} />
                          <span>Cluster Status</span>
                        </div>
                        <h2 ref="statusText">{this.clusterStatus}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class="type">
                        <div class="title">
                          <div class='indicator engines' />
                          <span>Current Active Nodes</span>
                        </div>
                        <h2>{this.totalActiveConnectionCount}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class="type">
                        <div class="title">
                          <div class='indicator engines' />
                          <span>Number of Nodes</span>
                        </div>
                        <h2>{this.totalActiveConnectionCount}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class="type">
                        <div class="title">
                          <div class='indicator engines' />
                          <span>All Connection Count</span>
                        </div>
                        <h2>{this.totalConnectionCount}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class="type">
                        <div class="title">
                          <div class='indicator engines' />
                          <span>Migration Queue Size</span>
                        </div>
                        <h2>{this.migrationQueueSize}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class="type">
                        <div class="title">
                          <div class='indicator engines' />
                          <span>System Load</span>
                        </div>
                        <h2>{this.systemLoad}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class="type">
                        <div class="title">
                          <div class='indicator engines' />
                          <span>Connection Count</span>
                        </div>
                        <h2>{this.totalConnectionCount}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class="type">
                        <div class="title">
                          <div class='indicator engines' />
                          <span>All Nodes</span>
                        </div>
                        <h2>{this.totalConnectionCount}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
                <cv-column class="bx--col-25" sm="2" md="2" lg="8">
                  <div class="types-wrap">
                    <div class="types">
                      <Button class={['type', { active: this.databaseStatus === 'Connected', inactive: this.databaseStatus !== 'Connected' }]}>
                        <div class="title">
                          <div class={['indicator engines', { active: this.databaseStatus === 'Connected', inactive: this.databaseStatus !== 'Connected' }]} />
                          <span>Database Status</span>
                        </div>
                        <h2>{this.databaseStatus}</h2>
                      </Button>
                    </div>
                  </div>
                </cv-column>
              </cv-row>
            </cv-grid>
          </NCard>
          <NCard>
            <h1>Members List</h1>
            <NDataTable
              columns={[
                { title: 'ID', key: 'id' },
                { title: 'Address', key: 'address' },
                { title: 'Status', key: 'status'}
              ]}
              data={this.members}
              v-model:page={this.pageNo}
              v-model:page-size={this.pageSize}
              page-count={this.totalPage}
              show-size-picker
              page-sizes={[10, 30, 50]}
              show-quick-jumper
              onUpdatePage={this.requestData}
            />
            <cv-pagination
              page={this.pageNo}
              page-size={this.pageSize}
              item-count={this.totalPage}
              show-quick-jumper
              show-size-picker
              page-sizes={[10, 30, 50]}
              class={styles['pagination']}
              on-update:page={this.requestData}
            ></cv-pagination>
          </NCard>
        </div>
      </NSpace>
    )
  }
})

export default UserManageList
