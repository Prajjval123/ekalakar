import React, { useEffect, useState } from "react";
import Artist_navbar from "../Artist_navbar";
import imagePart from "./assets/imagePart.svg";
import darkFilter from "./assets/darkFilter.svg";
import "./dashboard.css";
import "./Dashboard_Card.css";
import "../ProfilePages/Artist_Opportunities.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import {
  statusOfAppliPoints,
  artistOpportunityPoints,
} from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard_Card from "./Dashboard_Card";
import Skill_Card from "./Skill_Card";
import natureOfArt from "../ProfilePages/assets/natureOfArt.svg";
import category from "../ProfilePages/assets/category.svg";
import language from "../ProfilePages/assets/language.svg";
import dance from "./assets/dance.png";
import newsImg from "./assets/news.png";

//news section
const API_KEY = "a508cd51cc1c4e68b737330667020e05";
const API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`;

const ArtistDashboard = () => {
  const { accessToken } = useSelector((state) => state.auth);

  const [OpportunityapplynowPopup, setOpportunityapplynowPopup] =
    useState(null);
  const [appliedData, setAppliedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [news, setNews] = useState([]);
  const [jobData, setJobData] = useState([]);

  const [latestNews, setLatestNews] = useState(null);
  const [imageNews, setImageNews] = useState(null);
  const [revenue,setRevenue] = useState(0);
  const [applied,setApplied] = useState(0);
  const fetchApplication = async () => {
    setLoading(true);
    try {
      const response = await makeAuthenticatedGETRequest(
        statusOfAppliPoints.FETCH_APPLIED_APPLI_API,
        accessToken
      );
      // console.log("response", response);
      const { data } = response;
      // console.log("data", data);

      if (response.status === "success") {
        setAppliedData(response?.data);

        // console.log(appliedData);
      } else {
        toast.error("Cannot fetch Applied Appliction , please refresh page", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  //news data

  const fetchNews = async () => {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        throw new Error("Error fetching new data :", error);
      });
  };
  const newsId = [3, 4, 5, 6, 7, 8];

  const slicedLatestNews = latestNews?.slice(0, 3);
  console.log(slicedLatestNews);

  //   this is for fetch the oportunity at first
  const fetchOpportunity = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        artistOpportunityPoints.FETCH_OPPOR_DATA_API,
        accessToken
      );
      if (response?.status === "success") {
        const opportunityArray = response?.data;

        const reversed = [...opportunityArray].reverse();

        setJobData(reversed);
        console.log(jobData);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("server error , please try again ", {
        position: "top-center",
      });
    }
  };
  const slicedJobData = jobData.slice(0, 3);

  console.log(slicedJobData);

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);

    // appliedData.filter((event) => {
    //   if(statusFilter === "All" ){
    //     return event;
    //   }
    //   else if(statusFilter === "Hired" ){
    //     return event.status === "Hired";
    //   }
    //   else if(statusFilter === "Shortlisted" ){
    //     return event.status === "Shortlisted";
    //   }
    //   else if(statusFilter === "Rejected" ){
    //     return event.status === "Rejected";
    //   }
    // });
  };

  const getTypeBackgroundColor = (status) => {
    // Define background colors for each type
    const typeColors = {
      Shortlisted: "#eed815",
      Hired: "#03fd03",
      Rejected: "#f40d09",
      Applied: "blue",
    };
    return typeColors[status] || "#ffffff"; // Default to white if type is not found
  };

  const hire = async () => {
     try {
      const response = await makeAuthenticatedGETRequest(
        statusOfAppliPoints.FETCH_APPLIED_APPLI_API,
        accessToken
      );
      console.log("response", response);
      const { data } = response;
      console.log("amount",data.map(e=>e.status === "Hired"));

      const filteredData = data.filter(item => item.status === "Hired");
      setApplied(filteredData.map(e=>e.opportunity.budget).length)
      setRevenue(filteredData.map(e=>e.opportunity.budget))

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchApplication();
    hire();

    fetchOpportunity();

    fetchNews()
      .then((data) => {
        // console.log(data);
        setLatestNews(data.articles);

        console.log("latest news ");
        const image = data.articles.filter((item) => item.urlToImage);
        // console.log("image", image);
        setImageNews(image);
      })
      .catch((error) => console.error("Error fetching news data :", error));
  }, []);

  return (
    <>
      <Artist_navbar />
      <div className="dashboard-wrapper">
        <section className="dashboard-container">
          <div className="image_container">
            <img src={imagePart} alt="" className="contact_img" />
            {/* <img src={darkFilter} alt="" className="filter_img" /> */}
            <p className="contactUs_text"></p>
          </div>
          <div className="dasboard_Card_group">
            <div className="box1">
              <p>Total Opportunities</p>
              <div className="sub-box">
                <p>{jobData.length}</p>
              </div>
            </div>
            <div className="box1">
              <p>Applied</p>
              <div className="sub-box">
                <p>{appliedData.length}</p>
              </div>
            </div>
            <div className="box1">
              <p>Performance</p>
              <div className="sub-box">
                <p>{applied}</p>
              </div>
            </div>
            <div className="box1">
              <p>Revenue(INR)</p>
              <div className="sub-box">
                <p>{revenue}</p>
              </div>
            </div>
          </div>
          <div className="card_section">
            <h2>Explore Opportunities</h2>
            <div className="opportunity_wrapper">
              {slicedJobData.map((job, index) => (
                <div key={index} class="card">
                  <div class="poster">
                    <img src={dance} alt="Location Unknown" />
                  </div>
                  <div class="details">
                    <h1>{job.purpose}</h1>
                    {/* <h2>2021 • PG • 1hr 38min</h2> */}
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>

                      {/* <i class="far fa-star"></i> */}
                      <span>5/5</span>
                    </div>
                    <div class="tags">
                      <span class="tag">{}</span>
                    </div>
                    <p class="desc">{}</p>
                    <div class="cast">
                      <h3>Details</h3>
                      <p>Budget : {job.budget}</p>
                      <p>
                        Event Date :
                        {new Date(job.performanceDate).toLocaleDateString(
                          "en-US",
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                      </p>
                      <a
                        class="desc"
                        target="_block"
                        href="/Artist_Opportunities"
                        style={{ textDecoration: "none" }}
                      >
                        Explore The Opportunities
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
                        <a className="a" href="/Artist_Opportunities">View More </a>

          </div>
          <div className="card_section">
            <h2>Skill Development </h2>
            <Skill_Card />
                        <a className="a" href="/CourseCategories">View More </a>

          </div>
          <div className="card_section">
            <h2>News</h2>
            <div className="opportunity_wrapper">
              {slicedLatestNews?.map((data, index) => (
                <div key={index} class="card">
                  <div class="poster">
                    <img src={data.urlToImage || newsImg} alt="Location Unknown" />
                  </div>
                  <div class="details">
                    <h1>{data.title.slice(0,30)}...</h1>
                    {/* <h2>2021 • PG • 1hr 38min</h2> */}
                    
                    <div class="tags">
                      <span class="tag">{}</span>
                    </div>
                    <p class="desc">{`Posted by: ${data.author}`}</p>
                    <div class="cast">
                      <h3>Description</h3>
                      <p>{data?.description?.slice(0,40)}</p>
                      <p>
                        Published At : {new Date(data.publishedAt).toLocaleDateString(
                          "en-US",
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                        
                      </p>
                      <a
                        class="desc"
                        target="_block"
                        href="/latestNews"
                        style={{ textDecoration: "none" }}
                      >
                        Explore Latest News
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a className="a" href="/latestNews">View More </a>            
          </div>
        </section>
      </div>
    </>
  );
};

export default ArtistDashboard;

//  <div className="filter-container">
//             <div className="dashboard-filter">
//               <label className="filter-label">Status</label>
//               <select
//                 className="dashboard-select"
//                 onChange={handleStatusChange}
//                 defaultValue={statusFilter}
//               >
//                 <option>All</option>
//                 <option>Applied</option>
//                 <option>Shortlisted</option>
//                 <option>Hired</option>
//                 <option>Rejected</option>
//               </select>
//             </div>
//             <div className="dashboard-filter">
//               <label className="filter-label">Budget Amount</label>
//               <select className="dashboard-select">
//                 <option>All</option>
//                 <option>Below 5000</option>
//                 <option>Rs 8,000 - Rs 10,000</option>
//                 <option>Rs 10,000 - Rs 20,000</option>
//                 <option>Rs 20,000 - Rs 50,000</option>
//                 <option>Above Rs 50,000</option>
//               </select>
//             </div>
//           </div>

//           <div className="table-container">
//             {loading ? (
//               <div className="custom-loader" style={{ margin: "0 auto" }}></div>
//             ) : (
//               <table className="table">
//                 <tr className="table-row">
//                   <th className="table-head">Name of Opportunity</th>
//                   <th className="table-head">Location</th>
//                   <th className="table-head">Applied on</th>
//                   <th className="table-head">Status</th>
//                   <th className="table-head">Income (INR)</th>
//                 </tr>

//                 {appliedData.map(
//                   (event, index) =>
//                     (event?.status === statusFilter ||
//                       statusFilter === "All") && (
//                       <tr className="table-row" key={index}>
//                         <td className="table-body">
//                           <Link
//                             to={`/Artist_OpportunityDetails`}
//                             state={{ job: appliedData[index].opportunity }}
//                             style={{
//                               textDecoration: "none",
//                               fontWeight: "600",
//                             }}
//                           >
//                             {appliedData[index].opportunity?.purpose}
//                           </Link>
//                         </td>

//                         <td className="table-body">
//                           {event?.opportunity?.location}
//                         </td>
//                         <td className="table-body">
//                           {new Date(event?.appliedOn).toLocaleDateString(
//                             "en-US",
//                             {
//                               day: "numeric",
//                               month: "short",
//                               year: "numeric",
//                             }
//                           )}
//                         </td>
//                         <td>
//                           <div
//                             className="table-body"
//                             style={{
//                               color: getTypeBackgroundColor(
//                                 event?.status
//                               ),
//                               // color: "white",
//                             }}
//                           >
//                             {event?.status}
//                           </div>
//                         </td>
//                         <td className="table-body">
//                           {event?.status === "Hired"
//                             ? event?.opportunity?.budget
//                             : 0}
//                         </td>
//                       </tr>
//                     )
//                 )}
//               </table>
//             )}
//           </div>
