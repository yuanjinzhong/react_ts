import React from 'react';

const GrandSon: React.FC<{ msg: string }> = (x:{msg: string}) => {
    return (<>
        <div>我是孙子,根节点的信息:{x.msg}</div>
    </>)
};
export default GrandSon;