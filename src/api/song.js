/**
 * Created by xiaoqiang on 08/01/2018.
 */
import { commonParams } from './config'
import { request } from './request'
import { getUid } from '@/common/uid'
export function getVKey (songmid, filename) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    cid: 205361747,
    format: 'json',
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    uin: 0,
    songmid,
    filename,
    guid: getUid()
  })
  return request(url, 'GET', data)
}
