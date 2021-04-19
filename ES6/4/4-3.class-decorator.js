// 装饰器可以修饰类 类的属性 类的方法

// 修饰的时候，就是把这个类的属性 传递给修饰的函数
@flag("哺乳类")
class Animal{
    // @readonly
    PI = 3.14;
    name = 'xxx';  //实例上的属性，不是原型上的属性
    @before
    say(a,b,c){
        console.log('说话',a,b,c,this,this.a)
    }
    a(){
        return 'acv'
    }
}

// 1) 类的静态属性  @flag
function flag(value){
    return function(constructor){
        constructor.type = value
    }
}
console.log(Animal.type)

// 2) 类的属性  (实例上的属性)
function readonly(target,property,descriptor){
    descriptor.writable = false;
    // setTimeout(() => {
    //     console.log(target == Animal.prototype); //等于类的原型
    // })
    // console.log(arguments)
}

function before(target,property,descriptor){
    let oldSay = descriptor.value; //拿到类的say方法
    descriptor.value = function(){ //重写say方法
        console.log(target)
        console.log('before');
        oldSay.call(target,...arguments);
    }
    // console.log(descriptor)
}
let animal = new Animal();
animal.say(1,2,3);