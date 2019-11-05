import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    // 四大家族 

     modules: {
        //  user,
        //  news,
        cart,
        products,
     }
})