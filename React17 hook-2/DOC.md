

window.counter = children这样的话如果组件多了那不是window上的属性也添加了很多了
https://img.zhufengpeixun.com/0de1b5f3093e22ee8d72c1cc9d201198
另外要是在不同的组件里面创建了同名的函数组件会怎么处理呢
queue是啥意思 老师 是多次调用就有多个值吗
环型链表
嗷嗷明白了
能瞅一眼这个queue是怎么创建的吗
queue为什么是一个括号？
如果函数组件中用了多个useReducer，那每个useRedcer的hook对象中的环状链表有关联吗
没有关联的 每次都bind 产生一个新的
alternate
alternate是什么 有什么用
对比 
更新的时候，比较新的和老的有什么差别，找差异
老的Fiber就是alternate
源码里面的调度和优先级都感觉好复杂
本次不
后面会单独讲
没懂 图上mountReducer 与 ReducerHook的关系




如果函数组件中用了多个useReducer，那每个useRedcer的hook对象中的环状链表有关联吗
fiber节点. state= hook单向链表

没有关联的 每次都bind 产生一个新的
alternate
alternate是什么 有什么用
源码里面的调度和优先级都感觉好复杂
没懂 图上mountReducer 与 ReducerHook的关系
哈哈哈哈 笑死我了
他是问queue怎么创建的 环形链表懂
每个节点都有alternate吗
创建hook的时候，会创建一个queue
老师这是在写diff吗
currentlyRendferFIber哪来的？
更新时候新建的链表是为了能够停止吗
1为什么要根据老hook生成新的hook列表呢
为什么currentHook为null就说明是第一个hook呢
看着只是拷贝了一下
因为hook链表没有值
就是根据老的拷贝一次 然后计算更新 重新复制 memoizedState
 为什么queue是环形的？
因为为了方便取到最后一个update
感觉单链表的queue 也可以满足 为什么需要环形？？？
这是有原因的 其实源码里还有baseQueue baseState 更新是有优先级的
环形链表的next应该不可能为null吧
queue 可能是空的呀
休息下？
写两个dispatch走一下
源码里面好像是queue.update
脑瓜子嗡嗡的不
不合并dispatch吗？一次dispatch就立刻更新吗？
为啥要搞两个hook，感觉老hook存在就是为了基于它创建新hook，，为啥不直接在老hook执行更新那些操作
休息5分
memorizedState的作用是啥？
current 和 workinprogress里面都是都是next的指针引用的，会造成新老fiber共享同一个对象的情况吧
next null
前端深似海
不是直接改老状态对象，更是生成新的状态对象
如果state是一个对象呢，新的alternate指向老的memorizedState，就单纯的就是一个指针的引用，新的state变了，老的应该直接就变了呀
前端学不完了




那还是没有明白 为什么不能写在if 判断语句里面
开搞
80行queue为什么是括号？？？
执行优先级
hook队列 都是从 useReducer 开始吗
dispatchaction 能再讲一下吗
懂了老师 每个hook都有queue
还是有点懵  queue的作用是什么 计算新状态
收集hook的执行事件吗
update对象可是一个值，也可能是一个函数

合并更新？
hooks的执行顺序是严格按照reducer->state->effect->layoutEffect的顺序执行的嘛？
reducer->新状态->layoutEffect->effect
蒙了
1
卡了吗...
再看下mount  useReducer 和 hooks链的关系



为什么函数组件传2次 不更新 不知道说下？
加一场吧
老师
张老师今天讲不完还要在加一场吗
Effect加一场不。
附议
新老hooks链表怎么对应上的？
setNumber(1);setNumber(1);是两次合并后再更新还是一个一个更新的？
https://img.zhufengpeixun.com/0de1b5f3093e22ee8d72c1cc9d201198





新老hooks链表怎么对应上的？
????
Rect17之前
React17之后不一样

setNumber(1);
setNumber(1);
会合并成一次更新
是两次合并后再更新还是一个一个更新的？
同步模式和异步模式原理
同步模下 BatchContext
异步  合并优先级
https://img.zhufengpeixun.com/0de1b5f3093e22ee8d72c1cc9d201198
useEffect加一场吧，+1

多次调用 setNumber 怎么合并的呀
A = B= C老师在讲一下 详细赋值过程有点没听懂 谢谢