~function(){ //闭包
    /**
     * formatTime: 时间格式化处理
     *    @params
     *      template: [string] 我们最后期望获取日期格式的模板
     *      模板规则：{0}->年  {1~5}->月日时分秒
     *    @return
     *      [string] 格式化后的时间字符串 
     */

    function formatTime(template = "{0}年{1}月{2}日 {3}时{4}分{5}秒"){
        let timeAry = this.match(/\d+/g); 
        return template.replace(/\{(\d+)\}/g, (...[,$1]) => {
            let time = timeAry[$1] || "00"; //$1就是：0,1,2,3,4,5
            return time.length < 2 ? "0"+ time : time;
        })
    }

    /**
     * queryURLParams: 获取URL地址问号后面的参数信息（可能包含HSAH值）
     *    @params
     *    @return
     *        [object] 把所有问号参数信息以键值对的方式存储起来并且返回
     */

    function queryURLParams(){
        let obj = {};
        this.replace(/([^?=&#]+)=([^?=&#]+)/g, (...[,$1,$2]) => obj[$1] = $2); //参数信息
        this.replace(/#([^?=&#]+)/g, (...[,$1]) => obj["HASH"] = $1);
        return obj;
    }

    /**
     * millimeter: 实现大数字的千分符处理
     *      @params
     *      @return
     *          [string]千分符后的字符串
     */
    function millimeter(){
        //以3位数结尾
        // ?=： 正向预查，必须符合条件才会获取
        // 必须以 一到多组 三位数为结尾
        // content: 匹配到的内容
        return this.replace(/\d{1,3}(?=(\d{3})+$)/g, content => content + ',');
    }
    /* 扩展到内置类String.prototype上 */
    ["formatTime","queryURLParams","millimeter"].forEach(item => {
        String.prototype[item] = eval(item);
    })
}();

let num = "152543131"; //152,543,131
num = "5352325478921402512"; // 5,352,325,478,921,402,512

console.log(num.millimeter())

// 字符串方法
// num = num.split('').reverse().join('');
// for(let i = 2; i < num.length - 1; i+=4){
//     let prev = num.substring(0, i + 1),
//         next = num.substring(i + 1);
//     num = prev + "," + next;
// }
// num = num.split('').reverse().join('');
// console.log(num)

