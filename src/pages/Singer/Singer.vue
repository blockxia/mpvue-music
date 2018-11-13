<template>
  <div class="singer">
    <div v-for="(group, index) in singerList" :key="index">
      <h3>{{group.title}}</h3>
      <div @click="selectSinger(item)" class="cell-content" v-for="(item, itemIndex) in group.item" :key="itemIndex">
        <img class="singer-img" :src="item.img">
        <span class="singer-name">{{item.name}}</span>
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
    }
  }
}
</script>

<style>

</style>
