- 单例模式 是设计模式的最基本模式 。 
    不管new 多少次 ， 永远返回一个对象 
    instance
- 立即执行函数 + 闭包 
    instance 全局
    var instance = null; 污染命名空间
    const Singleton = (function(){
        var instance = null;
        return function(){
            if(instance){return instance}
            return instance = this
        }
    })();
    立即执行函数  返回函数，是构成闭包常用手段。
    生产环境  立即执行函数 创造闭包环境 变量一直在闭包函数在运行时，可以引用到生成闭包环境