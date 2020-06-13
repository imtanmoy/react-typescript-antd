import React from 'react';
import { Helmet } from 'react-helmet-async';
import BasicLayout from '../../layouts/BasicLayout';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BasicLayout>
        <div style={{ height: '2000px' }}>
          <h1>Home Page</h1>
        </div>
      </BasicLayout>
    </>
  );
};
