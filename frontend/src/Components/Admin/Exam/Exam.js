import React from "react";
import { Jumbotron, Button } from "reactstrap";
import StatusCard from "./StatusCard";
import axios from "axios";

class Exam extends React.Component {
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
          <h1 className="display-3">Live Exam </h1>
        </Jumbotron>
        {details}
        <Button href="/create_exam">Create exam</Button>
        <Button href="/ended_exam">Ended exam</Button>
      </div>
    );
  }
}

export default Exam;
