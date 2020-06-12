import React from 'react';
import { Layout, Menu } from 'antd';
import classNames from 'classnames';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

import './index.css';

const LogoDiv = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0 24px;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  height: 64px;
`;

const Img = styled.img`
  display: inline-block;
  height: 32px;
  vertical-align: middle;
`;

const H1 = styled.h1`
  display: inline-block;
  margin: 0 0 0 12px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  vertical-align: middle;
  animation: fade-in;
  animation-duration: 0.3s;
`;

const { Sider } = Layout;

export interface SiderMenuProps {
  siderWidth?: number;
  isFixed?: boolean;
  collapsed: boolean;
  logo?: string;
  title?: string;
}

export const LogoAndTitleRender = (props: SiderMenuProps): React.ReactNode => {
  const {
    logo = 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg',
    title = 'Tanmoy Banik',
  } = props;
  const titleDom = <H1>{title}</H1>;
  return (
    <Anchor href="/">
      <Img src={logo} alt="logo" />
      {props.collapsed ? null : titleDom}
    </Anchor>
  );
};

const SideMenu: React.FC<SiderMenuProps> = (props) => {
  const { siderWidth = 256, collapsed, isFixed = true } = props;
  const siderClassName = classNames('banik-sider-menu-sider', {
    'fix-sider-bar': isFixed,
  });

  const headerDom = LogoAndTitleRender(props);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={siderWidth}
      className={siderClassName}
    >
      {headerDom && (
        <LogoDiv
          // onClick={onMenuHeaderClick}
          id="logo"
        >
          {headerDom}
        </LogoDiv>
      )}
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
