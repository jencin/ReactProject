import 'antd/dist/antd.less';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Button, message} from 'antd';

import Login from './pages/login/login.jsx';
import Admin from './pages/admin/admin.jsx';

class App extends Component {
    state = {  } 
    handleClick = () => {
        message.success('this is a message of success');
    }
    render() { 
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/admin' element={<Admin></Admin>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
 
export default App;