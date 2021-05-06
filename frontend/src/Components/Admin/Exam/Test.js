import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import QuestionCard from "./Questioncard";
import { Jumbotron, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import "./Test.css";

class Test extends Component {
  state = {
    questions: [],
    details: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios.get(`http://localhost:9000/test/${id}`).then((response) => {
      console.log(response.data.testDetails[0].questions);
      this.setState({ questions: response.data.testDetails[0].questions });
      this.setState({ details: response.data.testDetails[0] });
    });
  }
  render() {
    const questions = this.state.questions.map((question) => {
      return (
        <QuestionCard
          questions={question.question}
          optionA={question.options[0].A}
          optionB={question.options[0].B}
          optionC={question.options[0].C}
          optionD={question.options[0].D}
          answer={question.ans}
          marks={question.marks}
        />
      );
    });
    return (
      <div>
        <Jumbotron className="test-details">
          <h4 className="display-3 test-name">
            Name : {this.state.details.name}
          </h4>
          <h4 className="test-status">Status : {this.state.details.status}</h4>
          <h4 className="test-status">
            Subject : {this.state.details.subject}
          </h4>
          <p className="test-id">ID : {this.state.details._id}</p>
          <Link
            to={{
              pathname: `/view_result/${this.state.details.testID}`,
            }}
          >
            <Button className="result-btn">View Results</Button>
          </Link>
        </Jumbotron>

        {questions}
      </div>
    );
  }
}

export default withRouter(Test);
