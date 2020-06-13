import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { SiderMenuProps } from './index';

const { Sider } = Layout;

const StyledSider = styled(({ isFixed, ...props }) => <Sider {...props} />)`
  position: relative;
  z-index: 10;
  min-height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

  ${({ isFixed }) =>
    isFixed &&
    `position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    overflow: auto;
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);`}
`;

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

export const LogoAndTitleRender = (
  collapsed: boolean,
  logo: string,
  title: string
): React.ReactNode => {
  const titleDom = <H1>{title}</H1>;
  return (
    <Anchor href="/">
      <Img src={logo} alt="logo" />
      {collapsed ? null : titleDom}
    </Anchor>
  );
};

const SiderMenu: React.FC<SiderMenuProps> = ({
  collapsed,
  siderWidth,
  isFixed,
  isMobile,
}) => {
  const logo =
    'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg';
  const title = 'Tanmoy Banik';
  const headerDom = LogoAndTitleRender(
    isMobile ? false : collapsed,
    logo,
    title
  );

  const renderSiderContent = (
    <>
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
    </>
  );
  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={isMobile ? false : collapsed}
      width={siderWidth}
      isFixed={isMobile ? false : isFixed}
    >
      {renderSiderContent}
    </StyledSider>
  );
};

export default SiderMenu;
