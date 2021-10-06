<template>
<span
    class="maxer-badge select-none">
      <n-icon v-if="icon">
        <slot/>
      </n-icon>
    <span>{{ title }}</span>
  </span>
</template>

<script setup lang="ts">

import {ref} from "vue";

interface IProps {
  title: string | number,
  color?: string,
  icon?: boolean,
  size?: string
}

const props = withDefaults(defineProps<IProps>(),
    {
      color: 'super',
      icon: false,
      size: 'normal'
    });

const themeColor = ref(props.color);
switch (themeColor.value) {
  case 'danger':
    themeColor.value = '#F56C6C';
    break;
  case 'warning':
    themeColor.value = '#dea832';
    break;
  case 'normal':
    themeColor.value = '#ac633b';
    break;
  case 'success':
    themeColor.value = '#35b92c';
    break;
  case 'super':
    themeColor.value = '#fb7299';
    break;
  case 'gray':
    themeColor.value = '#6e6e6e';
    break;
}
const padding = ref('');
switch (props.size) {
  case 'normal':
    padding.value = '3px 5px';
    break;
  case 'small':
    padding.value = '0 5px';
    break;
}
</script>

<style lang="scss" scoped>
.maxer-badge {
  font-family: 'Roboto Slab', -apple-system, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;;
  font-weight: normal;
  font-size: 13px;
  padding: v-bind('padding');
  background-color: v-bind('themeColor');
  color: #fff;
  border-radius: 5px;

}
</style>
