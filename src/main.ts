import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import store from '@/store/index'
// 引入tailwindCss
import '@/assets/index.css'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
