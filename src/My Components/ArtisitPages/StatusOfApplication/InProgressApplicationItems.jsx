import ApplicationButton from "./ApplicationButton";
import "./inProgressApplicationEvent.css"
import NoDataTemplate from "./NoDataTemplate";
import inProgressNoData from "./assets/inProgressNoData.svg"
import { Link } from "react-router-dom";
import { useState } from 'react';
import category from "./assets/category.svg";
import artNature from "./assets/natureOfArt.svg";
import location from "./assets/location.svg";
import dateOfPerformance from "./assets/dateOfPerformance.svg";
import amount from "./assets/amount.svg";
import language from "./assets/language.svg";
import appliDueDate from "./assets/applicationDueDate.svg";

const appli_Data = [
  {
    img: location,
    title: "Location of Performance :",
  },
  {
    img: language,
    title: "Language of Performance :",
  },
  {
    img: amount,
    title: "Amount :",
  },
  {
    img: dateOfPerformance,
    title: "Date of Performance :",
  },
  {
    img: dateOfPerformance,
    title: "Duration of Performance :",
  },
  {
    img: appliDueDate,
    title: "Application Due Date :",
  },
 ]

function InProgressApplicationItems({ currentEvent , jobData  , loading}) {
  
  return (
    <div className="inProgress_Application_wrapper">
      <p className="progress_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      <div className="progress_event_Detail_Container">
        {
          loading ?(
            <div className="custom-loader" style={{ margin: "0 auto" }}></div>
          ):(
            jobData.length === 0 ? (
              <NoDataTemplate
                image={inProgressNoData}
                para={"There is no In-progress events application."}
              />
            ) : (
              <div className="applied_Event_details">
              {jobData?.map((event, index) => (
                <div key={index} className="single_inprogress_eventWrapper">
                  {/* <div> */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h1 className="single_inprogress_heading">{event?.opportunity?.purpose}</h1>
                      <div style={{color:'#F1BC00' , backgroundColor:"#FFF8B7" , paddingLeft:"8px" , paddingRight:"8px"  , paddingTop:"5px" ,paddingBottom:"5px", borderRadius:"10px"}} className="inprogress_text">
                      In-Progress
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: "20px",
                        color: "black",
                        opacity: "70%",
                      }}
                      className="single_applied_para"
                    >
                      {event?.opportunity?.description}
                    </p>
    
                    <div className="inprogress_detail_btn_wrapper">
    
                      <main className="inprogress_detail_container">
    
                         {/* left side */}
                         <div className="inprogrss_left"  >
                         {
                          appli_Data.map((data , index)=>(
                            <div key={index} style={{display:"flex" , gap:"10px" ,  }}>
                              <img src={data.img} alt="" style={{
                                marginBottom:"10px"
                              }} />
                              <p  className="inprogress_text" style={{color:"rgb(0,0,0,0.7)" , fontWeight:"500" , fontFamily:"Poppins"}} >{data?.title}</p>
                            </div>
                          ))
                         }
                         </div>
    
                         {/* right side */}
                         <div className="inprogrss_right"
                         style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                        }} >
                           <p className="inprogress_text"  style={{fontFamily:"Poppins"  , fontWeight:"500" , color:"black"}}>{event?.opportunity?.location} </p>
    
                           <p  className="inprogress_text" style={{fontFamily:"Poppins"  , fontWeight:"500" , color:"black"}}>
                            {event?.opportunity?.languages}</p>
    
                           <p  className="inprogress_text" style={{fontFamily:"Poppins"  , fontWeight:"500" , color:"black"}}>{event?.opportunity?.budget}</p>
    
                           <p  className="inprogress_text" style={{fontFamily:"Poppins"  , fontWeight:"500" , color:"black"}}>{new Date(event?.opportunity?.performanceDate).toLocaleDateString(
                              "en-US",
                              { day: "numeric", month: "short", year: "numeric" }
                            )}</p>
    
                           <p  className="inprogress_text" style={{fontFamily:"Poppins"  , fontWeight:"500" , color:"black"}}>NA</p>
    
    
                             <p  className="inprogress_text" style={{fontFamily:"Poppins"  , fontWeight:"500" , color:"black"}}> {new Date(
                              event?.opportunity?.applicationPeriod?.end
                            ).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                            </p>
                         </div>
                      </main>
                          
                          {/* this is for buttons */}
                          <div className="inprogress_btn_wrapper">
    
                          <Link 
                            to="/Artist_OpportunityDetails"
    
                            style={{ textDecoration: "none" }}
                            state={{ job: jobData[index] }}
                          >
                            <ApplicationButton
                              text={"More Information"}
                              background_flag={true}
                            />
                          </Link>
                      <button style={{backgroundColor:"#AD2F3B" , color:"white" , fontWeight:"500" , width:"180px" ,height:"44px" , borderRadius:"10px" , border:"none" , padding:"10px"}} >Chat With Patron</button>
                          </div>
                    </div>
                   
                  {/* </div> */}
    
                </div>
              ))}
            </div>
            )
          )
        }
     
      </div>
    </div>
  )
}

export default InProgressApplicationItems;