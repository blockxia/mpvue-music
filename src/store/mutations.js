/**
 * Created by xiaoqiang on 12/11/2018.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_ISPLAYING] (state, isPlaying) {
    state.isPlaying = isPlaying
  },
  [types.SET_PLAYLIST] (state, playList) {
    state.playList = playList
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}
export default mutations
