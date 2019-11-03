- SSR
  相对于SPA 体验好  缺点： 对搜索引擎不友好
  Vue component  JS 内存   手机网站大部分不来自于搜索

  PC 入口 www.baidu.com

- 前端 
vue + nuxt
- 后端
koa + mysql mongodb redis
约定
- VUE UI 框架
- axios

-pages 目录下 的vue 文件都会自动帮我们做好路由
没有vue 单点入口 根组件的概念

路由由 pages 配置约定 _id.vue

- layout
有专门的layout 目录 多个页面的公有部分
app.html 全局
layout/
    default.vue 默认选择
    其他的 page/
    script layout：false

- 数据流
store -> api -> node
- json-server
  方便的API工具  编辑一个json 就可以
  仿的网站里 ajax  /assets/*.json

获取资源 /get
添加一个资源 /post {}
修改资源 /put  更新对象
/patch 打补丁
/delect 删除 /posts/1