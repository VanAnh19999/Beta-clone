import React, { useEffect, useState } from "react";
import { ticketService } from "../../http/ticket_service";
import { Table } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "E-Mail",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Center",
    dataIndex: "center",
    key: "center",
  },
  {
    title: "Movie",
    dataIndex: "movie",
    key: "movie",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  }
];
const UserTable = () => {
  const email = localStorage.getItem("email");
  const [data, setData] = useState([]);
  useEffect(() => {
    ticketService
      .getTicket(email)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        throw err;
      });
  }, [email]);

  return <div>
    <Table dataSource={data} columns={columns} pagination={false}/>
  </div>
};

export default UserTable
