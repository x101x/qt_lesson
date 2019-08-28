// function Singleton(){
//     let instance =null;
//     return instance ;
// }

const Singleton = (function(){
    //闭包 closure
    let instance = null;//闭包区域 
    console.log('----quyu');
    return function(){
        //constructor
        console.log('----w');
        if(instance){return instance}
        return instance = this
        
    }
})();
console.log(Singleton,typeof Singleton);
console.log(Singleton)
//  实例 return  单例模式
const a = new Singleton();
const b = new Singleton();
console.log(a==b);
