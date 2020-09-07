import React from "react";
// import { Layout, Menu, Breadcrumb } from "antd";
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

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="*" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
