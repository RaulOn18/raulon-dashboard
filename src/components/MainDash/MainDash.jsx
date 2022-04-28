import React from "react";
import { Cards, Table } from "../";

import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>DashBoard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
