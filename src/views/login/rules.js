/**
 * @Author: Robby
 * @Date: 2021/12/7
 * @Filename: rules.js
 * @Function:
 **/
// 由于在rules.js文件中可以会定义多个规则，那么就给这些函数命名，如果只有一个函数，使用export default 导出
// export const validatorPassword = () => {
//   return (rule, value, callback) => {
//     if (value.length > 6) {
//       callback() // 表示通过
//     } else {
//       callback(new Error('用户名长度必须大于6位数'))
//     }
//   }
// }

import i18n from '@/i18n'

export const validatorPassword = (rule, value, callback) => {
  if (value.length > 5) {
    callback() // 表示通过
  } else {
    callback(new Error(i18n.global.t('msg.login.passwordRule')))
  }
}
