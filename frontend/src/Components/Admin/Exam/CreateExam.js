import React, { Component } from "react";
import { Button, Form, Jumbotron, Input, Card, Container } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./CreateExam.css";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import AdminNav from "../AdminLanding/AdminNav";

class CreateExam extends Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      numQuestion: 0,
      totalNumQuestion: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let quest = [];
    for (let i = 0; i < this.state.numQuestion; i++) {
      quest.push(null);
    }
    this.setState({ questions: quest });
  }

  add = () => {
    this.setState({
      numQuestion: this.state.totalNumQuestion,
    });
  };

  onChange = (index, name, value) => {
    // declare a temp questions array
    const questions = this.state.questions;
    // get the current question being changed
    const currentQuestion = questions[index];
    // if question has not been changed/added
    if (!currentQuestion) {
      const newQuestionObject = {
        question: "",
        options: [
          {
            A: "",
            B: "",
            C: "",
            D: "",
          },
        ],
        marks: "",
        ans: "",
      };

      newQuestionObject[name] = value;
      questions[index] = newQuestionObject;
      this.setState({ questions });
    } else {
      currentQuestion[name] = value;
      questions[index] = currentQuestion;
      this.setState({ questions });
    }
  };

  onChangeOption = (index, name, value) => {
    // declare a temp questions array
    const questions = this.state.questions;
    // get the current question being changed
    const currentQuestion = questions[index];
    // if question has not been changed/added
    if (!currentQuestion && currentQuestion.question) {
      const newQuestionObject = {
        question: "",
        options: [
          {
            A: "",
            B: "",
            C: "",
            D: "",
          },
        ],
        marks: "",
        ans: "",
      };

      newQuestionObject.options[0][name] = value;
      questions[index] = newQuestionObject;
      this.setState({ questions });
    } else {
      currentQuestion.options[0][name] = value;
      questions[index] = currentQuestion;
      this.setState({ questions });
    }
  };

  handleSubmit(event) {
    console.log(this.state.questions);
    event.preventDefault();

    axios
      .post("http://localhost:9000/test", {
        name: this.state.name,
        subject: this.state.subject,
        questions: this.state.questions,
      })
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        // console.log("signup error: ");
        console.log(error.response);
      });
    window.location.replace("/adminlanding");
  }

  render() {
    const inputs = [];
    // const q = [];

    for (let i = 0; i < this.state.numQuestion; i++) {
      inputs.push(
        <Card className="input-value">
          <h5>Question</h5>
          <input
            className="inputs"
            placeholder="Question name"
            name={`question`}
            onChange={(e) => this.onChange(i, e.target.name, e.target.value)}
            required
          />
          <br />
          <h5>Option A</h5>
          <input
            className="inputs"
            placeholder="Option A"
            name={`A`}
            onChange={(e) =>
              this.onChangeOption(i, e.target.name, e.target.value)
            }
            required
          />
          <h5>Option B</h5>
          <input
            className="inputs"
            placeholder="Option B"
            name={`B`}
            onChange={(e) =>
              this.onChangeOption(i, e.target.name, e.target.value)
            }
            required
          />
          <h5>Option C</h5>
          <input
            className="inputs"
            placeholder="Option C"
            name={`C`}
            onChange={(e) =>
              this.onChangeOption(i, e.target.name, e.target.value)
            }
            required
          />
          <h5>Option D</h5>
          <input
            className="inputs"
            placeholder="Option D"
            name={`D`}
            onChange={(e) =>
              this.onChangeOption(i, e.target.name, e.target.value)
            }
            required
          />
          <br />
          <h5>Answer</h5>
          <select
            className="inputs"
            name={`ans`}
            onChange={(e) => this.onChange(i, e.target.name, e.target.value)}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <br />
          <h5>Marks</h5>
          <input
            className="inputs"
            placeholder="Marks"
            type="number"
            name={`marks`}
            onChange={(e) => this.onChange(i, e.target.name, e.target.value)}
            required
          />
          <br />
        </Card>
      );
    }
    return (
      <div>
        <AdminNav />
        <Jumbotron className="jumbo-exam">
          <h1 className="display-3">Create Exam</h1>
        </Jumbotron>
        <Container>
          <Form role="form" onSubmit={this.handleSubmit}>
            <h5>Name</h5>
            <Input
              className="input-exam"
              type="name"
              value={this.state.name}
              onChange={(event) =>
                this.setState({
                  name: event.target.value,
                })
              }
              required
            />
            <h5>Subject</h5>
            <Input
              className="input-exam"
              type="code"
              value={this.state.subject}
              onChange={(event) =>
                this.setState({
                  subject: event.target.value,
                })
              }
              required
            />
            <h5>Enter no of question</h5>
            <input
              className="input-button"
              type="number"
              onChange={(e) =>
                this.setState({ totalNumQuestion: e.target.value })
              }
              value={this.state.totalNumQuestion}
            />

            <AddCircleOutlineOutlinedIcon
              className="add-btn"
              style={{ fontSize: 30 }}
              onClick={this.add}
            />
            <br />

            {inputs}
            <Button type="submit" value="Submit" color="primary">
              Submit
            </Button>
          </Form>
          <br />
        </Container>
      </div>
    );
  }
}
export default withRouter(CreateExam);
