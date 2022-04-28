import React from "react";
import { Updates, CustomerReview } from "../";

import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Costumer Riview</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
