import React, { Component } from "react";
import { Card, Button, CardHeader, CardText, Row, Col } from "reactstrap";

const UserTestCard = (props) => {
  return (
    <form>
      <p>Question:{props.questions}</p>

      <div className="radio">
        <input
          type="radio"
          value={props.optionA}
          checked={props.selected === props.optionA}
          onChange={props.onChange}
        />
        A: {props.optionA}
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value={props.optionB}
            checked={props.selected === props.optionB}
            onChange={props.onChange}
          />
          B: {props.optionB}
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value={props.optionC}
            checked={props.selected === props.optionC}
            onChange={props.onChange}
          />
          C: {props.optionC}
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value={props.optionD}
            checked={props.selected === props.optionD}
            onChange={props.onChange}
          />
          D: {props.optionD}
        </label>
      </div>
      <div>Selected option is : {props.selected}</div>
    </form>
  );
};

export default UserTestCard;
