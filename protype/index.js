function Person(name){
    this.name = name;
    // console.log(this);
    
}
Person.prototype={
    getName:function(){
        return this.name
    },
    playHpjy:function(){
        console.log("大吉大利，今晚吃鸡");
        
    }
}   
console.log(Person.prototype.getName);

let person = new Person("aaa");
console.log(person.getName);
