import noData from "./assets/noData.svg";
import location from "./assets/location.svg";
import language from "./assets/language.svg";
import applicationDueDate from "./assets/applicationDueDate.svg";
import amount from "./assets/amount.svg";
import dateOfPerformance from "./assets/dateOfPerformance.svg";
import "./saveApplicationItems.css";
import ApplicationButton from "./ApplicationButton";
import NoDataTemplate from "./NoDataTemplate";
import { Link } from "react-router-dom";
import { makeAuthenticatedDELETERequest } from "../../../services/serverHelper";
import { statusOfAppliPoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useEffect, useState } from "react";
import artnature from "./assets/natureOfArt.svg"
import category from "./assets/category.svg"
import cross from "./assets/cross.svg"
import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
import { artistOpportunityPoints } from "../../../services/apis";

function SaveApplicationItems({ loading, setLoading, currentEvent }) {
  const { accessToken } = useSelector((state) => state.auth);

  const [whyText , setWhyText] = useState({answer:"",quotedPrice:""});

  const [popupData , setPopupData] = useState(null);

  const [jobData, setJobData] = useState([]);


// this is for save fetch data 
  const fetchSavedApplication = async () => {
    setLoading(true);
    try {
      const response = await makeAuthenticatedGETRequest(
        statusOfAppliPoints.FETCH_SAVED_APPLI_API,
        accessToken
      );

      console.log('ress' , response);

      if (response.status === "success") {
        setJobData(response.data);
      } else {
        toast.error(response.message , {
          position:"top-center"
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please  try again" , {
        position:"top-center"
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSavedApplication();
  }, []);


  const unsaveHandler = async (id) => {
    console.log("id", id);
    setLoading(true);
    try {
      const response = await makeAuthenticatedDELETERequest(
        statusOfAppliPoints.FETCH_SAVED_APPLI_API + `/${id}`,
        accessToken
      );
      console.log("[res", response);
      if (response.status === "success") {
        toast.success("Successfully Unsaved the Application" , {
          position:"top-center"
        });
        fetchSavedApplication();
      } else {
        toast.error(response.message , {
          position:"top-center"
        }) ;
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again" , {
        position:"top-center"
      });
    }
    setLoading(false);
  };

  const applySubmitHandler = async (event) => {
    const toastId = toast.loading("Loading...");
    try {
      event.preventDefault();
      // console.log(whyText)
      const response = await makeAuthenticatedPOSTRequest(
        artistOpportunityPoints.APPLY_OPPOR_API +
          `/${popupData?._id}`,
        { whyText },
        accessToken
      );

      if (response.status === "success") {
        toast.success("successfully applied" , {
          position:"top-center"
        });
        setPopupData(null);
        setWhyText({quotedPrice:"",answer:""});
        setPopupData(null)
      } else {
        toast.error(response.message  ,{
          position:"top-center"
        });
        setPopupData(null)
      }
    } catch (error) {
      console.log(error);
      toast.error("server error , please try again" , {
        position:"top-center"
      });
    }

    toast.dismiss(toastId);
  };

  return (
    <div className="saveApplicationItems_Wrapper">
      <p className="saved_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      {loading ? (
        <div className="custom-loader" style={{ margin: "0 auto" }}></div>
      ) : (
        <div className="saved_event_Detail_Container">
          {jobData.length === 0 ? (
            <NoDataTemplate
              image={noData}
              para={"You haven't saved for any events application"}
            />
          ) : (
            <div className="saved_event_details">
              {jobData.map((event, index) => (
                <>
                  <div key={index} className="single_saved_event">
                    {/* left part  */}
                    <div className="saved_event_leftPart">
                    <div>
                        <h3 style={{margin:"5px 0"}} className="saved_event_heading">{event.purpose}</h3>
                      <p style={{marginTop: "20px",
                                marginBottom: "20px",
                                color: "black",
                                opacity: "0.7"}}>{event.description}</p>
                        </div>
                      <div className="saved_event_data">
                        <div className="saved_event_data_left">
                          <img src={location} alt="location" />
                          <p className="save_event_data_para">Location of Performance:</p>
                        </div>
                        <p className="save_event_data_ans">{event.location}</p>
                      </div>
                      <div className="saved_event_data">
                        <div className="saved_event_data_left">
                          <img src={language} alt="dop" />
                          <p className="save_event_data_para">Language of Performance :</p>
                        </div>
                        <p className="save_event_data_ans">
                          {" "}
                          <span>
                            {event.languages}
                          </span>
                        </p>
                      </div>
                      <div className="saved_event_data">
                        <div className="saved_event_data_left">
                          <img src={amount} alt="dop" />
                          <p className="save_event_data_para">Amount :</p>
                        </div>
                        <p className="save_event_data_ans">{event.budget}</p>
                      </div>
                      <div className="saved_event_data">
                        <div className="saved_event_data_left">
                          <img src={dateOfPerformance} alt="dop" />
                          <p className="save_event_data_para">
                            Date of Performance :
                          </p>
                        </div>
                        <p className="save_event_data_ans">
                         {new Date(event.performanceDate).toLocaleDateString(
                          "en-US",
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                        </p>
                      </div>
                      <div className="saved_event_data">
                        <div className="saved_event_data_left">
                          <img src={dateOfPerformance} alt="" />
                          <p className="save_event_data_para">Duration of Performance :</p>
                        </div>
                        <p className="save_event_data_ans">{event.performanceDuration}</p>
                      </div>
                      <div className="saved_event_data">
                        <div className="saved_event_data_left">
                          <img src={applicationDueDate} alt="dop" />
                          <p className="save_event_data_para">
                            Application Due Date :
                          </p>
                        </div>
                        <p className="save_event_data_ans">
                          {new Date(
                            event.applicationPeriod.end
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      
                      
                    </div>
                    {/* right part  */}
                    <div className="saved_event_rightPart">
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

                      <ApplicationButton onclick={()=>setPopupData(event)}  text={"Apply Now"} />
                    </div>
                  </div>
                  <div
                    onClick={() => unsaveHandler(event._id)}
                    className="remove_from_saved_text"
                  >
                    Remove from Saved
                  </div>
                </>
              ))}

           <Link style={{textDecoration:"none"}} to={"/Artist_Opportunities"}>
              <ApplicationButton text={"View More Events"} />
           </Link>
            </div>
          )}
        </div>
      )}


{
  popupData && 
  <>
  {/* apply now popup */}
  <div className="save_appli_Popup_wrapper">
  <form onSubmit={applySubmitHandler} style={{display:"flex" ,flexDirection:"column" , justifyContent:"space-evenly",    gap: "20px"}} className="popup_container">

    {/* heading */}
    <div className="save_popup_heading_wrapper">
      <p className="save_popup_position">{popupData.purpose}</p>
      <div onClick={()=>setPopupData(null)} style={{  padding:"10px" , cursor:"pointer"}}>

      <img onClick={()=>setPopupData(null)} style={{cursor:"pointer"}} className="save_popup_cross" src={cross} alt="" />
      </div>
    </div>

{/* second row */}
    <div className="s_pop_posted_row_container">
       <p className="save_popup_common">posted On: <span className="save_popup_ans"> {new Date(popupData.applicationPeriod.start).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}</span> </p>
       <p className="save_popup_common">Last date To Apply : <span className="save_popup_ans">{new Date(
                            popupData?.applicationPeriod?.end
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })} </span></p>
    </div>
{/* 
description
    <p> <span className="save_popup_common"> Description : </span> <span className="save_popup_ans"> {popupData.description}</span> </p>

details div
    <div >
      <p style={{paddingLeft:"20px"}} className="save_otherDetails_text">Other details</p>
      <div style={{display:"flex" , gap:"60px" , marginLeft:"20px"}} className="other_Detail_wrapper">

        left side 
        <div style={{display:"flex" , flexDirection:"column" }}>
      <p className="save_popup_common">Nature Of Art : </p>
      <p className="save_popup_common">Expertise : </p>
      <p className="save_popup_common">Location :  </p>
      <p className="save_popup_common"> Language :  </p>
      <p className="save_popup_common">Amount :  </p>
      <p className="save_popup_common">Opening :  </p>
      </div>

      right answer side
      <div style={{display:"flex" , flexDirection:"column" }} className="">
        <p className="save_popup_ans">{popupData.artNature}</p>
        <p className="save_popup_ans">{popupData.expertise}</p>
        <p className="save_popup_ans">{popupData.location}</p>
        <p className="save_popup_ans">{popupData.languages?.map((lan, index) => (
                              <span key={index}>{lan}</span>
                            ))}</p>
        <p className="save_popup_ans">{popupData.budget}</p>
        <p className="save_popup_ans">{popupData.requiredArtists}</p>

      </div>
      </div>
     
    </div> */}

{/* why do you want to apply div */}
    <div style={{display:"flex"}}>
      <p>My quoted price:</p>
      <input style={{marginLeft:"5px"}} type="number" onChange={(e)=>setWhyText((prevData) => ({
        ...prevData,
        quotedPrice: e.target.value,
      }))} value={whyText.quotedPrice} required />
    </div>
    <div>
           <p className="save_popup_ans">Why do you want to apply for this role ?</p>
           <textarea required value={whyText.answer} onChange={(e)=>setWhyText((prevData) => ({
        ...prevData,
        answer: e.target.value,
      }))} style={{width:"95%" , resize:"none" , border:"2px solid black" , borderRadius:"10px" , height:"100px" , padding:"10px" , }}  />
    </div>

    {/* buttons  */}
    <div style={{display:"flex" , width:"95%" ,justifyContent:"flex-end" , alignItems:"center" , gap:"20px"}} className="buttons_wrapper">
      <button onClick={()=>setPopupData(null)} style={{backgroundColor:"transparent" , border:"none" , fontSize:"20px" , fontWeight:"500" ,fontFamily:"Poppins" }} >Cancel</button>
      <button type="submit" style={{backgroundColor:"#AD2F3B" ,color:"white" , padding:"10px" , paddingLeft:"20px" , paddingRight:"20px" , borderRadius:"10px", border:"none" , fontSize:"20px" , fontWeight:"500" ,fontFamily:"Poppins" }} >Submit</button>
    </div>

  </form>
</div>
</>
}


    </div>
  );
}

export default SaveApplicationItems;
