import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import AvatarDropdown from './AvatarDropdown';

export interface HeaderRightProps {}

const helpStyle = {
  fontSize: '15px',
  marginRight: '10px',
};

const tooltipStyle = { padding: '0px 5px' };

const HeaderRight: React.FC<HeaderRightProps> = (props) => {
  return (
    <div>
      <Tooltip title="Help" style={tooltipStyle}>
        <a
          style={helpStyle}
          target="_blank"
          href="https://tanmoybanik.com"
          rel="noopener noreferrer"
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip>
      <AvatarDropdown />
    </div>
  );
};
export default HeaderRight;
