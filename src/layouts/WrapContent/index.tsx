import React, { Component } from 'react';
import { Layout } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import styled from 'styled-components';
import { debounce } from '../../utils/utils';

const { Content } = Layout;

const StyledContent = styled(Content)`
  position: relative;
  margin: 24px;
  transition: all 0.2s;
`;

const Div = styled.div`
  width: 100%;
  min-height: 100%;
  transition: all 0.2s;
  margin: 0 auto;
`;

export interface WrapContentProps {
  contentHeight?: number | string;
}

class WrapContent extends Component<WrapContentProps> {
  shouldComponentUpdate(_: any) {
    if (_.contentHeight !== this.props.contentHeight) {
      return true;
    }
    if (_.children !== this.props.children) {
      return true;
    }
    return false;
  }

  render() {
    const { children } = this.props;
    return (
      <StyledContent>
        <Div>{children}</Div>
      </StyledContent>
    );
  }
}

class ResizeObserverContent extends Component<
  {
    children: any;
  },
  {
    contentHeight: number | undefined;
  }
> {
  state: { contentHeight: number | undefined } = {
    contentHeight: undefined,
  };

  resize = debounce(({ height }: { height: number }) => {
    const { contentHeight } = this.state;
    if (contentHeight !== height) {
      this.setState({
        contentHeight: height,
      });
    }
  }, 10);

  componentWillUnmount() {
    window.clearTimeout(this.resize.id);
  }

  render() {
    const { contentHeight } = this.state;
    return (
      <div
        style={{
          minHeight: contentHeight,
        }}
      >
        <ResizeObserver onResize={this.resize}>
          <WrapContent {...this.props} contentHeight={contentHeight} />
        </ResizeObserver>
      </div>
    );
  }
}

export default ResizeObserverContent;
