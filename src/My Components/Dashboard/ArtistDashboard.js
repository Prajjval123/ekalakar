import React, { useEffect, useState } from "react";
import Artist_navbar from "../Artist_navbar";
import imagePart from "./assets/imagePart.svg";
import darkFilter from "./assets/darkFilter.svg";
import "./dashboard.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { statusOfAppliPoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const ArtistDashboard = () => {
  const { accessToken } = useSelector((state) => state.auth);
  
  const [appliedData, setAppliedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchApplication = async () => {
    setLoading(true);
    try {
      const response = await makeAuthenticatedGETRequest(
        statusOfAppliPoints.FETCH_APPLIED_APPLI_API,
        accessToken
      );
      // console.log("response", response);
      const { data } = response;
      console.log("data", data);

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
      Applied: "blue"
    };
    return typeColors[status] || "#ffffff"; // Default to white if type is not found
  };

  useEffect(() => {
    fetchApplication();
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

          <div className="filter-container">
            <div className="dashboard-filter">
              <label className="filter-label">Status</label>
              <select
                className="dashboard-select"
                onChange={handleStatusChange}
                defaultValue={statusFilter}
              >
                <option>All</option>
                <option>Applied</option>
                <option>Shortlisted</option>
                <option>Hired</option>
                <option>Rejected</option>
              </select>
            </div>
            <div className="dashboard-filter">
              <label className="filter-label">Budget Amount</label>
              <select className="dashboard-select">
                <option>All</option>
                <option>Below 5000</option>
                <option>Rs 8,000 - Rs 10,000</option>
                <option>Rs 10,000 - Rs 20,000</option>
                <option>Rs 20,000 - Rs 50,000</option>
                <option>Above Rs 50,000</option>
              </select>
            </div>
          </div>

          <div className="table-container">
            {loading ? (
              <div className="custom-loader" style={{ margin: "0 auto" }}></div>
            ) : (
              <table className="table">
                <tr className="table-row">
                  <th className="table-head">Name of Opportunity</th>
                  <th className="table-head">Location</th>
                  <th className="table-head">Applied on</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Income (INR)</th>
                </tr>

                {appliedData.map(
                  (event, index) =>
                    (event?.status === statusFilter ||
                      statusFilter === "All") && (
                      <tr className="table-row" key={index}>
                        <td className="table-body">
                          <Link
                            to={`/Artist_OpportunityDetails`}
                            state={{ job: appliedData[index].opportunity }}
                            style={{
                              textDecoration: "none",
                              fontWeight: "600",
                            }}
                          >
                            {appliedData[index].opportunity.purpose}
                          </Link>
                        </td>

                        <td className="table-body">
                          {event?.opportunity?.location}
                        </td>
                        <td className="table-body">
                          {new Date(event?.appliedOn).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td>
                          <div
                            className="table-body"
                            style={{
                              color: getTypeBackgroundColor(
                                event?.status
                              ),
                              // color: "white",
                            }}
                          >
                            {event?.status}
                          </div>
                        </td>
                        <td className="table-body">
                          {event?.status === "Hired"
                            ? event?.opportunity?.budget
                            : 0}
                        </td>
                      </tr>
                    )
                )}
              </table>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ArtistDashboard;
