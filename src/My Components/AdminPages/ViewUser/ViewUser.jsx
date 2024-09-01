import React, { useState } from "react";
import "./ViewUser.css";
import ViewArtist from "./ViewArtist/ViewArtist";
import { Outlet, useLocation } from "react-router-dom";

function ViewUser() {
  const [activeTab, setActiveTab] = useState(1);
  const { pathname } = useLocation();
  let activeText;
  switch (activeTab) {
    case 2:
      activeText = "Patron";
      break;
    case 3:
      activeText = "Partner";
      break;
    case 4:
      activeText = "Art Lover";
      break;
    default:
      activeText = "Artist";
      break;
  }

  return (
    <div className="admin-view-User-cont">
      {pathname == "/admin/view-user" || pathname == "/admin/view-user/" ? (
        <>
          <h2>{`View ${activeText}`}</h2>
          <div className="admin-view-cont-tab">
            <button
              className={
                activeTab === 1
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(1)}
            >
              Artist
            </button>
            <button
              className={
                activeTab === 2
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(2)}
            >
              Patron
            </button>
            <button
              className={
                activeTab === 3
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(3)}
            >
              Partner
            </button>
            <button
              className={
                activeTab === 4
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(4)}
            >
              Art Lover
            </button>
          </div>
          {activeTab === 1 && <ViewArtist type={activeText} />}
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default ViewUser;
