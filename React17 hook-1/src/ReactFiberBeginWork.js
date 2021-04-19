
import {FunctionComponent, HostComponent, IndeterminateComponent} from './ReactWorkTags';
import {renderWithHooks} from './ReactFiberHooks';
/**
 * @param {*} current 上一个fiber 初次挂载 的时候null
 * @param {*} workInProgress 这一次正在构建中的fiber
 */
export function beginWork(current,workInProgress){
  switch(workInProgress.tag){
    case IndeterminateComponent://函数组件
        return mountIndeterminateComponent(
            current,
            workInProgress,
            workInProgress.type //Counter组件
        )
     default:
         break;   
  }
}

function mountIndeterminateComponent(current,workInProgress,Component){
    //value就是Counter组件函数的返回值
    let children = renderWithHooks(
        current,
        workInProgress,
        Component
     );
    console.log('children',children);
    window.counter = children;
    workInProgress.tag = FunctionComponent;
    //根据儿子的或者说上面返回的虚拟DOm，构建Fiber子树
    reconcileChildren(current,workInProgress,children);
    return null;
}
/**
 * 就是根据组件返回的虚拟DOM构建建子Fiber链条的过程
 * Counter这个Fiber也是在reconcileChildren里创建的
 * @param {*} current 
 * @param {*} workInProgress 
 * @param {*} children 
 */
function reconcileChildren(current,returnFiber,children){
  //老的fiber和新的jsx 进行对比
  let oldChild = current.child;
  let prevFiber;
  for(let i=0;i<children.length;i++){
    let fiber = {//每个虚拟dOM构建成一个fiber
      tag:children[i].tag,
      type:children[i].type
    }
    if(i===0){
      returnFiber.child = fiber;//第一个fiber，大儿子
    }else{
      prevFiber.sibling = fiber;//大儿子.sibling指向二儿子.sibling 三儿子
    }
    prevFiber = fiber;
  }
}