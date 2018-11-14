<template>
   <div class="singer-detail">
      <div class="singer-info">
        <h3 class="name">{{singerInfo.name}}</h3>
        <div class="photo">
          <img :src="singerInfo.img">
        </div>
        <div class="blur"></div>
      </div>
      <div class="song"></div>
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
    wx.setNavigationBarTitle({
      title: '歌手详情'
    })
  },
  methods: {
    _getSingerDetail () {
      getSingerDetail(this.singerInfo.id).then((res) => {
        this.songs = this.normalizeSongs(res.list)
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
</style>

