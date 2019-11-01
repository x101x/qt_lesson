- Vue
    vuerouter 路由
    vuex 数据流
    element ui PC框架
    MintUI/IVIEW  mlbile

    插件
    vue 瘦身 mvvm
    其他的都是他的周边生态  
    插件机制往里面加
    Vue.use(plugin)
    按一定的规定
    this.$route
    Vue.prototype\
- element-ui 有两种引入组建的方式
<el-button />
Vue.components

- 写一个vue 组件， 开源插件 
    {
        install： function（）{
            Vue.component(component.name,component)
            Vue.prototype.$message = Message;
        }
    }
    Vue。use（plugin） 执行install