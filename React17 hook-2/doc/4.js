
//初次渲染的时候
let hook1 = {memoizedState:'1',next:null};
let hook2 = {memoizedState:'2',next:null};
hook1.next = hook2;
let hook3 = {memoizedState:'3',next:null};
hook2.next = hook3;
let oldHooks = hook1;
//老链表



let newHook1 = {memoizedState:hook1.memoizedState,next:null};
let newHook2 = {memoizedState:hook2.memoizedState,next:null};
newHook1.next = newHook2;
let newHook3 = {memoizedState:hook3.memoizedState,next:null};
newHook2.next = newHook3;
let newHooks = newHook1;