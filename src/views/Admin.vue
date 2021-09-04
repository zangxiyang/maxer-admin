<template>
  <n-button @click="countPlus">测试按钮</n-button>
  {{ testCount }}
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'


const testCount = ref(0)
function countPlus() {
  testCount.value++;
}
</script>

<style scoped>

</style>
