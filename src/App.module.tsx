import { RouteComponentProps, Router } from "@reach/router";
import React, { useMemo } from "react";
import App from './App.component';
import { Provider } from './lib/Provider';

const AppModule: React.FC<RouteComponentProps> = () => {
  const globalBinds = useMemo(() => [], []);
  return (
    <Provider binds={globalBinds}>
      <Router>
        <App path='/*' />
      </Router>
    </Provider>
  );
};

export default AppModule;
