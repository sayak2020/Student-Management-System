import React from "react";
import axios from "axios";
import { Jumbotron } from "reactstrap";
import { withRouter } from "react-router-dom";
import StudentCard from "../StudentProfiles/StudentCard";

class FilterStream extends React.Component {
  state = {
    users: [],
    message: "",
  };

  componentDidMount() {
    const stream = this.props.match.params.stream;
    console.log({ stream });
    axios
      .get(` http://localhost:9000/admin_viewprofile/stream/${stream}`)
      .then((response) => {
        if (response.data.student.length == 0) {
          this.setState({ message: "No User Found" });
        } else {
          this.setState({ users: response.data.student });
        }
      });
  }
  render() {
    const users = this.state.users.map((user) => {
      return (
        <StudentCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          street={user.address.street}
          city={user.address.city}
          stream={user.class.stream}
          section={user.class.section}
          year={user.class.year}
          pin={user.address.pin}
        />
      );
    });
    if (this.state.message) {
      return (
        <Jumbotron classname="top-bar">
          <h1 className="display-3  "> {this.state.message}</h1>
        </Jumbotron>
      );
    } else {
      return <div>{users}</div>;
    }
  }
}

export default withRouter(FilterStream);
