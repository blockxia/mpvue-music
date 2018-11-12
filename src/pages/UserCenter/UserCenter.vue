<template>
  <div class="user-center">
    <div class="user-info">
      <div class="userImg">
          <open-data class="thumb" type="userAvatarUrl"></open-data>
      </div>
      <div class="userName">
        <open-data class="nackname" lang="zh_CN" type="userNickName"></open-data>
      </div>
    </div>
    <!-- <v-year-progess></v-year-progess> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userInfo: null
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .user-center 
    padding: 0 30rpx;
    .user-info 
      margin-top: 100rpx;
      text-align: center;
      .userImg
        width 120rpx
        height 120rpx
        margin-left: 290rpx;
        margin-bottom 30rpx
</style>
