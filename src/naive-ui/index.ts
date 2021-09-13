/**
 * @作者: Seale
 * @时间: 2021/9/4
 * @版本: V1.0
 * @说明: NaiveUI 全局按需引入
 * @网站: https://www.imsle.com
 */

import {
    create,
    NButton,
    NLayout,
    NLayoutSider,
    NLayoutContent,
    NH2,
    NH1,
    NSpace,
    NSwitch,
    NMenu,
    NConfigProvider,
    GlobalThemeOverrides,
    NAvatar,
    NImage,
    NIcon,
    NGrid,
    NGridItem,
    NCard, NElement, NEllipsis, NTooltip
} from "naive-ui";

export const installNaive = create({
    components: [
        NButton,
        NLayout,
        NLayoutSider,
        NLayoutContent,
        NH2,
        NH1,
        NSpace,
        NSwitch,
        NMenu,
        NConfigProvider,
        NAvatar,
        NImage,
        NIcon,
        NGrid,
        NGridItem,
        NCard,
        NElement,
        NEllipsis,
        NTooltip,
    ]
})

export const themeOverrides: GlobalThemeOverrides = {
    common: {
        // primaryColor: 'rgba(156,255,177,0.92)'
    },
    Menu:{
        itemTextColor: '#fff',
        itemTextColorActive: '#333',
        itemTextColorHover: '#eee',
        itemColorActive: '#fff',
        itemTextColorChildActive: '#fff',
        arrowColor: '#fff',
        arrowColorChildActive: '#fff',
        arrowColorHover: '#fff',
        arrowColorActive: '#fff',
        itemIconColor: "#fff",
        itemIconColorHover: '#eee',
        itemIconColorActive: '#333',
        itemIconColorChildActive: '#fff'

    }

}

