import React, { useEffect } from "react";
import GlobalStyle from "./globalStyle";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage/LoginPage";
import { login, logout, SelectUser } from "./features/userSlice";
import { auth } from "./database/firebase";
import { useDispatch } from "react-redux";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          id: user.uid,
          email:user.email,
          displayName: user.displayName,
          photo:user.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {!user ? (
        <LoginPage />
      ) : (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            <ProfilePage/>
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
