// 简单类型的拷贝是拷贝值
let a = 1; // 值
let b = a;

b=2;
console.log(a);
//复杂数据类型  拷贝是引用式赋值
let obj = {
    a:1,
    b: function(){
        console.log('bbbbb');
        
    }
}
// obj2=obj;
//深拷贝
// 返回新的对象

obj2 = JSON.parse(JSON.stringify(obj));
obj2.a=2;
//浅拷贝
console.log(obj2);

