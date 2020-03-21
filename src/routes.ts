import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { RouteComponentProps } from 'react-router';

interface RouteType {
  path: string;
  exact?: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const routes: Array<RouteType> = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  },
];
export default routes;
