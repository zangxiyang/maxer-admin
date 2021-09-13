<template>
  <maxer-card>
    <div class="flex justify-between items-center p-3 select-none">
      <div class="left w-5/6">
        <div class="title text-base text-gray-100">
          {{ title }}
        </div>
        <div class="nums text-2xl mt-2">
          <n-ellipsis tooltip class="w-full">
            {{ count }}
          </n-ellipsis>
        </div>
      </div>
      <div class="right">
        <n-icon :size="30">
          <slot name="icon"/>
        </n-icon>
      </div>
    </div>
    <template #operation v-if="buttonOptions">
      <div class="operation-group flex pl-3 pr-3 mt-3">
        <div class="maxer-opr-btn mr-3" v-for="item in buttonOptions" :key="item.name">
          <n-badge dot color="white" processing v-if="item.isDot">
            <n-button
                ghost
                text-color="#fff"
                color="#fff"
                size="small"
                @click="item.callback">
              {{ item.name }}
            </n-button>
          </n-badge>
          <template v-else>
            <n-button
                ghost
                text-color="#fff"
                color="#fff"
                size="small"
                @click="item.callback">
              {{ item.name }}
            </n-button>
          </template>
        </div>

      </div>
    </template>
  </maxer-card>
</template>

<script setup lang="ts">
import MaxerCard from "@/components/MaxerCard.vue";
import buttonOption from "@/components/MaxerDataCard/Interface";

const props = defineProps<{
  title: string
  count: string
  buttonOptions?: buttonOption[]
}>()


</script>


<style scoped>

</style>
