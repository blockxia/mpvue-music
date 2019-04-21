/**
 * Created by xiaoqiang on 12/11/2018.
 */
export const singer = state => state.singer

export const currentIndex = state => state.currentIndex

export const currentSong = state => {
  return state.playList[state.currentIndex] || {}
}

export const isPlaying = state => state.isPlaying

export const playList = state => state.playList
