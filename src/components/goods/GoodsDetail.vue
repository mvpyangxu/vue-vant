<template>
  <div class="goods_detail">
    <!-- 商品轮播图 -->
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="(item, index) in goodsImg" :key="index">
        <img :src="item.src" />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品信息 -->
    <van-row class="goods-info">
      <!-- 标题 -->
      <van-row class="goodsInfo_title">
        <van-col>{{goodsInfo.title}}</van-col>
      </van-row>
      <!-- 价格 -->
      <van-row gutter="20" class="goodsInfo_price">
        <van-col>
          <span>
            市场价：
            <del>￥{{goodsInfo.market_price}}</del>
          </span>
        </van-col>
        <van-col>
          <span>
            销售价：
            <b>￥{{goodsInfo.sell_price}}</b>
          </span>
        </van-col>
      </van-row>
      <!-- 购买数量 -->
      <van-row gutter="20" class="buyingNum">
        <van-col class="buyingNum_title">
          <span>购买数量</span>
        </van-col>
        <van-col class="buyingNum_stepper">
          <van-stepper v-model="value" button-size="32px" async-change @change="goodsNumChange" />
        </van-col>
      </van-row>
      <!-- 购买按钮 -->
      <van-row gutter="10" class="buyingBtn">
        <van-col>
          <van-button type="info">立即购买</van-button>
        </van-col>
        <van-col>
          <van-button type="danger" @click="addInShopcar">加入购物车</van-button>
        </van-col>
      </van-row>
    </van-row>
    <!-- 商品参数 -->
    <van-row class="goods-params">
      <van-row class="goodsParams_title">商品参数</van-row>
      <van-row class="goodsParams_info">
        <van-col>
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}</p>
          <p>上架时间：{{goodsInfo.add_time}}</p>
        </van-col>
      </van-row>
      <van-row>
        <van-button plain type="info" size="large" :to="`/goodsdesc/${id}`">图文介绍</van-button>
      </van-row>
      <van-row>
        <van-button plain type="danger" size="large" :to="`/goodscomments/${id}`">商品评论</van-button>
      </van-row>
    </van-row>
  </div>
</template>

<script>
import { getGoodsImg_api, getGoodsInfo_api } from '@/api'
export default {
  data() {
    return {
      // 轮播图路径
      goodsImg: {},
      // 商品数据
      goodsInfo: [],
      // 加入购物车时的商品信息
      shopcarGoodsInfo: {},
      // 购买的商品数量
      value: 1,
      id: ''
    }
  },
  created() {
    this.getGoodsImg()
    this.getGoodsInfo()
  },
  methods: {
    // 获取轮播图片
    async getGoodsImg() {
      const {id} = this.$route.params
      this.id = id
      const { data: res } = await getGoodsImg_api(this.id)
      if (res.status !== 0) return this.$notify('获取商品图片失败！')
      this.goodsImg = res.message
      // console.log(this.goodsImg, 111)
    },
    // 获取商品参数区和价格，标题等数据
    async getGoodsInfo() {
      const { data: res } = await getGoodsInfo_api(this.id)
      if (res.status !== 0) return this.$notify('获取商品信息失败！')
      this.goodsInfo = res.message[0]
      // console.log(this.goodsInfo, 222)
      // console.log(this.shopcarGoodsInfo,333)
    },
    // 商品数量变化
    goodsNumChange(value) {
      // 更新data中的value
      this.value = value
    },
    // 加入购物车
    addInShopcar() {
      // 加入购物车时的商品信息
      this.shopcarGoodsInfo = {
        // 默认为1
        count: this.value,
        id: this.goodsInfo.id,
        price: this.goodsInfo.sell_price,
        selected: true
      },
      // this.$store.dispatch('asyncAddGoods',this.shopcarGoodsInfo)
      // 更新shopcarGoodsInfo中的count
      this.$toast.success('成功加入购物车')
      // 减少轻提示的显示时间
      let second = 2
      const timer = setInterval(() => {
        second--
        if (!second) {
          clearInterval(timer)
          this.$toast.clear()
        }
      }, 1000)
      this.$store.commit('getGoodsInfo')
      this.$store.commit('addShopcarGoods', this.shopcarGoodsInfo)
      this.$store.commit('getGoodsInfo')
    }
  }
}
</script>

<style lang='less' scoped>
.goods_detail {
  height: 100%;
  padding: 15px;
  color: #999;
  font-size: 14px;
  .van-swipe {
    // margin: 10px;
    height: 230px;
    border: 1px solid #ccc;
    text-align: center;
    // background-color: pink;
    img {
      height: 100%;
    }
  }
  .goods-info {
    margin: 10px 0;
    padding: 15px;
    border: 1px solid #ccc;
    .van-row {
      margin: 20px 0;
    }
    .goodsInfo_title {
      margin-top: 0;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
      color: #000;
    }
    .goodsInfo_price {
      line-height: 20px;
      b {
        color: red;
        font-size: 16px;
      }
    }
    .buyingNum {
      line-height: 30px;
    }
    .buyingBtn {
      margin-bottom: 0;
      .van-button {
        height: 38px;
        line-height: 38px;
      }
    }
  }
  .goods-params {
    padding: 15px;
    border: 1px solid #ccc;
    .van-row {
      margin: 10px 0;
    }
    .goodsParams_title {
      border-bottom: 1px solid #ccc;
      font-size: 17px;
      color: #000;
    }
    .goodsParams_info {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
