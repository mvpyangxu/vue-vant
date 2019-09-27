import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shopcarGoods: [],
        info: 0
    },
    mutations: {
        addShopcarGoods(state, data) {
            let bOff = true
            state.shopcarGoods.forEach(x => {
                if (x.id === data.id) {
                    x.count += data.count
                    bOff = false
                }
            })
            if (bOff) {
                state.shopcarGoods.push(data)
            }

            // window.localStorage.setItem('goodsInfo', state.shopcarGoods)
            // console.log(state.shopcarGoods, 4444)
            window.localStorage.setItem('goodsInfo', JSON.stringify(state.shopcarGoods))
        },
        getGoodsInfo(state) {
            const goodsInfo = JSON.parse(window.localStorage.getItem('goodsInfo'))
            if (!goodsInfo) return false
            state.shopcarGoods = goodsInfo
                // console.log(goodsInfo, 111)
            let num = 0
            goodsInfo.forEach(item => {
                    let count = item.count
                    num += count
                })
                // console.log(num, 222)
            state.info = num
        }
    },
    actions: {}
})