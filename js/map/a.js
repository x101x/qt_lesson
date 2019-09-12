const dogs = new Map();
dogs.set('Snickers',3);
dogs.set('Hugo',10);
dogs.set('Sunny',2);

dogs.forEach((val,key)=>console.log(val,key));


for (const [key,val] of dogs){
    console.log(val,key)
}   
