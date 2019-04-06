<template>
  <div class="mini-player" v-if="currentSong.name">
    <img class="logo" :src="currentSong.image"/>
    <marquee class="des" behavior="scroll">{{currentSong.name}} ({{currentSong.singer}})</marquee>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      audioCtx: null
    }
  },
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  },
  mounted () {
    this.createAudioContext()
  },
  methods: {
    createAudioContext () {
      if (this.innerAudioContext) {
        this.innerAudioContext.destroy()
      }
      this.innerAudioContext = wx.createInnerAudioContext()
      this.innerAudioContext.src = this.currentSong.url
      this.innerAudioContext.play()
      this.innerAudioContext.onPlay(() => {
        console.log(`歌曲《${this.currentSong.name}》开始播放,若控制台报错/没声音证明该歌曲是qq音乐vip歌曲，无法播放，请换曲试试`)
      })
    }
  },
  watch: {
    'currentSong': {
      handler (newVal) {
        this.createAudioContext()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/style/animate.css';
  .mini-player {
    display: flex;
    width: 100%;
    height: 120rpx;
    background: #fff;
    border-top: 2rpx solid #fafafa;
    .logo {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      animation: rotate 7s linear infinite;
    }
    .des {
      flex: 1;
      padding-left: 40rpx;
      line-height: 120rpx;
      font-size: 40rpx;
    }
  }
</style>
