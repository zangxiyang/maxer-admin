<template>
  <default-admin-layout>
    <template #head-right>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button circle color="#8a2be2" class="ml-2" size="large">
            <n-icon :size="20">
              <add/>
            </n-icon>
          </n-button>
        </template>
        添加新用户
      </n-tooltip>
    </template>
    <n-data-table
        class="mt-5"
        ref="table"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        v-model:checked-row-keys="checkedRowKeys"
    />
  </default-admin-layout>
</template>

<script setup lang="ts">

import DefaultAdminLayout from "@/layout/DefaultAdminLayout.vue";
import {useRouter} from "vue-router";
import {h, reactive, ref} from "vue";
import Add from '@vicons/material/AddOutlined'
import {NTooltip, NSwitch} from "naive-ui";

const router = useRouter();

// 选中的行
const checkedRowKeys = ref([]);
const columns = [
  {
    type: 'selection',
    options: [
      'all',
      'none',
    ],
    disabled(row, index) {
      return row.name === 'Edward King 3'
    }
  },
  {
    title: '用户名',
    key: 'userName',
  },
  {
    title: '用户类别',
    key: 'groupType'
  },
  {
    title: '创建时间',
    key: 'createDate'
  },
  {
    title: '最后登录',
    key: 'finalLoginDate'
  },
  {
    title: '状态',
    key: 'status',
    render: (row) => {
      return h(
          NSwitch,
          {
            'defaultValue': row.status
          },
          {
            checked: ()=> '正常',
            unchecked: ()=> '封禁',
          }
      )
    }
  },
  /*{
    title: '操作',
    key: 'action',
    render: (row) => {
      return h(
          `div`,
          {
            class: 'flex'
          },
          [
            h(
                NButton,
                {
                  size: 'small',
                  color: '#8a2be2',
                  ghost: true,
                  class: 'mr-2',
                  onClick: () => console.log(row)
                },
                {default: () => '置顶'}
            ),
            h(
                NButton,
                {
                  size: 'small',
                  type: 'error',
                  ghost: true,
                  onClick: () => console.log(row)
                },
                {default: () => '删除'}
            ),

          ]
      );
    }
  }*/
]

const data = ref([])

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0){
    data.value.push({
      key: i,
      userName: `用户名${i}`,
      groupType: `普通用户${i}`,
      createDate: `2021年10月02日 ${i}`,
      finalLoginDate: `2021年10月02日`,
      status: false
    });
  }else {
    data.value.push({
      key: i,
      userName: `用户名${i}`,
      groupType: `普通用户${i}`,
      createDate: `2021年10月02日 ${i}`,
      finalLoginDate: `2021年10月02日`,
      status: true
    });
  }
}


const pagination = reactive({
  page: 1,
  pageSize: 15,
  showSizePicker: true,
  pageSizes: [15, 20, 40],
  itemCount: 100,
  prefix: () => h('div', {
    class: 'select-none'
  }, {
    default: () => `当前用户总数:${pagination.itemCount}`
  }),
  onChange: (page: number) => {
    pagination.page = page
  },
  onPageSizeChange: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  }
})
</script>

<style lang="scss" scoped>
// 改写样式，使其符合需求
::v-deep .n-switch .n-switch__rail{
background-color: rgb(193 32 87);
}
::v-deep .n-switch.n-switch--active .n-switch__rail{
  background-color: var(--rail-color-active);
}
</style>
