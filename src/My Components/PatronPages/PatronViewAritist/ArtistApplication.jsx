import "./artistApplication.css";
import bgFilter from "./assets/bgFilter.svg";
import background from "./assets/background.svg";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate  } from "react-router-dom";
import Patron_Navbar from "../Patron_Navbar";


const filterData = [
  {
    title: "Posted at",
  },
  {
    title: "Events",
  },
  {
    title: "Status ",
  },
  {
    title: "Sort by",
  },
];



function ArtistApplication() {
  const { accessToken } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [artistForm, setArtistForm] = useState([]);

  const fetchArtistAppli = async () => {
  const toastId =   toast.loading('Loading...');
    try {
      const response = await makeAuthenticatedGETRequest(
        patronProfilePoints.GET_PATRON_APPLI_API,
        accessToken
      );
      console.log("res", response);
      if (response.status === "success") {
        setArtistForm(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }

toast.dismiss(toastId);
  };

  useEffect(() => {
    fetchArtistAppli();
  }, []);

  return (
    <>
     <Patron_Navbar />
    
 
    <div className="patron_artist_appli_wrapper">
      <section className="artist_image_section">
        <img src={background} alt="background" className="artist_bgImg" />
        <img src={bgFilter} alt="" className="artist_bgFilter" />
        <p className="artist_application_text">Applications</p>
      </section>


{/* this is for filter section , remove it later from comment  */}

      {/* <section className="artist_filter_section">
        {  filterData.map((data, index) => (
          <div key={index} className="single_artist_filter">
            <p className="single_artist_title">{data.title}</p>
            <select name="" id="" className="single_artist_select">
              <option
                selected
                disabled
                value=""
                className="single_artist_options"
              >
                Select
              </option>
            </select>
          </div>
        ))}
      </section> */}

      

      {/* table section  for large width */}
      <section className="artist_application_form_container">
        <div className="artist_form_head">
          <p className="artist_head_date">Date</p>
          <p className="artist_head_Event">Event</p>
          <p className="artist_head_appli">Applications</p>
          <p className="artist_head_date">Location</p>
          <p className="artist_head_status">Application Status</p>
          <p className="artist_head_deadline">Deadline</p>
        </div>

        <div className="artist_form_body">
          {artistForm.length > 0 &&  artistForm.map((data, index) => (
            
            <div key={index} className="single_artist_body_row">
              <p className="body_date artist_body ">{new Date(data.applicationPeriod.start)
  .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
              <p className="body_event artist_body">{data.purpose?.split("").slice(0,30).join("")}..</p>
           
             <p onClick={()=>navigate(`/patron-event-appli/${data._id}` , {state : {dataObj :data}}) } className="body_appli artist_body">
                {data.application}{" "}
                <span className="view_appli_text artist_body">
                  {data.totalApplicants}(View Applications)
                </span>{" "}
              </p>
              <p className="body_date artist_body">{data.location}</p>
              <p
                className={`body_status artist_body ${
                  !data.active ? "statusClose" : "statusOpen"
                } `}
              >
                {data.active ?('Open'):('Close')}
              </p>
              <p className="body_deadline artist_body">{new Date(data.applicationPeriod.end)
  .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            </div>
          ))}
        </div>
      </section>


      {/* table section for small width */}
      <section className="artist_event_appli_container">
        {artistForm.map((data, index) => (
          <div key={index} className="single_artist_event">
              <p style={{color:"#AD2F3B"}}>{data?.position}</p>
            <div className="single_element">
              <p className="single_ele_title">Date</p>
              <p>{new Date(data.applicationPeriod.start)
  .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            </div>
            <div className="single_element">
              <p className="single_ele_title">Event</p>
              <p>{data.purpose?.split("").slice(0,30).join("")}..</p>
            </div>
            <div className="single_element">
              <p className="single_ele_title">Applications</p>
            
             <p onClick={()=>navigate(`/patron-event-appli/${data._id}` , {state : {dataObj :data}}) } style={{cursor:"pointer"}}>
                {data.totalApplicants}{" "}
                <span className="view_appli_text">(View Applications)</span>
              </p>
            
            </div>
            <div className="single_element">
              <p className="single_ele_title">Location</p>
              <p>
                {data.location}
              </p>
            </div>
            <div className="single_element">
              <p className="single_ele_title">Application Status</p>
              <p
                className={`${
                  data.status === "Closed" ? "statusClose" : "statusOpen"
                }`}
              >
                {data.active ?('Open'):('Close')}
              </p>
            </div>
            <div className="single_element">
              <p className="single_ele_title">Deadline</p>
              <p>{new Date(data.applicationPeriod.end)
  .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
    </>
  );
}

export default ArtistApplication;
