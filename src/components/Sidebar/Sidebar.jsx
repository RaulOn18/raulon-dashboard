import React, { useState } from "react";
import { Logo } from "../../imgs";
import { motion } from "framer-motion";

import { SidebarData } from "../../Data";
import { UilBars, UilSignOutAlt } from "@iconscout/react-unicons";

import "./Sidebar.css";

// Rename this function
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sideBarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bar"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sideBarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
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
      </motion.div>
    </>
  );
};

export default Sidebar;
