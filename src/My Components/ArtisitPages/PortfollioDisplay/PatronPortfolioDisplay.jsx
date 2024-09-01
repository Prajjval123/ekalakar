// import "./portfolioDisplay.css";
// import ApplicationButton from "../StatusOfApplication/ApplicationButton";
// import tick from "./assets/tick.svg";
// import { AiOutlineStar } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";
// import { useNavigate, useParams } from "react-router-dom";
// import PortfolioCardTemplate from "./PortfolioCardTemplate";
// import phone from "./assets/phone.svg";
// import location from "./assets/location.svg";
// import instagram from "./assets/instagram.svg";
// import facebookimg from "./assets/facebookimg.svg";
// import PortfolioPhotoSection from "./PortfolioPhotoSection";
// import PortfolioVideoSection from "./PortfolioVideoSection";
// import mail from "./assets/Mail.svg"
// import {  patronProfilePoints } from "../../../services/apis";
// import { useEffect, useState } from "react";
// import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
// import { useSelector } from "react-redux";
// import { toast } from "react-hot-toast";





// function PatronPortfolioDisplay() {
//   const {accessToken} = useSelector((state)=>state.auth);
//   const {id} = useParams();

//   const [artistData , setArtistData] = useState([])

//   const fetchArtistData = async()=>{
//     const toastId = toast.loading('Loading...');
//     try{

//       const response = await makeAuthenticatedGETRequest( patronProfilePoints.GET_SINGLE_ARTIST_DATA_API +`${id}`, accessToken);
//       console.log(`res` ,response);
//       if(response.success === 'success'){
//         setArtistData(response.data);

//       }
//       else{
//         toast.error(response.message , {
//           position:"top-center"
//         });
//       }
//     } catch(error){
//       console.log(error);
//       toast.error('something went wrong ,please try again' , {
//         position:"top-center"
//       });
//     }

//     toast.dismiss(toastId);
//   }

//   useEffect(()=>{
//   fetchArtistData();
//   },[])

//   const userName =`${artistData.firstName}  ${artistData.lastName}`;


//   return (
//     <div className="portfolioDisplay_wrapper">
//       <nav className="portfolio_actual_navbar"></nav>

//       <h1 className="portfolio_display_heading">{artistData?.firstName} {artistData?.lastName}'s Portfolio </h1>

//       {/* portfolio card */}
//       <PortfolioCardTemplate  portfolioData={artistData} />

//       {/* two buttons */}
//       <section className="card_button_wrapper">
//         <ApplicationButton text={"Share Card"} />
//         <ApplicationButton text={"Edit Card"} />
//       </section>

//       {/* user details section */}
//       <section className="portfolio_usersDetails">
//         {/* name and 5 star  */}
//         <div className="userName_review_container">
//           <div className="portfolio_verify_userName">
//             <p className="portfolio_userName">{artistData?.firstName} {artistData?.lastName}</p>
//             <div className="portfolio_verify_img">
//               {" "}
//               <img src={tick} alt="tick" />{" "}
//             </div>
//           </div>

//           {/* review part  */}
//           <div className="user_star_review_container">
//             <div className="star_container">
//               {/* star */}
//               <div className="all_stars">
//                 <AiFillStar className="filledStar" />
//                 <AiFillStar className="filledStar" />
//                 <AiFillStar className="filledStar" />
//                 <AiFillStar className="filledStar" />
//                 <AiOutlineStar className="emptyStar" />
//               </div>

//               <p className="No_review_text">(45 Reviews )</p>
//             </div>

//             <p className="read_review_text">Read Reviews</p>
//           </div>
//         </div>

//         <div className="userAbout_section">
//           <h1 className="about_me_text">About Me</h1>
//           <p className="user_aboutMe_detail">{artistData?.aboutJourney}</p>
//         </div>

//         <div className="user_profession_details">
         
//         <div  className="single_userProfession_detail">
//               <p className="profession_title">Profession :</p>
//               <p className="profession_info">{artistData?.natureOfArt ?(artistData?.natureOfArt):('your Profession')}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Talents :</p>
//               <p className="profession_info">{artistData?.talent ?(artistData?.talent):('your_talent')}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Location :</p>
//               <p className="profession_info">{artistData?.address?.district} {artistData?.address?.state}{artistData?.address?.pincode}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Experience :</p>
//               <p className="profession_info">{artistData?.experience ?(artistData.experience):('your_experience')}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Events Type :</p>
//               <p className="profession_info">{artistData?.performanceEvents ?(artistData.performanceEvents):('your_eventType')}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Minimum Budget :</p>
//               <p className="profession_info">{artistData?.minimumBudget ?(artistData.minimumBudget):('your_minBudget')}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Instagram :</p>
//               <p className="profession_info">{artistData?.handles?.instagram ?(artistData?.handles?.instagram):('Random__Channel')}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Facebook :</p>
//               <p className="profession_info">{artistData?.handles?.facebook ?(artistData?.handles?.facebook):('Random__Channel')}</p>
//             </div>
//             <div  className="single_userProfession_detail">
//               <p className="profession_title">Youtube :</p>
//               <p className="profession_info">{artistData?.handles?.youtube ?(artistData?.handles?.youtube):('Random__Channel')}</p>
//             </div>
         
//         </div>
//       </section>

//       <PortfolioPhotoSection />

//       <PortfolioVideoSection />

//       <ApplicationButton  text={"Send Invite"} />
//     </div>
//   );
// }

// export default PatronPortfolioDisplay;
