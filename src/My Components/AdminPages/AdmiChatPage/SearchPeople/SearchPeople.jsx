import React from "react";
import "./SearchPeople.css";
import Avatar from "../../AdminComponent/Avatar/Avatar";

function SearchPeople({ name, msg, time, unread }) {
  return (
    <div className="search-people-cont">
      <Avatar styling={{ width: "60px" }} />
      <div className="search-name-last-msg">
        <h2>{name}</h2>
        <p>{msg}</p>
      </div>
      <div className="time-cont">
        <p>{time}</p>
        <div>{unread}</div>
      </div>
    </div>
  );
}

export default SearchPeople;
