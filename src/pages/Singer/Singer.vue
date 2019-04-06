<template>
  <div class="singer fixTop">
    <div class="mini-player" v-if="currentSong.name">
      <v-mini-player></v-mini-player>
    </div>
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
import VMiniPlayer from '@/components/MiniPlayer'
import {getSingerList} from '@/api/singer'
import {mapGetters, mapMutations} from 'vuex'
export default {
  data () {
    return {
      singerList: []
    }
  },
  created () {
    this.getSinger()
  },
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  },
  methods: {
    // 获取歌手列表
    getSinger () {
      getSingerList().then((res) => {
        this.singerList = this.normalize(res.list)
        // console.log(this.singerList)
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
    selectSinger (singer) {
      // 使用vuex实现
      this.setSinger(singer)
      wx.navigateTo({
        url: '/pages/SingerDetail/main'
      })

      // 使用微信小程序传参方式实现
      // wx.navigateTo({
      //   url: `/pages/SingerDetail/main?id=${item.id}&name=${item.name}&img=${item.img}`,
      //   success: function () {
      //     console.log('success')
      //   }
      // })
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    VMiniPlayer
  }
}
</script>

<style lang="scss" scoped>
.singer {
  width: 100%;
  .group-title {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    padding-left: 20rpx;
    font-size: 32rpx;
    color: #df840d;
    background: #fafafa;
  }
  .item {
      display: flex;
      width: 100%;
      height: 120rpx;
      border-bottom: 1px solid #fafafa;
      box-sizing: border-box;
      .img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        margin: 10rpx 0 0 20rpx;
      }
      .name {
        margin-left: 50rpx;
        line-height: 120rpx;
        font-size: 30rpx;
        color: #999;
      }
  }
  .mini-player {
    border-bottom: 2rpx solid rgba(0, 0, 0, 0.05);
  }
}
</style>
