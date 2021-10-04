<template>
<default-admin-layout>
  <template #head-right>
    <template v-if="tabActive === 'cate'">

      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button circle color="#8a2be2" size="large" class="mr-2">
            <n-icon :size="20">
              <add/>
            </n-icon>
          </n-button>
        </template>
        添加新分类
      </n-tooltip>

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
    </template>
    <template v-if="tabActive === 'tag'">

      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button circle color="#8a2be2" size="large" class="mr-2">
            <n-icon :size="20">
              <add/>
            </n-icon>
          </n-button>
        </template>
        添加新标签
      </n-tooltip>

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
    </template>

  </template>
  <n-tabs v-model:value="tabActive" size="large" class="mt-3">
    <n-tab-pane name="cate" tab="分类">
      <n-data-table
          ref="table"
          :columns="columns"
          :data="data"
          :pagination="pagination"
          v-model:checked-row-keys="checkedRowKeys"
      />
    </n-tab-pane>
    <n-tab-pane name="tag" tab="标签">
      <div class="flex items-center justify-end mb-3">
        <NButton size="small" dashed @click="onTagAllSelectButtonClick">全选</NButton>
      </div>
      <div class="tag-wrapper flex flex-wrap">
        <n-tag v-for="item in tagData"
               class="mb-3 mr-3"
               :key="item.id"
               checkable
               closable
               v-model:checked="item.checked">{{item.text}}</n-tag>
      </div>
    </n-tab-pane>
  </n-tabs>
</default-admin-layout>

  <!--TODO 创建分类和标签模态框-->
</template>

<script setup lang="ts">

import DefaultAdminLayout from "@/layout/DefaultAdminLayout.vue";
import {h, reactive, ref} from "vue";
import Delete from '@vicons/material/DeleteFilled'
import Add from '@vicons/material/AddOutlined'
import {NButton, NEllipsis, NTag,NTooltip} from "naive-ui";
import {ITagData} from "@/views/page/Article/cate/interface";

// tab active
const tabActive = ref('cate');




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
    title: '分类名称',
    key: 'title',
    render: (row)=>{
      if (row.title.length > 20){
        return h(
            NButton,
            {
              text: true,
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
    title: '创建时间',
    key: 'createDate'
  },
  {
    title: '分类下的文章数',
    key: 'articleNum',
    render: (row) =>{
      return h(
          NTag,
          {
            round: true,
            type: "error",
            class: 'select-none'
          },
          ()=> `${row.articleNum}`
      )
    }
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
    title: `分类 ${i}`,
    createDate: `2021年10月02日`,
    articleNum: `${i}`,
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


// 标签
const tagData = ref<ITagData[]>([]);

for (let i = 0 ; i < 20; i ++){
  tagData.value.push({
    id: i,
    text: `${i}号标签`,
    checked: false
  })
}
// 全选按钮
const onTagAllSelectButtonClick = ()=>{
  tagData.value.forEach(item=>{
    item.checked = !item.checked;
  })
}
</script>

<style scoped>

</style>
