A只会指向B1吗，B2也是子节点呀
这一种数据结构
用child+sibling表示多叉树

先找儿子  没儿子找兄弟?
对的
困
闹
第二次构建的时候，怎么利用缓存构建？
困+1
没儿子  找弟弟  没弟弟找叔叔  没爸爸找爷爷的弟弟
什么是队列
请问react每次更新都是重新从根节点开始遍历fiber的吗？
自己把自己包起来
这部分太绕了。。。
没法暂停消化 我去
脑壳已晕

绕一圈
update3
最新的
这是在讲fiber的父亲，儿子，叔叔那块吗
链表？
大家都听懂了吗
大家都听懂了吗
循化列表
太难了。。。
话说你们  都是已经工作了  还是在上学呀
环环相扣
难+1
我应该是没有懂
工作狗
基础数据结构 链表
反正我没看懂
不懂react
不懂react别看了  浪费时间
念姐带带我
至少得用过hooks把
就是链表
链表都是while循环来实现
只用过hooks
但是不会react
准确说只用过useState和effect2个api没了
其余都不会
我来晚了 老师在讲啥 在讲react diff 切片吗
React大量使用链接的 fiber用链表连着  hooks也用链表连着
能不能停2分钟让我捋捋代码

Fiber
不是今天的重点，可不忽略 它



第三次构建fiber为啥要把第一次的fiber拿过来啊
就二个fiber来自用
A B
滚动数组
双缓存，为了性能
只有在复用时才倒嘛
但是第一次的fiber已经面目全非了呀
是不是同一个组件前后也就产生了两个fiber，只不过后一个fiber节点不断成为alternate呢？
大脑快撑不住了
初入react ,听得很懵逼
cc 快告诉我您是？
这种的 要看过源码 才会好一点
双缓存是为了fiber渲染断开的时候找到从哪里重新执行么
并不是。双缓存有两个作用
1. 节约 垃圾回收 AB
2. 保存一些信息
老师太牛逼了
朱丽洁 你怎么也在啊 今晚不加班了吗
氛围组为你打call
这个类型  这个类型？  这个类型是什么类型也不说？
大脑有点排斥了
跟不上了
老师是怎么进入到源码中去的？
这种函数的写法果然适合单测...
教我们debugger呀
111:教我们debugger呀




老师是怎么进入到源码中去的？
这种函数的写法果然适合单测...
教我们debugger呀
听不懂了
太快了，老师你应该教我们去debugger
       老师今天的案例  是不是es6以及设计模式还有算法 结合的
老师今天的案例 是不是es6以及设计模式还有算法 结合的
气氛
其实就是一个递和归的过程
看图还能理解，看代码懵逼了
renderwithHooks 对于函数组件是重新一遍吗
欢迎大家来参加珠峰架构公开课，我是珠峰客服老师，本次课程是我们正式课一部分，想了解课程可以加我好友，获取课程大纲，和更多视频资料18910092296
为啥是未知fiber，还renderWithHooks呀，hooks不是只有函数组件才有的么，但是i现在不知道是函数组件还是类组件呀
给不给源码的啊，有点吃力了
加入会员啥都有，还有回看


溜溜球
溜溜球，完全看不懂了，讲的太特么快了
该发言可能违规，仅老师可见

在调试时一顿点，根本跟不上
脑子跟不上眼睛
这些实现为啥要拆解的这么细，是有什么考虑吗？一个方法里面就几行代码
为了跟源码对应起来
框架思想
没之前看过一点源码的  是跟不上的
其实今天老师说得还算清楚，不过这已经是我第7，8次复习这个部分了，一开始基本也看不懂。
确实说的很清楚
跟不上了
老师今天讲的react是16还是17？
有hook 就是16.8 之后了呀
我为什么听不懂，还是想听
这里的memoizedState就是当前组件的state吗
老师是怎么看源码的呀，感觉不知道从哪下手
听懂了
第二个派发函数不是闭包吗
当老师建第三个js文件的时候 我已经放弃了
有没有 回放呢？
老师，有个疑问，mount的时候，读取到组件的类型是2，也就是不清楚是class还是function，那为什么直接走了renderWithHooks方法了呢
completeWork的过程呢



