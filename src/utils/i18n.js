/**
 * @Author: Robby
 * @Date: 2021/12/10
 * @Filename: i18n.js
 * @Function:
 **/
import i18n from '@/i18n'

export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
