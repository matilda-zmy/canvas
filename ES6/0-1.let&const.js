// ES6之前 定义变量是 var
// ES6之后 要求全部使用 const let

// 1）var定义 导致 变量提升 (污染全局变量)
/* var a = 10;
console.log(window.a); //10

let b = 10;
console.log(window.b); //undefined */

// 2）var 可以被重复声明
/* var a = 1;
var a = 2;
var a = 3; */
// 这样最后的 a 是3，如果是 let，就会报重复定义的错误

// 3） var的作用域问题（常见作用域：全局作用域、函数作用域）
/* {
    var a = 1;
}
console.log(a);  //1
// var没有作用域的限制

let a = 10;
{
    // 暂时性死区
    console.log(a); //报错：a没有定义，因为let没有变量提升
    let a = 200;
} */


// const 常量 不会变的量(地址的指向)
/* const a = 30;
a = 40; //就会出错

const b = {r:13};
b.r = 89; //就不会出错
console.log(b);
 */