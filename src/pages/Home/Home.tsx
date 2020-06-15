import React from 'react';
import { Helmet } from 'react-helmet-async';
import BasicLayout from '../../layouts/BasicLayout';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BasicLayout>
        <PageHeaderWrapper>
          <div>
            {Array(500)
              .fill(0)
              .map((item, index) => 0 + index)
              .map((i) => (
                <h1 key={i}>Data {i}</h1>
              ))}
            <h1>Home Page</h1>
          </div>
        </PageHeaderWrapper>
      </BasicLayout>
    </>
  );
};
