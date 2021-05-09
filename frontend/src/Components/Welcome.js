import React from "react";
import { Jumbotron, Button } from "reactstrap";
import axios from "axios";
import Cookies from "universal-cookie";

class Welcome extends React.Component {
  state = {
    user: [],
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(`http://localhost:9000/student_profile/${cookies.get("userid")}`)
      .then((response) => {
        // if (response.data.student.name == null) {
        //   response.data.student.name = " ";
        // }
        console.log(response.data);
        this.setState({ user: response.data.student });
      });
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, {this.state.user.name}!</h1>
        </Jumbotron>
        <Button href="/exam">Give Exam</Button>
        <Button href="/notes">Notes</Button>
      </div>
    );
  }
}

export default Welcome;
