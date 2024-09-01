import React from "react";
import "./Input.css";

function Input({ label, placeholder, type }) {
  return (
    <div className="admin-input-cont">
      <label className="d-flex flex-column gap-2 m-0">
        <p className="m-0">{label}</p>
        <input
          className="flex-grow-1"
          type={type ? type : "text"}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default Input;
