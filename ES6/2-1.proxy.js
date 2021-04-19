// Object.defineProperty 不支持数组的更新
// 之前是重写数组里面的方法，现在用代理
// 希望数组变化就能更新视图

function update(){
    console.log('更新视图');
}

let arr = [1,2,3];
let proxy = new Proxy(arr,{
    set(target,key,value){ //源目标 键名 键值
        // 不要手动操作原数组，因为数组变化时( push或pop方法 )，这个时候得到的key会出现问题
        if(key === 'length') return true; //这里是忽略长度变化引起的更新（数组变化使得长度和值都变化，就会更新2次视图）
        update();
        return Reflect.set(target,key,value)
    },
    get(target,key){
        return Reflect.get(target,key)
    }
});
// proxy[0] = 100;
proxy.push(10);
// proxy.pop(); //这样写，这个方法就变化更新视图了啊！
console.log(proxy)