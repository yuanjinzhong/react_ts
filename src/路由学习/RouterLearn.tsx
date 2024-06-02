import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Home: React.FC<{ msg: string }> = (x: { msg: string }) => {
    return (<><h1>我是Home组件</h1></>)
};

const About: React.FC<{ msg: string }> = (x: { msg: string }) => {
    return (<>
        <h1>我是About组件</h1>
    </>)
};


const Main: React.FC<{ msg: string }> = (x: { msg: string }) => {
    console.log(x.msg);
    return (
        <Router>
            <>
                <div>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                    </ul>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </>
        </Router>
    )
};

export default Main;

