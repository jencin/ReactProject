import React, { Component } from 'react';
import {  Button, Form, Input,message } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './login.less';
import logo from './images/logo.png'


class Login extends Component {
    state = {  }
    
    formRef = React.createRef();

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
    
    reset = ()=>{
        this.formRef.current.resetFields();
    }

    handleSubmit = (values) =>{
        
        let {user:username,password} = values;
        
        if((username === null || username === '' || username === undefined) || (password === null || password === '' || password === undefined)){
            message.error('sorry, username or password are not allowed to be empty',1)
        }
        else if(!this.hasDight(username)){
            message.error('username can not have any digit',1);
            return false;
        }
        else {
            if(!this.checkPassword(password)){
                message.warning('waring, your password is too short, it is danger!',1);
            }
            setTimeout(()=>{
                message.success('login successfully',1);
            },1200)
        }
        console.log(values, this.formRef);
    };

    onFinishFailed = (errorinfo) => {
        console.log(errorinfo);
    }

    render() { 
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="" />
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form ref={this.formRef} name="normal_login" className="login-form" onFinish={this.handleSubmit} onFinishFailed={this.onFinishFailed}>
                        <Form.Item name={'user'} rules={[
                            {required: true,message:"请输入用户名"},
                            {min: 4, message: '用户名必须大于 4 位'},
                            {max: 12, message: '用户名必须小于 12 位'}, 
                            {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数组或下划线 组成'}
                            ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                             />
                        </Form.Item>
                        <Form.Item name={'password'} rules={[
                            {required: true,message:"请输入密码"},
                            {min: 4, message: '密码必须大于 4 位'},
                            {max: 12, message: '密码必须小于 12 位'}, 
                            {pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是英文、数组或下划线 组成'}
                            ]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <Button onClick={this.reset} style={{marginTop:'10px'}} type="primary" htmlType="submit" className="login-form-button">
                                重置
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
 
export default Login;