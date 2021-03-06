import React from 'react';
import { Provider } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { HelmetProvider } from 'react-helmet-async';
import { App } from '../App/App';
import { Store } from '../../store';

interface RootProps {
  history: History;
  store: Store;
}

export const Root: React.FC<RootProps> = ({ history, store }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <App history={history} />
        </HelmetProvider>
      </ConnectedRouter>
    </Provider>
  );
};
