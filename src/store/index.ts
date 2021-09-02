/**
 * @作者: Seale
 * @时间: 2021/9/2
 * @版本: V1.0
 * @说明: vuex配置
*/

import { createStore } from 'vuex'

export default createStore({
    state: {
        vuexIsLogin: true,                   // 当前的登录状态
        vuexTestVar: "这是vuex全局混入的测试变量",
        vuexUser:{
            test: 1,
            name: "测试名字"
        },
    },
    mutations: {
        $changeStore(state: any,payload: any){
            // 判断是否为多层级调用，state中为对象存在的情况，诸如user.info.name = '龚南柯'
            const nameArr = payload.name.split('.');
            const len = nameArr.length;
            if (len >= 2){

                let obj = state[nameArr[0]];
                for (let i = 1 ; i < len - 1 ; i++){
                    obj = obj[nameArr[i]];
                }
                obj[nameArr[len-1]] = payload.value;
            }else {
                state[payload.name] = payload.value;
            }
        }
    },
    actions: {
    },
    modules: {
    }
})

