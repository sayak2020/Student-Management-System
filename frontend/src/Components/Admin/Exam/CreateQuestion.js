import React, { Component } from "react";
import { Button, Form } from "reactstrap";

class CreateQuestion extends Component {
  constructor() {
    super();
    this.state = {
      numQuestion: 0,
      totalNumQuestion: "",
      show: false,
    };
  }

  add = () => {
    this.setState({
      numQuestion: this.state.totalNumQuestion,
    });
  };

  showValues = () => {
    this.setState({
      show: true,
    });
    console.log(this.state);
  };

  onChange = (event) => {
    
      [event.target.name]: event.target.value,
    
  };

  render() {
    const inputs = [];

    for (let i = 1; i <= this.state.numQuestion; i++) {
      inputs.push(
        <input
          placeholder="Question name"
          name={`question`}
          // onChange={this.onChange}
          required
        />,
        <br />,
        <input
          placeholder="Option A"
          name={`A`}
          // onChange={this.onChange}
          required
        />,

        <input
          placeholder="Option B"
          name={`B`}
          // onChange={this.onChange}
          required
        />,

        <input
          placeholder="Option C"
          name={`C`}
          // onChange={this.onChange}
          required
        />,

        <input
          placeholder="Option D"
          name={`D`}
          // onChange={this.onChange}
          required
        />,
        <br />,
        <input
          placeholder="Answer"
          name={`ans`}
          // onChange={this.onChange}
          required
        />,
        <br />,
        <input
          placeholder="Marks"
          name={`marks`}
          // onChange={this.onChange}
          required
        />,
        <br />
      );
      this.setState({
        questions: this.state.questions.concat(inputs),
      });
    }
    return (
      <div>
        <h3>Enter no of question</h3>
        <input
          onChange={(e) => this.setState({ totalNumQuestion: e.target.value })}
          value={this.state.totalNumQuestion}
          placeholder="Enter Number of Questions"
        />
        <button onClick={this.add}>Add</button>
        <br />
        <Form role="form" onSubmit={this.handleSubmit}>
          {inputs}
          <Button type="submit" value="Submit" color="primary">
            Submit
          </Button>
        </Form>
        <br />
        <button onClick={this.showValues}>Show Inputs values</button>
        {this.state.show && <pre>{JSON.stringify(this.state)}</pre>}
      </div>
    );
  }
}
export default CreateQuestion;
