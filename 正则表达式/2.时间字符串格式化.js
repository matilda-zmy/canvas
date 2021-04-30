// ~function(){ //闭包
//     /**
//      * formatTime: 时间格式化处理
//      */
//     function formatTime(){
//         // 1.首先获取时间字符串中的年月日等信息
//         let timeAry = this.match(/\d+/g); //["2021", "4", "26", "11", "26", "12"]
//         let template = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
//         template = template.replace(/\{(\d+)\}/g, (content,$1) => {
//             //content：本次大正则匹配的信息， $1：本次小分组单独匹配的信息
//             //以$1的值为索引，到 timeAry 中找到对应的时间（如果没找到则用“00”补）
//             let time = timeAry[$1] || "00"; //$1就是：0,1,2,3,4,5
//             time.length < 2 ? time = "0"+time : null;
//             return time;
//         })
//         return template;
//     }
//     /* 扩展到内置类String.prototype上 */
//     ["formatTime"].forEach(item => {
//         String.prototype[item] = eval(item);
//     })
// }()

// let time = "2021-4-26 11:26:12";
// console.log(time.formatTime());
// 服务器获取的：
//  "2021-4-26 11:26:12"
//  "2021/4/26 11:26:12"
// 想要转变为：
// "04月26日 11时26分"
// "2021年04月26日"


// 简化代码：
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
    /* 扩展到内置类String.prototype上 */
    ["formatTime"].forEach(item => {
        String.prototype[item] = eval(item);
    })
}()

let time = "2021-4-26 11:26:12";
console.log(time.formatTime());
console.log(time.formatTime("{0}年{1}月{2}日"));
console.log(time.formatTime("{1}--{2} {3}:{4}"));
time = "2021-4-26";
console.log(time.formatTime());
console.log(time.formatTime("{0}年{1}月{2}日 "));
console.log(time.formatTime("{1}--{2} {3}:{4}"));