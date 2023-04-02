import React from 'react';

import {Layout, Menu, theme } from 'antd';

const { Header: HeaderAnt} = Layout;

import { menuItems } from '../../constants';

const Header: React.FC = () => {

    const {
        token: { colorBgContainer,  },
    } = theme.useToken();
    
    return (
        <HeaderAnt className="header" style={{width: "100%", backgroundColor: colorBgContainer}}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={menuItems} style={{width: "100%"}} />
        </HeaderAnt>
    );
}
export { Header }