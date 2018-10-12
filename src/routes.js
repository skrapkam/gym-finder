import React from 'react';
import { Route, BrowserRouter, Switch, IndexRoute} from 'react-router-dom';

import SanFrancisco from './components/SanFrancisco';
import App from './components/App';

export default () => (
  <BrowserRouter>
  <Switch>
    
    <Route path="/gyms" component={SanFrancisco} />
  </Switch>
  </BrowserRouter>
);
