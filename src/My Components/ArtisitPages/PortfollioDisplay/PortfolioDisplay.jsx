import "./portfolioDisplay.css";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";
import tick from "./assets/tick.svg";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import PortfolioCardTemplate from "./PortfolioCardTemplate";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
import images from "./assets/images.svg"
import PortfolioPhotoSection from "./PortfolioPhotoSection";
import PortfolioVideoSection from "./PortfolioVideoSection";
import mail from "./assets/Mail.svg";
import { artistProfilePoints } from "../../../services/apis";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Artist_navbar from "../Artist_navbar";

const socalMedia = [
  {
    image: instagram,
    data: "randomusername_1234",
  },
  {
    image: facebookimg,
    data: "Random_Username",
  },
];
const userDetails = [
  {
    image: phone,
    data: "1234568901",
  },
  {
    image: mail,
    data: "randomemail@gmail.com",
  },
  {
    image: location,
    data: "123 random street, random city - 123456 random district random state",
  },
];

const userName = "Mano Selva Vijay";

function PortfolioDisplay() {
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [portfolioData, setPortfolioData] = useState({
    firstName: "",
    lastName: "",
  });
  const [avatar,setAvatar] = useState("");
  const [galleryPic,setGalleryPic] = useState("");
// Get User Data From Server
  const [v1,setv1] = useState("");
  const [v2,setv2] = useState("");
  const [v3,setv3] = useState("");
  const [lang,setLang] = useState([]);
  const fetchUserData = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        artistProfilePoints.FETCH_PROFILE_DATA_API,
        accessToken
      );
      if (response.status === "success") {
        const {
          contactNumber,
          email,
          firstName,
          lastName,
          age,
          about,
          avatar,
          gender,
          languages
          // monthlyIncome
        } = response.data.personalInfo;

        setLang(response.data.personalInfo.languages)
        const { monthlyIncome } = response.data.otherInfo.anunalIncomeByPerf;
        const { artCategory, artName } = response.data.artInfo;
        const { aboutArt } = response.data.artInfo;
        const { pincode, state, city } = response.data.address;
        const {perfImgs} = response.data.performanceInfo;
        const {perfVideos} = response.data.performanceInfo;

        const { perfType, perfEvent, experience, totalPerfs } =
          response.data.performanceInfo;
        const { perfCharge } = response.data.performanceInfo.perfCharge.india;
        // const { length: totalperformances } = perfDetails;
        setAvatar(avatar.url);
        setGalleryPic(perfImgs);
        setv1(perfVideos[0]);
        setv2(perfVideos[1]);
        setv3(perfVideos[2]);
        setPortfolioData({
          phoneNumber: contactNumber.number,
          email,
          address: response.data?.address,
          handles: response.data?.socialLinks,
          firstName,
          lastName,
          artCategory: artCategory,
          age,
          eventType: perfEvent,
          performanceType: perfType,
          minimumBudget: monthlyIncome,
          aboutArt: aboutArt,
          chargePerPerformance: perfCharge,
          totalperformances: totalPerfs,
          avatar,
          yearOfExperience: experience,
          pincode,
          state,
          city,
          artName,
          gender,
          language:languages,
          aboutJourney: about,
        });      } else {
        toast.error("something went wrong , please refresh the page", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(v1,v2,v3);
  return (
    <>
      <Artist_navbar />
      <div className="portfolioDisplay_wrapper">
        {/* <nav className="portfolio_actual_navbar"></nav> */}

        {/* <h1 className="portfolio_display_heading">{portfolioData.firstName+" " +portfolioData.lastName}</h1> */}
        {/* <section className="portfolio_usersDetails">
          <div className="userName_review_container">
            <div className="portfolio_verify_userName">
              <p className="portfolio_userName">
                {portfolioData?.firstName} {portfolioData?.lastName}
              </p>
              <div className="portfolio_verify_img">
                {" "}
                <img src={tick} alt="tick" />{" "}
              </div>
            </div>

            <div className="user_star_review_container">
              <div className="star_container">
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
        </section> */}

           <div className="BasicProfile_avatar">
            {/* <img loading="lazy" src={(profileAvatar === undefined || profileAvatar === null) ?(`https://ui-avatars.com/api/?name=${basicFormData.firstName}+${basicFormData.lastName}`):(`https://api.ekalakaar.com/uploads/avatars/${profileAvatar}`)} /> */}
            <div className="profileImg" >
              {/* <img loading="lazy" src={defaultPic} /> */}
              <img loading="lazy" src={avatar} />
              {/* <div className="progressBar" style={{ transform: `rotate(${rotation}deg)translate(0px , -115px)rotate(-${rotation}deg)` }}>{count}%</div> */}

            </div>
            <p style={{ fontWeight: "500", fontSize: "30px" }}>
              {" "}
              {portfolioData?.firstName.toUpperCase()}{" "}


              {portfolioData?.lastName.toUpperCase()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle cx="25" cy="25" r="25" fill="#61C6FF" />
                <path
                  d="M14 26.7143L19.4935 32.2791C19.885 32.6757 20.5252 32.6757 20.9168 32.2791L36 17"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <b></b>
            </p>
            {/* <button onClick={handleRemoveAvatar} className="BasicProfile_removeavatar">Remove Avatar</button> */}
          </div>

        {/* portfolio card */}
        {/* <PortfolioCardTemplate
          portfolioData={portfolioData}
          socalMedia={socalMedia}
          userDetails={userDetails}
          userName={userName}
          avatar={avatar}
        /> */}

        {/* two buttons */}

{/*         
        <section className="card_button_wrapper">
          <ApplicationButton text={"Share Card"} />
        </section> */}

        {/* user details section */}
        {/* <section className="portfolio_usersDetails">
        name and 5 star 
        <div className="userName_review_container">
          <div className="portfolio_verify_userName">
            <p className="portfolio_userName">{portfolioData?.firstName} {portfolioData?.lastName}</p>
            <div className="portfolio_verify_img">
              {" "}
              <img src={tick} alt="tick" />{" "}
            </div>
          </div>

          review part 
          <div className="user_star_review_container">
            <div className="star_container">
              star
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

        <div className="userAbout_section">
          <h1 className="about_me_text">About Me</h1>
          <p className="user_aboutMe_detail">{portfolioData?.aboutJourney}</p>
        </div>

        <div className="user_profession_details">

         
        <div  className="single_userProfession_detail">
              <p className="profession_title">Art Name :</p>
              <p className="profession_info">{portfolioData?.artName ?(portfolioData?.artName):('Art_Name')}</p>
            </div>
          
            <div  className="single_userProfession_detail">
              <p className="profession_title">Location :</p>
              <p className="profession_info">{portfolioData?.address?.state ?(portfolioData.address?.state):('your_location')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Age :</p>
              <p className="profession_info">{portfolioData?.age ?(portfolioData.age):('Your_age')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Performance Type :</p>
              <p className="profession_info">{portfolioData?.performanceType ?(portfolioData?.performanceType):('performance_type')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Charge per performance :</p>
              <p className="profession_info">{portfolioData?.chargePerPerformance ?(portfolioData?.chargePerPerformance):('performance_charge')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Experience :</p>
              <p className="profession_info">{portfolioData?.yearOfExperience ?(portfolioData?.yearOfExperience):('your_experience')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Events Type :</p>
              <p className="profession_info">{portfolioData?.eventType ?(portfolioData?.eventType):('your_eventType')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Minimum Budget :</p>
              <p className="profession_info">{portfolioData?.minimumBudget ?(portfolioData?.minimumBudget):('your_minBudget')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Instagram :</p>
              <p className="profession_info">{portfolioData?.handles?.instagram ?(portfolioData?.handles?.instagram):('Random__Channel')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Facebook :</p>
              <p className="profession_info">{portfolioData?.handles?.facebook ?(portfolioData?.handles?.facebook):('Random__Channel')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Youtube :</p>
              <p className="profession_info">{portfolioData?.handles?.youtube ?(portfolioData?.handles?.youtube):('Random__Channel')}</p>
            </div>
         
        </div>
      </section> */}

        <section className="portfolio_usersDetails">
          <div className="userAbout_section">
            <h1 className="about_me_text">About Me</h1>
            <p className="user_aboutMe_detail">{portfolioData?.aboutJourney}</p>
          </div>
          <div className="Portfolio_Info">
            <div className="field">
              <h2>Age</h2>
              <p>{portfolioData?.age}</p>
            </div>
            <div className="field">
              <h2>Gender</h2>
              <p>{portfolioData.gender}</p>
            </div>
            <div className="field">
              <h2>languages</h2>
              <p>{lang.join('  ')}</p>
            </div>
            <div className="field">
              <h2>Pincode</h2>
              <p>{portfolioData.pincode}</p>
            </div>
            <div className="field">
              <h2>State</h2>
              <p>{portfolioData.state}</p>
            </div>
            <div className="field">
              <h2>City</h2>
              <p>{portfolioData.city}</p>
            </div>
            <div className="field large">
              <h2>Category of Art</h2>
              <p>{portfolioData.artCategory}</p>
            </div>
            <div className="field large">
              <h2>Art Name</h2>
              <p>{portfolioData.artName}</p>
            </div>
            <div className="field large">
              <h2>Total No. of Performances</h2>
              <p>{portfolioData.totalperformances}</p>
            </div>
            <div className="field large">
              <h2>No. of years of experience</h2>
              <p>{portfolioData.yearOfExperience}</p>
            </div>
          </div>
          <div className="userAbout_section">
            <h1 className="about_me_text">About Art</h1>
            <p className="user_aboutMe_detail">{portfolioData?.aboutArt}</p>
          </div>
          <div className="photos">
            <h1 className="about_me_text">Photos</h1>
            <PortfolioPhotoSection  pic1={galleryPic[0]}  pic2={galleryPic[1]}  pic3={galleryPic[2]}  pic4={galleryPic[3]}  pic5={galleryPic[4]}/>
          </div>
          <div className="photos">
            <h1 className="about_me_text">Videos</h1>
            <PortfolioVideoSection
            v1={v1} v2={v2} v3={v3}
 />
          </div>
        </section>
        {/* <ApplicationButton
          onclick={() => navigate("/editPortfolio")}
          text={"Edit Portfolio"}
        /> */}
      </div>
    </>
  );
}

export default PortfolioDisplay;

