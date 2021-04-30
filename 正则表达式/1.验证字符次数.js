/* let str ="The wealth of the mind is the only true wealth";

//去重思维
let obj = {};
str = str.replace(/\s/g, "");
[].forEach.call(str,char => {
    console.log(char)
	if(typeof obj[char] !== "undefined"){ // 或obj.hasOwnProperty(char) 或char in obj
    obj[char]++;
    return; //函数中遇到return就不会往下面执行了
  }
  obj[char] = 1;
});
let max = 1,
    res = [];
for(let key in obj){
    let item = obj[key];
    item > max ? max = item : null;
}
for(let key in obj){
    let item = obj[key];
    if(item === max){
        res.push(key)
    }
}
console.log(`出现次数最多的字符：${res}，出现了${max}次`); */


/* let str = "advice when most needed is least heeded";
str = str.replace(/\s/g, "");
str = str.split('').sort((a,b) => a.localeCompare(b)).join('');
// console.log(str); //aacdddddeeeeeeeeehhiilmnnosssttvw
let reg = /([a-zA-Z])\1+/g;
let ary = str.match(reg);
// console.log(ary); //["aa", "ddddd", "eeeeeeeee", "hh", "ii", "nn", "sss", "tt"]
ary.sort((a,b) => b.length - a.length);
// console.log(ary); //["eeeeeeeee", "ddddd", "sss", "aa", "hh", "ii", "nn", "tt"]
let max = ary[0].length;
let res = [ary[0].substr(0,1)];
for(let i = 1; i < ary.length; i++){
    let item = ary[i];
    if(item.length < max){
        break;
    }
    res.push(item.substr(0,1));
}
console.log(`出现次数最多的字符：${res}，出现了${max}次`); */

/* let str = "advice when most needed is least heeded";
str = str.replace(/\s/g, "");
let result = [],
    max = 0,
    letter,
    reg;
while(str !== ""){
    oldLength = str.length;
    letter = str.substr(0,1);
    reg = new RegExp(letter,"g");
    str = str.replace(reg,'');
    newLength = str.length;
    letterCount = oldLength-newLength;
    if(letterCount >= max){
        max = letterCount;
        result.push(`字母${letter}: ${max}次`);
    }
}
console.log(`出现次数最多的字符：${result}`); */

let str = "advice when most needed is least heeded";
    max = 0,
    res = [],
    flag = false;
str = str.replace(/\s/g, "");
str = str.split('').sort((a,b) => a.localeCompare(b)).join('');
for(let i = str.length; i>0; i--){
    let reg = new RegExp("([a-zA-Z])\\1{" + (i-1) + "}","g");
    str.replace(reg,(content,$1) => {
        max = i;
        res.push($1);
        flag = true;
    });
    if(flag) break; // 如果把break改成return，就会出错。原因是：js的手册中说明了，在js中return 语句只能放在function中，如果不是在一个function中弹出如上错误。
}
console.log(`出现次数最多的字符：${res}，出现了${max}次`); 