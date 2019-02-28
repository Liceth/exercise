import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "./Components/Pages/HomePage";
//const file = require("./Texts/list.txt");

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route render={() => <Redirect to="/"/>}/>
    </Switch>
  </Router>
    );

export default App;
