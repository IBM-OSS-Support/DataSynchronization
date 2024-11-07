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

import { defineComponent, ref, PropType, onMounted, watch, h, Component } from 'vue'
import { NLayoutSider, NMenu, NIcon, NDropdown, NEllipsis } from 'naive-ui'
import { useThemeStore } from '@/store/theme'
import styles from './index.module.scss'
import { ClusterOutlined, PartitionOutlined, ProjectOutlined, RightOutlined } from '@vicons/antd'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { MenuOption } from 'naive-ui'
import { useI18n } from 'vue-i18n'

import {
  ListOutline as ListIcon,
  CloudOutline as CloudIcon,
  PeopleOutline as PeopleIcon,
  DocumentTextOutline as SyncDefenitionIcon,
  FileTrayFullOutline as SyncInstanceIcon
} from '@vicons/ionicons5'
import { useUserStore } from '@/store/user'
import { UserDetail } from '@/service/user/types'

const Sidebar = defineComponent({
  name: 'Sidebar',
  props: {
    sideMenuOptions: {
      type: Array as PropType<any>,
      default: []
    },
    sideKey: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup() {
    const router = useRouter()
    const collapsedRef = ref(false)
    const defaultExpandedKeys = ['']
    const route = useRoute()
    const { t } = useI18n()
    const userDetail = useUserStore()
    // Determine if it is a project overview

    const showDrop = ref(false)
    const themeStore = useThemeStore()
    const menuStyle = ref(themeStore.getTheme as 'dark' | 'dark-blue' | 'light')

    function renderIcon (icon: Component) {
      return () => h(NIcon, null, { default: () => h(icon) })
    }

    const sideMenuOptions = ref<any>([
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/task/synchronization-definition'
              },
              exact: false
            },
            { default: () => t('menu.tasks') }
          ),
        key: 'task',
        icon: renderIcon(ListIcon),
        children: [
          {
            label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/task/synchronization-definition'
              },
              exact: false
            },
            { default: () => t('menu.task_synchronization') }
          ),
        key: 'task_synchronization',
        icon: renderIcon(SyncDefenitionIcon),
          },
          {
            label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/task/synchronization-instance'
              },
              exact: false
            },
            { default: () => t('menu.task_monitoring') }
          ),
        key: 'task_monitoring',
        icon: renderIcon(SyncInstanceIcon),
          }
            ]
            
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/datasource'
              },
              exact: false
            },
            { default: () => t('menu.datasource') }
          ),
        key: 'datasource',
        icon: renderIcon(CloudIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/health-check'
              },
              exact: false
            },
            { default: () => t('Health Check') }
          ),
        key: 'health-check',
        icon: renderIcon(ClusterOutlined),
      },
      // {
      //   label: () =>
      //     h(
      //       RouterLink,
      //       {
      //         to: {
      //           path: '/virtual-tables'
      //         },
      //         exact: false
      //       },
      //       { default: () => t('Virtual Tables') }
      //     ),
      //   key: 'virtual-tables',
      //   icon: renderIcon(CloudIcon),
      // },
      // 
      // {
      //   label: () =>
      //     h(
      //       RouterLink,
      //       {
      //         to: {
      //           path: '/user-manage/list'
      //         },
      //         exact: false
      //       },
      //       { default: () => t('menu.user_manage') }
      //     ),
      //   key: 'user_manage',
      //   icon: renderIcon(PeopleIcon),
      // },
      ...(userDetail.getUserInfo as UserDetail).type === 1
      ? [
        {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    path: '/user-manage/list'
                  },
                  exact: false
                },
                { default: () => t('menu.user_manage') }
              ),
            key: 'user_manage',
            icon: renderIcon(PeopleIcon),
          }
        ]
      : []
    ])

    onMounted(() => {})

    return {
      collapsedRef,
      defaultExpandedKeys,
      menuStyle,
      themeStore,
      showDrop,
      sideMenuOptions,
      route
    }
  },
  render() {
    return (
      <NLayoutSider
        bordered
        nativeScrollbar={false}
        show-trigger='arrow-circle'
        collapse-mode='width'
        collapsed={this.collapsedRef}
        onCollapse={() => (this.collapsedRef = true)}
        onExpand={() => (this.collapsedRef = false)}
        width={260}
        collapsedWidth={50}
      >
        <NMenu
          class='tab-vertical'
          value={this.$props.sideKey}
          options={this.sideMenuOptions}
          defaultExpandedKeys={this.defaultExpandedKeys}
          collapsedIconSize={22}
          accordion
        />
      </NLayoutSider>
    )
  }
})

export default Sidebar