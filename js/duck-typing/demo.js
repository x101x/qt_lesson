
const chior=[]; //合唱团 数组 1000个
function joinChior(animal){ //参数 检测 加入数组  达到数量汇报
    chior.push(animal);
}
// js 可以用对象字面量来描述一个对象
const duck={
     type:'鸭子',//属性
     sex: '公' ,
     duckSing: function(){//行为
      console.log('gagaga');
     }
}
joinChior(duck);