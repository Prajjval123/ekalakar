import "./hiredApplication.css";
import ApplicationButton from "./ApplicationButton";
import hireNoData from "./assets/hireNoData.svg";
import { Link } from "react-router-dom";

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
];

function HiredApplicationItems({ currentEvent, jobData, loading }) {
  return (
    <div className="hired_Application_wrapper">
      <p className="hired_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      {loading ? (
        <div className="custom-loader" style={{ margin: "0 auto" }}></div>
      ) : (
        <div className="hired_event_Detail_Container">
          {jobData.length === 0 ? (
            <div className="noData_container">
              <img src={hireNoData} alt="" />
              <p
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                }}
              >
                You are not hired by any Patron yet
              </p>

              <p
                style={{
                  color: "black",
                  fontWeight: "700",
                  fontStyle: "italic",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                }}
              >
                NEVER GIVE UP
              </p>

              <p
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                }}
              >
                Keep applying for more events
              </p>

              <ApplicationButton text={"View Events"} />
            </div>
          ) : (
            <div className="applied_Event_details">
              {jobData?.map((event, index) => (
                <div key={index} className="single_applied_eventWrapper">
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h1 className="single_inprogress_heading">
                        {event?.opportunity?.purpose}
                      </h1>
                      <div
                        style={{
                          color: "#00B027",
                          backgroundColor: "#DAFFE8",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          borderRadius: "10px",
                        }}
                        className=""
                      >
                        Hired
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        color: "black",
                        opacity: "70%",
                      }}
                      className="single_hired_para"
                    >
                      {event?.opportunity?.description}
                    </p>

                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className="appli_detail_btn_wrapper"
                    >
                      <main
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "100px",
                        }}
                        className="appli_detail_container"
                      >
                        {/* left side */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px",
                          }}
                        >
                          {appli_Data.map((data, index) => (
                            <div
                              key={index}
                              style={{ display: "flex", gap: "10px" }}
                            >
                              <img
                                src={data.img}
                                alt=""
                                style={{
                                  marginBottom: "10px",
                                }}
                              />
                              <p
                                className="inprogress_text"
                                style={{
                                  color: "rgb(0,0,0,0.7)",
                                  fontWeight: "500",
                                  fontFamily: "Poppins",
                                }}
                              >
                                {data?.title}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* right side */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                          }}
                        >
                          <p
                            className="inprogress_text"
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              color: "black",
                            }}
                          >
                            {event?.opportunity?.location}{" "}
                          </p>

                          <p
                            className="inprogress_text"
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              color: "black",
                            }}
                          >
                            {event?.opportunity?.languages}
                          </p>

                          <p
                            className="inprogress_text"
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              color: "black",
                            }}
                          >
                            {event?.opportunity?.budget}
                          </p>

                          <p
                            className="inprogress_text"
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              color: "black",
                            }}
                          >
                            {new Date(
                              event?.opportunity?.performanceDate
                            ).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>

                          <p
                            className="inprogress_text"
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              color: "black",
                            }}
                          >
                            NA
                          </p>

                          <p
                            className="inprogress_text"
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              color: "black",
                            }}
                          >
                            {" "}
                            {new Date(
                              event?.opportunity?.applicationPeriod?.end
                            ).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </main>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "50px",
                        }}
                      >
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
                        <button
                          style={{
                            backgroundColor: "#AD2F3B",
                            color: "white",
                            fontWeight: "500",
                            width: "180px",
                            height: "44px",
                            borderRadius: "10px",
                            border: "none",
                            padding: "10px",
                          }}
                        >
                          Chat With Patron
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HiredApplicationItems;
