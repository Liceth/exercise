import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route render={() => <Redirect to="/"/>}/>
    </Switch>
  </Router>
    );

export default App;
