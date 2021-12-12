/**
 * @Author: Robby
 * @Date: 2021/12/9
 * @Filename: auth.js
 * @Function:
 **/

import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

// 获取登录时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

// 设置登录时间戳
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

// 判断token是否超时
export function isCheckTimeout() {
  // 当前时间戳
  const currentTime = Date.now()
  // 缓存时间戳
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
