import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderRight from './HeaderRight';
import { HeaderProps } from './index';
import { LogoAndTitleRender } from '../SideMenu/SiderMenu';

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  width: 100%;
`;

const TriggerSpan = styled.span`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
`;

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  height: 64px;
  padding: 0 0 0 24px;
  font-size: 20px;
  line-height: 64px;
  vertical-align: top;
  cursor: pointer;

  img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }
`;

const HeaderContent: React.FC<HeaderProps> = ({
  collapsed,
  toggle,
  isMobile,
}) => {
  const logo =
    'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg';
  const title = 'Tanmoy Banik';
  const headerDom = LogoAndTitleRender(!collapsed, logo, title);
  const logoDom = <Span key="logo">{headerDom}</Span>;
  return (
    <Div>
      {isMobile && logoDom}
      <TriggerSpan onClick={() => toggle()}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </TriggerSpan>
      <div style={{ flex: 1 }} />
      <HeaderRight />
    </Div>
  );
};
export default HeaderContent;
