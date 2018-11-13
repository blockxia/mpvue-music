/**
 * Created by xiaoqiang on 12/11/2018.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playList = list
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  }
}
export default mutations
