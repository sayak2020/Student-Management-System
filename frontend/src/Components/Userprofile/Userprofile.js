/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Userprofile.css";
import Cookies from "universal-cookie";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Showprofile from "./Showprofile";

const cookies = new Cookies();

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
        // if (response.data.student.name == null) {
        //   response.data.student.name = " ";
        // }
        console.log(response.data);
        this.setState({ user: response.data.student });
        this.setState({ useraddress: response.data.student.address });
        this.setState({ userclass: response.data.student.class });
      });
  }

  render() {
    return (
      <div>
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
