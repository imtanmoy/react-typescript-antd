import React from 'react';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Spin, Dropdown } from 'antd';
import { ClickParam } from 'antd/es/menu';
import styled from 'styled-components';

const StyledSpan = styled.span`
  padding: 0px 10px;
`;

const overlayStyle = { paddingTop: '10px', paddingRight: '10px' };

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
    return 'Tanmoy Banik' ? (
      <Dropdown
        overlay={menuHeaderDropdown}
        placement="bottomRight"
        overlayStyle={overlayStyle}
      >
        <StyledSpan>
          <Avatar
            // size="small"
            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          >
            U
          </Avatar>
        </StyledSpan>
      </Dropdown>
    ) : (
      <StyledSpan>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </StyledSpan>
    );
  }
}

export default AvatarDropdown;
