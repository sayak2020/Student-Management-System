import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Card } from "reactstrap";
import LeaveTable from "./LeaveTable";
import "./LeaveHistory.css";

function LeaveHistory() {
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const cookies = new Cookies();
      const result = await axios(
        `http://localhost:9000/leave/${cookies.get("userid")}`
      );
      setData(result.data.leaveApplications);
      console.log(result.data);
    })();
  }, []);

  const columns = useMemo(() => [
    {
      Header: "From",
      accessor: "from",
    },
    {
      Header: "To",
      accessor: "to",
    },

    {
      Header: "Cause",
      accessor: "cause",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ]);

  return (
    <div>
      <Card className="card-profile shadow tableleave">
        <LeaveTable data={data} columns={columns} />
      </Card>
    </div>
  );
}

export default LeaveHistory;
