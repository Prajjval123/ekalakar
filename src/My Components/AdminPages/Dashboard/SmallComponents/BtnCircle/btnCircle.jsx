import "./btnCircle.css";
import React from "react";

function BtnCircle({ img, userCount, label, action = () => {} }) {
  return (
    <div onClick={action} className="live-user-btn-circle">
      <img src={img} alt="" />
      <p>{label}</p>
      <h6>{userCount}</h6>
    </div>
  );
}

export default BtnCircle;
