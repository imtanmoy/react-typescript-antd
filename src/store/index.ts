import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { models, RootModel } from './models';

export const history = createBrowserHistory();

const reactRouterMiddleware = routerMiddleware(history);

const reducers = { router: connectRouter(history) };

function configureStoreDev() {
  const middlewares = [
    reactRouterMiddleware,
    // logger
  ];

  return init({
    models,
    redux: {
      reducers,
      middlewares,
    },
  });
}

function configureStoreProd() {
  const middlewares = [reactRouterMiddleware];

  return init({
    models,
    redux: {
      reducers,
      middlewares,
    },
  });
}

export const store =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd()
    : configureStoreDev();

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
