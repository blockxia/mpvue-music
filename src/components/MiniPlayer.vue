<template>
  <div class="mini-player">
    <img class="logo" :src="currentSong.image"/>
    <div class="right">
      <span class="item name">{{currentSong.name}} ({{currentSong.singer}})</span>
      <span class="item play"></span>
      <span class="item like"></span>
    </div>
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
    .logo {
      width: 100rpx;
      height: 100rpx;
      margin: 5rpx 0 0 20rpx;
      border-radius: 50%;
      animation: rotate 7s linear infinite;
    }
    .right {
      float: 1;
      display: flex;
      .item {
        float: 1;
        margin-left: 60rpx;
        line-height: 120rpx;
        &:nth-child(1) {
          margin-left: 40rpx;
        }
      }
      .name {
        font-size: 30rpx;
      }
      .play {
        width: 60rpx;
        height: 60rpx;
        background: url('../assets/img/play.png') no-repeat center center;
        background-size: 100%;
      }
      .like {
        width: 60rpx;
        height: 60rpx;
        background: url('../assets/img/like.png') no-repeat center center;
        background-size: 100%;
      }
    }
  }
</style>
