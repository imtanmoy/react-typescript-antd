import React, { CSSProperties } from 'react';
import { Layout } from 'antd';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WrapContent from '../WrapContent';
import PageLoading from '../../components/PageLoading';

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
  isSiderFixed: boolean;
  isHeaderFixed: boolean;
}

export default class BasicLayout extends React.Component<
  BasicLayoutProps,
  BasicLayoutStates
> {
  state = {
    isSiderFixed: false,
    isHeaderFixed: false,
    collapsed: false,
    siderWidth: 256,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { children, loading = false } = this.props;
    const { collapsed, siderWidth, isHeaderFixed, isSiderFixed } = this.state;
    const genLayoutStyle: CSSProperties = {
      paddingLeft: getPaddingLeft(isSiderFixed, collapsed, siderWidth),
    };
    return (
      <Layout>
        <SideMenu collapsed={collapsed} isFixed={isSiderFixed} />
        <Layout style={genLayoutStyle}>
          <Header
            collapsed={collapsed}
            isFixed={isHeaderFixed}
            toggle={this.toggle}
          />
          <WrapContent>{loading ? <PageLoading /> : children}</WrapContent>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
