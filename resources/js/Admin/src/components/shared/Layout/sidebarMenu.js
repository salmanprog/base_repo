import React from 'react'
import { Link } from 'react-router-dom';
import * as AntIcons from '@ant-design/icons'
import { useFetch } from "../../../hooks/request";
import { Layout, Menu, Badge } from 'antd';
import HttpRequest from "../../../repositories";
import api from "../../../repositories/api";
import Helper from "../../../helpers";

const iconStyle = {
  fontSize: 17
}

const logout = async () => {
  let { method, url } = api.logout;
  let params = { device_type: "web", device_token: "1234567890" }
  await HttpRequest.makeRequest(method, window.constants.api_base_url + url, params).then(
    async (response) => {
      if (response.code != 200) {
        Helper.sendNotification("error", response.code, response.message);
      } else {
        Helper.removeStorageData();
      }
    }
  );

}

function SidebarMenu() {
  let user = window.helpers.getStorageData('session');
  const adminSideBar = []
  let total_menu = parseInt(user.cms_modules.length) + parseInt(1)
  {
    user.cms_modules.map((module, value) => {
      let Icon = AntIcons[module.icon]
      adminSideBar.push({
        key: module.sort_order,
        icon: <Icon />,
        label: (
          <Link activeClassName="ant-menu-item-selected" to={'/' + module.route_name}>
            {module.name}
          </Link>
        )
      })
    })
  }
  let Lgout = AntIcons['LogoutOutlined'];
  adminSideBar.push({
    key: total_menu,
    icon: <Lgout />,
    label: (
      <Link onClick={logout}>
        Logout
      </Link>
    ),
  })

  return (
    <Menu
      theme="light"
      mode="inline"
      items={adminSideBar}
    />
  )
}

export default SidebarMenu
