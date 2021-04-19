// Object.defineProperty  ES5

// 通过Object.defineProperty定义属性，可以添加拦截器
/*let obj = {};

  不可枚举 函数的原型 Array.prototype
Object.defineProperty(obj,'name',{
    value:'hello'
})
console.log(obj); //{}  这个属性默认不可枚举 */

/* let obj = {};
let other = '';
Object.defineProperty(obj,'name',{
    enumerable:true, //属性默认是false
    configurable:true, //能否删除这个属性
    // writable:true, //是否可以重写，不能和set  get方法同时存在
    get(){
        console.log('get');
        return other
    },
    set(val){
        other = val
    }
})
delete obj.name; */

/* let obj = {
    other: '123',
    get name(){
        return this.other;
    },
    set name(val){
        this.other = val;
    }
}
obj.name = 456;
console.log(obj.name); */


// vue数据劫持(把所有属性都改成 get 和 set方法) 
function update(){
    console.log('更新视图')
}

let data = {
    name:'fern',
    age:18,
    address:{
        location:'回龙观'
    }
}

// 遍历对象里的值
function observer(obj){ //Object.definedProperty只用在对象上
    if(typeof obj !== 'object') return obj;
    for(let key in obj){
        definedReactive(obj,key,obj[key]); //对象 键名 键值
    }

}

// 给值添加 set 和 get 方法
function definedReactive(obj,key,value){
    observer(value);
    Object.defineProperty(obj,key,{
        get(){
            return value;
        },
        set(val){
            if(val != value){
                observer(val);
                update();
                value = val;
            }
        }
    })
}

observer(data);
// data.name = 'zmy';
data.address = [1,2,3];
// data.address[0] = '456'; //这样会触发更新
// data.address.push(34); //这样就不会，改length也不会
// data.a = 1;  //这样是不会更新视图的，因为属性不存在

let methods = ['slice','sort','push','pop','shift','unshift','reverse'];
methods.forEach(method => {
    // 面向切片开发 装饰器
    let oldMethod = Array.prototype[method];
    Array.prototype[method] = function(){ //重写数组原型上的方法，加上自己的更新视图方法
        update();
        oldMethod.call(this,...arguments);
    }
})
data.address.push(4);
data.address.push(4);