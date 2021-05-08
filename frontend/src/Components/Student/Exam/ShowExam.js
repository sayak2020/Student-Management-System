import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import UserExamCard from "./UserExamCard";
import axios from "axios";

class ShowExam extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    axios.get("http://localhost:9000/test/test/live").then((response) => {
      console.log(response.data);
      this.setState({ details: response.data.testDetails });
    });
  }
  render() {
    const details = this.state.details.map((detail) => {
      return (
        <UserExamCard
          name={detail.name}
          status={detail.status}
          id={detail.testID}
        />
      );
    });
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Live Exam </h1>
        </Jumbotron>
        {details}
      </div>
    );
  }
}

export default ShowExam;
