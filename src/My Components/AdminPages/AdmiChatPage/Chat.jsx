import React, { useState } from "react";
import "./Chat.css";
import SearchPeople from "./SearchPeople/SearchPeople";
import ChatScreen from "./ChatScreen/ChatScreen";

function Chat() {
  return (
    <div className="root-admin-cont">
      <div className="admin-chat-section">
        <div className="admin-search-section">
          <div className="search-cont">
            <input type="text" placeholder="Search" />
          </div>
          <div className="people-cont">
            <h1>People</h1>
            <SearchPeople
              name="freedy"
              unread="2"
              msg="hlo"
              time="Today,9:12pm"
            />
            <SearchPeople
              name="Dael Steyn"
              unread="2"
              msg="hellleo"
              time="Yesterday,9:12pm"
            />
            <SearchPeople
              name="Clark"
              unread="1"
              msg="hlo"
              time="Today,1:12pm"
            />
          </div>
        </div>
        <div className="admin-chat-cc">
          <ChatScreen />
        </div>
      </div>
    </div>
  );
}

export default Chat;
