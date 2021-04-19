// set  map  是两种存储结构
// set 集合 不能放重复的东西

/* let s = new Set([1,2,3,4,1,2,3]);
console.log(typeof s); //object  s:Set { 1, 2, 3, 4 }
s.add('1'); //[ 1, 2, 3, 4, '1' ]
s.delete('1'); //添加和删除 并且没顺序

let arr = [...s];
console.log(arr); //[ 1, 2, 3, 4 ] */

/* let s01 = new Set([1,2,3,1,2,7]);
let s02 = new Set([3,4,5,1,2]);
// 并集、交集、差集
function union(){
    let s1 = new Set(s01);
    let s2 = new Set(s02);
    return [...new Set([...s1,...s2])];
}
console.log(union());

function intersection(s1,s2){
    // 返回true表示
    return [...new Set(s1)].filter(item =>new Set(s2).has(item))
}
console.log(intersection(s01,s02));

function diff(s1,s2){
    // 返回true表示
    return [...new Set(s1)].filter(item => !new Set(s2).has(item))
}
console.log(diff(s01,s02)) */



// map 是有key的，不能放重复的

/* let m = new Map();
m.set('name','fern');
m.set('name','123');
let obj = {name:1}; 
m.set(obj,'456'); //这个obj的引用空间被set所引用
obj = null; //把obj清空 这个空间还是在的
console.log(m); */

let m = new WeakMap();  //WeakMap的key必须是引用对象
let obj = {name:1}; 
m.set(obj,'456'); //这个obj的引用空间被set所引用
obj = null; //把obj清空 这个空间还是在的
console.log(m);



