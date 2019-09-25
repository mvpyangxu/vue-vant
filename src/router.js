import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import Vip from './components/vip.vue'
import Search from './components/search.vue'
import shopCar from './components/shopCar.vue'
Vue.use(Router)
export default new Router({
  routes: [
        {path: '/', redirect: '/index' },
        {path:'/index', component:Index},
        {path:'/vip' , component:Vip},
        {path:'/search' , component:Search},
        {path:'/shopCar' , component:shopCar}
  ]
})

