import React from "react";
import "./Avatar.css";

function Avatar({ userImage, styling = {} }) {
  return (
    <div className="admin-avatar-container" style={styling}>
      {userImage == null ? (
        <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
      ) : (
        <img src={userImage} />
      )}
    </div>
  );
}

export default Avatar;
