import React, { Component } from "react";
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
import axios from "axios"
import Cookies from "universal-cookie"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
     auth : "true"
    };
    //this.auth1 = this.auth1.bind(this);
  }
  componentDidMount() {

  const auth1 = async () => {
    try {
      //const res = await axios.get('http://localhost:9000/authenticate');
      const cookie = new Cookies();
      let c = cookie.get("userid")
      console.log(c);
      let c1 = 1
      if(c1 == 1){
        this.state.auth = "false"
        console.log(this.state.auth);
      }
      console.log(this.state.auth);
    } catch (e) {
      console.log(e );
    }
  };
  
  auth1();
 
}
  
  render() {
    let c1 = 1
    //this.state.auth == "true"
    if(c1==0){
      return (
      //{this.auth1};
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>

            <Route path="/studentprofile">
              <StudentProfile />
            </Route>
            <Route path="/notes">
              <Header />
              <Notes />
            </Route>
            <Route path="/fileslist">
              <Header />
              <FilesList />
            </Route>
            <Route path="/student_profile/email/:email">
              <FilterEmail />
            </Route>
            <Route path="/admin_exam">
              <AdminExam />
            </Route>
            <Route path="/exam">
              <ShowExam />
            </Route>console.log(this.state.auth);
            <Route path="/user_test/:id">
              <UserTest />
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

            <Route path="/adminlanding">
              <AdminLanding />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/pendingleave">
              <PendingLeave />
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
            <Route path="/checkattendance">
              <Navigation />

              <CheckAttendance />
            </Route>
            <Route path="/leave">
              <Navigation />

              <Leave />
            </Route>
            <Route path="/leavehistory">
              <Navigation />

              <LeaveHistory />
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
    else{
     return(
       <h1> nothing </h1>
     )
    }
  }
  
}

export default App;
