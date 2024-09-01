import React, { useState, useEffect } from "react";
import "./ViewApplicants.css";
import search from "../assets/search.svg";
import ViewCard from "../ViewUser/ViewCard/ViewCard";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { Admin } from "../../../services/apis";

function ViewApplicants() {
  const { accessToken } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const { pathname } = useLocation();

  console.log(pathname);

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

  const fetchData = async () => {
    const response = await makeAuthenticatedGETRequest(
      `${Admin.GET_ALL_USERS}?type=Artist}`,
      accessToken
    );
    setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-view-User-cont">
      {pathname == "/admin/view-applicants" ? (
        <>
          <h2>View Applicants</h2>
          <div className="admin-view-cont-tab vw-applicant">
            <button
              className={
                activeTab === 1
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(1)}
            >
              Saved
            </button>
            <button
              className={
                activeTab === 2
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(2)}
            >
              Applied
            </button>
            <button
              className={
                activeTab === 3
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(3)}
            >
              In-Progress
            </button>
            <button
              className={
                activeTab === 4
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(4)}
            >
              Hired
            </button>
            <button
              className={
                activeTab === 5
                  ? `admin-status-btn-user active-btnn`
                  : `admin-status-btn-user`
              }
              onClick={() => setActiveTab(5)}
            >
              Rejected
            </button>
          </div>
          {activeTab >= 0 && (
            <div>
              {users?.map((i, index) => {
                return <ViewCard userData={i} />;
              })}
            </div>
          )}
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default ViewApplicants;
