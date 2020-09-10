import React, { useState } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import HomePage from "./Layouts/HomePage";
import Signin from "./Layouts/Signin";
import Signup from "./Layouts/Signup";
import { UserContext } from "./Context/UserContext";

import FireBaseConfig from "./Config/FireBaseConfig";
firebase.initializeApp(FireBaseConfig);

const App = () => {
  var initialState = null;

  if (window.sessionStorage.getItem("email") == null) {
  } else {
    initialState = { email: window.sessionStorage.getItem("email") };
  }

  const [user, setUser] = useState(initialState);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={HomePage} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
