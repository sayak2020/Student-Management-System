import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

class GoogleLogin extends Component {
  // // state = {
  // //     user: [],
  // //     useraddress: [],
  // //     userclass: [],
  // //   };

  // componentDidMount() {
  //   //const cookies = new Cookies();

  //   axios
  //     .head("http://localhost:9000/login/auth/google/secrets/?:id")
  //     .then((response) => {
  //       // if (response.data.student.name == null) {
  //       //   response.data.student.name = " ";
  //       // }
  //       console.log(response.headers);
  //       // this.setState({ user: response.data.student });
  //       // this.setState({ useraddress: response.data.student.address });
  //       // this.setState({ userclass: response.data.student.class });
  //     });
  // }
  render() {
    return (
      <div className="btn-wrapper text-center">
        <Button
          className="btn-neutral btn-icon"
          color="default"
          href="http://localhost:9000/login/auth/google"
          //onClick={this.googleLogin}
        >
          <span className="btn-inner--icon">
            <img
              alt="..."
              src={require("../../img/icons/common/google.svg").default}
            />
          </span>
          <span className="btn-inner--text">oogle</span>
        </Button>
      </div>
    );
  }
}

export default GoogleLogin;
