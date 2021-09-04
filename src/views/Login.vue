<template>
    登录页  {{count}}
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const count = ref(0)
</script>
<script lang="ts">
export default{
  name: 'Home'
}
</script>

<style scoped>

</style>
