import React, { CSSProperties } from 'react';
import { Layout } from 'antd';
import { getScreenClassName } from 'use-media-antd-query';
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
  isMobile: boolean;
}

export default class BasicLayout extends React.Component<
  BasicLayoutProps,
  BasicLayoutStates
> {
  state = {
    isSiderFixed: true,
    isHeaderFixed: true,
    collapsed: false,
    siderWidth: 256,
    isMobile: false,
  };

  componentDidMount() {
    const colSize = getScreenClassName();
    const isMobile = colSize === 'sm' || colSize === 'xs';
    this.setState({
      isMobile,
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { children, loading = false } = this.props;
    const {
      collapsed,
      siderWidth,
      isHeaderFixed,
      isSiderFixed,
      isMobile,
    } = this.state;

    console.log(isSiderFixed, isMobile);

    const genLayoutStyle: CSSProperties = {
      paddingLeft: isMobile
        ? undefined
        : getPaddingLeft(isSiderFixed, collapsed, siderWidth),
      transition: isSiderFixed ? 'all 0.2s' : undefined,
    };

    return (
      <Layout
        style={{
          minHeight: '100%',
        }}
        hasSider
      >
        <SideMenu
          collapsed={collapsed}
          isFixed={isSiderFixed}
          isMobile={isMobile}
          toggle={this.toggle}
          siderWidth={siderWidth}
        />
        <Layout style={genLayoutStyle}>
          <Header
            collapsed={collapsed}
            isFixed={isHeaderFixed}
            toggle={this.toggle}
            isMobile={isMobile}
          />
          <WrapContent>{loading ? <PageLoading /> : children}</WrapContent>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
