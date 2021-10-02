<template>
  <div class="maxer-admin-right p-10">
    <div class="header flex justify-between items-center">
      <h2 class="text-2xl select-none cursor-default">
        {{ title }}
      </h2>
      <div class="header-right-container flex items-center">
        <slot name="head-right"/>
      </div>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
  import {useRoute} from "vue-router";
  // 定义当前的标题
  const title = useRoute().meta.title;



</script>

<style scoped>

</style>
