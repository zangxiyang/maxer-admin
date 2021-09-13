<template>
  <n-element
      tag="div"
      class="text-white w-72 h-36 rounded overflow-hidden"
      style="background-image: linear-gradient(25deg, #9c26da, #c250cf, #e274c4, #ff97b7)"
  >
    <div class="maxer-card-header">
      <slot/>
    </div>
    <div class="maxer-card-operation">
      <slot name="operation"/>
    </div>
  </n-element>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
