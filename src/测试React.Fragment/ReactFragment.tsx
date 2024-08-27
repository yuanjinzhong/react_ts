// @flow
import * as React from 'react';

type Props = {
    msg: string
};
const ReactFragment: React.FC<Props> = (props:Props) => {
    /*
     和上面的写法一样
     const ReactFragment: React.FC<{msg:string}> = (props: {msg:string}) => {
     const ReactFragment: React.FC<Props> = ({msg}) => {// 这是解构的写法
     甚至可以这样
     const ReactFragment: React.FC<Props> = (props) => {
    */
    return (
        // <React.Fragment>  等价于下面的<div>标签
        <div>
            <div>1:{props.msg}</div>
            <div>2:{props.msg}</div>
            <div>3:{props.msg}</div>
            <div>4:{props.msg}</div>
        </div>
        //</React.Fragment>
    );
};
export default ReactFragment;

// 测试React.Fragment功能