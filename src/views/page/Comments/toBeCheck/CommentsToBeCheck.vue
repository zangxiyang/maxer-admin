<template>
  <n-data-table
      ref="table"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      v-model:checked-row-keys="checkedRowKeys"
  />
</template>

<script setup lang="ts">
import {h, reactive, ref} from "vue";
import {NAvatar, NButton, NEllipsis, NTag} from "naive-ui";

/**
 * 名称: 待审核
 * 说明: 评论待审核
 * 作者: Seale
 * 时间: 2021/10/5
 * 版本: V1
*/


// 选中的行
const checkedRowKeys = ref([]);
const columns = [
  {
    type: 'selection',
    options: [
      'all',
      'none',
    ]
  },
  {
    key: 'avatar',
    width: 60,
    render: (row)=>{
      return h(
          NAvatar,
          {
            round: true,
            size: 'large',
            src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          }
      )
    }
  },
  {
    title: '用户名',
    key: 'userName',
  },
  {
    title: '内容',
    render: (row)=> {
      console.log(row)
      return h(
          'div',
          {
            class: 'content flex flex-col',
          },
          [
              h('span',null,`${row.content.date} 于 ${row.content.article}`),
              h('span',{class: 'mt-1'},`${row.content.text}`),
              h('div', {class: 'flex item-center mt-1'}, [
                  h('span',{class: 'mr-2'}, '通过'),
                  h('span',{class: 'mr-2'}, '垃圾'),
                  h('span',{class: 'mr-2'}, '回复'),
                  h('span',{class: 'mr-2'}, '删除'),
              ])
          ]
      )
    }
  }
]


const data =[]

for (let i = 0 ; i < 100; i ++){
  data.push({
    key: i,
    userName: `用户 ${i}`,
    content: {
      date: '3天前',
      article: '哪篇文章',
      text: '评论内容'
    }
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
