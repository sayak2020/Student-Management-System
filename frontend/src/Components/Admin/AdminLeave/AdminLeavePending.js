import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Jumbotron } from "reactstrap";
import "./AdminLeave.css";

function AdminLeavePending() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Pending Leave Applications");

  useEffect(() => {
    (async () => {
      const result = await axios(
        "http://localhost:9000/admin_leave/view/pending"
      );
      if (result.data.leaveApplications.length == 0) {
        setMessage("No Pending Leave Applications");
      } else {
        setAllData(result.data.leaveApplications);
      }

      console.log(result.data.leaveApplications.length);
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Pending Leave Applications")) {
      return "";
    } else {
      let headerElement = ["id", "email", "from", "to", "cause", "status"];

      return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  };

  const renderBody = () => {
    return (
      allData &&
      allData.map(({ id, leaveID, email, from, to, cause, status }) => {
        return (
          <tr key={id}>
            <td>{leaveID}</td>
            <td>{email}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{cause}</td>
            <td>{status}</td>

            <td className="operation">
              <button className="button" onClick={() => approved(leaveID)}>
                Approve
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  const approved = (leaveID) => {
    axios
      .get(`http://localhost:9000/admin_leave/approve/${leaveID}`)
      .then((res) => {
        const del = allData.filter((data) => leaveID !== data.id);
        setAllData(del);
        window.location.reload(false);
      });
  };

  return (
    <>
      <Jumbotron className="heading-leave">
        <h1 className="display-3 ">{message}</h1>
      </Jumbotron>
      <table id="pending">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
}

export default AdminLeavePending;
