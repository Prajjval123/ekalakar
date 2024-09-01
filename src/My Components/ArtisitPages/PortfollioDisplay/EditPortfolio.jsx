import "./editPortfolio.css";
import PortfolioCardTemplate from "./PortfolioCardTemplate";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";
import PortfolioUpdateForm from "./PortfolioUpdateForm";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { artistProfilePoints } from "../../../services/apis";
import { toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import Artist_navbar from "../Artist_navbar";
  

const EdituserDetails = [
  {
    image: phone,
    data: "Your Phone Number Comes Here",
  },
  {
    // image: mail,
    data: "Your Email Comes Here",
  },
  {
    image: location,
    data: "Your Location Comes Here",
  },
];

const editSocalMedia = [
  {
    image: instagram,
    data: "Instagram Profile Username",
  },
  {
    image: facebookimg,
    data: "Facebook Profile Username",
  },
];

function EditPortfolio() {
  const { accessToken } = useSelector((state) => state.auth);
  const [portfolioData , setPortfolioData] = useState(null);

  const fetchUserData = async()=>{
    try{
      
      const response = await makeAuthenticatedGETRequest(artistProfilePoints.FETCH_PROFILE_DATA_API , accessToken);

      console.log('res' ,response);

      if(response.status === 'success'){

        const {address, socialLinks , personalInfo ,artInfo, performanceInfo } = response.data;


      setPortfolioData({
        phoneNumber :personalInfo?.contactNumber.number , email : personalInfo?.email ,address :address , handles : socialLinks , firstName:personalInfo?.firstName , lastName : personalInfo?.lastName , natureOfArt :artInfo?.artNature  ,  age : personalInfo?.age , chargePerPerformance:performanceInfo?.perfCharge ,experience : performanceInfo?.experience , eventType:performanceInfo?.perfEvent   , minimumBudget : personalInfo?.monthlyIncome , noOfPerformance : performanceInfo?.lastYearPerfs  ,performanceType : performanceInfo?.perfType

      })
      }else{
        toast.error('something went wrong , please refresh the page' , {
          position:"top-center"
        });
      }
  
    } catch(error){
      console.log(error);
    }
  }
  
    useEffect(()=>{
     fetchUserData();
    },[])

  return (
    <>
     <Artist_navbar />

    <div className="edit_Portfolio_wrapper">
      <nav className="portfolio_actual_navbar"></nav>
      <h1 className="edit_card_text">Edit Portfolio Card</h1>

      <PortfolioCardTemplate portfolioData={portfolioData} userDetails={EdituserDetails} userName={"Your Name is Here"} profession={"Category"} socalMedia={editSocalMedia} editCard={true} />

      <ApplicationButton text={"Upload Profile Picture"} />

      <PortfolioUpdateForm />
    </div>
    </>
  );
}

export default EditPortfolio;
