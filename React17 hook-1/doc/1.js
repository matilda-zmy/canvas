//按拉操作 0b开头表示二进制 binary 二进制  0xa 十六进制
const NoFlags = 0b000;//0
const HasEffect = 0b001;//1
const Layout =    0b010;//2   React.useLayoutEffect
const Passive = 0b100;//4  React.useEffect

let layoutTag = HasEffect|Layout;//0b011
if(layoutTag&Layout!==NoFlags){  //0b010
    console.log('useLayoutEffect');
}
let tag = HasEffect|Passive;//0b011
if(tag&Passive!==NoFlags){  //0b010
    console.log('useEffect');
}


