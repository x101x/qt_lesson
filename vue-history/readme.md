链接带来了页面的互联
一切皆资源 链接表示 URL
传统页面 重新刷新   坏事    体验有点差
SPA    Single Page Application 

# 路由的做法 vue-router 会用不算什么 框架的实现
- 单页应用的结构
不再是n个页面了， 1个页面， 分为不动的部分和动的部分
导航  nav  a @/page1
# /page1 path 页面切换的 锚链接
URL 改变的事件
锚链接让点击链接 不跳转页面成为可能  #开头

路由接管一切 new HashRouter（）;
constructor 订阅 hashChange 事件

- 新的前端世界再打开 更要新的秩序
关注所有路由 #/page hashRouter
hash => cb()  //container 显示；
clsaa HashRouter
this。routers= {}
向外提供 register（hash，callback=function（）{} ）方法 
load 
  window.addEventListener('hashchange',this.load.bind(this))  
  call apply es5 手动指定函数内部this的API
  bind this 一样 返回一个新的函数 适合事件的执行时

  VUE REACT SPA Single Page Application 应用体验 页面会白一下
  传统页面 链接把网站组织起来的 新的http请求
  /about req res 过程
  req /about   about.html 
  时间 网络传输时间 01二进制 电频的信号 光速 +node/java/python 后端代码，查数据库执行的时间 把html 返回回去 = 白屏时间
  1.5s 用户会离开 0.1s 1000w
  路由是独立的
  - 网站MVC   应用（Vue App）体验产生路由 解决白屏问题 VueRouter
  - hashRouter
    #/shop #/
    优点是 ie8以上都支持
    缺点 路由不纯粹
    HistoryRouter history 历史的 /shop 访问历史 记录
VUERouter 两种实现方式 = HistoryRouter[兼容性] +HistoryRouter(长的好，移动端兼容性还是没有问题)