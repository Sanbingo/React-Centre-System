import * as React from 'react';
import { Button } from 'antd';
import Banner from './banner';
import Menus from './menus';
import Lists from './lists';
import Login from './login';

import './style.css';
import './index.css';

const Home = () => (
    <div>
        <div>
            <Banner />
        </div>
        <div>
            <Menus />
        </div>
        <div className="container">
            <div className="contentContainer">
                <div className="content">
                    <Lists />
                </div>
                <div className="loginContainer">
                    <Login />
                </div>
            </div>
        </div>
        {/* footer [todo] */}
    </div>
);

export default Home;
