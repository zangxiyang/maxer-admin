<template>
  <h2 class="text-xl font-light pt-10 flex items-center justify-between">
      <span class="flex items-center">
        <span>数据统计</span>
        <n-tag type="error" size="small" class="ml-5"> 最后更新于 2021年09月17日23:12:05 </n-tag>
      </span>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button text class="text-xl ml-3" @click="onRefreshButtonClick" color="#111">
          <n-icon>
            <refresh-round :class="{'animate-spin': refreshLoading}"/>
          </n-icon>
        </n-button>
      </template>
      <span>刷新数据</span>
    </n-tooltip>
  </h2>
  <div class="data-info pt-5 flex items-center justify-start flex-wrap">
    <!-- 数据统计 -->
    <maxer-data-card
        class="mr-5 mb-5"
        title="博文"
        count="500"
        :button-options="buttonArticleOptions"
    >
      <template #icon><book-filled/></template>
    </maxer-data-card>
    <!--用户-->
    <maxer-data-card class="mr-5 mb-5" title="用户数" count="350" :button-options="buttonUserOptions">
      <template #icon><accessibility-sharp/></template>
    </maxer-data-card>

    <!--TODO微聊-->
    <!--<maxer-data-card
        class="mr-5 mb-5"
        title="微聊"
        count="下版本开放下个版本开放"
        :button-options="buttonWechatOptions">
      <template #icon>
        <wechat-filled/>
      </template>
    </maxer-data-card>-->
    <!--捐献-->
    <maxer-data-card class="mr-5 mb-5" title="捐助" count="1,002 CNY" :button-options="buttonDonateOptions">
      <template #icon><donate/></template>
    </maxer-data-card>


    <!--评论-->
    <maxer-data-card class="mr-5 mb-5" title="评论" count="3,000" :button-options="buttonCommentsOptions">
      <template #icon><comment-sharp/></template>
    </maxer-data-card>

    <!--分类-->
    <maxer-data-card class="mr-5 mb-5" title="分类" count="50" :button-options="buttonCateOptions">
      <template #icon><category-round/></template>
    </maxer-data-card>

    <!--友链-->
    <maxer-data-card class="mr-5 mb-5" title="朋友们" count="50" :button-options="buttonFriendsOptions">
      <template #icon><accessibility-sharp/></template>
    </maxer-data-card>


  </div>
</template>

<script setup lang="ts">
// 引入图标
import BookFilled from '@vicons/antd/BookFilled'
import WechatFilled from "@vicons/antd/WechatFilled";
import CommentSharp from "@vicons/material/CommentSharp";
import CategoryRound from "@vicons/material/CategoryRound";
import AccessibilitySharp from "@vicons/ionicons5/AccessibilitySharp"
import Donate from "@vicons/fa/Donate"
import RefreshRound from "@vicons/material/RefreshRound";

import MaxerDataCard from "@/components/MaxerDataCard/index.vue";
// 文章按钮配置
import buttonOption from "@/components/MaxerDataCard/Interface";
import {ref} from "vue";


const refreshLoading = ref(false);


/* 按钮配置 */
const buttonArticleOptions: buttonOption[] = [
  {
    name: '撰写',
    callback: ()=>{
      alert("点击了撰写");
    }
  },
  {
    name: '管理',
    callback: ()=>{
      alert("点击了按钮");
    }
  }
]
// 捐助按钮配置
const buttonDonateOptions: buttonOption[] = [
  {
    name: '管理'
  }
]

// 微聊按钮配置
const buttonWechatOptions: buttonOption[] = [
  {
    name: '管理',
    callback: ()=>{
      alert("点击了按钮");
    }
  }
]
// 评论按钮配置
const buttonCommentsOptions: buttonOption[] = [
  {
    name: '管理',
  },{
    name: '审核评论',
    callback: ()=>{
      alert("审核评论")
    }
  }
]
// 分类按钮配置
const buttonCateOptions: buttonOption[] = [
  {
    name: '管理'
  }
]
// 友链按钮配置
const buttonFriendsOptions: buttonOption[] = [
  {
    name: '管理'
  },
  {
    name: '审核申请',
    isDot: true
  }
]
// 用户按钮配置
const buttonUserOptions: buttonOption[] = [
  {
    name: '管理'
  },
  {
    name: '权限设置'
  }
]


/* 按钮事件 */

const onRefreshButtonClick = () => {
  refreshLoading.value = !refreshLoading.value;
}
</script>

<style scoped>

</style>
