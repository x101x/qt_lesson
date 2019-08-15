function Animal(plant){
    this.plant=plant;
}
//constructor 函数是js中的一等对象
Animal.prototype.getPlant = function(){
    return this.plant;
}
function Person(name){
    this.name=name;
}

Person.prototype = new Animal('earth');
// person= new Person("aa")
Person.prototype.getName=function(){
    return this.name;
}
const person= new Person("aa");
console.log(person.getPlant());
console.log(person.getName());
console.log(Person.prototype.__proto__===Animal.prototype);


