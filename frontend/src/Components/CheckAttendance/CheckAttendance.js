import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import "./CheckAttendance.css";
import { Jumbotron } from "reactstrap";

import Navigation from "../Navigation";

function CheckAttendance() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Attendance");

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const cookies = new Cookies();
      const result = await axios(
        `http://localhost:9000/attendence/${cookies.get("userid")}`
      );
      if (result.data.attendance.length == 0) {
        setMessage("No Attendance Found");
      } else {
        setAllData(result.data.attendance);
      }

      console.log(result.data);
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Attendance")) {
      return "";
    } else {
      let headerElement = ["date", "time", "subject"];

      return headerElement.map((key, index) => {
        return (
          <th className="check-attd" key={index}>
            {key.toUpperCase()}
          </th>
        );
      });
    }
  };

  const renderBody = () => {
    return (
      allData &&
      allData.map(({ id, date, time, subject }) => {
        return (
          <tr key={id}>
            <td>{date}</td>
            <td>{time}</td>
            <td>{subject}</td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <Navigation />
      <Jumbotron className="heading-leave">
        <h1 className="display-3 ">{message}</h1>
      </Jumbotron>
      <table id="attendance">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
}

export default CheckAttendance;
