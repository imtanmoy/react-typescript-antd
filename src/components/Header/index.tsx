import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledHeader } from './style';
import HeaderContent from './HeaderContent';
import { isBrowser } from '../../utils/utils';

export interface HeaderProps {
  collapsed: boolean;
  isFixed: boolean;
  toggle: () => void;
}

const FixedHeaderEmptyDiv = styled.div`
  height: 64px;
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
    const { collapsed, isFixed } = this.props;

    return (
      <>
        {isFixed && <FixedHeaderEmptyDiv />}
        <StyledHeader collapsed={collapsed} isFixed={isFixed}>
          <HeaderContent
            collapsed={collapsed}
            isFixed={isFixed}
            toggle={this.toggle}
          />
        </StyledHeader>
      </>
    );
  }
}
