<template>
  <default-admin-layout>
    文章列表

    <n-data-table
        ref="table"
        :columns="columns"
        :data="data"
        :pagination="pagination"
    />

  </default-admin-layout>
</template>

<script setup lang="ts">
import { NThemeEditor } from 'naive-ui'
import DefaultAdminLayout from "@/layout/DefaultAdminLayout.vue";
import {reactive} from "vue";

const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const data =[]

for (let i = 0 ; i < 100; i ++){
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

const pagination = reactive({
  page: 1,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
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
