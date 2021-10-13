import React from 'react';
import GlobalStyle from './globalStyle';
import HomePage from './pages/home/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage/LoginPage';
import { SelectUser } from './features/userSlice';

function App() {
  const user = useSelector(SelectUser);
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
