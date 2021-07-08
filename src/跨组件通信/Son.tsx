import React from 'react';
import GrandSon from "./GrandSon";

const Son: React.FC<{ msg: string }> = (x: { msg: string }) => {
    //const {msg} = x;
    return (<>
        <div>我是儿子:index.tsx给我的信息{x.msg}</div>
        <GrandSon msg={"儿子给孙子的信息"}/>
    </>)
};
export default Son;