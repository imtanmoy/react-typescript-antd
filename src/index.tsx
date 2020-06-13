import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';
import { history, store } from './store';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Root history={history} store={store} />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
