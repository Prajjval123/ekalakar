import "./eventApplication.css";
import bgFilter from "./assets/bgFilter.svg";
import { useEffect, useState } from "react";
import category from "./assets/category.svg";
import date from "./assets/date.svg";
import opening from "./assets/opening.svg";
import posted from "./assets/posted.svg";
import RectangleImg from "./assets/RectangleImg.svg";
import ekalakaa from "./assets/ekalakaa.svg";
import locationArt from "./assets/location.svg";
import phone from "./assets/phone.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
import DP from "./assets/DP.svg";
import anvelop from "./assets/anvelop.svg";
import eventBg from "./assets/eventBg.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { patronProfilePoints } from "../../../services/apis";
import { toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import { useLocation } from "react-router-dom";
  import noAppli from "./assets/no_uploaded_oppor.svg"
import NoDataTemplate from "../../ArtisitPages/StatusOfApplication/NoDataTemplate";
import Patron_Navbar from "../Patron_Navbar";

import locationC from "./assets/locationC.svg";
import dateOfPerformance from "./assets/dateOfPerformance.svg";
import amount from "./assets/amount.svg";
import language from "./assets/language.svg";
import appliDueDate from "./assets/applicationDueDate.svg";



const jobDesList = [
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
];

const btnData = [
  {
    title: "Application",
  },
  {
    title: "Shortlisted",
  },
  {
    title: "Hired",
  },
];


function EventApplication() {

  const navigate = useNavigate();
  
  const [currentEvent, setCurrentEvent] = useState("Application");
  
  const {accessToken} = useSelector((state)=>state.auth);

  const location = useLocation();

  // this is to store the application of an opportunity 
  const [artistApplication , setArtistApplication] = useState([]);

  // THIS IS FOR SHORTLIST application
  const [shotlistApplication , setShortlistApplication] = useState([]);

  // this is to set the hired application
  const [hiredApplication , setHiredApplication] = useState([]);



  // this is to get the id of fetching the application of an opportunity from path
  const {id} = useParams();
  
  // this is for getting the opportunity data in object form 
  const opportunityData = location.state?.dataObj;

  const appli_Data = [
    {
      img:locationC,
      title: "Location of Performance :",
      value:opportunityData?.location
    },
    {
      img: language,
      title: "Language of Performance :",
      value:opportunityData?.language
    },
    {
      img: amount,
      title: "Amount :",
      value:opportunityData?.budget
    },
    {
      img: dateOfPerformance,
      title: "Date of Performance :",
      value:opportunityData?.performanceDate.slice(0, 10)
    },
    {
      img: dateOfPerformance,
      title: "Duration of Performance :",
      value:opportunityData?.performanceDuration
    },
    {
      img: appliDueDate,
      title: "Application Due Date :",
      value:opportunityData?.applicationPeriod?.end.slice(0,10)
    },
  ];



  // ! this function is to fetch the application 
  const fetchArtistApplication = async()=>{
    try{
            const response = await makeAuthenticatedGETRequest(patronProfilePoints.GET_SINGLE_OPPOR_ALL_APPLIED_ARTIST_APPLI_API +`${id}` , accessToken);
      console.log('fetchappli' , response);
      if(response.status === 'success'){
        setArtistApplication(response.data);
      }
      else{
        toast.error(response.message);
      }

    } catch(error){
      console.log(error);
      toast.error('Something went wrong , please try again');
    }
  }

  // ! THIS Is to fetch the all inprogress or shortlist application 
  const fetchInProgressApplication = async()=>{
    try{
            const response = await makeAuthenticatedGETRequest(patronProfilePoints.GET_SINGLE_OPPOR_ALL_IN_PROGRESS_ARTIST_APPLI_API +`${id}` , accessToken);
      console.log('inprof' , response);
      if(response.status === 'success'){
        setShortlistApplication(response.data);
      }
      else{
        toast.error(response.message);
      }

    } catch(error){
      console.log(error);
      toast.error('Something went wrong , please try again');
    }
  }


  // this is to fetch the hired application 
  const fetchHiredApplication = async()=>{
    try{
            const response = await makeAuthenticatedGETRequest(patronProfilePoints.GET_SINGLE_OPPOR_ALL_HIRED_ARTIST_APPLI_API +`${id}` , accessToken);
      console.log('hired' , response);
      if(response.status === 'success'){
        setHiredApplication(response.data);
      }
      else{
        toast.error(response.message);
      }

    } catch(error){
      console.log(error);
      toast.error('Something went wrong , please try again');
    }
  }

  // this useEffect is to call the api on basic of current event
  useEffect(()=>{

    if(currentEvent === 'Application'){
      fetchArtistApplication();
    }

   else if(currentEvent === 'Shortlisted'){
      fetchInProgressApplication();
    }
 
    else {
      fetchHiredApplication();
    }
    

  },[currentEvent])


  return (
    <>
    <Patron_Navbar/>
    <div className="patron_event_appli_wrapper">
      {/* image section */}
      <section className="event_image_section">
        <img src={eventBg} alt="background" className="event_bgImg" />
        <img src={bgFilter} alt="" className="event_appli_bgFilter" />
        <p className="event_application_text">
          Event Application for {opportunityData?.artName}
        </p>
      </section>

      {/* job description */}
      <section className="patron_job_description_wrapper">
        {/* left side */}
        <div className="job_description_container">
        <h1 className="job_description_text" style={{color:"#AD2F3B",margin:"5px 0"}}>{opportunityData?.artName}</h1>
           <p className="job_description_text" style={{opacity:"70%",color:"#000000"}}>{opportunityData?.description}</p>
          {/*<p className="job_description_text">Location - {opportunityData?.location}</p>
          <p className="job_description_text">Language - {opportunityData?.languages}</p>
          <p className="job_description_text">Amount - {opportunityData?.budget}</p>
          <p className="job_description_text">Date of Performance  - {opportunityData?.performanceDate.slice(0, 10)}</p>
          <p className="job_description_text">Duration of Performance  - {opportunityData?.performanceDuration}</p> */}

{appli_Data.map((data, index) => (
                          <div
                            key={index}
                            style={{ display: "flex", gap: "10px",margin:"10px 0" }}
                          >
                            <img
                              src={data.img}
                              alt=""
                              style={{
                                marginBottom: "10px",
                              }}
                            />
                            <p
                              className="applied_appli_title"
                              style={{
                                color: "rgb(0,0,0,0.7)",
                                fontWeight: "500",
                                fontFamily: "Poppins",
                              }}
                            >
                              {data.title}
                            </p>
                            <p
                              className="applied_appli_title"
                              style={{
                                color: "rgb(0,0,0)",
                                fontWeight: "500",
                                fontFamily: "Poppins",
                              }}
                            >
                              {data.value}
                            </p>

                          </div>
                        ))}
         
         
          {/* <p className="job_description_para">{opportunityData?.description}</p> */}
          {/* <ul className="job_des_allList">
            {jobDesList.map((desc, index) => (
              <li className="job_des_list" key={index}>
                {desc?.title}
              </li>
            ))}
          </ul> */}

          <div className="desc_buttons">
            {btnData.map((btn, index) => (
              <button
                onClick={() => setCurrentEvent(btn.title)}
                className={`${
                  currentEvent === btn.title ? "event_currentBtn" : "event_btn"
                }`}
                key={index}
              >
                {btn?.title}
              </button>
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="job_overview_container">
          <p className="job_overview_text">Job Overview</p>

          <div className="all_job_overview">
          
              <div  className="single_job_overview">
                <img src={category} alt="" className="single_overview_img" />
                <p style={{fontWeight:"500" , fontSize:"18px"}} className="single_job_category">Category</p>
                <p className="single_job_title">{opportunityData?.artCategory}</p>
              </div>

              <div  className="single_job_overview">
                <img src={posted} alt="" className="single_overview_img" />
                <p style={{fontWeight:"500" , fontSize:"18px"}} className="single_job_category">Application Posted</p>
                <p className="single_job_title">{new Date(   opportunityData?.applicationPeriod?.start
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}</p>
              </div>

              <div  className="single_job_overview">
                <img src={date} alt="" className="single_overview_img" />
                <p style={{fontWeight:"500" , fontSize:"18px"}} className="single_job_category">Application Due Date</p>
                <p className="single_job_title">{new Date(
                            opportunityData?.applicationPeriod?.end
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}</p>
              </div>

              {/* <div  className="single_job_overview">
                <img src={opening} alt="" className="single_overview_img" />
                <p style={{fontWeight:"500" , fontSize:"18px"}} className="single_job_category">Opening</p>
                <p className="single_job_title">{opportunityData?.requiredArtists}</p>
              </div> */}
            
          </div>
        </div>
      </section>



{/* ⚠️ when actual data of all application will come , use map funtion and put this section inside it  */}
      {/* user detail box   */}

      {/* ⚠️ for application section  */}
      {
        currentEvent === 'Application' &&  
        (
          artistApplication.length > 0 ? 
          artistApplication.map((data , index)=>(
            <section key={index} className="patron_event_detail_Section">
            {/*box ka left part ==> card  */}
            <div className="event_card_wrapper">
              {/* card ka left part */}
              <div className="appliedOn_container">
                      Applied On <br />{" "}
                      {new Date(
                            data?.appliedOn
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                    </div>
              <div className="card_left_container">
                <img src={ekalakaa} className="card_left_ekalakaar" alt="" />
                <div className="card_user_personal_details">
                
                    <div key={index} className="single_personalDetail">
                      <div className="personal_Detail_img">
                        {" "}
                        <img src={phone} alt="" />{" "}
                      </div>
                      <p className="personal_detail_title">{data?.appliedBy?.phoneNumber}</p>
                    </div>

                    <div key={index} className="single_personalDetail">
                      <div className="personal_Detail_img">
                        {" "}
                        <img src={anvelop} alt="" />{" "}
                      </div>
                      <p className="personal_detail_title">{data?.appliedBy?.email}</p>
                    </div>

                    <div key={index} className="single_personalDetail">
                      <div className="personal_Detail_img">
                        {" "}
                        <img src={locationArt} alt="" />{" "}
                      </div>
                      <p className="personal_detail_title">{data?.appliedBy?.address?.state}</p>
                    </div>
                 
                </div>

             {/* gap */}
    
                {/* social media */}
                <div className="user_socical_details_container">
                 
                    <div  className="single_socail_detail">
                      <img src={instagram} alt="" className="socail_img" />
                      <p className="social_title">{data?.appliedBy?.socialLinks?.instagram}</p>
                    </div>
                    <div key={index} className="single_socail_detail">
                      <img src={facebookimg} alt="" className="socail_img" />
                      <p className="social_title">{data?.appliedBy?.socialLinks?.facebook}</p>
                    </div>
                  
                </div>
              </div>
    
              {/* strip */}
              <img src={RectangleImg} alt="" className="card_strip" />


              {/* ṛight part */}
              <div className="card_right_part">
                <img src={DP} alt="" className="userDP" />
                <p className="card_right_userName">{data?.appliedBy?.firstName} {data?.appliedBy?.lastName} </p>
                <p className="card_right_user_profession">{data?.appliedBy?.category}</p>
              </div>
            </div>
    
            {/* right part */}
            <div className="event_detail_wrapper">
    
    {/* top  */}
    <div className="event_appli_details" >
       {/* <div className="single_event_appli_detail" > 
            <p className="single_detail_title">Applied On</p>
            <p className="single_detail_ans">{new Date(
                            data?.appliedOn).toLocaleDateString("en-US", {day: "numeric",month: "short",year: "numeric",
                          })}</p>
        </div>    */}
        <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Art Name</p>
            <p className="single_detail_ans">{data?.appliedBy?.artName}</p>
        </div>    
       <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Location</p>
            <p className="single_detail_ans">{data?.appliedBy?.address?.city}</p>
        </div>    
       <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Ratings</p>
            <p className="single_detail_ans"></p>
        </div>    
        <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Quoted Price</p>
            <p className="single_detail_ans">{data?.quotedPrice}</p>
        </div> 
      
    </div>
    
    {/* ṃiddle part -> this is for why you want to hire , add it later */}

    
    <div style={{width:"90%" , }}>
      <p style={{fontFamily:"Poppins" , fontWeight:"500" ,color:"black" ,}}>Why do you want ot Apply for this Role?</p>
      <p style={{fontFamily:"Poppins" , fontWeight:"500" , opacity:"0.7" ,color:"black" ,}}>{data?.answer}</p>
    </div>
    

    {/* bottom button */}
    <button onClick={()=>navigate(`/patron-view-artist/${data?.appliedBy?._id}` , {state : {applicationId :data?._id , appliType:"Application"}})} className="view_Profile_btn">View Profile</button>
    
            </div>
          </section>
    
          )):(
            <NoDataTemplate image={noAppli} patronAppli={true} />
          )
        )
     }


{/* ⚠️ for shortlisted section  */}
              {
                currentEvent === 'Shortlisted' && 
                (
                  shotlistApplication.length > 0  ?
                  (

                  

                  shotlistApplication.map((data  ,index)=>(

                  <section key={index} className="patron_event_detail_Section">
                    <div className="appliedOn_container">
                      Applied On <br />{" "}
                      {new Date(
                            data?.appliedOn
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                    </div>
                  {/*box ka left part */}
                  <div className="event_card_wrapper">
                    {/* card ka left part */}
                    <div className="card_left_container">
                      <img src={ekalakaa} className="card_left_ekalakaar" alt="" />
                      <div className="card_user_personal_details">
                       
                          <div  className="single_personalDetail">
                            <div className="personal_Detail_img">
                              {" "}
                              <img src={phone} alt="" />{" "}
                            </div>
                            <p className="personal_detail_title">{data?.appliedBy?.phoneNumber}</p>
                          </div>

                          <div  className="single_personalDetail">
                            <div className="personal_Detail_img">
                              {" "}
                              <img src={anvelop} alt="" />{" "}
                            </div>
                            <p className="personal_detail_title">{data?.appliedBy?.email}</p>
                          </div>

                          <div  className="single_personalDetail">
                            <div className="personal_Detail_img">
                              {" "}
                              <img src={location} alt="" />{" "}
                            </div>
                            <p className="personal_detail_title">{data?.appliedBy?.address?.details}</p>
                          </div>
                       
                      </div>
          
                      {/* social media */}
                      <div className="user_socical_details_container">
                       
                          <div key={index} className="single_socail_detail">
                            <img src={instagram} alt="" className="socail_img" />
                            <p className="social_title">{data?.appliedBy?.socialLinks?.instagram}</p>
                          </div>
                       
                       
                          <div key={index} className="single_socail_detail">
                            <img src={facebookimg} alt="" className="socail_img" />
                            <p className="social_title">{data?.appliedBy?.socialLinks?.facebook}</p>
                          </div>
                       
                      </div>
                    </div>
          
                    {/* strip */}
                    <img src={RectangleImg} alt="" className="card_strip" />
                    {/* ṛight part */}
                    <div className="card_right_part">
                      <img src={DP} alt="" className="userDP" />
                      <p className="card_right_userName">{data?.appliedBy?.firstName} {data?.appliedBy?.lastName}</p>
                      <p className="card_right_user_profession">{data?.artNature}</p>
                    </div>
                  </div>
          
                  {/* right part */}
                  <div className="event_detail_wrapper">
          
          {/* top  */}
          <div className="event_appli_details" >
             {/* <div className="single_event_appli_detail" > 
                  <p className="single_detail_title">Applied On</p>
                  <p className="single_detail_ans">{new Date(
                            data?.appliedOn).toLocaleDateString("en-US", {day: "numeric",month: "short",year: "numeric",
                          })}</p>
              </div>     */}
             <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Art Name</p>
            <p className="single_detail_ans">{data?.appliedBy?.artName}</p>
        </div>    
       <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Location</p>
            <p className="single_detail_ans">{data?.appliedBy?.address?.city}</p>
        </div>    
       <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Ratings</p>
            <p className="single_detail_ans"></p>
        </div>    
        <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Quoted Price</p>
            <p className="single_detail_ans">{data?.quotedPrice}</p>
        </div>     
            
          </div>

          <div style={{width:"90%" , }}>
      <p style={{fontFamily:"Poppins" , fontWeight:"500" ,color:"black" ,}}>Why do you want ot Apply for this Role?</p>
      <p style={{fontFamily:"Poppins" , fontWeight:"500" , opacity:"0.7" ,color:"black" ,}}>{data?.answer}</p>
    </div>
          
          {/* bottom button */}
          <div style={{display:"flex"}}>
          <button onClick={()=>navigate(`/patron-view-artist/${data?.appliedBy?._id}` , {state : {applicationId :data?._id , appliType:"Shortlisted"}})}  className="view_Profile_btn">View Profile</button>
          <button className="chat_artist_btn">Chat With Artist</button>
          </div>
          
                  </div>
                </section>
                 ))
                 ):(
                  <NoDataTemplate image={noAppli} patronAppli={true} />
                  
                 )
                )
              
              }
              

              {/*! for Hired section  */}
              {
                currentEvent === 'Hired' && 
                hiredApplication.length > 0 ? (
                  hiredApplication.map((data , index)=>(
                  

                <section key={index} className="patron_event_detail_Section">
                  <div className="appliedOn_container">
                      Applied On <br />{" "}
                      {new Date(
                            data?.appliedOn
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                    </div>
                {/*box ka left part */}
                <div className="event_card_wrapper">
                  {/* card ka left part */}
                  <div className="card_left_container">
                    <img src={ekalakaa} className="card_left_ekalakaar" alt="" />
                    <div className="card_user_personal_details">
                      
                        <div  className="single_personalDetail">
                          <div className="personal_Detail_img">
                            {" "}
                            <img src={phone} alt="" />{" "}
                          </div>

                          <p className="personal_detail_title">{data?.appliedBy?.phoneNumber}</p>
                        </div>
                        <div  className="single_personalDetail">
                          <div className="personal_Detail_img">
                            {" "}
                            <img src={anvelop} alt="" />{" "}
                          </div>

                          <p className="personal_detail_title">{data?.appliedBy?.email}</p>
                        </div>
                        <div  className="single_personalDetail">
                          <div className="personal_Detail_img">
                            {" "}
                            <img src={location} alt="" />{" "}
                          </div>
                          <p className="personal_detail_title">{data?.appliedBy?.address?.details}</p>
                        </div>
                     
                    </div>
        
                    {/* social media */}
                    <div className="user_socical_details_container">
                    
                        <div  className="single_socail_detail">
                          <img src={instagram} alt="" className="socail_img" />
                          <p className="social_title">{data?.appliedBy?.socialLinks?.instagram}</p>
                        </div>

                        <div  className="single_socail_detail">
                          <img src={facebookimg} alt="" className="socail_img" />
                          <p className="social_title">{data?.appliedBy?.socialLinks?.facebook}</p>
                        </div>
                    
                    </div>
                  </div>
        
                  {/* strip */}
                  <img src={RectangleImg} alt="" className="card_strip" />

                  {/* ṛight part */}
                  <div className="card_right_part">
                    <img src={DP} alt="" className="userDP" />
                    <p className="card_right_userName">{data?.appliedBy?.firstName} {data?.appliedBy?.lastName} </p>
                    <p className="card_right_user_profession">{data?.artNature}</p>
                  </div>
                </div>
        
                {/* right part */}
                <div className="event_detail_wrapper">
        
        {/* top  */}
        <div className="event_appli_details" >
           {/* <div className="single_event_appli_detail" > 
                <p className="single_detail_title">Applied On</p>
                <p className="single_detail_ans">{new Date(
                            data?.appliedOn).toLocaleDateString("en-US", {day: "numeric",month: "short",year: "numeric",
                          })}</p>
            </div>     */} 
            <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Art Name</p>
            <p className="single_detail_ans">{data?.appliedBy?.artName}</p>
        </div>    
       <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Location</p>
            <p className="single_detail_ans">{data?.appliedBy?.address?.city}</p>
        </div>    
       <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Ratings</p>
            <p className="single_detail_ans"></p>
        </div>    
        <div className="single_event_appli_detail" > 
            <p  className="single_detail_title">Quoted Price</p>
            <p className="single_detail_ans">{data?.quotedPrice}</p>
        </div>   
          
        </div>

        <div style={{width:"90%" , }}>
      <p style={{fontFamily:"Poppins" , fontWeight:"500" ,color:"black" ,}}>Why do you want ot Apply for this Role?</p>
      <p style={{fontFamily:"Poppins" , fontWeight:"500" , opacity:"0.7" ,color:"black" ,}}>{data?.answer}</p>
    </div>
        
        {/* bottom button */}
        <div style={{display:"flex"}}>
        <button onClick={()=>navigate(`/patron-view-artist/${data?.appliedBy?._id}` , {state : {applicationId :data?._id , appliType: 'Hired'}})} className="view_Profile_btn">View Profile</button>


        <button className="chat_artist_btn">Chat With Artist</button>
        </div>
                </div>
              </section>
                ))
                ):(
                //  <NoDataTemplate image={noAppli} patronAppli={true} />
                <div>

                </div>
              
                )
              }
    </div>
    </>
  );
}

export default EventApplication;
