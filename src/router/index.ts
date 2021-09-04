/**
 * @作者: Seale
 * @时间: 2021/9/2
 * @版本: V1.0
 * @说明: VueRouter 配置文件
 */
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/auth',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/dashboard',
        component: ()=> import('@/views/Admin.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
