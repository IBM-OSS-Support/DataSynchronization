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

import { reactive, h } from 'vue'
import { NEllipsis } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/user'
import { UserDetail } from '@/service/user/types'

export function useMenu() {
  const { t } = useI18n()
  const userDetail = useUserStore()

  const menuOptions = [
    {
      label: () => h(NEllipsis, null, { default: () => t('menu.tasks') }),
      key: 'tasks'
    },
    {
      label: () => h(NEllipsis, null, { default: () => t('menu.datasource') }),
      key: 'datasource'
    },
    {
      label: () => h(NEllipsis, null, { default: () => t('menu.virtual_tables') }),
      key: 'virtual-tables'
    },
    // Conditionally include the 'user-manage' option if user type is 1
    ...(userDetail.getUserInfo as UserDetail).type === 1
      ? [
          {
            label: () => h(NEllipsis, null, { default: () => t('menu.user_manage') }),
            key: 'user-manage'
          }
        ]
      : []  // If the user type is not 1, exclude 'user-manage' from the menu
  
    // {
    //   label: () => h(NEllipsis, null, { default: () => t('menu.buildPipelineWorkflow') }),
    //   key: 'buildPipelineWorkflow'
    // }
  ]

  const state = reactive({
    menuOptions
  })

  return { state }
}
