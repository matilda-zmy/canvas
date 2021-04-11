// ... 展开运算符
// 把多个数组合在一个数组
// 把多个对象合在一个对象
let arr1 = [1,2,3]/* ;
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3); */


//深拷贝、浅拷贝 
/* let school = {name:'fern'};
let my ={age:{count:18}};
let all = {...school,...my};
my.age.count = 100; //在这里改了之后，all里面的count就会变成100，但我们想要的是count依旧是18，所以这里是浅拷贝
console.log(all); */

// 把原来的my放在新对象里，用一个新的age把原来的age也拷贝一份
/* let school = {name:'fern'};
let my ={age:{count:18}};
let newMy = {...my,age:{...my.age}};
let all = {...school,...newMy};
my.age.count = 100;
console.log(all); */

// 把对象先转换成字符串，再把字符串转换成对象
// 这个方法虽然看似可以，但如果school对象里面有函数，有undefined，就会有问题
// 就会是这样{ name: 'fern', cc: null, age: { count: 18 } }
/* let school = {name:'fern',fn:function(){},aa:undefined,cc:null};
// let school = {name:'fern'};
let my ={age:{count:18}};
let all = JSON.parse(JSON.stringify({...school,...my}));
my.age.count = 100;
console.log(all); */

// object.assign = ...运算符


// 自己实现深拷贝的方法（递归拷贝）
// 掌握类型判断 typeof  instanceof  Object.prototype.toString.call
function deepClone(obj,hash = new WeakMap()){ //判断obj是undefined 或null
    if(obj == null) return obj; //只写一个，因为null == undefined
    // 考虑特殊的复杂类型
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    if(typeof obj !== 'object') return obj; //如果不是对象就不拷贝
    // 要不是数组，要不是对象
    /* [].constructor = Array(); 
    new [].constructor = [];
    ({}).constructor = Object();
    new ({}).constructor = {}; */
    // if(hash.has(obj)) return hash.get(obj); //如果WeakMap中有对象就直接返回
    debugger
    if(hash.has(obj)){
        console.log('hash.has(obj):',obj)
        return hash.get(obj)
    }

    let cloneObj = new obj.constructor; //拷贝的结果
    hash.set(obj,cloneObj);
    for(let key in obj){ //实现深拷贝
        if(obj.hasOwnProperty(key)){
            cloneObj[key] = deepClone(obj[key],hash);
        }
    }
    return cloneObj;
}
let obj = {age:{name:18}};
obj.xxx = obj; //这个方法实现还是有问题，没有解决循环引用的问题，要借助WeakMap
console.log(deepClone(obj));


