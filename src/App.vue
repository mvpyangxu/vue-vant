<template>
  <div id="app">
      <!-- 头部 -->
      <van-row>
        <van-col span="24">黑马程序员.vant</van-col>
      </van-row>
      <router-view />
      <!-- 底部 -->
      <van-row>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home" :to="{ path: '/index' }">首页</van-tabbar-item>
          <van-tabbar-item icon="user-o" :to="{ path: '/vip' }">会员</van-tabbar-item>
          <van-tabbar-item icon="cart" :to="{ path: '/shopCar' }">购物车</van-tabbar-item>
          <van-tabbar-item icon="search" :to="{ path: '/search' }">搜索</van-tabbar-item>
        </van-tabbar>
      </van-row>
  </div>
</template>
<script>
import { pictureApi } from '@/api'
export default {
  data(){
    return {
      active: 0
    }
  }
}
</script>
<style lang="less">
</style>

