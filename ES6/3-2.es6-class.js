class Animal{
    // 静态属性 / 方法
    // static flag = 123; //es7的写法 静态属性
    static flag(){
        return 123;
    } //es6的写法 静态方法
    constructor(name){
        this.name = name;
        this.eat = '吃肉';
        // return {a:1}; //如果父类返回了一个引用类型，那子类的实例tiger就是这个引用类型
    }
    say(){
        console.log(this); //es6 规范里 如果单独调用原型上的方法，this是不存在的
    }
}
// 1）类不能当做函数调用
// Animal(); //会报错

// let animal = new Animal();
// // animal.__proto__.say();//通过实例的原型链 指向原型 调用方法
// animal.say();

class Tiger extends Animal{

}
let tiger = new Tiger('王老虎');
// console.log(tiger.eat);
// console.log(tiger.name);
// console.log(Tiger.flag()); //静态方法要通过类调用，不能通过实例调用

console.log(tiger)