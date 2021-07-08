import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import Father from "./父子组件通信/Father";
import {Provider} from "./跨组件通信/Context";
import Son from "./跨组件通信/Son";

ReactDOM.render(
    /*<Counter/>*/
    /*<App/>*/
    /*<Father/>*/
    /*<DatePicker/>*/
    // <Father/>
    // <Provider value={'你好，这是来自index.tsx的信息'}>
    //
    // </Provider>
    <Son msg={'index.tsx给的信息'}/>
    ,
    document.getElementById('root')
);
