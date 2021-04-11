let virtualDOM = (
    <div key="A">
        <div key="B1">B1</div>
        <div key="B2">B2</div>
    </div>
)
// 虚拟DOM
//React源码里，为了方便表示，也为了方便render的时候能暂停和恢复 
//把每个虚拟DOM变成一个Fiber节点