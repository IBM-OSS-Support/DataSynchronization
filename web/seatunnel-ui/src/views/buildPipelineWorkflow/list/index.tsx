/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import {
  NButton,
  NInput,
  NIcon,
  NDataTable,
  NPagination,
  NDropdown,
  NSpace,
  NCard,
  NPopover,
  NPopselect,
  NPopconfirm,
  NModal,
  NGi,
  NSelect
} from 'naive-ui'
import { SearchOutlined, ReloadOutlined } from '@vicons/antd'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useColumns } from './use-columns'
import { useTable } from './use-table'
import styles from '../index.module.scss'
import SourceModal from '../components/source-modal'
import type { PropType, Ref } from 'vue'
import type { TableColumns } from 'naive-ui/es/data-table/src/interface'
import { stateType } from '@/common/common'
import { filterColumns, setColumns } from '@/components/column-selector/dealColumns'
import log from '@/locales/zh_CN/log'
import { id } from 'date-fns/locale'
import { useSource } from '@/views/datasource/list/use-source'


const props = {
  tableKey: {
    default: '',
    type: String
  },
  tableColumns: {
    default: [],
    type: Array as PropType<Array<any>>
  }
}

const DatasourceList = defineComponent({
  props,
  emits: ['changeOptions'],
  setup: function (props, ctx) {
    const { t } = useI18n()
    const showSourceModal = ref(false)
    const columns1: Ref<TableColumns> = ref([])
    const router = useRouter()
    const route = useRoute()
    const { data, changePage, changePageSize, deleteRecord, updateList } =  useTable()
    const handleSearch = () => {
      updateList()
    }
    const { state: sourceState } = useSource(true)
    const columns = ref<(string | string)[] | null>(null)

    const { getColumns } = useColumns((id: string, type: 'edit' | 'delete') => {
      if (type === 'edit') {
        router.push({ name: 'datasource-edit', params: { id } })
      } else if (type === 'delete') {
        deleteRecord(id)
      }
    })

    const onCreate = () => {
      showSourceModal.value = true
    }

    const closeSourceModal = () => {
      showSourceModal.value = false
    }

    const handleSelectSourceType = (value: string) => {
      router.push({ name: 'datasource-create', query: { type: value } })
      closeSourceModal()
    }

    const initSearch = () => {
      const { searchVal } = route.query
      console.log("search", searchVal);
      
      if (searchVal) {
        data.searchVal = searchVal as string
      }
    }

    onMounted(() => {
      initSearch()
      if (!route.query.tab || route.query.tab === 'datasource') {
        changePage(1)
        columns1.value = getColumns()
      }
    })

    watch(useI18n().locale, () => {
      columns1.value = getColumns()
    })

    // const databaseShow = () => {
    //   const dbOptionValue = document.getElementById('db')
    //   console.log(dbOptionValue)

    //   debugger
    //   if (dbOptionValue != null) {
    //     dbOptionValue.classList.remove('hidden')
    //     dbOptionValue.classList.add('flex')
    //   }
    // }
    function addClass(className: string, obj: any, isActive: boolean | undefined) {
      console.log("className", className); 
      // console.table( "obj", obj[0].classList[1]);
      // console.table( "obj", obj[0].classList[1]=undefined);
      if(className == 'hidden') {
        // isActive = true;
        // obj[0].classList[1] = undefined
      }else isActive = false;
      obj.className += " " + className;
    }

    function newClass() {
      var el = document.getElementsByClassName('n-select');
      var db = document.querySelector("#database");

      console.log("out", db)
      if(el != null) {
        console.log("In", el);
        
        addClass("hidden", el, true);
      }
    }

    const handleClick = (show: boolean) => {
      console.log("show", show, "props.tableKey", props.tableKey);
      
      if (!show) {
        const resColumn = filterColumns(columns.value, props.tableColumns)
        console.log("resColumn", resColumn);
        
        ctx.emit('changeOptions', resColumn)
        setColumns(props.tableKey, resColumn)
      }
    }

    return {
      t,
      showSourceModal,
      columns,
      ...toRefs(data),
      changePage,
      changePageSize,
      onCreate,
      handleSearch,
      handleSelectSourceType,
      closeSourceModal,
      newClass,
      handleClick,
      Options: {
        data: [
          {
            id: 0,
            label: 'Select a Database',
            value: '',
            disabled: true
          },
          {
            id: 1,
            label: 'WatsonX.Data',
            value: 'WatsonX.Data'
          },
          {
            id: 2,
            label: 'DB2',
            value: 'DB2'
          },
          {
            id: 3,
            label: "JDBC-mysql",
            value: 'JDBC-mysql'
          }
        ],
        selected: ''
      },
      activeData: {
        isActive: false,
        // hasError: false
      }
    }
  },
  render() {
    const {
      t,
      showSourceModal,
      columns,
      list,
      page,
      pageSize,
      itemCount,
      changePage,
      changePageSize,
      onCreate,
      handleSelectSourceType,
      closeSourceModal
    } = this

    return (
      <NSpace vertical>
        <NCard title='Sync Tasks'>
          {{
            'header-extra': () => (
              <NSpace>
                <NInput
                  v-model={[this.searchVal, 'value']}
                  placeholder={t('datasource.search_input_tips')}
                  style={{ width: '200px' }}
                />
                <NButton onClick={this.handleSearch} type='primary'>
                  {this.t('datasource.search')}
                </NButton>
                {/* <NButton onClick={onCreate} type='success'>
                  {t('datasource.create')}
                </NButton> */}
              </NSpace>
            )
          }}
        </NCard>
        <NCard>
          <div class='taskSourceConfig flex justify-between flex-col'>
            <div>
              <label class='text-2xl font-semibold text-slate-900 mr-4'>Source</label>
              <span class='flex border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500'>
                <div class='flex flex-col w-full mb-20'>
                  <p class="mt-1 text-sm leading-6 text-gray-600">Select Source Type.</p>
                  <div class="mt-2 space-y-6 flex flex-wrap w-full align-items-start">
                    <div class="flex items-center flex-wrap gap-x-3 f-basis-20">
                      <input id="database" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="database" class="block text-sm font-medium leading-6 text-gray-900">Database</label>
                      
                        <div class="database-option-wrap">
                          <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select Database.</p>
                          <div class="mt-3 space-y-6 flex flex-wrap w-full">
                            <div class="flex items-center flex-wrap gap-x-3">
                              <input id="watsonx" name="database" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label for="watsonx" class="block text-sm font-medium leading-6 text-gray-900">WatsonX</label>
                            </div>
                            <div class="flex items-center gap-x-3">
                              <input id="DB2" name="database" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label for="DB2" class="block text-sm font-medium leading-6 text-gray-900">DB2</label>
                            </div>
                            <div class="flex items-center gap-x-3">
                              <input id="mysql" name="database" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label for="mysql" class="block text-sm font-medium leading-6 text-gray-900">MySQL</label>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                    <div class="flex items-center flex-wrap  gap-x-3 f-basis-20">
                      <input id="file" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="file" class="block text-sm font-medium leading-6 text-gray-900">File</label>

                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select File.</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <div class="flex items-center flex-wrap gap-x-3">
                            <input id="ibmcos" name="file" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="ibmcos" class="block text-sm font-medium leading-6 text-gray-900">IBM CoS</label>
                          </div>
                          <div class="flex items-center gap-x-3">
                            <input id="s3" name="file" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="s3" class="block text-sm font-medium leading-6 text-gray-900">S3</label>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="flex items-center flex-wrap gap-x-3 f-basis-20">
                      <input id="nosqls" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="nosqls" class="block text-sm font-medium leading-6 text-gray-900">NoSQLs</label>
                      
                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select NoSQLs.</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <span>No Data Found.</span>
                        </div>
                      </div>

                    </div>
                    <div class="flex flex-wrap items-center gap-x-3 f-basis-20">
                      <input id="storage" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="storage" class="block text-sm font-medium leading-6 text-gray-900">Storage</label>
                      
                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select Storage.</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <span>No Data Found.</span>
                        </div>
                      </div>

                    </div>
                    <div class="flex flex-wrap items-center gap-x-3 f-basis-20">
                      <input id="remote-connection" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="remote-connection" class="block text-sm font-medium leading-6 text-gray-900">Remote Connection</label>
                      
                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select Remote Connection.</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <span>No Data Found.</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </span>
              <span class='flex border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500'>
                <div class='flex flex-col w-full mb-20'>
                  <p class="mt-1 text-lg font-medium leading-6">Configure Datasource</p>
                  <form class="flex gap-2 mb-14" action=''>
                    <div>
                      <label for="data" class="block text-sm font-small leading-6 text-gray-900">Datasource Name</label>
                      <NInput
                        v-model={[this.searchVal, 'value']}
                        placeholder="Enter Datasource Name"
                        style={{ width: '200px' }}
                      />
                      {/* <input id="data" name="transforms" type="input" class="border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-2xl" /> */}
                    </div>
                    <div>
                      <label for="data" class="block text-sm font-small leading-6 text-gray-900">URL</label>
                      <NInput
                        v-model={[this.searchVal, 'value']}
                        placeholder="Enter URL"
                        style={{ width: '200px' }}
                      />
                      {/* <input id="data" name="transforms" type="input" class="border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-2xl" /> */}
                    </div>
                    <div>
                      <label for="data" class="block text-sm font-small leading-6 text-gray-900">User</label>
                      <NInput
                        v-model={[this.searchVal, 'value']}
                        placeholder="Enter Username"
                        style={{ width: '200px' }}
                      />
                      {/* <input id="data" name="transforms" type="input" class="border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-2xl" /> */}
                    </div>
                    <div>
                      <label for="data" class="block text-sm font-small leading-6 text-gray-900">Password</label>
                      <NInput
                        v-model={[this.searchVal, 'value']}
                        placeholder="Enter Password"
                        style={{ width: '200px' }}
                        type="password"
                      />
                      {/* <input id="data" name="transforms" type="password" class="border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-2xl" /> */}
                    </div>
                  </form>
                </div>
              </span>
            </div>

            <div>
              <div class="mt-4 mb-20">
              <label class='text-2xl font-semibold text-slate-900 mr-4'>
                Transforms
              </label>
              <span class='flex border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500'>
                {/* <select 
                  name='transforms' 
                  id='transforms' 
                  value='sql' 
                  style='outline: none'
                  onChange={this.newClass}
                >
                  <option value='' disabled selected>
                    Select your Transforms
                  </option>
                  <option value='copy'>Copy</option>
                  <option value='fieldMapper'>FieldMapper</option>
                  <option value='filterRowKind'>FilterRowKind</option>
                  <option value='replace'>Replace</option>
                  <option value='sql'>SQL</option>
                </select> */}

                <div class="">
                  <p class="mt-1 text-sm leading-6 text-gray-600">Select Transforms</p>
                  <div class="mt-3 space-y-6 flex flex-wrap w-full">
                    <div class="flex items-center gap-x-3 f-basis-30 mb-10">
                      <input id="copy" name="transforms" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="copy" class="block text-sm font-medium leading-6 text-gray-900">Copy</label>
                    </div>
                    <div class="flex items-center gap-x-3 f-basis-30 mb-10">
                      <input id="fieldMapper" name="transforms" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="fieldMapper" class="block text-sm font-medium leading-6 text-gray-900">FieldMapper</label>
                    </div>
                    <div class="flex items-center gap-x-3 f-basis-30 mb-10">
                      <input id="filterRowKind" name="transforms" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="filterRowKind" class="block text-sm font-medium leading-6 text-gray-900">FilterRowKind</label>
                    </div>
                    <div class="flex items-center gap-x-3 f-basis-30 mb-10">
                      <input id="replace" name="transforms" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="replace" class="block text-sm font-medium leading-6 text-gray-900">Replace</label>
                    </div>
                    <div class="flex items-center flex-wrap gap-x-3 f-basis-30 mb-10">
                      <input id="sql" name="transforms" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="sql" class="block text-sm font-medium leading-6 text-gray-900">SQL</label>
                      
                      <div id="output" class='output'>
                        <h3>Sql Commands</h3>
                        <input type='textarea' placeholder='Enter Sql Query'/>
                      
                      </div>
                    </div>
                  </div>
                </div>

              </span>
            </div>
            </div>
            <div>
              <label class='text-2xl font-semibold text-slate-900'>Sink</label>
              <span class='flex border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500'>
                <div class='flex flex-col w-full mb-20'>
                  <p class="mt-1 text-sm leading-6 text-gray-600">Select Sink Type</p>
                  <div class="mt-2 space-y-6 flex flex-wrap w-full align-items-start">
                    <div class="flex items-center flex-wrap gap-x-3 f-basis-20">
                      <input id="sinkdatabase" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="sinkdatabase" class="block text-sm font-medium leading-6 text-gray-900">Database</label>
                      
                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select Database</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <div class="flex items-center flex-wrap gap-x-3">
                            <input id="sinkwatsonx" name="database" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="sinkwatsonx" class="block text-sm font-medium leading-6 text-gray-900">WatsonX</label>
                          </div>
                          <div class="flex items-center gap-x-3">
                            <input id="sinkDB2" name="database" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="sinkDB2" class="block text-sm font-medium leading-6 text-gray-900">DB2</label>
                          </div>
                          <div class="flex items-center gap-x-3">
                            <input id="sinkmysql" name="database" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="sinkmysql" class="block text-sm font-medium leading-6 text-gray-900">MySQL</label>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div class="flex items-center flex-wrap  gap-x-3 f-basis-20">
                      <input id="sinkfile" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="sinkfile" class="block text-sm font-medium leading-6 text-gray-900">File</label>

                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select File.</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <div class="flex items-center flex-wrap gap-x-3">
                            <input id="sinkibmcos" name="file" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="sinkibmcos" class="block text-sm font-medium leading-6 text-gray-900">IBM CoS</label>
                          </div>
                          <div class="flex items-center gap-x-3">
                            <input id="sinks3" name="file" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="sinks3" class="block text-sm font-medium leading-6 text-gray-900">S3</label>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="flex items-center flex-wrap gap-x-3 f-basis-20">
                      <input id="sinknosqls" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="sinknosqls" class="block text-sm font-medium leading-6 text-gray-900">NoSQLs</label>
                      
                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select NoSQLs</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <span>No Data Found.</span>
                        </div>
                      </div>

                    </div>
                    <div class="flex flex-wrap items-center gap-x-3 f-basis-20">
                      <input id="sinkstorage" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="sinkstorage" class="block text-sm font-medium leading-6 text-gray-900">Storage</label>
                      
                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select Storage</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <span>No Data Found.</span>
                        </div>
                      </div>

                    </div>
                    <div class="flex flex-wrap items-center gap-x-3 f-basis-20">
                      <input id="sinkremote-connection" name="source-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="sinkremote-connection" class="block text-sm font-medium leading-6 text-gray-900">Remote Connection</label>
                      
                      <div class="database-option-wrap">
                        <p class="mt-1 text-sm leading-6 text-blue-500 font-bold">Select Remote Connection</p>
                        <div class="mt-3 space-y-6 flex flex-wrap w-full">
                          <span>No Data Found.</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </span>
            </div>
          </div>
          <div class="flex justify-end">
            <NButton class="ml-auto" onClick={this.handleSearch} type='primary'>
              Save
            </NButton>
          </div>
        </NCard>

        <SourceModal
          show={showSourceModal}
          onChange={handleSelectSourceType}
          onCancel={closeSourceModal}
        />
      </NSpace>
    )
  }
})
export default DatasourceList
