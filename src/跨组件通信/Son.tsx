import React from 'react';
import GrandSon from "./GrandSon";

const Son: React.FC<{ msg: string }> = (x: { msg: string }) => {
    //const {msg} = x;
    return (<>
        <div>我是儿子,根节点的信息{x.msg}</div>
        <GrandSon msg={x.msg}/>
    </>)
};
export default Son;