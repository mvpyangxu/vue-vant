import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import Vip from './components/vip.vue'
import Search from './components/search.vue'
// 商品列表页
import GoodsList from './components/goods/GoodsList.vue'
// 商品详情页
import GoodsDetail from './components/goods/GoodsDetail.vue'
// 商品描述页
import GoodsDesc from './components/goods/GoodsDesc.vue'
// 商品评论页
import Goodscomments from './components/goods/Goodscomments.vue'
//注册路由事件
Vue.use(Router)
export default new Router({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: Index },
        { path: '/vip', component: Vip },
        { path: '/search', component: Search },
        { path: '/goods/list', name: 'goodsList', component: GoodsList },
        { path: '/goods/detail/:id', name: 'goodsDetail', component: GoodsDetail },
        { path: '/goodsdesc/:id', name: 'goodsDesc', component: GoodsDesc },
        { path: '/goodscomments/:id', name: 'goodscomments', component: Goodscomments }
    ],
})