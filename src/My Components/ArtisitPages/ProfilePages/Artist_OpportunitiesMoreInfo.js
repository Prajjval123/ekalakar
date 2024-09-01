import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Artist_OpportunitiesMoreInfo.css";
import { useState } from "react";
import Artist_navbar from "../Artist_navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import {
  makeAuthenticatedPOSTRequest,
  makeAuthenticatedPOSTRequestWithoutBody,
} from "../../../services/serverHelper";
import { artistOpportunityPoints } from "../../../services/apis";

export function Artist_OpportunitiesMoreInfo() {
  const navigate = useNavigate();

  const location = useLocation();

  let job = location.state?.job;

  console.log("job", job);

  const [currentId, setCurrentId] = useState(null);

  const [OpportunityapplynowPopup, setOpportunityapplynowPopup] =
    useState(null);

  const { accessToken } = useSelector((state) => state.auth);

  const [applyAns, setApplyAns] = useState({quotedPrice:"",answer:""});

  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    if (job?.status === "Applied") {
      setCurrentId(job?._id);
      setJobData(job);
    } else {
      setCurrentId(job?._id);
      setJobData(job);
    }
  }, []);

  console.log("setjobda", jobData);

  console.log("curenid", currentId);

  const applySubmitHandler = async (event) => {
    const toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    try {
      event.preventDefault();
      const response = await makeAuthenticatedPOSTRequest(
        artistOpportunityPoints.APPLY_OPPOR_API + `/${job._id}`,
        { applyAns },
        accessToken
      );
      console.log(applyAns)
      console.log("response", response);

      if (response.status === "success") {
        toast.success("successfully applied", {
          position: "top-center",
        });
        setOpportunityapplynowPopup(null);
        setApplyAns({quotedPrice:"",answer:""});
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("server error , please try again", {
        position: "top-center",
      });
    }

    toast.dismiss(toastId);
  };

  const savedHandler = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await makeAuthenticatedPOSTRequestWithoutBody(
        artistOpportunityPoints.SAVE_OPPR_BY_ID + `/${currentId}`,
        accessToken
      );
      console.log("response saved", response);
      if (response.status === "success") {
        toast.success("successfully Saved", {
          position: "top-center",
        });
        navigate("/statusOfApplication");
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , Please try again", {
        position: "top-center",
      });
    }
    toast.dismiss(toastId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Artist_navbar />
      <div className="OpportunitiesMoreInfoPage">
        <div className="OpportunitiesMoreInfoPage_Topbox">
          <h1 style={{ color: "#AD2F3B" }}>{jobData?.purpose}</h1>
          <div className="OpportunitiesMoreInfoPage_Topboxcontent">
            <div className="OpportunitiesPage_displayonejob_contentdetailsone">
              {/* <p>
                Category :&emsp;<span>{jobData?.artCategory}</span>
              </p> */}
              <p>
                Posted on :&emsp;
                <span>
                  {new Date(
                    jobData?.applicationPeriod?.start
                  ).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
              <p>
                Due Date :&emsp;{" "}
                <span>
                  {new Date(jobData?.applicationPeriod?.end).toLocaleDateString(
                    "en-US",
                    { day: "numeric", month: "short", year: "numeric" }
                  )}
                </span>
              </p>
              {/* <p>
                {" "}
                Opening :&emsp; <span>{jobData?.requiredArtists}</span>
              </p> */}
            </div>
            <div className="OpportunitiesMoreInfoPage_Topboxbtns">
              <button className="btnone">Share</button>
              <button onClick={savedHandler} className="btntwo">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="OpportunitiesMoreInfoPage_bottombox">
          <h1>Description</h1>
          <p>{jobData?.description}</p>
          <h1>Other Details</h1>
          <div className="OpportunitiesMoreInfoPage_bottombox_RSO">
            <div>
              <p>Type of Organisation/Patron :</p>
              <p>Location of Performance : </p>
              <p>Language of Performance : </p>
              <p>Approx. Budget for Performance : </p>
              <p>Date of Performance : </p>
              <p>Duration of Performance : </p>
              <p>Application Last Date : </p>
              <p>Type of Art : </p>
              <p>Category of Art :</p>
              <p>Name of Art : </p>
              <p>Theme of Performance : </p>
              <p>Live/Recorded/Part Live :</p>
              <p>Need customized/ curated Performance : </p>
              <p>No. of required Artists : </p>
              <p>Location of Artist : </p>
              <p>Size of Audience : </p>
              <p>Profile of Audience : </p>
              <p>Venue of Performance : </p>
              <p>Performance Facilities :</p>
              <p>Any other Requirements : </p>
              {/* <p>Name of Contact Person : </p>
              <p>Contact Number : </p>
              <p>Email ID : </p> */}
            </div>
            <div>
              <p>NA</p>
              <p>
                <span>{jobData?.location}</span>
              </p>
              <p>
                <span>
                  {/* {jobData?.languages} */}
                  {jobData?.languages}
                </span>
              </p>
              <p>
                <span>{jobData?.budget} </span>
              </p>
              <p>
                {new Date(jobData?.performanceDate).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </p>
              <p>
                <span>{jobData?.performanceDuration} </span>
              </p>
              <p>
                {new Date(jobData?.applicationPeriod?.end).toLocaleDateString(
                  "en-US",
                  { day: "numeric", month: "short", year: "numeric" }
                )}
              </p>
              <p>
                <span>{jobData?.artType} </span>
              </p>
              <p>
                <span>{jobData?.artCategory} </span>
              </p>
              <p>
                <span>{jobData?.artName} </span>
              </p>
              <p>
                <span>{jobData?.theme} </span>
              </p>
              <p>
                <span>{jobData?.mediaType} </span>
              </p>
              <p>
                <span>{jobData?.customization} </span>
              </p>
              <p>
                <span>{jobData?.requiredArtists} </span>
              </p>
              <p>
                <span>{jobData?.artistLocation} </span>
              </p>
              <p>
                <span>{jobData?.audienceSize} </span>
              </p>
              <p>
                <span>{jobData?.audienceProfile} </span>
              </p>
              <p>
                <span>{jobData?.venue} </span>
              </p>
              <p>
                <span>{jobData?.facilities} </span>
              </p>
              <p>
                <span>{jobData?.otherRequirements} </span>
              </p>
              {/* <p>
                <span>{jobData?.contactPersonName} </span>
              </p>
              <p>
                <span>{jobData?.contactPersonNumber} </span>
              </p>
              <p>
                <span>{jobData?.contactEmail} </span>
              </p> */}
            </div>
          </div>
          <p>Perks and Benefits</p>
          <div className="OpportunitiesMoreInfoPage_bottombox_PB">
            {jobData?.opportunity?.incentives?.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
          {job?.status === "Applied" ||
          job?.status === "In-Progress" ||
          job?.status === "Rejected" ||
          job?.status === "Hired" ? (
            <div className="OpportunitiesMoreInfoPage_bottombox_btns">
              <button className="notAppliedBtn">Already Applied</button>
            </div>
          ) : (
            <div className="OpportunitiesMoreInfoPage_bottombox_btns">
              <button className="btnone" onClick={() => navigate(-1)}>
                Back
              </button>
              <button
                className="btntwo"
                onClick={() => setOpportunityapplynowPopup(true)}
              >
                Apply Now
              </button>
            </div>
          )}
        </div>

        {/* this is for pop up  */}

        {OpportunityapplynowPopup && (
          // <div className='oppor_applyNowPop_container'>

          <div className="Opportunityapplynowpopup_fullscreen">
            <div className="Opportunityapplynowpopup">
              <button onClick={() => setOpportunityapplynowPopup(false)}>
                X
              </button>
              <div className="Opportunityapplynowpopup_content">
                <h4 style={{color:"#AD2F3B"}}>{jobData?.purpose}</h4>
                <div className="Opportunityapplynowpopup_contentone">
                  <p>
                    Posted on:{" "}
                    <span>
                      {new Date(job.applicationPeriod.start).toLocaleDateString(
                        "en-US",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </span>
                  </p>
                  <p>
                    Last Date to apply:{" "}
                    <span>
                      {new Date(job.applicationPeriod.end).toLocaleDateString(
                        "en-US",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </span>
                  </p>
                </div>
              </div>
              {/* <p>{jobData?.description}</p> */}
              {/* <div className="Opportunityapplynowpopup_contentone">
                <h1>Other Details</h1>
                <a href="#" style={{ color: "#AD2F3B" }}>
                  View all info
                </a>
              </div>
              <div className="OpportunitiesPage_displayonejob_contentdetailsone">
                <p>
                  Role : &emsp;&emsp;&emsp;&emsp; <span>{jobData?.role}</span>
                </p>
                <p>
                  Expertise :&emsp;&emsp;<span>{jobData?.expertise}</span>
                </p>
                <p>
                  Location :&emsp;&emsp; <span>{jobData?.location}</span>
                </p>
                <p>
                  Language : &emsp;{" "}
                  <span>
                    {job.languages}
                  </span>
                </p>
                <p>
                  Amount : &emsp; &emsp;<span>{jobData?.budget}</span>
                </p>
                <p>
                  {" "}
                  Opening :&emsp;&emsp; <span>{jobData?.requiredArtists}</span>
                </p>
              </div> */}
              <div className="Opportunityapplynowpopup_contentform">
                <form onSubmit={applySubmitHandler}>
                  <div style={{display:"flex",marginBottom:"6px"}}>
                    <p>My quoted price:</p>
                    <input style={{marginLeft:"5px"}} type="number"name="quotedPrice" value={applyAns.quotedPrice} 
                        onChange={(e) => setApplyAns((prevData) => ({
                              ...prevData,
                              quotedPrice: e.target.value
                            }))} required  />
                  </div>
                  <h1>Why do you want ot Apply for this Role?</h1>
                  <textarea
                    name="answer"
                    value={applyAns.answer}
                    onChange={(e) => setApplyAns((prevData) => ({
                      ...prevData,
                      answer: e.target.value
                    }))}
                    required
                  />
                  <button type="submit">Submit</button>
                  <button onClick={() => setOpportunityapplynowPopup(false)}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </>
  );
}
