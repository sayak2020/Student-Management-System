import React, { useState, useEffect } from "react";
import Front from "./Components/Front/Front";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Welcome/Welcome";
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
import Result from "./Components/Student/Result/Result";
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
import AdminProtectedRoute from "./AdminProtectedRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* ADMIN */}
          <Route path="/admin_login">
            <AdminLogin />
          </Route>

          <AdminProtectedRoute
            path="/studentprofile"
            component={StudentProfile}
          />
          <AdminProtectedRoute
            path="/student_profile/email/:email"
            component={FilterEmail}
          />

          <AdminProtectedRoute
            path="/view_result/:testID"
            component={ViewResult}
          />

          <AdminProtectedRoute
            path="/filter_result/:email"
            component={FilterResult}
          />
          <AdminProtectedRoute path="/test/:id" component={Test} />
          <AdminProtectedRoute path="/ended_exam" component={EndedExam} />
          <AdminProtectedRoute path="/pendingleave" component={PendingLeave} />
          <AdminProtectedRoute path="/adminlanding" component={AdminLanding} />

          <AdminProtectedRoute path="/create_exam" component={CreateExam} />

          <AdminProtectedRoute
            path="/student_profile/stream/:stream"
            component={FilterStream}
          />

          <AdminProtectedRoute
            path="/admin_register"
            component={AdminRegister}
          />
          <AdminProtectedRoute
            path="/admin_attendance/:email"
            component={AdminAttendance}
          />
          <AdminProtectedRoute
            path="/approved_leave/:email"
            component={ApprovedLeave}
          />

          {/* USER */}

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute path="/user_test/:id" component={UserTest} />

          {/* <ProtectedRoute path="/user_test/:id" component={UserTest} /> */}
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
          <ProtectedRoute path="/result" component={Result} />
          <Route path="/">
            <Front />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
