import React from 'react';
import GlobalStyle from './globalStyle';
import HomePage from './pages/home/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const user = null;
  return (
    <Router>
      <GlobalStyle/>
      {
          !user ? (
          <LoginPage/>
        ): (
          <Switch>
            <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          )
      }
    </Router>
  );
}

export default App;
