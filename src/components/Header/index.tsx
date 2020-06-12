import React, { Component, CSSProperties } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { StyledHeader } from './style';
import HeaderContent from './HeaderContent';
import { isBrowser } from '../../utils/utils';

import './index.css';

export interface HeaderProps {
  collapsed: boolean;
  isFixed?: boolean;
  toggle: () => void;
}

const fixHeaderStyle: CSSProperties = {
  width: 'calc(100% - 80px)',
};

const FixedHeaderEmptyDiv = styled.div`
  height: 64px;
`;

const getFixStyleWidth = (collapsed: boolean) => {
  return collapsed ? 80 : 256;
};

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
    const { collapsed, isFixed = true } = this.props;
    fixHeaderStyle.width = `calc(100% - ${getFixStyleWidth(collapsed)}px)`;

    const className = classNames({
      'banik-fixed-header': isFixed,
    });

    return (
      <>
        {isFixed && <FixedHeaderEmptyDiv />}
        <StyledHeader
          style={isFixed ? fixHeaderStyle : undefined}
          className={className}
        >
          <HeaderContent collapsed={collapsed} toggle={this.toggle} />
        </StyledHeader>
      </>
    );
  }
}
