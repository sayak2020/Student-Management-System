import React, { Component } from "react";
import { Card, Button, CardHeader, CardText, Row, Col } from "reactstrap";
import "./UserTestCard.css";

class UserTestCard extends Component {
  onHandleChange = () => {};
  render() {
    return (
      <Card className="test-card">
        <form className="text-left">
          <p>Question : {this.props.questions}</p>
          <div className="">A : {this.props.optionA}</div>
          <div className="">B : {this.props.optionB}</div>
          <div className="">C : {this.props.optionC}</div>
          <div className="value-D">D : {this.props.optionD}</div>
          <input
            type="radio"
            id="A"
            name="option"
            value="A"
            onChange={this.props.onChange}
          />
          <label className="options" for="A">
            A
          </label>
          <input
            type="radio"
            id="B"
            name="option"
            value="B"
            onChange={this.props.onChange}
          />
          <label className="options" for="B">
            B
          </label>
          <input
            type="radio"
            id="C"
            name="option"
            value="C"
            onChange={this.props.onChange}
          />
          <label className="options" for="C">
            C
          </label>
          <input
            type="radio"
            id="D"
            name="option"
            value="D"
            onChange={this.props.onChange}
          />
          <label className="options" for="D">
            D
          </label>
        </form>
      </Card>
    );
  }
}

export default UserTestCard;
