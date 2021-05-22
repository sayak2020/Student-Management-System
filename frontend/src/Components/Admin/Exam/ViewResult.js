import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ResultCard from "./ResultCard";
import ResultNav from "./ResultNav";
import { Jumbotron } from "reactstrap";
import "./ViewResult.css";

class ViewResult extends Component {
  state = {
    details: [],
    message: "",
  };

  componentDidMount() {
    const id = this.props.match.params.testID;
    axios
      .get(`http://localhost:9000/test_respons/testID/${id}`)
      .then((response) => {
        console.log(response.data.testDetails);
        if (response.data.testDetails.length == 0) {
          this.setState({ message: "No Results Found" });
        } else {
          this.setState({ details: response.data.testDetails });
          this.setState({
            message: response.data.testDetails.length + " Results Found",
          });
        }
      });
  }
  render() {
    const details = this.state.details.map((detail) => {
      return (
        <ResultCard
          name={detail.name}
          obtained={detail.obtainedmarks}
          studentemail={detail.student_email}
          totalmarks={detail.totalmarks}
        />
      );
    });

    return (
      <div>
        <ResultNav />
        <Jumbotron classname="top-bar">
          <h1 className="display-3  "> {this.state.message}</h1>
        </Jumbotron>

        {details}
      </div>
    );
  }
}

export default withRouter(ViewResult);
