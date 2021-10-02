<template>
  <default-admin-layout>
    <template #head-right>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button circle color="#ff69b4" size="large">
            <n-icon :size="20">
              <delete/>
            </n-icon>
          </n-button>
        </template>
        删除选中项
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button circle color="#8a2be2" class="ml-2" size="large">
            <n-icon :size="20">
              <add/>
            </n-icon>
          </n-button>
        </template>
        添加新文章
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
import Add from '@vicons/material/AddOutlined'
import Delete from '@vicons/material/DeleteFilled'
import {h, reactive, ref} from "vue";
import {NButton, NEllipsis, NTooltip} from "naive-ui";

// 选中的行
const checkedRowKeys = ref([]);
const columns = [
  {
    type: 'selection',
    options: [
      'all',
      'none',
    ],
    disabled (row, index) {
      return row.name === 'Edward King 3'
    }
  },
  {
    title: '文章标题',
    ellipsis: {
      tooltip: true
    },
    render: (row)=>{
      if (row.title.length > 20){
        return h(
            NButton,
            {
              text: true
            },
            [
              h(
                  NEllipsis,
                  {
                    style: 'max-width: 350px;'
                  },
                  ()=> `${row.title}`
              )
            ]
        );
      }
      return h(
          NButton,
          {
            text: true
          },
          ()=> `${row.title}`
      )
    }
  },
  {
    title: '分类',
    key: 'cate'
  },
  {
    title: '创建时间',
    key: 'createDate'
  },
  {
    title: '最后修改',
    key: 'updateDate'
  },
  {
    title: '操作',
    key: 'action',
    render: (row)=>{
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
                { default: () => '置顶' }
            ),
              h(
                  NButton,
                  {
                    size: 'small',
                    type: 'error',
                    ghost: true,
                    onClick: () => console.log(row)
                  },
                  { default: () => '删除' }
              ),

          ]
      );
    }
  }
]

const data =[]

for (let i = 0 ; i < 100; i ++){
  data.push({
    key: i,
    title: `超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题 ${i}`,
    cate: `编程${i}`,
    createDate: `2021年10月02日 ${i}`,
    updateDate: `2021年10月02日`,
  });
}



const pagination = reactive({
  page: 1,
  pageSize: 15,
  showSizePicker: true,
  pageSizes: [15, 20, 40],
  itemCount: 100,
  prefix: ()=> h('div',{
    class: 'select-none'
  },{
    default: ()=> `当前总条数:${pagination.itemCount}`
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

<style scoped>

</style>
