import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import AvatarDropdown from './AvatarDropdown';

export interface HeaderRightProps {}

const Div = styled.div`
  display: flex;
  float: right;
  height: 64px;
  margin-left: auto;
  overflow: hidden;

  > a,
  > span {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const HeaderRight: React.FC<HeaderRightProps> = (props) => {
  return (
    <Div>
      <Tooltip title="Help">
        <a
          target="_blank"
          href="https://tanmoybanik.com"
          rel="noopener noreferrer"
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip>
      <AvatarDropdown />
    </Div>
  );
};
export default HeaderRight;
