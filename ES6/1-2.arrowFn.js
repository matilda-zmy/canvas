// 箭头函数  没有this 没有arguments

/* let a = function(x,y){
    return {total:x+y};
}

let b = (x,y) => ({total:x+y}); //返回对象的写法 */

/* let a = function(x){
    return function(y){
        return x + y;
    }
}

let b = (x) => y => x + y; //闭包 */


 /* 作用域：
      1.全局作用域 var ;
      2.函数作用域 function ;
      3.局部作用域 { let } 组合使用 ;
  */
// this的问题，看. 前面的是谁 this就是谁
let a = 1; //window.a = undefined
let obj = { //是对象，不是作用域
    a:2,
    /* fn(){ //this = obj
        setTimeout(function(){
            // 定时器前面是window，所以this指向window，但是window里面是没有a的
            console.log(this.a); //undefined
        })
    } */
    // 因为是箭头函数没有this，只能找上级作用域，一层层找，因为obj没有作用域，所以 fn的上级window，
    fn:()=>{ //this = obj
        setTimeout(() => {
            console.log(this.a); //undefined
        })
    }
}
obj.fn();