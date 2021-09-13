/**
 * @作者: Seale
 * @时间: 2021/9/2
 * @版本: V1.0
 * @说明: VueRouter 配置文件
 */
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {baseConfig} from "@/config";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: ()=> import('@/views/Admin.vue'),
        redirect: '/dashboard',
        children:[
            {
                path: '/dashboard',
                component: ()=> import('@/views/page/Dashboard.vue'),
                meta:{
                    title: '仪表盘'
                }
            },
        ]
    },
    {
        path: '/auth',
        component: () => import('@/views/Login.vue'),
        meta:{
            title: '登录'
        }
    },
    {
        path: '/dashboard',
        component: ()=> import('@/views/Admin.vue'),
        meta: {
            title: '仪表盘'
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

/**
 * 根据路由进行切换标题
 */
router.beforeEach(((to, from, next) => {
    if (to.meta.title){
        document.title = `${to.meta.title} - ${baseConfig.title}`
    }
    // 保证每次切换路由页面都在最上方
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    next()
}))
