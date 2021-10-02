import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import store from '@/store/index'
import {installNaive} from "@/naive-ui";
// 引入tailwindCss
import '@/assets/index.css'
import 'animate.css'
// 引入md-editor
import VMdEditor from '@/md-editor/index'


createApp(App)
    .use(router)
    .use(store)
    .use(installNaive)
    .use(VMdEditor)
    .mount('#app')
