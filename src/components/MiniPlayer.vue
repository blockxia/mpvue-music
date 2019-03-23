<template>
  <div class="mini-player">
    <audio :poster="currentSong.image" :name="currentSong.name" :author="currentSong.singer" :src="currentSong.url" id="currentSong" controls></audio>
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
      this.audioCtx = wx.createAudioContext('currentSong')
      this.audioCtx.play()
    }
  },
  watch: {
    'currentSong': {
      handler (newVal) {
        this.audioCtx.play()
        console.log('dddd')
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
  .mini-player {
    width: 100%;
    height: 120rpx;
    .audio {
      width: 100%;
      height: 120rpx;
    }
  }
</style>
