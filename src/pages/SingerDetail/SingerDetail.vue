<template>
   <div class="singer-detail">
      <div class="singer-info">
        <h3 class="name">{{singerInfo.name}}</h3>
        <div class="photo">
          <img :src="singerInfo.img">
        </div>
        <div class="blur"></div>
      </div>
      <div class="song-wrapper">
        <div @click="selectItem(item, index)" class="song" v-for="(item, index) in songs" :key="index">
          <h3 class="song-name">{{item.songname}}</h3>
          <p class="singer-name">{{singerInfo.name}} ·专辑·《{{item.albumname}}》</p>
        </div>        
      </div>
   </div>
</template>

<script>
import {getSingerDetail} from '@/utils/api'
export default {
  data () {
    return {
      singerInfo: {},
      songs: []
    }
  },
  mounted () {
    this.singerInfo = this.$root.$mp.query
    this._getSingerDetail()
    this.setNavigator()
  },
  methods: {
    _getSingerDetail () {
      getSingerDetail(this.singerInfo.id).then((res) => {
        this.songs = this.normalizeSongs(res.list)
        console.log(this.songs)
      })
    },
    // 抽取歌曲list中有用的数据
    normalizeSongs (list) {
      let res = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          res.push(musicData)
        }
      })
      return res
    },
    setNavigator () {
      wx.setNavigationBarTitle({
        title: '歌手详情'
      })
    },
    selectItem (item, index) {
      wx.showModal({
        title: 'Tips',
        content: '暂未开发',
        showCancel: false
      })
    }
  }
}
</script>

<style lang="stylus">
  .singer-detail
    .singer-info
      position fixed
      top 0
      left 0
      width 100%
      .name
        position absolute
        top 0
        left 0
        width 100%
        height 100rpx
        line-height 100rpx
        text-align center
        font-size 40rpx
        font-weight bold
        color #df840d
        z-index 2
      .photo
        position absolute
        top 0
        left 0
        width 100%
        height 450rpx
        overflow hidden
        z-index -1
        img
          width 100%
      .blur
        position absolute
        top 0
        left 0
        width 100%
        height 450rpx
        background rgba(0, 0, 0, 0.4)
        z-index 1
    .song-wrapper
      position absolute
      top 450rpx
      left 0
      width 100%
      background #fff
      z-index -2
      .song
        padding 30rpx
        border-bottom: 2rpx solid #fafafa;
        .song-name
          font-size 30rpx
          margin-bottom 15rpx
          color #000
        .singer-name
          font-size 30rpx
          color #999
</style>

