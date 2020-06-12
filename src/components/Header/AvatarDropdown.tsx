import React from 'react';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Spin, Dropdown } from 'antd';
import { ClickParam } from 'antd/es/menu';
import styled from 'styled-components';
import classNames from 'classnames';

import './AvatarDropdown.css';

const Span = styled.span`
  padding: 0px 10px;
`;

class AvatarDropdown extends React.Component {
  onMenuClick = (event: ClickParam) => {
    const { key } = event;
    console.log(key);
  };

  render(): React.ReactNode {
    const menuHeaderDropdown = (
      <Menu selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="center">
          <UserOutlined />
          Account
        </Menu.Item>
        <Menu.Item key="settings">
          <SettingOutlined />
          Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <LogoutOutlined />
          Logout
        </Menu.Item>
      </Menu>
    );

    const className = classNames('banik-user-dropdown-overlay');

    return 'Tanmoy Banik' ? (
      <Dropdown
        overlay={menuHeaderDropdown}
        placement="bottomRight"
        overlayClassName={className}
      >
        <Span>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            U
          </Avatar>
        </Span>
      </Dropdown>
    ) : (
      <Span>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </Span>
    );
  }
}

export default AvatarDropdown;
