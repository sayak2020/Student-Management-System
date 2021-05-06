import React, { Component } from "react";
import axios from "axios";
import UserTestCard from "./UserTestCard";
import { Jumbotron, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class UserTest extends Component {
  //   state = {
  //     questions: [],
  //     details: [],
  //   };
  constructor() {
    super();
    this.state = {
      name: "React",
      questions: [],
      details: [],
      selectedOption: "",
      answers: [],
    };

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  onValueChange(e) {
    // let answers = this.state.answers;
    // answers.push(e.target.value);
    // this.setState({ answers });
    console.log("selected option", e.target.value);
    this.setState({ selectedOption: e.target.value });
  }

  handleOnChange(e) {}
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
      console.log(this.state.answers);
      return (
        <UserTestCard
          questions={question.question}
          optionA={question.options[0].A}
          optionB={question.options[0].B}
          optionC={question.options[0].C}
          optionD={question.options[0].D}
          marks={question.marks}
          onChange={(e) => this.onValueChange(e)}
          selected={this.state.selectedOption}
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
        </Jumbotron>
        {/* <form onSubmit={this.formSubmit}>
          {questions}
          <Button>Submit</Button>
        </form> */}
        {questions}
      </div>
    );
  }
}

export default withRouter(UserTest);
