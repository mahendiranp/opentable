import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import List from './screens/list'
import DetailView from './screens/detailview'


export default function PageRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/restaurant/:id">
            <DetailView />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
