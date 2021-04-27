import React, { Component } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import Navigation from "../FilterNav/Navigation";

class StudentProfile extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("http://localhost:9000/admin_viewprofile").then((response) => {
      // console.log(response.data);
      this.setState({ users: response.data.student });
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
    return (
      <div>
        <Navigation />
        {users}
      </div>
    );
  }
}

export default StudentProfile;
