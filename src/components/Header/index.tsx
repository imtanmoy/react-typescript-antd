import React, { Component } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components';
import HeaderRight from './HeaderRight';

const { Header: AntHeader } = Layout;

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

const StyledAntHeader = styled(AntHeader)`
  background: #fff;
  padding: 0;
  display: flex;
`;

export interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

export default class Header extends Component<HeaderProps> {
  render(): React.ReactNode {
    const { collapsed, toggle } = this.props;
    return (
      <StyledAntHeader>
        <TriggerSpan onClick={() => toggle()}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </TriggerSpan>
        <div style={{ flex: 1 }} />
        <HeaderRight />
      </StyledAntHeader>
    );
  }
}
