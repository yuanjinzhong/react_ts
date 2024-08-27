import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import Father from "./父子组件通信/Father";
import {Provider} from "./跨组件通信/Context";
import Son from "./跨组件通信/Son";
import Main from "./路由学习/RouterLearn";
import {AntdLearn, ShowDate} from "./Antd学习/AntdLearn";
import ProductList from "./components/ProductList";
import AntdMain from "./components/AntdMain";
import FetchData from "./ajax/FetchData";
import ReactFragment from "./测试React.Fragment/ReactFragment";

ReactDOM.render(
    /*<Counter/>*/
    /*<App/>*/
    /*<Father/>*/
    /*<DatePicker/>*/
    <Father/>
    // <Provider value={'你好，这是来自index.tsx的信息'}>
    //
    // </Provider>
    // <Son msg={'【跨组件通信，通过props一层层传递】'}/>
    // <Main msg={"我是msg(虽然里面不使用)"}/>
    // <ShowDate/>
    // <ProductList onDelete={(id:string)=>alert("删除行的id:"+id)} products={[{name:'商品名字1'},{name:'商品名字2'}]}/>
    //  <AntdMain/>
    // <FetchData/>
    // <ReactFragment msg={'我是msg'}/>
    ,
    document.getElementById('root')
);
