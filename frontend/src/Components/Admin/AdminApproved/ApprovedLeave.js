import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "reactstrap";

import { Button } from "reactstrap";

function ApprovedLeave() {
  let { email } = useParams();
  console.log({ email });
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("");

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios(
        `http://localhost:9000/admin_leave/approved/${email}`
      );
      if (result.data.leaveApplications.length == 0) {
        setMessage("No Approved Leave Applications");
      } else {
        setAllData(result.data.leaveApplications);
      }
    })();
  }, []);
  // const columns = useMemo(() => [
  //   {
  //     Header: "LeaveId",
  //     accessor: "leaveID",
  //   },
  //   {
  //     Header: "Email",
  //     accessor: "email",
  //   },
  //   {
  //     Header: "From",
  //     accessor: "from",
  //   },
  //   {
  //     Header: "To",
  //     accessor: "to",
  //   },

  //   {
  //     Header: "Cause",
  //     accessor: "cause",
  //   },
  //   {
  //     Header: "Status",
  //     accessor: "status",
  //   },
  //   //<Button>Approve</Button>,
  // ]);

  const renderHeader = () => {
    if (message) {
      return message;
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
          </tr>
        );
      })
    );
  };

  return (
    <>
      <h1 id="title">Approved Leave Application</h1>
      <table id="">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
}

export default ApprovedLeave;
