<template>
  <div class="player">
      <div class="mini-player" v-show="currentSong.name">
        <v-mini-player></v-mini-player>
      </div>
  </div>
</template>

<script>
import VMiniPlayer from '@/components/MiniPlayer'
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'currentSong',
      'isPlaying',
      'currentIndex',
      'playList'
    ])
  },
  methods: {
    createAudioContext () {
      if (this.audioCtx) {
        this.audioCtx.destroy()
      }
      this.audioCtx = wx.createInnerAudioContext()
      this.audioCtx.obeyMuteSwitch = false
      this.audioCtx.src = this.currentSong.url
      this.audioCtx.play()
      this.audioCtx.onPlay(() => {
        console.log(`歌曲《${this.currentSong.name}》开始播放,若控制台报错/没声音证明该歌曲是qq音乐vip歌曲，无法播放，请换曲试试`)
      })
      this.audioCtx.onEnded(() => {
        let index = this.currentIndex + 1
        if (index === this.playList.length - 1) {
          index = 0
        }
        this.setCurrentIndex(index)
      })
    },
    ...mapMutations({
      setCurrentIndex: 'SET_CURRENT_INDEX'
    })
  },
  components: {
    VMiniPlayer
  },
  watch: {
    'currentSong': {
      handler (newVal) {
        this.createAudioContext()
      },
      deep: true
    },
    isPlaying (newVal) {
      if (newVal) {
        this.audioCtx.play()
      } else {
        this.audioCtx.pause()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
    .mini-player {
      position: fixed;
      border-top: 2rpx solid rgba(0, 0, 0, 0.05);
      bottom: 0;
      z-index: 666;
    }
}
</style>
