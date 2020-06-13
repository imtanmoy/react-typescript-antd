import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { History } from 'history';
import routes from '../../routes';

interface AppProps {
  history: History;
}

export const App: React.FC<AppProps> = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            exact={r.exact ? r.exact : true}
            component={r.component}
          />
        ))}
      </Switch>
    </Router>
  );
};
