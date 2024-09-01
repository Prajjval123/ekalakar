import "./viewArtist.css";
import tick from "./assets/tick.svg";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioCardTemplate from "./PortfolioCardTemplate"
import Patron_Navbar from "../Patron_Navbar";
import phone from "./assets/phone.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
import { makeAuthenticatedGETRequest, makeAuthenticatedPATCHRequestWithoutBody,makeAuthenticatedPATCHRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import PortfolioPhotoSection from "../../ArtisitPages/PortfollioDisplay/PortfolioPhotoSection";



function ViewArtist() {

  const { accessToken } = useSelector((state) => state.auth);

  const location = useLocation();

  const applicationId = location.state?.applicationId;

  const appliType = location.state?.appliType;
  
  const navigate = useNavigate();
  
  console.log('appliType' ,appliType);

  
  const [artistData , setArtistData] = useState([]);

  const [userDetails , setUserDetails] = useState([
    {
      image: phone,
      data: "",
    },
    {
      // image: mail,
      data: "",
    },
    {
      image: location,
      data: "",
    },
  ])
  
  const {id} = useParams();
  
  // this is for fetch the artist 
  const fetchArtistData = async()=>{
    try{
      const response = await makeAuthenticatedGETRequest(patronProfilePoints.GET_SINGLE_ARTIST_DATA_API + `${id}` , accessToken);
      console.log('ress' , response);
      if(response.status === 'success'){
        // toast.success("success");
        setArtistData(response.data);
      }
      else {
        toast.error(response.message);
      }
      
    } catch(error){
      console.log(error);
      
    }
  }

  const [socalMedia , setSocialMedia] = useState([
    {
      image: instagram,
      data: "",
    },
    {
      image: facebookimg,
      data: "",
    },
  ])
  
  useEffect(()=>{
    fetchArtistData();
  },[])

   useEffect(()=>{
    const updatedSocialMedia = [...socalMedia];
    
    updatedSocialMedia[0].data = `${artistData?.socialLinks?.instagram}`;
    
    updatedSocialMedia[1].data = `${artistData?.socialLinks?.facebook}`;
    
    setSocialMedia(updatedSocialMedia);

    // to set the userDetails
    const updatedUserDetai = [...userDetails];
    updatedUserDetai[0].data = `${artistData?.personalInfo?.contactNumber}`;
    updatedUserDetai[1].data = `${artistData?.personalInfo?.email}`;
    updatedUserDetai[2].data = `${artistData?.address?.details}`;
   },[artistData])
  
  const userName =`${artistData?.personalInfo?.firstName}  ${artistData?.personalInfo?.lastName}`;



  // this is to hired the artist 
const hireArtistHandler = async ()=>{
  const toastId = toast.loading('Loading...');
  try{

    const response = await makeAuthenticatedPATCHRequest(patronProfilePoints.HIRED_REJECT_SHORTLIST_ARTIST_API +`/${applicationId}`,{
      status: "Hired"
  } , accessToken);
    console.log('rress' , response);
    if(response.status === 'success'){
      toast.success('successfuly hired');
      navigate(-1);
    }
    else {
      toast.error(response.message);
    }
  } catch(error){
  console.log(error);
  toast.error('internal server error');
  }
  toast.dismiss(toastId);
}

// this is for rejct application
const rejectArtistHandler =  async()=>{
  const toastId = toast.loading('Loading...');
  try{

    const response = await makeAuthenticatedPATCHRequest(patronProfilePoints.HIRED_REJECT_SHORTLIST_ARTIST_API +`/${applicationId}`,{
      status: "Rejected"
  } , accessToken);
    console.log('rress' , response);
    if(response.status === 'success'){
      toast.success('successfuly Rejected');
      navigate(-1);
    }
    else {
      toast.error(response.message);
    }
  } catch(error){
  console.log(error);
  toast.error('internal server error');
  }
  toast.dismiss(toastId);


}

// this is for shortlist application
const shortlistArtistHandler = async()=>{
  const toastId = toast.loading('Loading...');
  try{

    const response = await makeAuthenticatedPATCHRequest(patronProfilePoints.HIRED_REJECT_SHORTLIST_ARTIST_API +`/${applicationId}`,{
      status: "In-Progress"
  } , accessToken);
    console.log('rress' , response);
    if(response.status === 'success'){
      toast.success('successfuly Shorlisted');
      navigate(-1);
    }
    else {
      toast.error(response.message);
    }
  } catch(error){
  console.log(error);
  toast.error('internal server error');
  }
  toast.dismiss(toastId);


}

  return (
    <>
    <Patron_Navbar />
    <div className="portfolioDisplay_wrapper">
   

      {/* <h1 className="portfolio_display_heading">{artistData?.personalInfo?.firstName} {artistData?.personalInfo?.lastName} Portfolio</h1> */}

      {/* portfolio card */}
       {/* <PortfolioCardTemplate socalMedia={socalMedia} userDetails={userDetails} profession={artistData?.artInfo?.artNature} userName={userName} /> */}

      

      {/* user details section */}
      <section className="portfolio_usersDetails">
        {/* name and 5 star  */}
        <div className="userName_review_container">
          <div className="portfolio_verify_userName">
            <p className="portfolio_userName">{userName}</p>
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
        </section>
          {/* portfolio card */}
        <PortfolioCardTemplate socalMedia={socalMedia} userDetails={userDetails} profession={artistData?.artInfo?.artNature} userName={userName} />
      <section className="portfolio_usersDetails">
        <div className="userAbout_section">
            <h1 className="about_me_text">About Artist</h1>
              <p className="user_aboutMe_detail">{artistData?.personalInfo?.about}</p>
        </div>
        <div className="userAbout_section">
            <h1 className="about_me_text">About Art</h1>
              <p className="user_aboutMe_detail">{artistData?.artInfo?.aboutArt}</p>
        </div>

      {/* <div className="user_profession_details">
           
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Category:</p>
                    <p className="profession_info">{artistData?.artInfo?.artNature}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Art Name:</p>
                    <p className="profession_info">{artistData?.artInfo?.artName}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Location:</p>
                    <p className="profession_info">{artistData?.address?.city}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Age:</p>
                    <p className="profession_info">{artistData?.personalInfo?.age}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Performance Type:</p>
                    <p className="profession_info">{artistData?.performanceInfo?.perfType}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Number of Performances:</p>
                    <p className="profession_info">{artistData?.performanceInfo?.totalPerfs}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Charges Per Performance:</p>
                    <p className="profession_info">{artistData?.performanceInfo?.perfCharge?.india}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Experience:</p>
                    <p className="profession_info">{artistData?.performanceInfo?.experience}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Events:</p>
                    <p className="profession_info">{artistData?.performanceInfo?.perfEvent}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Minimum Budget:</p>
                    <p className="profession_info">{artistData?.performanceInfo?.totalPerfs} Not found in response</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Instagram:</p>
                    <p className="profession_info">{artistData?.socialLinks?.instagram}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Facebook:</p>
                    <p className="profession_info">{artistData?.socialLinks?.facebook}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Youtube:</p>
                    <p className="profession_info">{artistData?.socialLinks?.youtube}</p>
                    
                </div>
          
      </div> */}

{/* <div className="userAbout_section">
            <h1 className="about_me_text">About Me</h1>
            <p className="user_aboutMe_detail">{artistData?.aboutJourney}</p>
          </div> */}
          <div className="Portfolio_Info">
            <div className="field">
              <h2>Age</h2>
              <p>{artistData?.personalInfo?.age}</p>
            </div>
            <div className="field">
              <h2>Gender</h2>
              <p>{artistData?.personalInfo?.gender}</p>
            </div>
            <div className="field">
              <h2>languages</h2>
              <p>{artistData?.personalInfo?.language}</p>
            </div>
            <div className="field">
              <h2>Pincode</h2>
              <p>{artistData?.address?.pincode}</p>
            </div>
            <div className="field">
              <h2>State</h2>
              <p>{artistData?.address?.state}</p>
            </div>
            <div className="field">
              <h2>City</h2>
              <p>{artistData?.address?.city}</p>
            </div>
            <div className="field large">
              <h2>Category of Art</h2>
              <p>{artistData?.artInfo?.artCategory}</p>
            </div>
            <div className="field large">
              <h2>Art Name</h2>
              <p>{artistData?.artInfo?.artName}</p>
            </div>
            <div className="field large">
              <h2>Total No. of Performances</h2>
              <p>{artistData?.performanceInfo?.totalPerfs}</p>
            </div>
            <div className="field large">
              <h2>No. of years of experience</h2>
              <p>{artistData?.performanceInfo?.experience}</p>
            </div>
          </div>
          {/* <div className="userAbout_section">
            <h1 className="about_me_text">About Art</h1>
            <p className="user_aboutMe_detail">{artistData?.aboutArt}</p>
          </div> */}
          <div className="photos">
            <h1 className="about_me_text">Photos</h1>
            <PortfolioPhotoSection />
          </div>
          <div className="photos">
            <h1 className="about_me_text">Videos</h1>
            <PortfolioPhotoSection />
          </div>


      
 
        

      </section>

      {/* <PortfolioPhotoSection /> */}

      {/* <PortfolioVideoSection/> */}
      
         
    <div className="view_button_Wrapper">
      

 {
 appliType == 'Shortlisted' && 

<button onClick={hireArtistHandler} className="hire_btn view_btn " >Hire</button>
}



 {
 appliType == 'Shortlisted' && 
 <button onClick={rejectArtistHandler} className="reject_btn view_btn">Reject</button>

}

{
 appliType == 'Application' && 

<button onClick={hireArtistHandler} className="hire_btn view_btn " >Hire</button>
}

 {
 appliType == 'Application' && 
 <button onClick={rejectArtistHandler} className="reject_btn view_btn">Reject</button>

}
 {
 appliType == 'Application' && 
 <button onClick={shortlistArtistHandler} className="shortlist_btn view_btn">Shortlist</button>

}

    </div>

    </div>
    </>
  );
}

export default ViewArtist;
