import React from 'react';
import GlobalStyle from './globalStyle';
import HomePage from './pages/home/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <HomePage />
      <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            {
              // <Users />
            }
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
