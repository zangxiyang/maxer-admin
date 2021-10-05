<template>
  <default-admin-layout>
    <n-tabs default-value="toBeCheck" size="large" class="mt-3">
      <n-tab-pane name="toBeCheck">
        <template #tab>
          <div class="flex items-center">
            <span class="mr-1">待审核</span>
            <maxer-badge title="99+" size="small" color="danger"/>
          </div>
        </template>
        <comments-to-be-check/>
      </n-tab-pane>
      <n-tab-pane name="pass" tab="已通过">
        已通过
      </n-tab-pane>
      <n-tab-pane name="refuse" tab="垃圾评论">
        垃圾评论
      </n-tab-pane>
    </n-tabs>
  </default-admin-layout>
</template>

<script setup lang="ts">

import DefaultAdminLayout from "@/layout/DefaultAdminLayout.vue";
import MaxerBadge from "@/components/MaxerBadge.vue";
import {NTabPane} from "naive-ui";
import {reactive} from "vue";
import CommentsToBeCheck from "@/views/page/Comments/toBeCheck/CommentsToBeCheck.vue";


const dotVal = reactive({
  toBeCheck: 20,
  pass: 100,
  refuse: 2,
})
</script>

<style scoped>

</style>
