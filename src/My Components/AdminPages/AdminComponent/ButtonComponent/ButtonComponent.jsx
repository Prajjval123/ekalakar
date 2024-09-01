import React from "react";
import "./ButtonComponent.css";

function ButtonComponent({
  label,
  onClick = () => {},
  styling = {},
  Logo,
  count,
}) {
  return (
    <div className="buttonComponent" style={styling} onClick={() => onClick()}>
      {Logo && <img src={Logo} alt="" width={15} />}
      {label && (
        <div className="buttonComponent_label">
          {label}({count})
        </div>
      )}
    </div>
  );
}

export default ButtonComponent;
