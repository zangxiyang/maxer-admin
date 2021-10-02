<template>
  <default-admin-layout>
    <template #head-right>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button circle color="#ff69b4" size="large">
            <n-icon :size="20">
              <paper-plane/>
            </n-icon>
          </n-button>
        </template>
        发送~biu
      </n-tooltip>
    </template>
    <n-input placeholder="请输入标题" size="large" class="mt-3">
      <template #prefix>
        <n-icon>
          <article-outlined/>
        </n-icon>
      </template>
    </n-input>
    <div class="md-container mt-3">
      <v-md-editor v-model="text" height="550px"></v-md-editor>
    </div>
    <div class="other-info mt-8 border-dashed border-2 border-gray-200 p-3 rounded-lg">

      <n-grid :y-gap="10" :x-gap="10" :cols="2" class="items-center">
        <n-grid-item>
          <n-grid :cols="24" class="items-center">
            <n-grid-item :span="3">
              <span class="title select-none flex justify-end mr-2">分类</span>
            </n-grid-item>
            <n-grid-item :span="21">
              <n-select v-model:value="cate" :options="cateOptions"/>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
        <n-grid-item>
          <n-grid :cols="24" class="items-center">
            <n-grid-item :span="3">
              <span class="title select-none flex justify-end mr-2">标签</span>
            </n-grid-item>
            <n-grid-item :span="21">
              <n-dynamic-tags v-model:value="tags"/>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
        <n-grid-item>
          <n-grid :cols="24" class="items-center">
            <n-grid-item :span="3">
              <span class="title select-none flex justify-end mr-2">头图地址</span>
            </n-grid-item>
            <n-grid-item :span="21">
              <n-input placeholder="请输入头图地址">
                <template #prefix>
                  <n-icon>
                    <icon-image/>
                  </n-icon>
                </template>
              </n-input>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
      </n-grid>


    </div>


  </default-admin-layout>
</template>

<script setup lang="ts">

import DefaultAdminLayout from "@/layout/DefaultAdminLayout.vue";
import ArticleOutlined from "@vicons/material/ArticleOutlined";
import IconImage from "@vicons/fa/Image";
import PaperPlane from "@vicons/ionicons5/PaperPlane";
import {ref} from "vue";


const text = ref('');

// 分类下拉框选项
const cateOptions = ref([
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
])

// 动态标签
const tags = ref([]);
// 分类
const cate = ref('song9');

</script>

<style scoped>

</style>
