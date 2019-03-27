<template>
   <div class="singer-detail">
      <div class="singer-info">
        <h3 class="name">{{singer.name}}</h3>
        <div class="photo">
          <img :src="singer.img">
        </div>
        <div class="blur"></div>
      </div>
      <div class="song-wrapper">
        <div @click="selectSong(item, index)" class="song" v-for="(item, index) in songs" :key="index">
          <h3 class="song-name">{{item.name}}</h3>
          <p class="singer-name">{{singer.name}} ·专辑·《{{item.album}}》</p>
        </div>        
      </div>
      <div class="mini-player">
        <v-mini-player></v-mini-player>
      </div>
   </div>
</template>

<script>
import {getSingerDetail} from '@/api/singer'
import {createSong} from '@/common/song'
import {mapGetters, mapMutations} from 'vuex'
import VMiniPlayer from '@/components/MiniPlayer'
export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  mounted () {
    // this.singer = this.$root.$mp.query // 假如使用微信小程序传参方式传递歌手信息，用此方法获取歌手信息
    this._getSingerDetail()
    this.setNavigator()
  },
  methods: {
    _getSingerDetail () {
      getSingerDetail(this.singer.id).then((res) => {
        this.songs = this.normalizeSongs(res.list)
        // console.log(this.songs)
      })
    },
    // 抽取歌曲list中有用的数据
    normalizeSongs (list) {
      let res = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          res.push(createSong(musicData))
        }
      })
      return res
    },
    setNavigator () {
      wx.setNavigationBarTitle({
        title: '歌手详情'
      })
    },
    selectSong (item, index) {
      // console.log(item)
      this.setCurrentSong(item)
      this.showMiniPlayer = true
    },
    ...mapMutations({
      setCurrentSong: 'SET_CURRENTSONG'
    })
  },
  components: {
    VMiniPlayer
  }
}
</script>

<style lang="scss" scoped>
  .singer-detail {
    .singer-info {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      .name {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        font-size: 40rpx;
        font-weight: bold;
        color: #df840d;
        z-index: 2;
      }
      .photo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 450rpx;
        overflow: hidden;;
        z-index: -1;
        img {
          width: 100%;
        }
        .blur {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 450rpx;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
      }
    }
    .song-wrapper {
      position: absolute;
      top: 450rpx;
      left: 0;
      width: 100%;
      background: #fff;
      z-index: -2;
      .song {
        padding: 30rpx;
        border-bottom: 2rpx solid #fafafa;
        .song-name {
          font-size: 30rpx;
          margin-bottom: 15rpx;
          color: #000;
        }
        .singer-name {
          font-size: 30rpx;
          color: #999;
        }
      }
    }
    .mini-player {
      position: fixed;
      bottom: 0;
      z-index: 666;
    }
  }
</style>

