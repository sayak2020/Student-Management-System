import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ResultCard from "./ResultCard";
import ResultNav from "./ResultNav";

class ViewResult extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    const id = this.props.match.params.testID;
    axios
      .get(`http://localhost:9000/test_respons/testID/${id}`)
      .then((response) => {
        console.log(response.data.testDetails);
        this.setState({ details: response.data.testDetails });
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
        />
      );
    });
    return (
      <div>
        <ResultNav />
        {details}
      </div>
    );
  }
}

export default withRouter(ViewResult);
