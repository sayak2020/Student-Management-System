import React, { useState, useEffect } from "react";
import Front from "./Components/Front/Front";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Welcome";
import Navigation from "./Components/Navigation";
import UserProfile from "./Components/Userprofile/Userprofile";
import UpdateProfile from "./Components/Updateprofile/Updateprofile";
import Attendance from "./Components/Attendance/Attendance";
import CheckAttendance from "./Components/CheckAttendance/CheckAttendance";
import Leave from "./Components/Leave/Leave";
import LeaveHistory from "./Components/Leave/LeaveHistory/LeaveHistory";
import StudentProfile from "./Components/Admin/StudentProfiles/StudentProfile";
import AdminLanding from "./Components/Admin/AdminLanding/AdminLanding";
import AdminAttendance from "./Components/Admin/AdminAttendance/AdminAttendance";
import PendingLeave from "./Components/Admin/AdminLeave/AdminLeavePending";
import ApprovedLeave from "./Components/Admin/AdminApproved/ApprovedLeave";
import FilterEmail from "./Components/Admin/FilterNav/FilterEmail";
import FilterStream from "./Components/Admin/FilterNav/FilterStream";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import AdminRegister from "./Components/Admin/AdminRegister/AdminRegister";
import AdminExam from "./Components/Admin/Exam/Exam";
import CreateExam from "./Components/Admin/Exam/CreateExam";
import Test from "./Components/Admin/Exam/Test";
import ViewResult from "./Components/Admin/Exam/ViewResult";
import FilterResult from "./Components/Admin/Exam/FilterResult";
import EndedExam from "./Components/Admin/Exam/EndedExam";
import ShowExam from "./Components/Student/Exam/ShowExam";
import UserTest from "./Components/Student/Exam/UserTest";
import Notes from "./Components/Student/Notes/Notes";
import Header from "./Components/Student/Notes/Header";
import FilesList from "./Components/Student/Notes/FilesList";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";
import Cookies from "universal-cookie";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     auth: "true",
  //   };
  // state = {
  //   author: "true",
  // };
  // //this.auth1 = this.auth1.bind(this);

  // componentDidMount() {
  //   //const res = await axios.get('http://localhost:9000/authenticate');
  //   // const cookie = new Cookies();
  //   // let c = cookie.get("userid");
  //   // console.log(c);
  //   let c1 = 1;
  //   if (c1 == 1) {
  //     this.setState({ author: "false" });
  //     // console.log(this.state.auth);
  //   }
  //   console.log(this.state.author);

  //   // auth1();
  // }
  // const [auth, setAuth] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const cookies = new Cookies();
  //     let c1 = 0;
  //     if (c1 == 0) {
  //       setAuth("true");
  //       console.log(auth);
  //     }
  //   })();
  // }, []);

  //this.state.auth == "true"

  return (
    //{this.auth1};
    <Router>
      <div className="App">
        <Switch>
          {/* ADMIN */}

          <Route path="/studentprofile">
            <StudentProfile />
          </Route>
          <Route path="/student_profile/email/:email">
            <FilterEmail />
          </Route>
          <Route path="/admin_exam">
            <AdminExam />
          </Route>
          <Route path="/view_result/:testID">
            <ViewResult />
          </Route>
          <Route path="/filter_result/:email">
            <FilterResult />
          </Route>
          <Route path="/test/:id">
            <Test />
          </Route>
          <Route path="/ended_exam">
            <EndedExam />
          </Route>
          <Route path="/pendingleave">
            <PendingLeave />
          </Route>
          <Route path="/adminlanding">
            <AdminLanding />
          </Route>
          <Route path="/create_exam">
            <CreateExam />
          </Route>
          <Route path="/student_profile/stream/:stream">
            <FilterStream />
          </Route>
          <Route path="/admin_login">
            <AdminLogin />
          </Route>
          <Route path="/admin_register">
            <AdminRegister />
          </Route>
          <Route path="/admin_attendance/:email">
            <AdminAttendance />
          </Route>
          <Route path="/approved_leave/:email">
            <ApprovedLeave />
          </Route>

          {/* USER */}

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute path="/user_test/:id" component={UserTest} />
          <ProtectedRoute path="/exam" component={ShowExam} />
          <ProtectedRoute path="/notes" component={Notes} />
          <ProtectedRoute path="/fileslist" component={FilesList} />
          <ProtectedRoute path="/welcome" component={Welcome} />
          <ProtectedRoute path="/userprofile" component={UserProfile} />
          <ProtectedRoute path="/updateprofile" component={UpdateProfile} />
          <ProtectedRoute path="/attendance" component={Attendance} />
          <ProtectedRoute path="/checkattendance" component={CheckAttendance} />
          <ProtectedRoute path="/leave" component={Leave} />
          <ProtectedRoute path="/leavehistory" component={LeaveHistory} />
          <Route path="/">
            <Front />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
