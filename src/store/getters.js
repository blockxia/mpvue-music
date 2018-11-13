/**
 * Created by xiaoqiang on 12/11/2018.
 */
export const singer = state => state.singer

export const playList = state => state.playList

export const currentIndex = state => state.currentIndex

export const playing = state => state.playing

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
