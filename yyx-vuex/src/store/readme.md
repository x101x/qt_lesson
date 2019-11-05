- 先看页面  在写vuex
    focus 数据流设计 
- modules           
    宏观设计一个项目
    模块  对应于vuex中的一个数据单元设计  四大家族构成
    store 单一状态树
    
    小型项目不用vuex 很复杂 用组件传值 props + emit
    大型项目 vuex modules 

this.$store.products.items
this.$store.cart.items
namespace :true

- 传统vue 
mounted() 
    axios /api / products/:1
    this.products =

- 模块化后 看一眼设计稿 
核心的状态 

- 添加商品 到购物车
    cart.state.items      
    mapActions('cart',{})