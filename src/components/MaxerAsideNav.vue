<template>
  <div class="maxer-nav">
    <n-menu
        class="select-none"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        v-model:value="activeKey"
        @update-value="onActiveMenu"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {menuOptions} from "@/config";
import {MenuOption} from "naive-ui";
import {RouteLocationRaw, useRoute, useRouter} from "vue-router";


const activeKey = ref()
const router = useRouter();
const route = useRoute();

const onActiveMenu = (key: string, item: MenuOption) => {
  router.push(item.router as RouteLocationRaw)
}

// 路由配置 根据当前路由为左侧nav映射
if (route.meta.navKey){
  // 防止刷新页面的时候，错位
  activeKey.value = route.meta.navKey
}


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
