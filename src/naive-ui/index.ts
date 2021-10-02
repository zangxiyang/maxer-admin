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
    NCard, NElement, NEllipsis, NTooltip, NBadge, NTag, NDataTable
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
        NBadge,
        NTag,
        NDataTable,
    ]
})

export const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: 'rgb(181,108,230)',
        "primaryColorHover": "#AD36A9FF",
        "primaryColorPressed": "#7A0C64FF"
    },
    "Button": {
        "textColorHover": "#AD369FFF",
        "textColorPressed": "#7A0C71FF",
        "textColorFocus": "#7A0C71FF",
        "textColorTextHover": "#8D36ADFF",
        "textColorTextPressed": "#6D0C7AFF",
        "textColorTextFocus": "#6D0C7AFF",
        "borderHover": "1px solid #AD369FFF",
        "borderFocus": "1px solid #AD369FFF",
        "borderPressed": "1px solid #6D0C7AFF"
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

