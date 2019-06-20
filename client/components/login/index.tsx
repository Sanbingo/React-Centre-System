import * as React from 'react';
import { Tabs } from 'antd';
import './index.css';

const { TabPane } = Tabs;

const Login = () => (
    <Tabs tabBarStyle={{ textAlign: 'center' }} className="loginContainer">
        <TabPane tab="登录" key="1">
            123
        </TabPane>
        <TabPane tab="注册" key="2">
            456
        </TabPane>
    </Tabs>
);

export default Login;
