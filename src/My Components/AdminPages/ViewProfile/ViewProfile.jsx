import React, { useEffect, useState } from "react";
import "./ViewProfile.css";
import PortfolioDisplayTemplate from "../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import tick from "../assets/tick.svg";
import PhotoSection from "./PhotoSection/PhotoSection";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import EditAdminProtfolio from "../ViewUser/EditUserPortfolio/EditUserProtfolio";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { Admin } from "../../../services/apis";
import { useSelector } from "react-redux";
import PortfolioCardTemplateAdmin from "../AdminComponent/ProtfolioCardTemplateAdmin/ProtfolioCardTemplateAdmin";

function ViewProfile() {
  const { accessToken } = useSelector((state) => state.auth);

  let { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [data, setData] = useState();
  const stateData = useLocation();
  console.log(stateData);

  // const [otuletVisibility, setOtuletVisibility] = useState(false);

  // useEffect(() => {
  //   if (id !== undefined) {
  //     if (
  //       pathname == `/admin/view-user/${id}/edit` ||
  //       pathname == `/admin/view-user/${id}/edit/`
  //     ) {
  //       setOtuletVisibility(true);
  //     }
  //   }
  //   console.log(pathname);
  // }, [pathname]);

  const fetchUserById = async () => {
    const { data } = await makeAuthenticatedGETRequest(
      `${Admin.GET_USER_BY_ID}${id}`,
      accessToken
    );
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUserById();
  }, []);
  return (
    <>
      {pathname == `/admin/view-user/${id}/edit` ||
      pathname == `/admin/view-user/${id}/edit/` ? (
        <Outlet />
      ) : (
        <div className="admin-page-root-container-vp">
          <div className="section-division-admin-viewProfile">
            <h1>{`${data?.personalInfo.firstName} ${data?.personalInfo.lastName}'s Portfolio`}</h1>
            <PortfolioCardTemplateAdmin portfolioData={data} />

            <div className="userName_review_container">
              <div className="portfolio_verify_userName">
                <p className="portfolio_userName">{`${data?.personalInfo.firstName} ${data?.personalInfo.lastName}`}</p>
                <div className="portfolio_verify_img">
                  {" "}
                  <img src={tick} alt="tick" />{" "}
                </div>
              </div>
              {/* review part  */}
              <div className="user_star_review_container">
                <div className="star_container">
                  {/* star */}
                  <div className="all_stars">
                    <AiFillStar className="filledStar" />
                    <AiFillStar className="filledStar" />
                    <AiFillStar className="filledStar" />
                    <AiFillStar className="filledStar" />
                    <AiOutlineStar className="emptyStar" />
                  </div>

                  <p className="No_review_text">(45 Reviews )</p>
                </div>

                <p className="read_review_text">Read Reviews</p>
              </div>
            </div>
            <div className="admin-about-me-container">
              <h2>About me</h2>
              <p>
                {data?.personalInfo?.about
                  ? data?.personalInfo?.about
                  : "random"}
              </p>
            </div>

            <div className="display-data-table">
              <p>Category :</p>
              <h6>Dancer</h6>
              <p>Art Name :</p>
              <h6>
                {data?.artInfo?.artName ? data?.artInfo?.artName : "random"}
              </h6>
              <p>Location :</p>
              <h6>{data?.address?.state ? data?.address?.state : "Null"}</h6>
              <p>Age:</p>
              <h6>
                {data?.personalInfo?.age ? data?.personalInfo?.age : "random"}
              </h6>
              <p>Performance Type :</p>
              <h6>
                {data?.performanceInfo?.perfType
                  ? data?.performanceInfo?.perfType
                  : "random"}
              </h6>
              <p>No of Performance :</p>
              <h6>
                {data?.performanceInfo?.totalPerfs
                  ? data?.performanceInfo?.totalPerfs
                  : "random"}
              </h6>
              <p>Charges Per Performance :</p>
              <h6>
                {data?.performanceInfo?.perfCharge
                  ? data?.performanceInfo?.perfCharge
                  : "random"}
              </h6>
              <p>Experience :</p>
              <h6>
                {data?.performanceInfo?.experience
                  ? data?.performanceInfo?.experience
                  : "random"}
              </h6>
              <p>Events Type :</p>
              <h6>House Party</h6>
              <p>Minimum Budget :</p>
              <h6>10k - 20k</h6>
              <p>Instagram :</p>
              <h6>
                {data?.socialLinks?.instagram
                  ? data?.socialLinks?.instagram
                  : "random"}
              </h6>
              <p>Facebook :</p>
              <h6>
                {data?.socialLinks?.facebook
                  ? data?.socialLinks?.facebook
                  : "random"}
              </h6>
              <p>Youtube :</p>
              <h6>
                {data?.socialLinks?.youtube
                  ? data?.socialLinks?.youtube
                  : "random"}
              </h6>
            </div>
          </div>
          <h1 className="caraussel-head">Photos</h1>
          <PhotoSection imageData={data?.performanceInfo?.perfImgs} />

          <h1 className="caraussel-head">Videos</h1>
          <PhotoSection />

          <div className="section-division-admin-viewProfile">
            <div className="admin-vp-button-bottom">
              <button className="admin-vp-btn">Remove Artist</button>
              <button
                className="admin-vp-btn"
                onClick={() => {
                  navigate(`/admin/view-user/${id}/edit`);
                }}
              >
                Edit Artist Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewProfile;
