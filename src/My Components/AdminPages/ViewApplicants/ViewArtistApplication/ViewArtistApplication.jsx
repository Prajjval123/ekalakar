import React from "react";
import "./ViewArtistApplication.css";
import PortfolioDisplayTemplate from "../../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";
import OppurtunityCard from "./ArtistOppurtunity/OppurtunityCard";
import { useParams } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../../../../services/serverHelper";
import { Admin } from "../../../../services/apis";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PortfolioCardTemplateAdmin from "../../AdminComponent/ProtfolioCardTemplateAdmin/ProtfolioCardTemplateAdmin";

function ViewArtistApplication() {
  const [users, setUsers] = useState([]);
  const [oppurtunityData, setOppurtunityData] = useState([]);
  const { accessToken } = useSelector((state) => state.auth);

  const { id } = useParams();
  const fetchData = async () => {
    console.log(`${Admin.GET_USER_BY_ID}${id}`);
    const userDataResponse = await makeAuthenticatedGETRequest(
      `${Admin.GET_USER_BY_ID}${id}`,
      accessToken
    );
    console.log("Users    ->>>>>  ");
    setUsers(userDataResponse.data);

    const ArtistApplicantResponse = await makeAuthenticatedGETRequest(
      `${Admin.GET_ARTIST_APPLICANTS}${id}/applications`,
      accessToken
    );
    console.log("Oppurtunity  ->     > ");
    setOppurtunityData(ArtistApplicantResponse.data);
    console.log(ArtistApplicantResponse.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="root-view-card-cont">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <PortfolioCardTemplateAdmin portfolioData={users} />
      </div>
      <div className="root-oppurtunity-container">
        {oppurtunityData?.map((i, index) => {
          return (
            <OppurtunityCard
              key={index}
              title={"Dancer for Entertain the Regular Audience"}
              description={i?.opportunity.description}
              NatureOfArt={i?.opportunity.artNature}
              Category={i?.opportunity.category}
              Location={i?.opportunity.location}
              Date={i?.opportunity.performanceDate}
              Amount={i?.opportunity.budget}
              Language={i?.opportunity.languages}
              DueDate={"01/01/11"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ViewArtistApplication;
