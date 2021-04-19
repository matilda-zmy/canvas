"use strict";

function _inheritsLoose(subClass, superClass) {//子类 父类
  subClass.prototype = Object.create(superClass.prototype); //让子类继承父类原型上的方法
  subClass.prototype.constructor = subClass;//把子类原型的constructor指向改回来
  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) { //子类  父类
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p; //继承静态属性 (子类的原型链指向父类，那父类上的所有属性，子类都可以调用)
      return o;
    };
  return _setPrototypeOf(o, p);
}

var Animal = /*#__PURE__*/ (function () {
  // 静态属性 / 方法
  // static flag = 123; //es7的写法 静态属性
  Animal.flag = function flag() {
    return 123;
  }; //es6的写法 静态方法

  function Animal(name) {
    this.name = name;
    this.eat = "吃肉";
  }

  var _proto = Animal.prototype;

  _proto.say = function say() {
    console.log(this); //es6 规范里 如果单独调用原型上的方法，this是不存在的
  };

  return Animal;
})(); // 1）类不能当做函数调用
// Animal(); //会报错
// let animal = new Animal();
// // animal.__proto__.say();//通过实例的原型链 指向原型 调用方法
// animal.say();

var Tiger = /*#__PURE__*/ (function (_Animal) {
  _inheritsLoose(Tiger, _Animal);

  function Tiger() {
    // 继承父类实例上的属性
    return _Animal.apply(this, arguments) || this;
  }

  return Tiger;
})(Animal);

var tiger = new Tiger("王老虎");
console.log(tiger.eat);
console.log(tiger.name);
console.log(Tiger.flag()); //静态方法要通过类调用，不能通过实例调用
