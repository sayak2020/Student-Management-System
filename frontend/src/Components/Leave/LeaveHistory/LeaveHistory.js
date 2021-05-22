import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Jumbotron } from "reactstrap";

import "./LeaveHistory.css";
import Navigation from "../../Navigation";

function LeaveHistory() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Approved Leave Applications");

  useEffect(() => {
    (async () => {
      const cookies = new Cookies();
      const result = await axios(
        `http://localhost:9000/leave/${cookies.get("userid")}`
      );
      if (result.data.leaveApplications.length == 0) {
        setMessage("No Approved Leave Applications");
      } else {
        setAllData(result.data.leaveApplications);
      }
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Approved Leave Applications")) {
      return "";
    } else {
      let headerElement = ["id", "from", "to", "cause", "status"];

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
      allData.map(({ id, leaveID, from, to, cause, status }) => {
        return (
          <tr key={id}>
            <td>{leaveID}</td>

            <td>{from}</td>
            <td>{to}</td>
            <td>{cause}</td>
            <td>{status}</td>
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
      <table id="approve-exam">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
}

export default LeaveHistory;
