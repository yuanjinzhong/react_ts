/**
 * 高价组建学习（high order component）
 *
 * 高阶组建定义: 一个函数，入参是一个组建,返回也是一个组建。则该函数称为高价组建
 */
import * as React from "react";

/**
 * 此处定义高阶段组建
 * @param Component
 */
const withSize = (Component) => {
    return class withSize extends Component {
        render() {
            return <Component/>
        }
    }
}

class Sub extends React.Component<any, any> {
    render() {
        return <p>我是Sub组建</p>;
    }
}

class Pub extends React.Component<any, any> {
    render() {
        return <button>我是Pub组建</button>;
    }
}

export {Sub, Pub};