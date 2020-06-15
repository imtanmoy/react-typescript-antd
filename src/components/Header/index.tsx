import React, { Component } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import HeaderContent from './HeaderContent';
import { isBrowser } from '../../utils/utils';

const { Header: AntHeader } = Layout;

export interface HeaderProps {
  collapsed: boolean;
  isFixed: boolean;
  isMobile: boolean;
  toggle: () => void;
}

const FixedHeaderEmptyDiv = styled.div`
  height: 64px;
`;

export const StyledHeader = styled(
  ({ collapsed, isFixed, isMobile, ...props }) => <AntHeader {...props} />
)<{
  collapsed: boolean;
  isFixed: boolean;
}>`
  z-index: 9;
  background: #fff;
  padding: 0;
  display: flex;
  transition: width 0.2s;
  ${({ isFixed }) =>
    isFixed &&
    `
    width: 100%;
    transition: width 0.2s;
    position: fixed;
    top: 0px;
    right: 0px;
  `}

  ${({ isMobile, collapsed }) =>
    !isMobile && `width: calc(100% - ${collapsed ? '80px' : '256px'});`}
`;

export default class Header extends Component<HeaderProps> {
  triggerResizeEvent = () => {
    if (isBrowser()) {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', true, false);
      window.dispatchEvent(event);
    }
  };

  toggle = () => {
    this.props.toggle();
    this.triggerResizeEvent();
  };

  render(): React.ReactNode {
    const { collapsed, isFixed, isMobile } = this.props;

    return (
      <>
        {isFixed && <FixedHeaderEmptyDiv />}
        <StyledHeader
          collapsed={collapsed}
          isFixed={isFixed}
          isMobile={isMobile}
        >
          <HeaderContent {...this.props} />
        </StyledHeader>
      </>
    );
  }
}
