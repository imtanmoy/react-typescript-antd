import React from 'react';
import { PageHeader } from 'antd';
import styled from 'styled-components';

export interface PageHeaderWrapperProps {
  title?: React.ReactNode | string;
}

// const routes = [
//   {
//     path: 'index',
//     breadcrumbName: 'First-level Menu',
//   },
//   {
//     path: 'first',
//     breadcrumbName: 'Second-level Menu',
//   },
//   {
//     path: 'second',
//     breadcrumbName: 'Third-level Menu',
//   },
// ];

export interface PageHeaderWrapProps {
  title?: string;
}

const PageHeaderWrapper: React.FC<PageHeaderWrapProps> = ({
  title = 'Title',
  children,
}) => {
  return (
    <PageHeaderWrap>
      <PageHeaderContent>
        {/* <PageHeader title={title} breadcrumb={{ routes }} /> */}
        <PageHeader title={title} />
      </PageHeaderContent>
      {children ? (
        <PageHeaderChildrenContent>{children}</PageHeaderChildrenContent>
      ) : null}
    </PageHeaderWrap>
  );
};

export default PageHeaderWrapper;

const PageHeaderWrap = styled.div`
  margin: -24px -24px 0;
  transition: all 0.2s;
`;

const PageHeaderContent = styled.div`
  background-color: #fff;
`;

const PageHeaderChildrenContent = styled.div`
  margin: 24px 24px 0;
`;
