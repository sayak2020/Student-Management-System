import React, { Component } from "react";

import axios from "axios";
import "./Userprofile.css";
import Cookies from "universal-cookie";

import Navigation from "../Navigation";
import Showprofile from "./Showprofile";

class Userprofile extends Component {
  state = {
    user: [],
    useraddress: [],
    userclass: [],
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(`http://localhost:9000/student_profile/${cookies.get("userid")}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ user: response.data.student });
        this.setState({ useraddress: response.data.student.address });
        this.setState({ userclass: response.data.student.class });
      });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Showprofile
          name={this.state.user.name}
          phone={this.state.user.phone}
          street={this.state.useraddress.street}
          city={this.state.useraddress.city}
          stream={this.state.userclass.stream}
          section={this.state.userclass.section}
          year={this.state.userclass.year}
          pin={this.state.useraddress.pin}
        />
      </div>
    );
  }
}

export default Userprofile;
