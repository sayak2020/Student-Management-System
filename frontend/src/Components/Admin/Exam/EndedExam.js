import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import StatusCard from "./StatusCard";
import axios from "axios";
import AdminNav from "../AdminLanding/AdminNav";

class EndedExam extends Component {
  state = {
    details: [],
    message: "Ended Exam",
  };

  componentDidMount() {
    axios.get("http://localhost:9000/test/test/ended").then((response) => {
      console.log(response.data.testDetails.length);
      if (response.data.testDetails.length == 0) {
        this.setState({ message: "No Ended Exam" });
      } else {
        this.setState({ details: response.data.testDetails });
      }
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
        <AdminNav />
        <Jumbotron>
          <h1 className="display-3">{this.state.message} </h1>
        </Jumbotron>
        {details}
      </div>
    );
  }
}

export default EndedExam;
