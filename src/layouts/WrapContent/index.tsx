import React, { Component } from 'react';
import { Layout } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import { debounce } from '../../utils/utils';

const { Content } = Layout;

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
      <Content>
        <div className="basicLayout-children-content-wrap">{children}</div>
      </Content>
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
    console.log(height);
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
