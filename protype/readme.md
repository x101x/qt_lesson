- prototype 三角链
构造函数（constructor) 构造函数的原型对象{} 实例
Person.prototype={}
Person.prototype.getName

构造函数 都会有prototype属性   原型对象
实例会通过prototype 对象拿到所有方法 
person.getName();
Person.prototype.constructor =  Person
Person 1 => n person

person   person.prototype  _proto_
实例如何拿到原型链上的方法？
