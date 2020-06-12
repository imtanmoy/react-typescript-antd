import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Div = styled.div`
  padding-top: 100px;
  text-align: center;
  min-height: 200px;
`;

const PageLoading: React.FC<{
  tip?: string;
}> = ({ tip }) => (
  <Div>
    <Spin size="large" tip={tip} />
  </Div>
);

export default PageLoading;
