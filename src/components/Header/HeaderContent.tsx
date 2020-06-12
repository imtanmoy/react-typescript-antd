import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import HeaderRight from './HeaderRight';
import { TriggerSpan } from './style';
import { HeaderProps } from './index';

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  background: #fff;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`;

const HeaderContent: React.FC<HeaderProps> = ({ collapsed, toggle }) => {
  return (
    <Div>
      <TriggerSpan onClick={() => toggle()}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </TriggerSpan>
      <div style={{ flex: 1 }} />
      <HeaderRight />
    </Div>
  );
};
export default HeaderContent;
