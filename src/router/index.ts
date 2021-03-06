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
        meta: {
            navKey: 'dashboard'
        },
        children:[
            {
                path: '/dashboard',
                component: ()=> import('@/views/page/Dashboard/Dashboard.vue'),
                meta:{
                    title: '仪表盘',
                    navKey: 'dashboard'
                }
            },
            {
                path: '/article/editor',
                component: ()=> import('@/views/page/Article/editor/ArticleEditor.vue'),
                meta:{
                    title: '撰写博文',
                    navKey: 'article-editor'
                }
            },
            {
                path: '/article/modify',
                component: ()=> import('@/views/page/Article/editor/ArticleModify.vue'),
                meta:{
                    title: '修改博文',
                    navKey: 'article-list'
                }
            },
            {
                path: '/article/list',
                component: ()=> import('@/views/page/Article/list/ArticleList.vue'),
                meta:{
                    title: '文章列表',
                    navKey: 'article-list'
                }
            },
            {
                path: '/article/cate',
                component: ()=> import('@/views/page/Article/cate/ArticleCategoryTag.vue'),
                meta:{
                    title: '分类の标签',
                    navKey: 'article-cateAndTag'
                }
            },
            {
                path: '/user/list',
                component: ()=> import('@/views/page/User/list/UserList.vue'),
                meta: {
                    title: '用户列表',
                    navKey: 'user-list'
                }
            },
            {
                path: '/user/auth',
                component: ()=> import('@/views/page/User/auth/UserAuth.vue'),
                meta: {
                    title: '用户权限',
                    navKey: 'user-auth'
                }
            },
            {
                path: '/comments',
                component: ()=> import('@/views/page/Comments/Comments.vue'),
                meta: {
                    title: '评论管理',
                    navKey: 'comments'
                }
            }
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
