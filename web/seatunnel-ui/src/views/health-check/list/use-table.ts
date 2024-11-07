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
// @ts-nocheck
import { reactive, ref, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { NSpace, NButton } from 'naive-ui'
import { userList, userDelete, userEnable, userDisable } from '@/service/user'
import { getTableColumn } from '@/common/table'
import type { ResponseTable } from '@/service/types'
import type { UserDetail } from '@/service/user/types'
import axios from 'axios'

export function useTable() {
  const { t } = useI18n()
  const state = reactive({
    columns: [],
    tableData: [],
    pageNo: ref(1),
    pageSize: ref(10),
    totalPage: ref(1),
    row: {},
    loading: ref(false),
    showFormModal: ref(false),
    showDeleteModal: ref(false),
    status: ref(0)
  })

  const createColumns = (state: any) => {
    state.columns = [
      ...getTableColumn([{ key: 'id', title: t('user_manage.id') }]),
      {
        title: t('Address'),
        key: 'address'
      },
      {
        title: t('UUID'),
        key: 'uuid'
      },
      {
        title: t('Version'),
        key: 'memberVersion'
      },
      {
        title: t('user_manage.operation'),
        key: 'operation',
        render: (row: UserDetail) =>
          h(NSpace, null, {
            default: () => [
              h(
                NButton,
                { text: true, onClick: () => handleEdit(row) },
                { default: () => t('Stop Cluster') }
              ),
            ]
          })
      }
    ]
  }

  const handleStatus = (row: UserDetail) => {
    const req = row.status === 1 ? userEnable : userDisable
    req(row.id as number).then(() => {
      getTableData({
        pageSize: state.pageSize,
        pageNo: state.pageNo
      })
    })
  }

  const handleEdit = (row: UserDetail) => {
    state.showFormModal = true
    state.status = 1
    state.row = row
  }

  const handleDelete = (row: UserDetail) => {
    state.showDeleteModal = true
    state.row = row
  }

  const handleConfirmDeleteModal = () => {
    if (state.tableData.length === 1 && state.pageNo > 1) {
      --state.pageNo
    }

    userDelete((state.row as UserDetail).id as number).then(() => {
      state.showDeleteModal = false
      getTableData({
        pageSize: state.pageSize,
        pageNo: state.pageNo
      })
    })
  }

  const getTableData = (params: any) => {
    if (state.loading) return
    state.loading = true
    axios.get('http://localhost:5801/hazelcast/rest/cluster').then(
      (res: ResponseTable<Array<UserDetail> | []>) => {
        state.tableData  = res.data.members
      //   [
      //     {
      //         "id": 2,
      //         "name": "admin",
      //         "token": null,
      //         "status": 1,
      //         "type": 1,
      //         "createTime": "2023-12-15 20:17:03",
      //         "updateTime": "2024-04-19 06:41:12"
      //     },
      //     {
      //         "id": 114,
      //         "name": "user",
      //         "token": null,
      //         "status": 0,
      //         "type": 0,
      //         "createTime": "2024-01-26 08:19:27",
      //         "updateTime": "2024-01-26 08:19:27"
      //     },
      //     {
      //         "id": 115,
      //         "name": "dfsdfas",
      //         "token": null,
      //         "status": 0,
      //         "type": 0,
      //         "createTime": "2024-02-16 11:50:11",
      //         "updateTime": "2024-02-16 11:50:11"
      //     }
      // ];
        // res.data as any
        state.totalPage = res.data.totalPage
        state.loading = false
      }
    )
  }

  return { state, createColumns, getTableData, handleConfirmDeleteModal }
}
