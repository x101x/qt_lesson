<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }} - {{ product.price | currency}}
  
      <button @click="addProductToCart(product)">Add to cart</button></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  // 组件的自身状态 不好共享，
  // 私有的， 在多个使用它的状态里，  不一致
  // 组件数据来源
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    // Vue.use(Vuex);dispatch 派发动作的概念
    // 组件不再接触数据了，连api都不
    this.$store.dispatch('products/getAllProducts')
  },
  methods:{...mapActions('cart',['addProductToCart'])
}}
</script>

<style>

</style>