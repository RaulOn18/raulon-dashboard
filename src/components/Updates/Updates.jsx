import React from "react";
import { UpdatesData } from "../../Data";

import "./Updates.css";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update, id) => (
        <div className="update" key={id}>
          <img src={update.img} alt={update.name} />
          <div className="noti">
            <div style={{ marginBottom: "0.5rem" }}>
              <span>{update.name} </span>
              <span>{update.noti}</span>
            </div>
            <span>{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
