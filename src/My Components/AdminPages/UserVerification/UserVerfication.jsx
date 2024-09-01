import React, { useEffect, useState } from "react";

import { Navbar } from "react-bootstrap";
import Artist_navbar from "../../ArtisitPages/Artist_navbar";
import ButtonComponent from "../AdminComponent/ButtonComponent/ButtonComponent";
import "./UserVerification.css";
import RequestCard from "../AdminComponent/RequestCard/RequestCard";
import Footer from "../../Footer/Footer";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { Admin } from "../../../services/apis";
import { useSelector } from "react-redux";

function UserVerfication() {
  const [activeTab, setActiveTab] = useState(1);
  const arr = [1, 2, 23, 3, 3, 33, 3, 33, 3, 3, 3, 3];
  const [users, setUsers] = useState([]);

  const { accessToken } = useSelector((state) => state.auth);
  console.log(accessToken);
  const fetchAllUsers = async () => {
    const response = await makeAuthenticatedGETRequest(
      Admin.GET_ALL_USERS,
      accessToken
    );
    setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="admin-page-root-container">
      {/* <Artist_navbar /> */}
      <div className="section-division-admin">
        <div className="admin-left-part-conatiner">
          <div className="admin-status-btn-container">
            <button
              className={
                activeTab === 1
                  ? `admin-status-btn active-btnn`
                  : `admin-status-btn`
              }
              onClick={() => setActiveTab(1)}
            >
              All Users
            </button>
            <button
              className={
                activeTab === 2
                  ? `admin-status-btn active-btnn`
                  : `admin-status-btn`
              }
              onClick={() => setActiveTab(2)}
            >
              Verification Request
            </button>
            <button
              className={
                activeTab === 3
                  ? `admin-status-btn active-btnn`
                  : `admin-status-btn`
              }
              onClick={() => setActiveTab(3)}
            >
              Approved Request
            </button>
            <button
              className={
                activeTab === 4
                  ? `admin-status-btn active-btnn`
                  : `admin-status-btn`
              }
              onClick={() => setActiveTab(4)}
            >
              Rejected Request
            </button>
          </div>
          <div className="admin-status-filter-cont">
            <div className="input-st-cont ">
              {/* <img src="" alt="" /> */}
              <input type="text" placeholder="Search by User" />
            </div>
            <div className="input-st-cont2">
              <p>Sort by </p>
              <select>
                <option>New User</option>
                <option>Old User</option>
              </select>
            </div>
          </div>
        </div>
        <div className="admin-right-part-container">
          {activeTab === 1 &&
            users?.map((item, index) => {
              return (
                <RequestCard
                  key={index}
                  name={`${item.firstName} ${item.lastName}`}
                  VerficationTag={true}
                  Verified={true}
                  id={item._id}
                  role={item.role}
                />
              );
            })}
          {/* {activeTab === 2 &&
            arr.map((item, index) => {
              return (
                <RequestCard
                  key={index}
                  name="Dael Steyn"
                  VerificationRequest={true}
                />
              );
            })}
          {activeTab === 3 &&
            arr.map((item, index) => {
              return (
                <RequestCard
                  key={index}
                  name="Dael Steyn"
                  ApprovedRequests={true}
                />
              );
            })}
          {activeTab === 4 &&
            arr.map((item, index) => {
              return (
                <RequestCard
                  key={index}
                  name="Dael Steyn"
                  RejectedRequests={true}
                />
              );
            })} */}
        </div>
      </div>
      <div className="pagination-admin">
        <AiOutlineLeft size={25} className="icon-left-admin" />
        <p>1</p>
        <AiOutlineRight size={25} className="icon-left-admin" />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default UserVerfication;
