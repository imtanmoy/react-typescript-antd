import React, { CSSProperties } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const { Content } = Layout;

const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
`;

const getPaddingLeft = (
  hasLeftPadding: boolean,
  collapsed: boolean | undefined,
  siderWidth: number
): number | undefined => {
  if (hasLeftPadding) {
    return collapsed ? 80 : siderWidth;
  }
  return undefined;
};

export interface BasicLayoutProps {
  loading?: boolean;
}

interface BasicLayoutStates {
  collapsed: boolean;
  siderWidth: number;
}

export default class BasicLayout extends React.Component<
  BasicLayoutProps,
  BasicLayoutStates
> {
  state = {
    collapsed: false,
    siderWidth: 256,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;
    const genLayoutStyle: CSSProperties = {
      paddingLeft: getPaddingLeft(true, collapsed, 256),
      // position: 'relative',
    };
    return (
      <Layout>
        <SideMenu collapsed={this.state.collapsed} />
        <Layout style={genLayoutStyle}>
          <Header collapsed={this.state.collapsed} toggle={this.toggle} />
          <StyledContent>{children}</StyledContent>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
