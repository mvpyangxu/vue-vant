<template>
  <div class="boss">
    <van-grid :column-num="2">
      <template slot-scope="scope" prop="goodslist">
        <van-grid-item v-for="(item,i) in goodslist" :key="i" :to="`/goods/detail/${item.id}`">
          <!-- 图片展示区 -->
          <van-image :src="item.img_url"/>
          <!-- 文字描述区 -->
          <p>{{item.title}}</p>
          <!-- 价格展示区 -->
          <div class="price">
            <van-card :price="item.sell_price" :origin-price="item.market_price">
              <!-- 热卖区 -->
              <div slot="footer" class="footer">
                <span class="footleft">热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
              </div>
            </van-card>
          </div>
        </van-grid-item>
      </template>
    </van-grid>
    <div class="seeshow" v-show="see">没有了哦</div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import { getGoodsList_api } from '@/api'
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: [],
      see: false
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    // 获取商品列表
    async getGoodsList() {
      const { data: res } = await getGoodsList_api('1')
      // console.log(res)
      if (res.status != 0) return this.$message.error('获取商品失败')
      this.goodslist = res.message
      // console.log(this.goodslist)
      if (this.goodslist.length) return (this.see = true)
    }
  }
}
</script>

<style lang='less' scoped>
.boss {
  padding-top: 64px;
  height: 3000px;
}
.van-grid {
  width: 100%;
  .van-grid-item {
    width: 100%;
    height: 350px;
    padding: 0 10px;
    margin: 10px 0;
    border-top-width: 0;
    /deep/ p {
      // width: 100%;
      position: absolute;
      top: 200px;
      height: 49px;
      margin: 14px 0;
      padding: 10px;
      font-size: 14px;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      // white-space: nowrap;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; // 限制块级元素的文本行数
        z-index: 1;
    }
    /deep/ .van-grid-item__content {
      padding: 0;
      border: 1px solid #ccc;
    }
  }
}
.van-image {
  position: absolute;
  top: 0;
  height: 200px;
  padding: 10px;
  .van-image__img{
      width: 167.12px;
    height: 167.12px;
    
  }
  
}
.price {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.van-card {
  padding: 5px 10px;
  background-color: #eee;
  div {
    height: 25px;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  bottom: 0;
  font-size: 14px;
}
.van-card__price {
  margin-right: 15px;
  font-size: 16px;
}
.van-card__origin-price {
  color: #000;
  font-size: 14px;
}
.seeshow {
  text-align: center;
}
/deep/ .van-hairline--top::after {
  border: 0;
}
</style>
