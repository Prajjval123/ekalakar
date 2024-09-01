import React from "react";
import "./ViewCard.css";
import PortfolioDisplayTemplate from "../../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";
import OutlineCall from "../../assets/outlineCall.svg";
import Save from "../../assets/save.svg";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import PortfolioCardTemplateAdmin from "../../AdminComponent/ProtfolioCardTemplateAdmin/ProtfolioCardTemplateAdmin";

function ViewCard({ userData }) {
  const navigate = useNavigate();
  // let { id } = useParams();
  let id = "12dskfne";
  return (
    <div className="root-view-card-cont">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <PortfolioDisplayTemplate portfolioData={userData} viewAsAdmin={true} />
      </div>
      <div className="view-card-admin-btn-cont">
        <button
          onClick={() => {
            console.log("clicked");
            navigate(`/admin/view-applicants/${userData._id}`, {
              state: {
                id: userData._id,
                role: userData.role,
              },
            });
          }}
        >
          View Application
        </button>

        <button
          onClick={() =>
            navigate(`/admin/view-user/${userData._id}`, {
              state: userData._id,
            })
          }
        >
          View Profile
        </button>
        <button>Remove Artist</button>
        <div>
          <img src={OutlineCall} alt="" />
        </div>
        <div>
          <img src={Save} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
