import React from "react";
import "./LiveUserButton.css";

function LiveUserButton({ img, userCount, label, action = () => {} }) {
  return (
    <div onClick={action} className="live-user-btn">
      <img src={img} alt="" />
      <p>{label}</p>
      <h6>{userCount}</h6>
    </div>
  );
}

export default LiveUserButton;
