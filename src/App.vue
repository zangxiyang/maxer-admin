<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view/>
  </n-config-provider>
</template>

<script setup lang="ts">
import {themeOverrides} from "@/naive-ui";

</script>

<style scoped>

</style>
