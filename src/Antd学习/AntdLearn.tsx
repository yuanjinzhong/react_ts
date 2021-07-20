import {Button, ConfigProvider, DatePicker, message, version} from 'antd';
import React, {useState} from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

const AntdLearn: React.FC<{ msg: string }> = (x: { msg: string }) => {
    return (
        <div className="APP">
            <h1>antd version:{version} </h1>
            <DatePicker/>
            <Button type={"primary"} style={{marginLeft: 8}}>Primary Button:{x.msg}</Button>
        </div>
    );
};


const ShowDate = () => {
    const [date, setDate] = useState(null);
    const handleChange = (value) => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };
    return (
        <ConfigProvider locale={zhCN}>
            <div style={{width: 400, margin: '100px auto'}}>
                <DatePicker onChange={handleChange}/>
                <div style={{marginTop: 16}}>
                    当前日期：{date != null ? date.format('YYYY年MM月DD日') : '未选择'}
                </div>
            </div>
        </ConfigProvider>
    );
};

export {AntdLearn, ShowDate};
