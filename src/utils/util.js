/**
 * Created by xiaoqiang on 12/11/2018.
 */
export function randomSort (arr) {
  // 此处不用arr.slice()而使用arr的话会提示以下错误
  // Error: [vuex] Do not mutate vuex store state outside mutation handlers.
  // 数组按引用传递,因此在此修改了就相当于修改了原数组,解决方法为arr.slice(),相当于传入的是一个副本
  let array = arr.slice()
  array.sort(function () {
    return 0.5 - Math.random()
  })
  return array
}
