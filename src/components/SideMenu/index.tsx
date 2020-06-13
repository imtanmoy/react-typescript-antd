import React from 'react';
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';

export interface SiderMenuProps {
  siderWidth: number;
  isFixed: boolean;
  collapsed: boolean;
  logo?: string;
  title?: string;
  isMobile: boolean;
  toggle: () => void;
}

const SideMenu: React.FC<SiderMenuProps> = (props) => {
  const { siderWidth, collapsed, isMobile, toggle } = props;

  return isMobile ? (
    <Drawer
      visible={collapsed}
      placement="left"
      onClose={() => toggle && toggle()}
      style={{
        padding: 0,
        height: '100vh',
      }}
      width={siderWidth}
      bodyStyle={{ height: '100vh', padding: 0 }}
    >
      <SiderMenu {...props} />
    </Drawer>
  ) : (
    <SiderMenu {...props} />
  );
};

export default SideMenu;
