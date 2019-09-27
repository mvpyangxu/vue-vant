// 导入axios
import axios from 'axios'
// 抽离公共地址
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

// 获取商品列表
export const getGoodsList_api = pageindex => {
    return axios.get(`/api/getgoods?pageindex=${pageindex}`)
}

// 获取商品轮播图
export const getGoodsImg_api = imgid => {
    return axios.get(`/api/getthumimages/${imgid}`)
}

// 获取商品参数区和价格_标题等数据
export const getGoodsInfo_api = id => {
    return axios.get(`/api/goods/getinfo/${id}`)
}

// 获取商品图文介绍
export const getdesc_api = id => {
    return axios.get(`/api/goods/getdesc/${id}`)
}

// 获取首页轮播图
export const getIndexImg_api = () => {
    return axios.get(`/api/getlunbo`)
}