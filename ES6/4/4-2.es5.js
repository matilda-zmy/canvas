"use strict";

var _dec, _class, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// 装饰器可以修饰类 类的属性 类的方法
// 修饰的时候，就是把这个类的属性 传递给修饰的函数
var Animal = (_dec = flag("哺乳类"), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Animal() {
    _classCallCheck(this, Animal);

    this.PI = 3.14;
    this.name = 'xxx';
  }

  _createClass(Animal, [{
    key: "say",
    value: //实例上的属性，不是原型上的属性
    function say(a, b, c) {
      console.log('说话', a, b, c, this, this.a);
    }
  }, {
    key: "a",
    value: function a() {
      return 'acv';
    }
  }]);

  return Animal;
}(), (_applyDecoratedDescriptor(_class2.prototype, "say", [before], Object.getOwnPropertyDescriptor(_class2.prototype, "say"), _class2.prototype)), _class2)) || _class); // 1) 类的静态属性  @flag

function flag(value) {
  return function (constructor) {
    constructor.type = value;
  };
}

console.log(Animal.type); // 2) 类的属性  (实例上的属性)

function readonly(target, property, descriptor) {
  descriptor.writable = false; // setTimeout(() => {
  //     console.log(target == Animal.prototype); //等于类的原型
  // })
  // console.log(arguments)
}

function before(target, property, descriptor) {
  var oldSay = descriptor.value; //拿到类的say方法

  descriptor.value = function () {
    //重写say方法
    console.log(target);
    console.log('before');
    oldSay.call.apply(oldSay, [target].concat(Array.prototype.slice.call(arguments)));
  }; // console.log(descriptor)

}

var animal = new Animal();
animal.say(1, 2, 3);
