import React, { Component } from "react";
import axios from "axios";
import { Jumbotron } from "reactstrap";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import ResultCard from "../../Admin/Exam/ResultCard";
import Navigation from "../../Navigation";

class Result extends Component {
  state = {
    details: [],
    message: "",
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(
        ` http://localhost:9000/test_respons/user/${cookies.get("username")}`
      )
      .then((response) => {
        if (response.data.testDetails.length == 0) {
          this.setState({ message: "No Results Found" });
        } else {
          console.log(response.data.testDetails);
          this.setState({ details: response.data.testDetails });
        }
      });
  }
  render() {
    const details = this.state.details.map((detail) => {
      //   console.log(detail.answer.length);
      return (
        <ResultCard
          name={detail.name}
          obtained={detail.obtainedmarks}
          studentemail={detail.student_email}
          totalmarks={detail.totalmarks}
          answer={detail.answer.map((answer) => answer)}
        />
      );
    });
    if (this.state.message) {
      return (
        (<Navigation />),
        (
          <Jumbotron classname="top-bar">
            <h1 className="display-3  "> {this.state.message}</h1>
          </Jumbotron>
        )
      );
    } else {
      return (
        <div>
          <Navigation />
          {details}
        </div>
      );
    }
  }
}

export default withRouter(Result);
