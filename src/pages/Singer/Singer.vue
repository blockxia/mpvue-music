<template>
  <div class="singer">
    <div v-for="(group, index) in singerList" :key="index">
      <h3 class="group-title">{{group.title}}</h3>
      <div @click="selectSinger(item)" class="item" v-for="(item, itemIndex) in group.item" :key="itemIndex">
        <img class="img" :src="item.img">
        <span class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {getSingerList} from '@/utils/api'
export default {
  data () {
    return {
      singerList: []
    }
  },
  created () {
    this.getSinger()
  },
  methods: {
    // 获取歌手列表
    getSinger () {
      getSingerList().then((res) => {
        this.singerList = this.normalize(res.list)
        console.log(this.singerList)
      })
    },
    // 格式化歌手接口数据
    normalize (list) {
      let map = {
        hot: {
          title: '热',
          item: []
        }
      }
      list.forEach((item, index) => {
        if (index < 10) {
          map.hot.item.push({
            name: item.Fsinger_name,
            id: item.Fsinger_mid,
            img: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
          })
        }
        if (!map[item.Findex]) {
          map[item.Findex] = {
            title: item.Findex,
            item: []
          }
        }
        map[item.Findex].item.push({
          name: item.Fsinger_name,
          id: item.Fsinger_mid,
          img: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
        })
      })
      // console.log(map) 无序列表
      // 为了得到有序列表,需要处理map
      let usual = []
      let hot = []
      for (let key in map) {
        if (map[key].title.match(/[a-zA-Z]/)) {
          usual.push(map[key])
        } else if (map[key].title === '热') {
          hot.push(map[key])
        }
      }
      usual.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(usual)
    },
    selectSinger (item) {
      wx.showModal({
        content: '歌曲信息待抓取',
        showCancel: false
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .singer
    width 100%
    .group-title
      width 100%
      height 100rpx
      line-height 100rpx
      padding-left 20rpx
      font-size 32rpx
      color #df840d
      background #fafafa
    .item
      display flex
      width 100%
      height 120rpx
      border-bottom 1px solid #fafafa
      box-sizing border-box
      .img
        width 100rpx
        height 100rpx
        border-radius 50%
        margin 10rpx 0 0 20rpx
      .name
        margin-left 50rpx
        line-height 120rpx
        font-size 30rpx
        color #999
</style>
