import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

import "react-circular-progressbar/dist/styles.css";
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded
        ? <ExpandedCard params={props} setExpanded={() => setExpanded(false)} />
        : <CompactCard params={props} setExpanded={() => setExpanded(true)} />}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({ params, setExpanded }) {
  const Png = params.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        />
        <span>{params.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${params.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ params, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      toolTip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{params.title}</span>
      <div className="chartContainer">
        <Chart series={params.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
