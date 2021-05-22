import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./Attendance.css";
import { Card, Jumbotron } from "reactstrap";
import { useParams } from "react-router-dom";

function AdminAttendance() {
  let { email } = useParams();
  console.log({ email });
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Attendance");

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios(
        `http://localhost:9000/admin_attendence/${email}`
      );
      console.log(result.data);
      if (result.data.student_attd.length == 0) {
        setMessage("No Attendance Found");
      } else {
        setAllData(result.data.student_attd);
      }
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Attendance")) {
      return "";
    } else {
      let headerElement = ["date", "time", "subject"];

      return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
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

export default AdminAttendance;
