import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import StatusCard from "./StatusCard";
import axios from "axios";

class EndedExam extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    axios.get("http://localhost:9000/test/test/ended").then((response) => {
      console.log(response.data);
      this.setState({ details: response.data.testDetails });
    });
  }
  render() {
    const details = this.state.details.map((detail) => {
      return (
        <StatusCard
          name={detail.name}
          status={detail.status}
          id={detail.testID}
        />
      );
    });
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Ended Exam </h1>
        </Jumbotron>
        {details}
      </div>
    );
  }
}

export default EndedExam;
