<template>
  <n-config-provider :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-theme-editor>
    <router-view/>
    </n-theme-editor>
  </n-config-provider>
</template>

<script setup lang="ts">
import {themeOverrides} from "@/naive-ui";
import { zhCN, dateZhCN } from 'naive-ui'
import { NThemeEditor } from 'naive-ui'
</script>

<style scoped>

</style>
