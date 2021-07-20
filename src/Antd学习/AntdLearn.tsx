import {
    Alert,
    Breadcrumb,
    Button,
    ConfigProvider,
    DatePicker,
    Divider,
    Layout,
    Menu,
    message,
    Steps,
    version
} from 'antd';
import React, {useState} from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import "./AntdLearn.css"

const { Step } = Steps;

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
    const [date, setDate] = useState(moment(new Date()));
    const [collapsed, setCollapsed] = useState(true);
    const handleChange = (value) => {
        console.log(value);
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };
    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e, 'I was closed.');
    };

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <ConfigProvider locale={zhCN}>
            {/*DatePicker 日期选择*/}
            <div style={{width: 400, margin: '100px auto'}}>
                <DatePicker onChange={handleChange}/>
                <div style={{marginTop: 16}}>
                    <Alert message={" 当前日期"}
                           description={date ? date.format('YYYY年MM月DD日') : '未选择'}
                           type={"success"}
                           closable={true}
                           onClose={onClose}/>
                </div>
            </div>

            {/*Divider分割线*/}
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider dashed/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
            </div>

            {/*layout布局*/}
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>

            {/*Breadcrumb面包屑*/}
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>

            {/*Steps步骤条*/}
            <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>

        </ConfigProvider>
    );
};

export {AntdLearn, ShowDate};
