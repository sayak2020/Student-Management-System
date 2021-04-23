import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import AdminTable from "./AdminTable";
import AdminFilter from "./AdminFilter";

function Admin() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  // const [searhColumns, setSearchColumns] = useState(["name", "stream"]);
  // console.log(searchTerm);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:9000/admin_viewprofile");
      setData(result.data.student);
      // setSearchTerm(result.data.student);
      console.log(result.data.student);
    })();
  }, []);

  const columns = useMemo(() => [
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Name",
      accessor: "name",
    },

    {
      Header: "Id",
      accessor: "userid",
    },
    {
      Header: "Address",
      columns: [
        {
          Header: "City",
          accessor: "address.city",
        },
        {
          Header: "Pin",
          accessor: "address.pin",
        },
        {
          Header: "Street",
          accessor: "address.street",
        },
      ],
    },
    {
      Header: "Class",
      columns: [
        {
          Header: "Section",
          accessor: "class.section",
        },
        {
          Header: "Stream",
          accessor: "class.stream",
        },
        {
          Header: "Year",
          accessor: "class.year",
        },
      ],
    },
  ]);

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  return (
    <div>
      <input
        type="text"
        value={q}
        placeholder="search"
        onChange={(e) => setQ(e.target.value)}
      />
      <AdminTable data={search(data)} />;
    </div>
  );
}

export default Admin;
