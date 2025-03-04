import React, { useState } from 'react'
import { Layout, Dropdown, Space, Avatar } from 'antd';
import { FaHamburger } from 'react-icons/fa'
import BreadCrum from './breadcrum';
import { useSelector } from 'react-redux';

const { Header } = Layout;

function HeaderComp({ setCollapsed, collapsed }) {

    const [open, setOpen] = useState(false);
    const user = useSelector(state => state?.auth?.data);

    const handleMenuClick = (e) => {
        if (e.key === '3') {
            setOpen(false);
        }
    };

    const handleOpenChange = (flag) => {
        setOpen(flag);
    };

    return (
        <>
            <Header theme="light" className='bg-dark' style={{ padding: 0 }}>
                <div className='d-flex justify-content-between'>
                    <div className='mx-3'>
                        <FaHamburger
                            style={{ color: '#fff', fontSize: 25 }}
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    </div>
                    <div className='mx-3 text-white'>
                        <a className='mx-3 mb-2' onClick={(e) => e.preventDefault()}>
                            <Space>
                                {/* <Avatar size={56} src={user?.image_url} /> */}
                                <span className='text-white'>Welcome : {user?.name}</span>
                                {/* <DownOutlined /> */}
                            </Space>
                        </a>
                    </div>
                </div>
            </Header>
            <BreadCrum />
        </>
    )
}

export default HeaderComp