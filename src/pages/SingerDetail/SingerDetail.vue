<template>
   <div class="singer-detail">
      歌手详情
   </div>
</template>

<script>
export default {
  data () {
    return {
      singerInfo: {}
    }
  },
  mounted () {
    this.singerInfo = this.$root.$mp.query
  }
}
</script>
