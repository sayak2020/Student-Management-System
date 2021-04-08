import React, { Component } from "react";
import Front from "./Components/Front/Front";
import Register from "./Components/Register";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Welcome";
import Navigation from "./Components/Navigation";
import UserProfile from "./Components/Userprofile/Userprofile";
import UpdateProfile from "./Components/Updateprofile/Updateprofile";
import Attendance from "./Components/Attendance/Attendance";
import CheckAttendance from "./Components/CheckAttendance/CheckAttendance";
import Leave from "./Components/Leave/Leave";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/welcome">
              <Navigation />

              <Welcome />
            </Route>
            <Route path="/userprofile">
              <Navigation />
              <UserProfile />
            </Route>
            <Route path="/updateprofile">
              <Navigation />
              <UpdateProfile />
            </Route>
            <Route path="/attendance">
              <Navigation />

              <Attendance />
            </Route>
            <Route path="/leave">
              <Navigation />

              <Leave />
            </Route>
            <Route path="/checkAttendance">
              <Navigation />

              <CheckAttendance />
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
