import {HomeFilled as Home} from "@vicons/material";

/**
 * @作者: Seale
 * @时间: 2021/9/4
 * @版本: V1.0
 * @说明: 配置类
 * @网站: https://www.imsle.com
 */


import {
    EditFilled,
    ColorLensFilled,
    MenuBookTwotone,
    FormatListBulletedFilled as list,
    CategoryRound as category,
    ManageAccountsFilled as userManager,
    CommentSharp as comments,
} from "@vicons/material"

import {
    WechatFilled as wechat
} from "@vicons/antd"

import {
    Donate as donate,
    FileAltRegular as file,
} from "@vicons/fa"

import {
    Key as key,
    AccessibilitySharp as friends,
    SettingsSharp as setting
} from "@vicons/ionicons5"

import {MenuOption, NIcon} from "naive-ui";
import {Component, h, PropType} from "vue";
import {MenuGroupOption} from "naive-ui/lib/menu/src/interface";

/**
 * 渲染图标
 * @param icon icon组件
 */
function renderIcon(icon: Component) {
    return () => h(NIcon, null, {default: () => h(icon)})
}

export const menuOptions: (MenuOption | MenuGroupOption)[] = [
    {
        label: '仪表盘',
        key: 'dashboard',
        icon: renderIcon(ColorLensFilled)
    },
    {
        label: '博文',
        key: 'article',
        icon: renderIcon(MenuBookTwotone),
        children: [
            {
                label: '撰写博文',
                key: 'article-editor',
                icon: renderIcon(EditFilled)
            },
            {
                label: '文章列表',
                key: 'article-list',
                icon: renderIcon(list)
            },
            {
                label: '分类の标签',
                key: 'article-cateAndTag',
                icon: renderIcon(category)
            },
        ]
    },
    {
        label: '用户管理',
        key: 'user',
        icon: renderIcon(userManager),
        children: [
            {
                label: '用户列表',
                key: 'user-list',
                icon: renderIcon(list)
            },
            {
                label: '权限管理',
                key: 'user-auth',
                icon: renderIcon(key)
            }
        ]
    },
    {
        label: '评论',
        key: 'comments',
        icon: renderIcon(comments),
    },
    {
        label: '微聊',
        key: 'wechat',
        icon: renderIcon(wechat),
        disabled: true
    },
    {
        label: '捐助',
        key: 'donate',
        icon: renderIcon(donate)
    },
    {
        label: '文件',
        key: 'file',
        icon: renderIcon(file)
    },
    {
        label: '朋友们',
        key: 'friends',
        icon: renderIcon(friends)
    },
    {
        label: '设置',
        key: 'setting',
        icon: renderIcon(setting)
    }
]
