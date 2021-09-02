<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <div class="container">
      {{vueName}}
    </div>
    <div>
      <router-link to="/" class="mx-8">首页</router-link>
      <router-link to="/test">测试</router-link>
    </div>
    <router-view/>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>
    <n-button>测试</n-button>
  </div>
</template>

<script lang="ts">
import {defineComponent,computed} from 'vue';
import HelloWorld from "@/components/HelloWorld.vue";
import {useStore} from 'vuex'
import {NButton} from "naive-ui";

export default defineComponent({
  components: {HelloWorld,NButton},
  setup(prop) {
    const store = useStore()

    return {
      vueName: computed(()=>store.state.vuexTestVar)
    }
  },
  data() {
    return {}
  }
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
