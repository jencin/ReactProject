import React, { Component } from 'react';
import {  Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './login.less';
import logo from './images/logo.png'

class Login extends Component {
    state = {  } 
    handleSubmit = (values) =>{
        console.log(values);
    };

    render() { 
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="" />
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form name="normal_login"  className="login-form" onFinish={this.handleSubmit}>
                        <Form.Item>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
 
export default Login;