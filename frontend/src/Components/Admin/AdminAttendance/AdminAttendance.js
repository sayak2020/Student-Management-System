import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import Table from "./Table";
import { Card } from "reactstrap";
import { useParams } from "react-router-dom";

function AdminAttendance() {
  let { email } = useParams();
  console.log({ email });
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const cookies = new Cookies();
      const result = await axios(
        `http://localhost:9000/admin_attendence/${email}`
      );
      setData(result.data.student_attd);
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
      <Card className="card-profile shadow tableattend">
        <Table data={data} columns={columns} />
      </Card>
    </div>
  );
}

export default AdminAttendance;
