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
    // let answers = this.state.answers;
    // answers.push(e.target.value);
    // this.setState({ answers });
    // console.log("selected option", e.target.value);
    // console.log("id", id);
    this.setState({ selectedOption: e.target.value, id: id });
    console.log(this.state.answers);

    this.state.answers[id] = e.target.value;
    // this.setState({ answers: answers });
    console.log(this.state.answers);
  }

  onSubmit = () => {
    console.log(this.state.answers);

    axios
      .post("http://localhost:9000/test_respons/31", {
        answers: this.state.answers,
        email: "sayak",
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
      });
  };
  // postDataHandler = () => {
  //   const post = {
  //     from: this.state.from,
  //     to: this.state.to,
  //     cause: this.state.cause,
  //   };

  //   this.setState({ message: "Application for leave given" });

  //   const cookies = new Cookies();

  //   axios.post(
  //     `http://localhost:9000/leave/${cookies.get("userid")}/${cookies.get(
  //       "username"
  //     )}`,
  //     post
  //   );
  // };

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
    // for (let i = 0; i < this.state.questions.length; i++) {
    //   return (
    //     <UserTestCard
    //       questions={this.state.questions[i].question}
    //       optionA={this.state.questions[i].options[0].A}
    //       optionB={this.state.questions[i].options[0].B}
    //       optionC={this.state.questions[i].options[0].C}
    //       optionD={this.state.questions[i].options[0].D}
    //       marks={this.state.questions[i].marks}
    //       id={this.state.questions[i]._id}
    //       onChange={(e) => this.onValueChange(e, i)}
    //     />
    //   );
    // }
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
    // const questions = this.state.questions.map((question) => {
    //   console.log(this.state.answers);
    //   return (
    //     <UserTestCard
    //       questions={question.question}
    //       optionA={question.options[0].A}
    //       optionB={question.options[0].B}
    //       optionC={question.options[0].C}
    //       optionD={question.options[0].D}
    //       marks={question.marks}
    //       onChange={(e) => this.onValueChange(e)}
    //       selected={this.state.selectedOption}
    //     />
    //   );
    // });
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

        <form onSubmit={this.onSubmit}>
          {questions}
          <Button type="submit" value="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(UserTest);
