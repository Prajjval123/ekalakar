import React, { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
 import { IoMusicalNote } from "react-icons/io5";
 import { FaStarOfDavid } from "react-icons/fa";
 import { IoTrophy } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./artistprofile.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { Link } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;


const YourComponent = () => {
  const [dateState, setDateState] = useState([]);
  const [artOpps , setArtOpps] = useState([])
  const [viewMore, setViewMore] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [showAllart, setShowAllart] = useState(false);
  const [showAllarttype, setShowAllarttype] = useState(false);
  const changeDate = (e) => {
    setDateState(e);
  };

  const [artdata, setArtData] = useState({})

  const artId = localStorage.getItem("artId");
  const token = localStorage.getItem("accessToken");
  
  const getartist = async() =>{
    const toastId = toast.loading("loading...")
    try {
      const artistData = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/user/${artId}`, token)

      console.log(artistData);
        const datePromises = artistData?.data?.appliedOpportunities?.map(async(id) =>{
        const res =  await makeAuthenticatedGETRequest(`${BASE_URL}/admin/opps/${id}`, token)
        console.log(res.data.performanceDate);
        return res.data.performanceDate
      })
      const dates = await Promise.all(datePromises);
      setDateState(dates)
      setArtData(artistData.data)
      toast.dismiss(toastId);
      toast.success("Artist loaded successfully")
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error(error);
    }
  }

  useEffect(()=>{
    getartist();
  }, [])

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
  dateState&& console.log(dateState)
  return (
    <div className="view">
      <div className="profile-container">
        <div className="left-container">
          <div className="artist-top-division">
            <div class="artist_circleprofile">
              <img src={artdata.avatar?.url} alt="" />
            </div>
            <div>
            <h1 className="artist_profile_name">
              {artdata?.firstName}
            </h1>
            <h2 className="artist_profile_role">
              {artdata?.role}
            </h2>
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
              {artdata.firstName}
            </div>
            <div class="profile_heading"> {artdata.lastName} </div>
            <div class="profile_heading"> {artdata.email} </div>
            <div class="profile_heading"> {artdata.phoneNumber && artdata?.phoneNumber?.number} </div>
            <div class="profile_heading">{artdata?._doc?.personalInfo.age ? artdata._doc.personalInfo.age : "Not Provided"}</div>
            <div class="profile_heading">{artdata?._doc?.personalInfo?.gender ? artdata._doc.personalInfo.gender : "Not Provided"}</div>
            <div class="profile_heading">{artdata.address && artdata?.address?.pincode ? artdata.address.pincode : "Not Provided"}</div>
            <div className="profile_heading">{artdata?._doc?.personalInfo?.languages?.map((lang)=>{
              return <span>{lang}, </span>
            })}</div>
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
         {  
         viewMore &&     
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
                  { artdata?._doc?.personalInfo?.socialCategory ? artdata._doc.personalInfo.socialCategory : "Not Provided"}
                </div>
                <div class="profile_heading">
                  {artdata?._doc?.personalInfo?.pwd ? artdata._doc.personalInfo.pwd : "Not Provided"}
                </div>
                <div class="profile_heading">
                  {artdata?._doc?.personalInfo?.incomeSrc? artdata._doc.personalInfo.incomeSrc : "Not Provided"}
                </div>
                <div class="profile_heading">
                  {artdata?._doc?.personalInfo?.annualIncome ? artdata._doc.personalInfo.annualIncome : "Not Provided"}
                </div>
                <div class="profile_heading">
                  {artdata?._doc?.otherInfo?.upiId ? artdata._doc.otherInfo.upiId : "Not Provided"}
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
                  {artdata?._doc?.otherInfo?.idProof?.num ? artdata._doc.otherInfo.idProof.num : "Not Provided"}
                </div>
                <div class="profile_heading">
                  {artdata?._doc?.otherInfo?.panNumber ? artdata._doc.otherInfo.panNumber : "Not Provided"}
                </div>
                <div class="profile_heading">
                  {artdata?._doc?.otherInfo?.idProof.num ? artdata._doc.otherInfo.idProof.num : "Not Provided"}
                </div>
              </div>
            </div>
          </div>
          <div className="aboutartist">
            <h2>Highlights of Performance</h2>
            <p>
              {artdata?._doc?.performanceInfo?.highlights ? artdata._doc.performanceInfo.highlights : "No highlights" }
            </p>
          </div>

          <div className="artist-ManageProfile">
            <h1> Major Events</h1>
            <div class="major_events_container">
              <div class="major_events">
                {
                artdata._doc?.performanceInfo?.perfDetails[0]?.eventName 
                }
              </div>
              <div class="major_events">
              {artdata?._doc?.performanceInfo?.perfDetails[0]?.level}
              </div>
              <div class="major_events">
                {artdata?._doc?.performanceInfo?.perfDetails[0] &&
                 <Link to={artdata._doc.performanceInfo.perfDetails[0].link}>
                  Link of Event
                </Link>}
              </div>
            </div>
           </div>
           </>
          }

<div className="profile_social_icons">
 <Link to={artdata?.socialLinks?.instagram} ><FaInstagram className="profile_instagram" /></Link>
 <Link to={artdata?.socialLinks?.facebook} ><FaFacebook className="profile_facebook" /></Link> 
 <Link to={artdata?.socialLinks?.youtube} ><FaYoutube className="profile_Youtube" /></Link> 
 <Link to={artdata?.socialLinks?.linkedin} ><FaLinkedin className="profile_LinkedIn" /></Link> 
 <Link to={artdata?.socialLinks?.twitter} ><FaTwitter className="profile_twitter" /></Link> 
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
          <div className="profile_images" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", borderRadius: "10px"}}>
          {artdata?._doc?.performanceInfo?.perfImgs && 
           
           artdata._doc.performanceInfo.perfImgs.map((img)=>{
            return (
              <img src={img} style={{height: "100px", width: "100px", margin: "10px"}} alt="perfs imgs" />
            )
           })
          }
          </div>
          <h2 className="video_heading">Video</h2>
          <div className="profile_video"> 
            {artdata?._doc?.performanceInfo?.perfVideos && 
              <video controls>
              <source src={artdata?._doc?.performanceInfo?.perfVideos[0]} />
              </video>
             }
          </div>
         

         {  viewMore &&
           <>
          <div className="aboutartist">
            <h2>About me as Artist</h2>
            <p>
            {artdata?._doc?.artInfo?.aboutArt }
            </p>
          </div>
          <div className="artist-ManageProfile">
            <h1> Art Education</h1>
            <div class="major_events_container">
               {artdata?._doc?.artInfo?.artEducation}
            </div>
          </div>
          <div className="performance_profile">
            <h1>Performance Profiles</h1>
            <p className="performance_heading">
              Affiliated to any Group/Organization
            </p>
            <p className="performance_para">
            {artdata?._doc?.performanceInfo?.affiliation?.isAfiliated ? "Yes" : "No"}
            </p>
            <p className="performance_heading">Type of Performance</p>
            <p className="performance_para">
            {artdata?._doc?.performanceInfo?.perfType}
            </p>
            <p className="performance_heading">Highest level of Proformance</p>
            <p className="performance_para">
              {artdata?._doc?.performanceInfo?.highestPerfLevel}
            </p>
            <p className="performance_heading">
              Average Duration of Performance(India)
            </p>
            <p className="performance_para"> 
            {artdata?._doc?.performanceInfo?.perfDuration?.india}
             min</p>
            <p className="performance_heading">
              Average Fee per Performance(India)
            </p>
            <p className="performance_para">
            {artdata?._doc?.performanceInfo?.perfCharge?.india}
            </p>
            <p className="performance_heading">
              Average Duration of Performance(International)
            </p>
            <p className="performance_para">
            {artdata?._doc?.performanceInfo?.perfDuration?.international}
             min
            </p>
            <p className="performance_heading">
              Average Fee per Performance(International)
            </p>
            <p className="performance_para">{artdata?._doc?.performanceInfo?.perfCharge?.international}</p>
          </div>
          </>}
          </div>
      </div>
      <button class="view_button" onClick={() => setViewMore(!viewMore)}>
       { !viewMore && <span>View More</span>}
        {viewMore && <span>View Less</span>}
        </button>
    </div>
  );
};

export default YourComponent;