<template>
  <div>
      <!-- 轮播图部分 -->
      <van-row>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,i) in imageArr" :key="i"><van-image class="lunboImage" :src="imageArr[i]"/></van-swipe-item>
        </van-swipe>
      </van-row>
      <!-- 九宫格 -->
      <van-row>
        <van-grid :column-num="3">
          <van-grid-item :icon="require('../assets/image/menu1.png')" text="新闻资讯"/>
          <van-grid-item :icon="require('../assets/image/menu2.png')" text="图片分享"/>
          <van-grid-item :icon="require('../assets/image/menu3.png')" text="商品购买"/>
          <van-grid-item :icon="require('../assets/image/menu4.png')" text="留言反馈"/>
          <van-grid-item :icon="require('../assets/image/menu5.png')" text="视频专区"/>
          <van-grid-item :icon="require('../assets/image/menu6.png')" text="联系我们"/>
        </van-grid>
      </van-row>
  </div>
</template>
<script>
import { pictureApi } from '@/api'
export default {
  data(){
    return {
      //图片地址
      imageArr:[]
    }
  },
  methods: {
    async getImage(){
      const { data:res } = await pictureApi()
      res.message.forEach(item => {
        this.imageArr.push(item.img)
      });
    }
  },
  created(){
    this.getImage()
  }
}
</script>
<style lang="less">
  .lunboImage {
    height: 200px;
  }
</style>
