/**
 * Created by xiaoqiang on 12/11/2018.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_CURRENTSONG] (state, song) {
    state.currentSong = song
  },
  [types.SET_ISPLAYING] (state, isPlaying) {
    state.isPlaying = isPlaying
  }
}
export default mutations
