import React, { useEffect, useState } from "react";
import Patron_Navbar from "../../../../PatronPages/Patron_Navbar";
import Footer from "../../../../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";

export default function MoreInformation() {
  const [jobData, setJobData] = useState(null);
  const location = useLocation();
  let job = location.state?.job;
  const navigate = useNavigate();
  return (
    <>
      <Patron_Navbar />
      <div className="OpportunitiesMoreInfoPage">
        <div className="OpportunitiesMoreInfoPage_Topbox">
          <h1 style={{ color: "#AD2F3B" }}>{jobData?.position}</h1>
          <div className="OpportunitiesMoreInfoPage_Topboxcontent">
            <div className="OpportunitiesPage_displayonejob_contentdetailsone">
              <p>
                Category :&emsp;<span>{jobData?.category}</span>
              </p>
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
              <p>
                {" "}
                Opening :&emsp; <span>{jobData?.requiredArtists}</span>
              </p>
            </div>
            <div className="OpportunitiesMoreInfoPage_Topboxbtns">
              <button className="btnone">Share</button>
              <button className="btntwo">Save</button>
            </div>
          </div>
        </div>

        <div className="OpportunitiesMoreInfoPage_bottombox">
          <h1>Description</h1>
          <p>{jobData?.description}</p>
          <h1>Other Details</h1>
          <div className="OpportunitiesMoreInfoPage_bottombox_RSO">
            <div>
              <p>Expertise :</p>
              <p>Location : </p>
              <p>Language : </p>
              <p>Amount : </p>
              <p>Theme : </p>
              <p>Performance Time : </p>
              <p>Duration of Performance : </p>
              <p>Nature of Art : </p>
              <p>Performance Type : </p>
              <p>Live / Recorded :</p>
              <p>Level of Artist : </p>
              <p>Artist Location :</p>
              <p>Posted By : </p>
            </div>
            <div>
              <p>
                <span>{jobData?.expertise}</span>
              </p>
              <p>
                <span>{jobData?.location}</span>
              </p>
              <p>
                <span>
                  {jobData?.languages?.map((lag, index) => (
                    <span key={index}>{lag} </span>
                  ))}
                </span>
              </p>
              <p>
                <span>{jobData?.budget}</span>
              </p>
              <p>
                <span>{jobData?.theme}</span>
              </p>
              <p>
                <span>{jobData?.timeSlot}</span>
              </p>
              <p>
                <span>{jobData?.performanceDuration}</span>
              </p>
              <p>
                <span>{jobData?.artNature}</span>
              </p>
              <p>
                <span>{jobData?.performanceType}</span>
              </p>
              <p>
                <span>{jobData?.mediaType}</span>
              </p>
              <p>
                <span>{jobData?.artLevel}</span>
              </p>
              <p>
                <span>{jobData?.location}</span>
              </p>
              <p>
                <span>{jobData?.postedBy}</span>
              </p>
            </div>
          </div>
          <h1>Perks and Benefits:</h1>
          <div className="OpportunitiesMoreInfoPage_bottombox_PB">
            {jobData?.incentives?.map((data, index) => (
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
              <button className="btntwo">Edit Opportunity</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
