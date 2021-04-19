// 数组方法
// ES5  forEach reduce map filter some every
// ES6 find findIndex
// ES7 includes

// reduce 收敛

// 求和

/* [1,2,3,4,5].reduce((a,b) => {
    return a+b;
})  //a:1, b:2

[1,2,3,4,5].reduce((a,b) => {
    return a+b;
}) //a:1+2=3, b:3

[1,2,3,4,5].reduce((a,b) => {
    return a+b;
}) //a:3+3=6, b:4
// ....
 */

/* let r = [{price:100,count:1},{price:200,count:2},{price:300,count:3}].reduce((a,b) => {
    return a + b.price * b.count;
},0) // 这里 a:0, b:{price:100,count:1}
console.log(r) */


// reduce 常见功能：多个数据，最终变成一个数据
/* let keys = ['name','age'];
let values = ['fern',18];
// let obj = keys.reduce((a,b,index,current) => { //累计器 当前值 当前索引 源数组
//     // console.log(a,b,index,current)
//     a[b] = values[index];
//     return a;
// },{})
// 简写成 
let obj = keys.reduce((a,b,index,current) => (a[b] = values[index], a),{});
console.log(obj)
 */


// reduce redux compose方法（组合多个函数

function sum(a,b){
    return a+b;
}
function toUpper(str){
    return str.toUpperCase();
}
function add(str){
    return '***'+str+'***';
}
// console.log(add(toUpper(sum('name','fern'))));

// function compose(...fns){ //fns:add,toUpper,sum
//     return function(...args){ //args:'name','fern'
//         let lastFn = fns.pop();
//         return fns.reduceRight((a,b) => b(a),lastFn(...args));
//     }
// }

// 另一个方法
function compose(...fns){
    return fns.reduce((a,b) => { //此时返回的函数，是通过reduce方法返回的
        return (...args) => {
            return a(b(...args))
        }
    }) //a:add函数， b:toUpper函数
       //a:return (...args)函数， b:sum函数
}
// let compose = (...fns) => fns.reduce((a,b) => (...args) => a(b(...args)); //简化后
let r = compose(add,toUpper,sum)('name','fern');
console.log(r);



// 实现reduce方法
Array.prototype.reduce = function(callback,prev){
    // this:[1,2,3]
    for(let i = 0; i < this.length; i++){
        if(prev == undefined){
            prev = callback(this[i],this[i+1],i+1,this);
            i++;
        }else{
            prev = callback(prev,this[i],i,this);
        }
    }
    return prev;
}

let s = [1,2,3].reduce((a,b,index,current) => {
    return a+b;
},100)
console.log(s)