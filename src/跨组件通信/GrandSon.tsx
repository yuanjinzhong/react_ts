import React from 'react';

const GrandSon: React.FC<{ msg: string }> = (x:{msg: string}) => { //{msg: string} 如此定义类型，省的定义接口
    return (<>
        <div>我是孙子,根节点的信息:{x.msg}</div>
    </>)
};
export default GrandSon;