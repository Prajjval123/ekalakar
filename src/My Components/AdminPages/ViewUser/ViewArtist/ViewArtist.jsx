import React from "react";
import "./ViewArtist.css";
import search from "../../assets/search.svg";
import ViewCard from "../ViewCard/ViewCard";
import { useParams } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../../../../services/serverHelper";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Admin } from "../../../../services/apis";

function ViewArtist({ type }) {
  const [users, setUsers] = useState([]);

  const { accessToken } = useSelector((state) => state.auth);

  const fetchData = async () => {
    const response = await makeAuthenticatedGETRequest(
      `${Admin.GET_ALL_USERS}?type=${type}`,
      accessToken
    );
    setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="view-artist-admin-root-cnt">
      <div className="view-artist-input-cont">
        <input type="text" />
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      <h2>Filter Applied:</h2>
      <div className="d-flex flex-column gap-4">
        {users?.map((i, index) => {
          return <ViewCard userData={i} />;
        })}
      </div>
    </div>
  );
}

export default ViewArtist;
