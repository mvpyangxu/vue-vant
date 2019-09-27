<template>
  <div id="app">
    <!-- 公共结构 start-->
    <!-- 头部 -->
    <van-nav-bar title="黑马程序员.vant" fixed :border="false">
      <span slot="left" v-if="active!=0" @click="onClickLeft">
        <van-icon name="arrow-left" slot="left" style="vertical-align:bottom;" />&nbsp;返回
      </span>
      <span slot="right" v-if="active==3">添加</span>
    </van-nav-bar>

    <!-- 占位符 内容主体 start-->
    <router-view></router-view>
    <!-- 占位符 内容主体 end-->

    <!-- 底部tab栏 -->
    <van-tabbar @change="handle" v-model="active" route>
      <van-tabbar-item name="0" icon="home-o" to="/home" replace>首页</van-tabbar-item>
      <van-tabbar-item name="1" icon="user-o" to="/member" replace>会员</van-tabbar-item>
      <van-tabbar-item
        name="2"
        icon="shopping-cart-o"
        to="/shopcar"
        replace
        :info="this.$store.state.info"
      >购物车</van-tabbar-item>
      <van-tabbar-item name="3" icon="search" to="/search" replace>搜索</van-tabbar-item>
    </van-tabbar>
    <!-- 公共结构 end-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: '',
      images: []
    }
  },
  created() {
    this.active = window.sessionStorage.getItem('active')
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$store.commit('getGoodsInfo')
    },
    onClickLeft() {
      this.$router.go(-1) //触发点击事件后返回上一层
    },
    handle(name) {
      this.active = window.sessionStorage.setItem('active', name)
      this.active = window.sessionStorage.getItem('active')
    }
  }
}
</script>

<style lang="less" scope>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  #app {
    padding: 40px 0 50px 0;
    height: 100%;
    box-sizing: border-box;
  }
  .van-nav-bar {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #1989fa;
    .van-nav-bar__title,
    span,
    .van-icon {
      color: #fff;
      font-size: 14px;
      line-height: 40px;
    }
  }
}
</style>
