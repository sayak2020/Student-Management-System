import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import Table from "./Table";
import { Card } from "reactstrap";
import "./CheckAttendance.css";
import Navigation from "../Navigation";

function CheckAttendance() {
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const cookies = new Cookies();
      const result = await axios(
        `http://localhost:9000/attendence/${cookies.get("userid")}`
      );
      setData(result.data.attendance);
      console.log(result.data);
    })();
  }, []);

  const columns = useMemo(() => [
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Time",
      accessor: "time",
    },

    {
      Header: "Subject",
      accessor: "subject",
    },
  ]);

  return (
    <div>
      <Navigation />
      <Card className="card-profile shadow tableattend">
        <Table data={data} columns={columns} />
      </Card>
    </div>
  );
}

export default CheckAttendance;
