// 获取uid用于获取歌曲地址；保存下来，避免每次都获取

let _uid = 0
const UID_KEY = '__uid__'

export function getUid () {
  if (_uid) {
    return _uid
  }
  _uid = wx.getStorage({
    key: UID_KEY
  })
  if (!_uid) {
    const t = (new Date()).getUTCMilliseconds()
    _uid = Math.round(2147483647 * Math.random()) * t % 1e10
    wx.setStorage({
      key: UID_KEY,
      data: _uid
    })
  }
  return _uid
}
