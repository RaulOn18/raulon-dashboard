import React, { useState } from "react";
import { Logo } from "../../imgs";

import { SidebarData } from "../../Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

import "./SideBar.css";

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* LOGO */}
      <div className="logo">
        <img src={Logo} alt="RaulOn Logo" />
        <span>
          Raul<span>O</span>n
        </span>
      </div>
      {/* LOGO */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
