import React, { Component } from 'react';
import {  Button, Form, Input,message } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './login.less';
import logo from './images/logo.png'

class Login extends Component {
    state = {  }
    
    hasDight = (str)=>{
        for(let x of str){
            if(x >= '0' && x <= '9'){
                return false;
            }
        }
        return true;
    }

    checkPassword = (str) =>{
        let size = str.length;
        if(size <= 6){
            return false;
        }
        return true;
    }
    
    handleSubmit = (values) =>{
        let {user:username,password} = values;
        
        if((username === null || username === '' || username === undefined) || (password === null || password === '' || password === undefined)){
            message.error('sorry, username or password are not allowed to be empty')
        }
        else if(!this.hasDight(username)){
            message.error('username can not have any digit');
        }
        else {
            if(!this.checkPassword(password)){
                message.warning('waring, your password is too short, it is danger!');
            }
            setTimeout(()=>{
                message.success('login successfully');
            },3200)
        }
        
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
                        <Form.Item name={'user'}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item name={'password'}>
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