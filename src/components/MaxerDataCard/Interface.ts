/**
 * @作者: Seale
 * @时间: 2021/9/11
 * @版本: V1.0
 * @说明: 定义的结构体
 * @网站: https://www.imsle.com
 */

export default interface buttonOption{
    name: string
    callback?: Function
    isDot?: boolean  // 小白点 一闪一闪亮晶晶 (想啥呢~这当然可以为空咯)
    route?: string  // todo router跳转
    link?: string   // todo 外部跳转
}
