import React, { Component } from "react";
import Front from "./Components/Front";
import Register from "./Components/Register";
import Login from "./Components/Login";
import User from "./Components/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Front />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
