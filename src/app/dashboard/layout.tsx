
'use client'

import { getItem } from "@/helpers/getItem";

import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import {Header} from "./components/Header";
import { menuItems } from "./constants";

const { Content, Footer, Sider } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
    };
  
    const {
      token: { colorBgContainer,  },
    } = theme.useToken();
  
  return (
    // <html lang="en">
    //   <Menu
    //     style={{ width: 256, height: "100vh" }}
    //     defaultSelectedKeys={['1']}
    //     defaultOpenKeys={['sub1']}
    //     mode="inline"
    //     items={items}
    //     onClick={onClick}
        
    //     />
    //   <body>{children}</body>
    // </html>
    <Layout style={{height: "100vh"}}>
    <Content style={{ padding: '20px 50px' }}>
      <Header />
      <Layout style={{ padding: '24px 0', background: colorBgContainer, margin: '16px 0' }}>
        <Sider style={{ background: colorBgContainer }} width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            items={menuItems}
          />
        </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Portal Brindel</Footer>
  </Layout>
  )
}
 