<template>
  <div class="mini-player">
    <img :class="['logo', isPlaying ? 'animation' : '']" :src="currentSong.image"/>
    <div class="right">
      <span class="item name">{{currentSong.name}} ({{currentSong.singer}})</span>
      <span class="item like" @click="like"></span>
      <span :class="['item control', isPlaying ? 'play' : 'pause']" @click="control"></span>
      <span class="item next" @click="next"></span>
    </div>
 </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'currentSong',
      'isPlaying'
    ])
  },
  methods: {
    control () {
      this.setIsPlaying(!this.isPlaying)
    },
    like () {
      console.log('敬请期待~')
    },
    next () {
      console.log('敬请期待~')
    },
    ...mapMutations({
      'setIsPlaying': 'SET_ISPLAYING'
    })
  }
}
</script>

<style lang="scss">
  @import '../assets/style/animate.scss';
  @import '../assets/style/base.scss';
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
      &.animation {
        animation: rotate 7s linear infinite;
      }
    }
    .right {
      flex: 1;
      position: relative;
      .item {
        display: block;
      }
      .name {
        width: 200rpx;
        padding-left: 20rpx;
        font-size: 30rpx;
        line-height: 120rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
      .like {
        @include setAbsolute(40, 280);
        width: 40rpx;
        height: 40rpx;
        background: url('../assets/img/like.png') no-repeat;
        background-size: 100%;
      }
      .control {
        @include setAbsolute(30, 360);
        width: 60rpx;
        height: 60rpx;
        &.play {
          background: url('../assets/img/play.png') no-repeat;
          background-size: 100%;
        }
        &.pause {
          background: url('../assets/img/pause.png') no-repeat;
          background-size: 100%;
        }
      }
      .next {
        @include setAbsolute(40, 450);
        width: 40rpx;
        height: 40rpx;
        background: url('../assets/img/next.png') no-repeat;
        background-size: 100%;
      }
    }
  }
</style>
