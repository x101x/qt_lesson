let dog1 = {name:'Snickers'};
let dog2 = {name:'Sunny'};

const strong = new Map(); // 强映射
const weak = new WeakMap();//弱映射

strong.set(dog1,'Snickers is the best !')
weak.set(dog2,'Sunny is the 2nd best !')
dog1 = null;//垃圾回收       
dog2 = null;
for ([key,val] of strong){
    console.log(key,val);    
}
console.log(weak.get(dog2));


// for ([key,val] of weak){
//     console.log(key,val);
    
// }