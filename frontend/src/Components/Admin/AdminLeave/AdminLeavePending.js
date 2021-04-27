import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Card } from "reactstrap";

import { Button } from "reactstrap";

function AdminLeavePending() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("");

  // Using useEffect to call the API once mounted and set the data
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
      <h1 id="title">Pending Leave Application</h1>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
}

export default AdminLeavePending;
