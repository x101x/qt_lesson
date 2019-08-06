- 如果我们有好多信息要从用户搜集
    表单不要太长   yi用
    移动 分页
    PC 端，多个表单 document.forms
- JS 在面向对象中 
    this 指向谁？
    EditInPlace 类 抽象概念 老板 
    var editor = new EditorInPlace（） 实例化  this指向editor  员工
    this.staticElement = document.createElement('span');   //editor
    this.convertToText(); // 函数 也是对象的方法 this指向对象
    this.staticElement.addEventListener('click', function () {
        this=> 对象
        this=>  this.staticElement 语法定义
        作为事件来执行 内部的this 指向事件发生的元素
    }
- 函数内部的this 是执行是动态决定 谁调用指向谁
 this.convertToText(); //函数是作为对象的方法被调用 this指向对象
 EditorInplace 类 construstor + prototype（原型对象 object）
 new EditorInPlace（） 对象 new时发生了什么
function EditorInPlace（） 首字母大写 构造器 
EditorInPlace.prototype={
    converToText:function(){}
}
- this 
- 代码组织 attachEvents
- 状态的方法
- 原生js