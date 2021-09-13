<template>
  <div class="maxer-nav">
    <n-menu
        class="select-none"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        v-model:value="activeKey"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {menuOptions} from "@/config";
import {NMenu} from "naive-ui";


const activeKey = ref(null)
</script>

<style lang="scss" scoped>
  .maxer-nav{
    /*重写选中Hover逻辑样式*/
    ::v-deep{
      .n-menu-item--selected .n-menu-item-content:not(.n-menu-item-content--disabled):hover {
        .n-menu-item-content-header{
          color: var(--item-text-color-active) !important;
        }
        .n-menu-item-content__icon{
          color: var(--item-icon-color-active) !important;
        }
      }


    }
  }
</style>
