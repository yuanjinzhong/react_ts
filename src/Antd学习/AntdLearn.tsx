import {Button, DatePicker, version} from 'antd';
import React from 'react';

const AntdLearn: React.FC<{ msg: string }> = (x: { msg: string }) => {
    return (
        <div className="APP">
            <h1>antd version:{version} </h1>
            <DatePicker/>
            <Button type={"primary"} style={{marginLeft: 8}}>Primary Button:{x.msg}</Button>
        </div>
    );
};

export default AntdLearn;