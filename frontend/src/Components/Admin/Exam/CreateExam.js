import React, { Component } from "react";
import { Button, Form, Jumbotron, Input } from "reactstrap";
import axios from "axios";

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

    // console.log(this.state);

    axios
      .post("http://localhost:9000/test", {
        name: this.state.name,
        subject: this.state.subject,
        questions: this.state.questions,
      })
      .then((response) => {
        console.log(response);
        // if (!response.data.errmsg) {
        //   console.log("successful signup");
        //   this.setState({
        //     //redirect to login page
        //     redirectTo: "/login",
        //   });
        // } else {
        //   console.log("username already taken");
        // }
      })
      .catch((error) => {
        // console.log("signup error: ");
        console.log(error.response);
      });
  }

  render() {
    const inputs = [];
    // const q = [];

    for (let i = 0; i < this.state.numQuestion; i++) {
      inputs.push(
        <input
          placeholder="Question name"
          name={`question`}
          onChange={(e) => this.onChange(i, e.target.name, e.target.value)}
          required
        />,
        <br />,
        <input
          placeholder="Option A"
          name={`A`}
          onChange={(e) =>
            this.onChangeOption(i, e.target.name, e.target.value)
          }
          required
        />,

        <input
          placeholder="Option B"
          name={`B`}
          onChange={(e) =>
            this.onChangeOption(i, e.target.name, e.target.value)
          }
          required
        />,

        <input
          placeholder="Option C"
          name={`C`}
          onChange={(e) =>
            this.onChangeOption(i, e.target.name, e.target.value)
          }
          required
        />,

        <input
          placeholder="Option D"
          name={`D`}
          onChange={(e) =>
            this.onChangeOption(i, e.target.name, e.target.value)
          }
          required
        />,
        <br />,
        <input
          placeholder="Answer"
          name={`ans`}
          onChange={(e) => this.onChange(i, e.target.name, e.target.value)}
          required
        />,
        <br />,
        <input
          placeholder="Marks"
          name={`marks`}
          onChange={(e) => this.onChange(i, e.target.name, e.target.value)}
          required
        />,
        <br />
      );
    }
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Create Exam</h1>
        </Jumbotron>
        <Form role="form" onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <Input
            type="name"
            value={this.state.name}
            onChange={(event) =>
              this.setState({
                name: event.target.value,
              })
            }
            required
          />
          <h3>Subject</h3>
          <Input
            type="code"
            value={this.state.subject}
            onChange={(event) =>
              this.setState({
                subject: event.target.value,
              })
            }
            required
          />
          <h3>Enter no of question</h3>
          <input
            onChange={(e) =>
              this.setState({ totalNumQuestion: e.target.value })
            }
            value={this.state.totalNumQuestion}
            placeholder="Enter Number of Questions"
          />
          <button onClick={this.add}>Add</button>
          <br />

          {inputs}
          <Button type="submit" value="Submit" color="primary">
            Submit
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}
export default CreateExam;
