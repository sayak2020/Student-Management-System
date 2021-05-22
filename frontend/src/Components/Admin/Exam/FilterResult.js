import React, { Component } from "react";
import axios from "axios";
import { Jumbotron } from "reactstrap";
import { withRouter } from "react-router-dom";
import ResultCard from "./ResultCard";

class FilterResult extends Component {
  state = {
    details: [],
    message: "",
  };

  componentDidMount() {
    const email = this.props.match.params.email;
    console.log({ email });
    axios
      .get(` http://localhost:9000/test_respons/user/${email}`)
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
        <Jumbotron classname="top-bar">
          <h1 className="display-3  "> {this.state.message}</h1>
        </Jumbotron>
      );
    } else {
      return <div>{details}</div>;
    }
  }
}

export default withRouter(FilterResult);
