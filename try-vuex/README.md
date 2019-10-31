- vuex 数据流
 组件 + 共享数据
1. 共享状态 
- this.$store
 Vue.use(Vuex) Vue.$store
- this.$store.state
 new Vue({
    store
 })
 store = new Vuex.Store({
    state,
    ...
 })

- es6 模块化机制 
export default xxx

- class get 方法
 Store 是一个类 四大家使它的属性
 this.$store 对vue.prototype扩展后 所以组件都可以随便调用
 vue 钩子函数 beforeCreated
 除了它该做的 再做下vuex的初始化

- 让唯一的store对象 state是属性
beforeCreated vue 该怎样
再多this.$store = this Vue 单例 根组件
beforeCreated 之前的代码也要运行
vue.mixin()
通过源码 认识到所有的组件都可以访问$store 是因为它已经为vue 单例加入了这个属性
每个组件里的this -》 本组件 -》 prototype -》 vue单例

