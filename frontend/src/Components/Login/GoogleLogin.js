import React, { Component } from "react";
import { Button } from "reactstrap";

class GoogleLogin extends Component {
  render() {
    return (
      <div className="btn-wrapper text-center">
        <Button
          className="btn-neutral btn-icon"
          color="default"
          href="http://localhost:9000/login/auth/google"
        >
          <span className="btn-inner--icon">
            <img
              alt="..."
              src={require("../../img/icons/common/google.svg").default}
            />
          </span>
        </Button>
      </div>
    );
  }
}

export default GoogleLogin;
