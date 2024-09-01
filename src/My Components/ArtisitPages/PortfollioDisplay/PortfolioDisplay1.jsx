import React, { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMusicalNote } from "react-icons/io5";
import { FaStarOfDavid } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";
import Artist_navbar from "../Artist_navbar";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./displayPortfolio.css";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { Link } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function PortfolioDisplay1() {
  const [dateState, setDateState] = useState([]);
  const [artOpps, setArtOpps] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [showAllart, setShowAllart] = useState(false);
  const [showAllarttype, setShowAllarttype] = useState(false);
  const changeDate = (e) => {
    setDateState(e);
  };

  const [artdata, setArtData] = useState({});

  const artId = localStorage.getItem("artId");
  const token = localStorage.getItem("accessToken");

  const getartist = async () => {
    const toastId = toast.loading("loading...");
    try {
      const artistData = await makeAuthenticatedGETRequest(
        `${BASE_URL}/artists/profile`,
        token
      );

      console.log(artistData);
      const datePromises = artistData?.data?.appliedOpportunities?.map(
        async (id) => {
          const res = await makeAuthenticatedGETRequest(
            `${BASE_URL}/artists/opportunities`,
            token
          );
          console.log(res.data);
          return res.data.map((d) => {
            return d.performanceDate;
          });
        }
      );
      const dates = await Promise.all(datePromises);
      setDateState(dates[0]);
      setArtData(artistData.data);
      toast.dismiss(toastId);
      toast.success("Artist loaded successfully");
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error(error);
    }
  };
  console.log(artdata);
  useEffect(() => {
    getartist();
  }, []);

  function splitDate(date) {
    const dateToSplit = String(date);

    if (dateToSplit) {
      const dateParts = dateToSplit.split("T");
      return dateParts[0];
    } else {
      console.error("Invalid date:", date);
      return null;
    }
  }
  dateState && console.log(dateState);
  return (
    <div>
      <Artist_navbar />
      <div className="view">
        <div className="profile-container">
          <div className="left-container">
            <div className="artist-top-division">
              <div class="artist_circleprofile">
                <img src={artdata.personalInfo?.avatar?.url} alt="" />
              </div>
              <div>
                <h1 className="artist_profile_name">
                  {artdata?.personalInfo?.firstName}
                </h1>
                <h2 className="artist_profile_role">{artdata?.role}</h2>
              </div>
            </div>
            <div className="basic_profile">
              <h1>
                <FaUser />
                Basic Profile
              </h1>
              <div class="basic_profile-card">
                <div class="left-division">
                  <div class="profile_heading">First Name:</div>
                  <div class="profile_heading">Last Name:</div>
                  <div class="profile_heading">Email:</div>
                  <div class="profile_heading">Contact No:</div>
                  <div class="profile_heading">Age:</div>
                  <div class="profile_heading">Gender:</div>
                  <div class="profile_heading">Pincode:</div>
                  <div className="profile_heading">Languages:</div>
                </div>

                <div class="right-division-basic">
                  <div class="profile_heading">
                    {artdata?.personalInfo?.firstName}
                  </div>
                  <div class="profile_heading">
                    {" "}
                    {artdata?.personalInfo?.lastName}{" "}
                  </div>
                  <div class="profile_heading">
                    {" "}
                    {artdata?.personalInfo?.email}{" "}
                  </div>
                  <div className="profile_heading">
                    {artdata?.personalInfo?.contactNumber?.countryCode}{" "}
                    {artdata?.personalInfo?.contactNumber?.number}
                  </div>
                  <div class="profile_heading">
                    {artdata?.personalInfo?.age
                      ? artdata?.personalInfo?.age
                      : "NA"}
                  </div>
                  <div class="profile_heading">
                    {artdata?.personalInfo?.gender
                      ? artdata?.personalInfo?.gender
                      : "NA"}
                  </div>
                  <div class="profile_heading">
                    {artdata.address && artdata?.address?.pincode
                      ? artdata.address.pincode
                      : "NA"}
                  </div>
                  <div className="profile_heading">
                    {artdata?.personalInfo?.languages?.map(
                      (lang, index, array) => {
                        if (index < 2 || showAllLanguages) {
                          return (
                            <span key={lang}>
                              {" "}
                              {lang}
                              {index < array.length - 1 && ","}
                            </span>
                          );
                        }
                        return null;
                      }
                    )}
                    {artdata?.personalInfo?.languages?.length > 3 && (
                      <span>
                        <br />
                        <a
                          href="#"
                          onClick={() => setShowAllLanguages(!showAllLanguages)}
                        >
                          {showAllLanguages ? "View less" : "View more"}
                        </a>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="profile_calender">
              <Calendar
                className="calender_artist"
                value={dateState.map(splitDate)}
                // onChange={changeDate}
              />
            </div>
            {viewMore && (
              <>
                <div className="artist_art-ManageProfile">
                  <h1> Other Details</h1>
                  <div class="profile-card">
                    <div class="left-division">
                      <div class="profile_heading">Social Category:</div>
                      <div class="profile_heading">Disability:</div>
                      <div class="profile_heading">Source of Income:</div>
                      <div class="profile_heading">Annual Income:</div>
                      <div class="profile_heading">UPI Id:</div>
                    </div>

                    <div class="right-division">
                      <div class="profile_heading">
                        {artdata?.personalInfo?.socialCategory
                          ? artdata?.personalInfo?.socialCategory
                          : "NA"}
                      </div>
                      <div class="profile_heading">
                        {artdata?.personalInfo?.pwd
                          ? artdata?.personalInfo.pwd
                          : "NA"}
                      </div>
                      <div class="profile_heading">
                        {artdata?.personalInfo?.incomeSrc
                          ? artdata?.personalInfo.incomeSrc
                          : "NA"}
                      </div>
                      <div class="profile_heading">
                        {artdata?.personalInfo?.annualIncome
                          ? artdata?.personalInfo.annualIncome
                          : "NA"}
                      </div>
                      <div class="profile_heading">
                        {artdata?.otherInfo?.upiId
                          ? artdata?.otherInfo.upiId
                          : "NA"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="artist_art-ManageProfile">
                  <h1> ID Proofs</h1>
                  <div class="profile-card">
                    <div class="left-division">
                      <div class="profile_heading">Aadhar No:</div>
                      <div class="profile_heading">PAN No:</div>
                      <div class="profile_heading">Passport:</div>
                    </div>

                    <div class="right-division">
                      <div class="profile_heading">
                        {artdata?.otherInfo?.idProof?.num
                          ? artdata?.otherInfo.idProof.num
                          : "NA"}
                      </div>
                      <div class="profile_heading">
                        {artdata?.otherInfo?.panNumber
                          ? artdata?.otherInfo.panNumber
                          : "NA"}
                      </div>
                      <div class="profile_heading">
                        {artdata?.otherInfo?.idProof.num
                          ? artdata?.otherInfo.idProof.num
                          : "NA"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aboutartist">
                  <h2>Highlights of Performance</h2>
                  <p>
                    {artdata?.performanceInfo?.highlights
                      ? artdata?.performanceInfo.highlights
                      : "No highlights"}
                  </p>
                </div>

                <div className="artist-ManageProfile">
                  <h1> Major Events</h1>
                  <div class="major_events_container">
                    <div class="major_events">
                      {artdata?.performanceInfo?.perfDetails[0]?.eventName}
                    </div>
                    <div class="major_events">
                      {artdata?.performanceInfo?.perfDetails[0]?.level}
                    </div>
                    <div class="major_events">
                      {artdata?.performanceInfo?.perfDetails[0] && (
                        <Link to={artdata?.performanceInfo.perfDetails[0].link}>
                          Link of Event
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="profile_social_icons">
              <Link to={artdata?.socialLinks?.instagram}>
                <FaInstagram className="profile_instagram" />
              </Link>
              <Link to={artdata?.socialLinks?.facebook}>
                <FaFacebook className="profile_facebook" />
              </Link>
              <Link to={artdata?.socialLinks?.youtube}>
                <FaYoutube className="profile_Youtube" />
              </Link>
              <Link to={artdata?.socialLinks?.linkedin}>
                <FaLinkedin className="profile_LinkedIn" />
              </Link>
              <Link to={artdata?.socialLinks?.twitter}>
                <FaTwitter className="profile_twitter" />
              </Link>
            </div>
          </div>
          <div className="right-container">
            <div className="art_profile" style={{ marginTop: "70px" }}>
              <div className="artist_art_Profile">
                <h1>
                  {" "}
                  <FaMicrophone />
                  Art Profile
                </h1>
                <div class="profile-card">
                  <div class="left_artist">
                    <div class="profile_heading">Category of Art:</div>
                    <div class="profile_heading">Name of Art:</div>
                    <div class="profile_heading">Type of Art:</div>
                  </div>

                  <div class="right_artist">
                    <div class="profile_heading">
                      {artdata?.artInfo?.artCategory?.map((ac) => ac)}
                    </div>
                    {/* <div class="profile_heading">
                      {artdata?.doc?.artInfo?.artName?.map((ac) => ac)}
                    </div> */}

                    <div className="profile_heading">
                      {artdata?.artInfo?.artName?.map((art, index, array) => {
                        if (index < 2 || showAllart) {
                          return (
                            <span key={art}>
                              {" "}
                              {art}
                              {index < array.length - 1 && ","}
                            </span>
                          );
                        }
                        return null;
                      })}
                      {artdata?.artInfo?.artName?.length > 3 && (
                        <span>
                          <br />
                          <a
                            href="#"
                            onClick={() => setShowAllart(!showAllart)}
                          >
                            {showAllart ? "View less" : "View more"}
                          </a>
                        </span>
                      )}
                    </div>

                    <div className="profile_heading">
                      {artdata?.artInfo?.artType?.map(
                        (arttype, index, array) => {
                          if (index < 2 || showAllarttype) {
                            return (
                              <span key={arttype}>
                                {" "}
                                {arttype}
                                {index < array.length - 1 && ","}
                              </span>
                            );
                          }
                          return null;
                        }
                      )}
                      {artdata?.artInfo?.artType?.length > 3 && (
                        <span>
                          <br />
                          <a
                            href="#"
                            onClick={() => setShowAllarttype(!showAllarttype)}
                          >
                            {showAllarttype ? "View less" : "View more"}
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="artist_art-ManageProfile_award">
                <h1>
                  <FaStarOfDavid /> Awards Profile
                </h1>
                <div class="profile-card">
                  <div class="left_artist">
                    <div class="profile_heading">Total Awards:</div>
                    <div class="profile_heading">Highest Level :</div>
                  </div>

                  <div class="right_artist">
                    <div class="profile_heading">
                      {artdata?.awardsInfo?.totalAwards} <IoTrophy />
                    </div>
                    <div class="profile_heading">
                      {artdata?.awardsInfo?.level}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="art_profile">
              <div className="artist_art_Profile">
                <h1>
                  <IoMusicalNote /> Performance Profile
                </h1>
                <div class="profile-card">
                  <div class="left_artist">
                    <div class="profile_heading">Performances:</div>
                    <div class="profile_heading">Highest Level:</div>
                  </div>

                  <div class="right_artist">
                    <div class="profile_heading">
                      {artdata?.performanceInfo?.totalPerfs}
                    </div>
                    <div class="profile_heading">
                      {artdata?.performanceInfo?.peakPerf}
                    </div>
                  </div>
                </div>
              </div>
              <div className="artist_art-ManageProfile_award">
                <h1>
                  <FaStarOfDavid /> Awards Profile
                </h1>
                <div class="profile-card">
                  <h1
                    style={{
                      textAlign: "justify",
                      color: "whitesmoke",
                      fontSize: "15px",
                      lineHeight: "normal",
                    }}
                  >
                    {artdata?.awardsInfo?.highlights}
                  </h1>
                </div>
              </div>
            </div>

            <h2 className="video_heading">Images</h2>
            <div
              className="profile_images"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                borderRadius: "10px",
              }}
            >
              {artdata?.performanceInfo?.perfImgs &&
                artdata?.performanceInfo.perfImgs.map((img) => {
                  return (
                    <img
                      src={img}
                      style={{
                        height: "100px",
                        width: "100px",
                        margin: "10px",
                      }}
                      alt="perfs imgs"
                    />
                  );
                })}
            </div>
            <h2 className="video_heading">Video</h2>
            <div className="profile_video">
              {artdata?.performanceInfo?.perfVideos && (
                <video controls>
                  <source src={artdata?.performanceInfo?.perfVideos} />
                </video>
              )}
            </div>
            {viewMore && (
              <>
                <div className="aboutartist">
                  <h2>About me as Artist</h2>
                  <p>{artdata?.artInfo?.aboutArt}</p>
                </div>

                <div className="performance_profile">
                  <h1>Performance Profiles</h1>
                  <p className="performance_heading">
                    Affiliated to any Group/Organization
                  </p>
                  <p className="performance_para">
                    {artdata?.performanceInfo?.affiliation?.isAfiliated
                      ? "Yes"
                      : "No"}
                  </p>
                  <p className="performance_heading">Type of Performance</p>
                  <p className="performance_para">
                    {artdata?.performanceInfo?.perfType}
                  </p>
                  <p className="performance_heading">
                    Highest level of Performance
                  </p>
                  <p className="performance_para">
                    {artdata?.performanceInfo?.peakPerf}
                  </p>
                  <p className="performance_heading">
                    Average Duration of Performance(India)
                  </p>
                  <p className="performance_para">
                    {artdata?.performanceInfo?.perfDuration?.india}
                   
                  </p>
                  <p className="performance_heading">
                    Average Fee per Performance(India)
                  </p>
                  <p className="performance_para">
                    {artdata?.performanceInfo?.perfCharge?.india}
                  </p>
                  <p className="performance_heading">
                    Average Duration of Performance(International)
                  </p>
                  <p className="performance_para">
                    {artdata?.performanceInfo?.perfDuration?.international}
                   
                  </p>
                  <p className="performance_heading">
                    Average Fee per Performance(International)
                  </p>
                  <p className="performance_para">
                    {artdata?.performanceInfo?.perfCharge?.international}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <button class="view_button" onClick={() => setViewMore(!viewMore)}>
          {!viewMore && <span>View More</span>}
          {viewMore && <span>View Less</span>}
        </button>
      </div>
    </div>
  );
}
