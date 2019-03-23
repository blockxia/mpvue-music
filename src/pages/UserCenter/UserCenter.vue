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
    <v-year-progress></v-year-progress>
  </div>
</template>

<script>
import VYearProgress from '@/components/YearProgress'
export default {
  components: {
    VYearProgress
  }
}
</script>
<style lang="scss" scoped>
  .user-center {
    padding: 0 30rpx;
    .user-info {
      margin-top: 100rpx;
      text-align: center;  
      .userImg {
        width: 120rpx;
        height: 120rpx;
        margin-left: 290rpx;
        margin-bottom: 30rpx;
      }  
    } 
  }

</style>
