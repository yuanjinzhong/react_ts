/**
 * 高价组建学习（high order component）
 *
 * 高阶组建定义: 一个函数，入参是一个组建,返回也是一个组建。则该函数称为高价组建
 */
import React from "react";

/**
 * 此处定义高阶段组件,表示组件的入参必须是 大写
 * @param Component
 */
const withLog = (Component: React.ComponentClass) => {//  泛型是否必须，依赖tsconfig中的配置
    return class writeLog extends React.Component {
        componentDidMount(): void {
            console.log("组件名字", Component.name)
        }
        render() {
            // todo Hoc 组件与普通组件通信
            return <Component/>
        }
    }
};


class Sub extends React.Component {
    render() {
        return <p>我是Sub组建</p>;
    }
}

class Pub extends React.Component {
    render() {
        return <button>我是Pub组建</button>;
    }
}

//高阶组件
const WithLogSub = withLog(Sub);

//高阶组件
const WithLogPUb = withLog(Pub);


export {WithLogSub, WithLogPUb};