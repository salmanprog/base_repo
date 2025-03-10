import React from 'react'
import { Layout, Menu, Badge } from 'antd';
import SidebarMenu from './sidebarMenu';

const { Sider } = Layout;



function Sidebar({ collapsed }) {
    let user = window.helpers.getStorageData('session');
    return (
        <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
            <div className='user-info d-flex flex-column justify-content-center align-items-center border-bottom my-3'>
                <img src={user.image_url} alt='' className="logo img-fluid my-3 rounded-circle" />
            </div>
            <div>
                <SidebarMenu />
                
            </div>
        </Sider>
    )
}

export default Sidebar