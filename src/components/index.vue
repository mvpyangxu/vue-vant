<template>
  <div>
    <van-swipe :height="200" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, id) in images" :key="id">
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>

    <!-- 九宫格内容 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item to="/newslist">
        <img src="../assets/img/menu1.png" />
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item to="/photo/list">
        <img src="../assets/img/menu2.png" />
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item to="/goods/list">
        <img src="../assets/img/menu3.png" />
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/menu4.png" />
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/menu5.png" />
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/menu6.png" />
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getIndexImg_api } from '@/api'
export default {
  data() {
    return {
      images: []
    }
  },
  created() {
    this.lunboList()
  },
  methods: {
    //获取录播图的地址
    async lunboList() {
      const { data: res } = await getIndexImg_api()
      this.images = res.message
    }
  }
}
</script>
<style lang='less' scoped>
img {
  width: 100%;
  height: 100%;
}
.van-grid {
  img {
    width: 60px;
    height: 60px;
  }
  p {
    font-size: 14px;
  }
}
</style>
