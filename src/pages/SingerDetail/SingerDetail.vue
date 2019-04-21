<template>
   <div class="singer-detail">
      <div class="singer-info">
        <div class="photo">
          <img :src="(songImageShouldShow && currentSong.image) ? currentSong.image : singer.img">
        </div>
        <div class="blur"></div>
      </div>
      <div class="song-wrapper">
        <div @click="selectSong(item, index)" class="song" v-for="(item, index) in songs" :key="index">
          <h3 class="song-name">{{item.name}}</h3>
          <p class="singer-name">{{singer.name}} ·专辑·《{{item.album}}》</p>
        </div>        
      </div>
      <v-player></v-player>
   </div>
</template>

<script>
import {getSingerDetail} from '@/api/singer'
import {createSong} from '@/common/song'
import {mapGetters, mapMutations} from 'vuex'
import VPlayer from '@/components/Player'
export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer',
      'currentSong',
      'playList'
    ]),
    songImageShouldShow () {
      return this.playList && this.playList[0] && this.playList[0].id === this.songs[0].id
    }
  },
  mounted () {
    this._getSingerDetail()
    this.setNavigator()
  },
  methods: {
    _getSingerDetail () {
      getSingerDetail(this.singer.id).then((res) => {
        this.songs = this.normalizeSongs(res.list)
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
        title: this.singer.name
      })
    },
    selectSong (item, index) {
      if (!this.playList[0] || this.playList[0].id !== this.songs[0].id) {
        this.setPlayList(this.songs)
      }
      this.setCurrentIndex(index)
      this.showMiniPlayer = true
    },
    ...mapMutations({
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayList: 'SET_PLAYLIST'
    })
  },
  components: {
    VPlayer
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
  }
</style>

