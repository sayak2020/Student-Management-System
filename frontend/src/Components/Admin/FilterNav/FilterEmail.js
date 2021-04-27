import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import LeaveFilter from "./LeaveFilter";
import Table from "./LeaveTable";
import { Card, Button } from "reactstrap";
import { useParams } from "react-router-dom";

function FilteredLeave() {
  let { email } = useParams();
  console.log({ email });
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios(
        `http://localhost:9000/admin_leave/approved/${email}`
      );
      setData(result.data.leaveApplications);
      console.log(result.data);
    })();
  }, []);

  const columns = useMemo(() => [
    {
      Header: "LeaveId",
      accessor: "leaveID",
    },
    {
      Header: "Email",
      accessor: "email",
    },
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
        <Table data={data} columns={columns} />
      </Card>
    </div>
  );
}

export default FilteredLeave;
