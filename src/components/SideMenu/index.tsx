import React from 'react';
import { Layout, Menu } from 'antd';
import classNames from 'classnames';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import './index.css';

const { Sider } = Layout;

export interface SiderMenuProps {
  siderWidth?: number;
  isFixed?: boolean;
  collapsed: boolean;
}

const SideMenu: React.FC<SiderMenuProps> = (props) => {
  const { siderWidth = 256, collapsed, isFixed = true } = props;
  const siderClassName = classNames('banik-sider-menu-sider', {
    'fix-sider-bar': isFixed,
  });
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={siderWidth}
      className={siderClassName}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
