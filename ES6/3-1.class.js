// ES6 类  ES5 构造函数

/* 
// 1. 了解构造函数的属性
function Animal(name){ 
    // 属性 分为两种 实例上的属性 公有属性
    this.name = name; //这里的name是变量，是从新参里面拿到的
    this.arr = [1,2,3]; //这里的数组就是直接赋值的，固定的
}
Animal.prototype.address = {location:'山里'}; //给原型属性赋值
let a1 = new Animal('猴子');
let a2 = new Animal('小鸡');
console.log(a1.arr === a2.arr); //false 引用的地址不一样
console.log(a1.address === a2.address); //true 都是原型上的属性，通过__proto__指向原型
// **每个实例都有一个__proto__ 指向所属类的原型
console.log(a1.__proto__ === Animal.prototype); //true
// **原型上有一个constructor属性，指向类
console.log(Animal.prototype.constructor === Animal); //true
console.log(a1.constructor === Animal); //true

console.log(Animal.__proto__ === Function.prototype); //true 原型链 Animal的原型是函数

console.log(Animal.prototype); // { address: { location: '山里' } } 是对象
// a1.__proto__就相当于是Animal.prototype ，她是对象，它的原型链自然就是对象的原型
console.log(a1.__proto__.__proto__ === Object.prototype);//true  
console.log(Object.prototype.__proto__); //null
 */


// 2. 类的继承
function Animal(name){ 
    this.name = name; 
    this.eat = '吃肉'; 
}
Animal.prototype.address = {location:'山里'};
function Tiger(name){
    this.name = name;
    this.age = 10;
    Animal.call(this); //**这行代码只会拿到Animal的实例属性，拿不到原型属性
}
// 继承父类的公共属性、方法
// console.log(Tiger.prototype.__proto__ )

// 方法一 **
// Tiger.prototype.__proto__ = Animal.prototype; //让Tiger原型链指到Animal，就可以拿到address属性了
// 等价于
//让Tiger.prototype的原型链等于Animal.prototype ES6的写法
// Object.setPrototypeOf(Tiger.prototype,Animal.prototype); 

// 还有一个方法，但是行不通，因为不能传参
// Tiger.prototype = new Animal(); //不能用，不能给父类传参

// 方法二 ** -- Object.create()
/* 
function create(parentPrototype){ //这个参数传进来的只有原型属性，没有实例上的属性
    let Fn = function(){}; //这个Fn没有实例上的属性
    console.log(parentPrototype)
    Fn.prototype = parentPrototype; //等于动物类的原型
    console.log(new Fn())
    let fn = new Fn();
    fn.constructor = Tiger;
    return fn; //只有父类的原型属性
}
Tiger.prototype = create(Animal.prototype); //这里只会拿到Animal原型的属性，拿不到实例属性
 */
// 上面是自己实现 create 方法
Tiger.prototype = Object.create(Animal.prototype,{constructor:{value:Tiger}});
// 上面这个函数执行完返回的就是 Animal{}对象
// 然后下面就相当于给 Animal{}对象添加一个say属性
Tiger.prototype.say = function(){
    console.log('说话')
}
// 1）继承父类上的属性
let tiger = new Tiger();
// console.log(tiger.address)
// console.log(tiger.__proto__); //Animal { say: [Function (anonymous)] }; 这个原先是指向Tiger.prototype，现在是既指向Tiger又指向Animal.prototype
console.log(Tiger.prototype);
// console.log(Tiger.prototype === tiger.__proto__); //true


// 我们写的时候 通常使用 call + Object.create() / call + Object.setPrototypeOf()