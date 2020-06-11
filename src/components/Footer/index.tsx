import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

const Container = styled.div`
  text-align: center;
  padding: 10px 0px;
`;

export interface FooterProps {
  style?: CSSProperties;
  className?: string;
}

const FooterView: React.FC<FooterProps> = ({
  style,
  className,
}: FooterProps) => (
  <Footer className={className} style={{ padding: 0, ...style }}>
    <Container>Ant Design ©2020 Created By Tanmoy Banik</Container>
  </Footer>
);

export default FooterView;
