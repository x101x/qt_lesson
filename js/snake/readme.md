- canvas
- JS 异步是核心问题
    事件， 定时器，fetch/ajax
    代码编写顺序和执行顺序不一样 代码可读性下降
    loadAssets（）；1s 
    hideWelcome（）在它之后 先执行
    JS 单线程语言  JAVA 多线程
    在一次执行中   会把立即执行的代码执行掉
    再把事件监听 定时器 Ajax 事件轮询中
    怎么办？ 花时间？ 
    回调函数

- img.onload
    window.onload 開始我們的表演  太慢了
    如果html css js 都沒有基本機構的搭建完成，遊戲腳本會有問題

- 函数式编程
    完成开发需求 复杂 独立的多个子需求来完成 单独封装成一个函数              
    init（） drawSnake() addEvent（） refreshSnake（） winOrLoose（） showResult（）
