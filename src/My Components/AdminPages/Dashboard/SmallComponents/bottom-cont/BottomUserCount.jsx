import React from "react";
import "./BottomUserCount.css";

function BottomUserCount({ label, count }) {
  return (
    <div className="db-bt-c-content">
      <p>{label}</p>
      <h6>{count}</h6>
    </div>
  );
}

export default BottomUserCount;
