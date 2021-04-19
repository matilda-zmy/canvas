// es7 语法 node并不支持 webpack + babel
// es7及更高语法 都转化成es5

class Animal{
    static flag = '哺乳类';
    constructor(){
        this.name = 'xxx'
    }
    say(){
        console.log('说话')
    }
}

// vue-cli    @vue/cli(新写法)
// babel-cli => @babel/cli  默认包 模块 都不安装到全局上
// 安装本地模块 保证版本一致
// npm init  (npm init -y :  -y 就是一键生成)  
// npm install @babel/cli --dev  只在开发的时候使用
// npx  是node 5.2版本以上提供的，帮我们执行.bin目录下的文件

// npm install @babel/core --dev  babel的核心包，主要是转化代码，但是不知道怎么转

// babel-preset-stage-0  未定案的语法(不知道以后还会不会用) 装饰器  static xxx == ccc; ...
// npm install @babel/preset-env  (转化已经定案的标准)

// babel的配置中，一般配置两个：配置插件、预设(插件的集合)

// npm i @babel/plugin-proposal-class-properties --save-dev 主要作用是用来转化类的属性的

// @babel/cli -> @babel/core -> 转化代码(会读取 .babelrc的配置去转化)