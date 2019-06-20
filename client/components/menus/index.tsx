import * as React from 'react';
import { Menu } from 'antd';
import './index.css';

interface MenuStates {
    current: number;
}

export default class Menus extends React.Component<{}, MenuStates> {
    handleClick(e: any) {
        console.log('click', e);
    }
    render() {
        return (
            <Menu onClick={this.handleClick} mode="horizontal" className="menuContainer">
                <Menu.Item key="one">React.js</Menu.Item>
                <Menu.Item key="two">Javascript</Menu.Item>
                <Menu.Item key="three">Node.js</Menu.Item>
            </Menu>
        );
    }
}
