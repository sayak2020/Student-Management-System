import React, { Component } from "react";
import { Card, Button, CardHeader, CardText, Row, Col } from "reactstrap";

class UserTestCard extends Component {
  onHandleChange = () => {};
  render() {
    return (
      <form>
        <p>Question:{this.props.questions}</p>
        <div className="">A: {this.props.optionA}</div>
        <div className="">B: {this.props.optionB}</div>
        <div className="">C: {this.props.optionC}</div>
        <div className="">D: {this.props.optionD}</div>
        <input
          type="radio"
          id="A"
          name="option"
          value="A"
          onChange={this.props.onChange}
        />
        <label for="A">A</label>
        <input
          type="radio"
          id="B"
          name="option"
          value="B"
          onChange={this.props.onChange}
        />
        <label for="B">B</label>
        <input
          type="radio"
          id="C"
          name="option"
          value="C"
          onChange={this.props.onChange}
        />
        <label for="C">C</label>
        <input
          type="radio"
          id="D"
          name="option"
          value="D"
          onChange={this.props.onChange}
        />
        <label for="D">D</label>
      </form>
    );
  }
}

export default UserTestCard;
