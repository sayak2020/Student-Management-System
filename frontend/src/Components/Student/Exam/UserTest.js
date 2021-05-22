import React, { Component } from "react";
import axios from "axios";
import UserTestCard from "./UserTestCard";
import { Jumbotron, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import Navigation from "../../Navigation";
import "./UserTestCard.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { green } from "@material-ui/core/colors";

class UserTest extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      questions: [],
      details: [],
      selectedOption: [],
      answers: [],
    };

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  onValueChange(e, id) {
    this.setState({ selectedOption: e.target.value, id: id });
    console.log(this.state.answers);

    this.state.answers[id] = e.target.value;

    console.log(this.state.answers);
  }

  onSubmit = () => {
    console.log(this.state.answers);
    const id = this.props.match.params.id;

    const cookies = new Cookies();

    axios
      .post(
        `http://localhost:9000/test_respons/${cookies.get(
          "userid"
        )}/${cookies.get("username")}/${id}`,
        {
          answers: this.state.answers,
        }
      )
      .then((response) => {
        console.log(response);
      });
    alert("Submitted Successfully!");
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
    console.log(this.state.selectedOption);

    const questions = this.state.questions.map((question, i) => {
      return (
        <UserTestCard
          key={i}
          questions={question.question}
          optionA={question.options[0].A}
          optionB={question.options[0].B}
          optionC={question.options[0].C}
          optionD={question.options[0].D}
          marks={question.marks}
          id={question._id}
          onChange={(e) => this.onValueChange(e, i)}
        />
      );
    });

    return (
      <div>
        <Navigation />
        <Jumbotron className="test-details">
          <h4 className="display-3 test-name">{this.state.details.name}</h4>
          <h4 className="test-name">
            Status :
            <FiberManualRecordIcon
              className="live-icon"
              style={{ color: green[600] }}
            />{" "}
            {this.state.details.status}
          </h4>
          <h4 className="test-name">Subject : {this.state.details.subject}</h4>
          {/* <p className="test-id">ID : {this.state.details._id}</p> */}
        </Jumbotron>

        <form onSubmit={this.onSubmit}>
          {questions}
          <Button className="submit-btn-test" type="submit" value="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(UserTest);