老师，有个疑问，mount的时候，读取到组件的类型是2，也就是不清楚是class还是function，那为什么直接走了renderWithHooks方法了呢
completeWork的过程呢
如果声明两个useReducer,那第二个useReducer的dispatch怎么找到自己的memoizedState呢？
勉强跟上点
老师有出过react的书吗？
又是11点吗？老师
如果声明两个useReducer,那第二个useReducer的dispatch怎么找到自己的memoizedState呢？
视频会发出来吗
如何从虚拟dom 构建fiber呀
休息3 分
价格多少啊
老师 那个hook的memoizedState 对应的是组件的state吧
react是不是es6设计模式以及算法结合的                                                                             ，张老师
顶层组件的memoizedState 指向hook
老师，课程内容实在太多了，能否专门出一个react相关的。很喜欢老师讲的react
哇  5000行
这还简单啊
视频会发出来么，在哪里能看
那hook的memoizedState指向的是组件state吧
不错不错很硬核
全都学会了 能拿多少K 25K以上
老师感觉您这个课程感觉吊打其他那些教一堆工具的课。。。
如果声明两个useReducer,那调用第二个useReducer的dispatch怎么找到对应的memoizedState呢？
老师 p6+前端 在公司主要做啥？
百度的30*15 是 T5 还是T6
国企60W???
为啥还有高数 hhh


1
为什么hook 不能写在if 条件判断里面
因为要保证顺序 不然你这次next是这个 下次是那个 那不是乱了
楼上正解
道理我都懂 源码怎么解 。。。
有重播么 这个
也就是说一个单向链表里面套了很多环状链表 我这样理解对吗
你真棒


你真棒
昨天刚和百度说25
然后没见到hr。。。
老师 求录播
老师讲讲 p6+前端在公司主要做啥？
吧
p6+ 一样也是写业务
虚拟dom中的存在chidren，那么字节点的fiber也会根据递归创建的？
多个同样的hook怎么处理/
666
maidang:666

1.  dispatch({type:'add'}); 实现更新
2.  useState
3.  useEffect
4.  useLayoutEffect


老师p6写的 页面也都是很复杂的吧
那什么级别才能真正搞技术，造轮子？
每日一题插件跳出登陆之后怎么跳回到vscode插件，我这一直loading怎么办
写两个userReduce会创建两个不一样的hook吗？
下节课什么时候
老师。问一下，前后创建的两个链表，到时候dom在diff的时候，就是oldhook和newhook两两比较么？
 是的
明天？
index:明天？
useReducer
useState
useEffect
useLayout
useMemo useCallback useRef useContext都白给的
useContext内容也有嘛
每个hook都会被创建程链表节点
一个fiber对应一个hook链表么 那么一个组件里面不是多个fiber 岂不是对应多个链表


每个hook都会被创建程链表节点
fiber 对应一个链表
链表上有很多个hook
一个组件肯定只有一个fiber

COunter

<div><p></p><li></li></div>
一个fiber对应一个hook链表么 那么一个组件里面不是多个fiber 岂不是对应多个链表
可以定义use功能
老师下次棵什么时候 暂定下周二
刚才说的课程什么时候开班呢
记得老师之前讲hooks都是居于数组实现的，这次是居于链表实现
都是链表 一直都是链表

couterFiber 是直接定义的 最开始怎么生成这个对象


这个循环链表只是hooks形成循环链表吧？  
fiber之间的父子关系和 兄弟关系是在哪形成的？


之前是是vd转换成真实dom，现在根据fiber转换成真实dom，区别是什么呢，高效在哪里？
是为了能够中断

jsx=>fiber 不一定会对应dom节点
App .child = Child
Child.child=Grand
Grand.child = div 
function App(){
    return <Child/>
}
function Child(){
    return <Grand/>
}
function Grand(){
    return <div></div>
}
shouldComponentUpdate 
PureComponent

那效率太低了吧
每次都要用usememo，usecallbacjk才能避免走更新
fiber也就是一个js对象吧

不会那么低
dom-diff  会有一些快捷通道  
看属性有没有变，如果没有变，不会进入render
diff 是diff fiber， 还是 diff 虚拟节点呢
diff比较的是老的fiber和新的jsx
