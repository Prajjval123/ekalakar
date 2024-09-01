import React, { useState } from "react";
import "./UploadOpportunities.css";
import Patron_Navbar from "../Patron_Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { Link, NavLink, useNavigate } from "react-router-dom";

function UploadOpportunities() {
  const { accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({});
  const [uploadTab, setUploadTab] = useState(1);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      // if (e.target.name === "languages" || e.target.name === "incentives") {
      //   const array = e.target.value.split(/\s*,\s*/);
      //   return { ...prevState, [e.target.name]: array };
      // }

      if (e.target.name === "start" || e.target.name === "end") {
        const applicationPeriod = {
          [e.target.name]: e.target.value,
        };

        return {
          ...prevState,
          applicationPeriod: {
            ...prevState.applicationPeriod,
            ...applicationPeriod,
          },
        };
      }

      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      contactPersonName: "william",
      contactEmail: "william@gmail.com",
      contactPersonNumber: "1234567890",
    });

    console.log(formData);
    const toastId = toast.loading("Loading...");

    try {
      const response = await makeAuthenticatedPOSTRequest(
        patronProfilePoints.UPLOAD_OPPOR_API,
        formData,
        accessToken
      );

      if (response.statusCode === 201) {
        toast.success("Successfully uploaded");

        // Clear date inputs
        setFormData((prevState) => ({
          ...prevState,
          applicationPeriod: {
            start: "",
            end: "",
          },
        }));

        // Clear other inputs (you may want to clear other fields as well)
        setFormData((prevState) => ({
          ...prevState,
          artNature: "",
          location: "",
          description: "",
          // Clear other fields here
        }));

        navigate("/UploadedOpportunities");
      } else {
        console.log(response.message);
        toast.error("Please provide all the required fields");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
    toast.dismiss(toastId);
  };

  let allLanguages = [
    "Assamese",
    "Bengali",
    "Bhili",
    "Bhojpuri",
    "Dogri",
    "Garhwali",
    "Gujarati",
    "Haryanvi",
    "Hindi",
    "Kannada",
    "Kashmiri",
    "Khasi",
    "Kokborok",
    "Konkani",
    "Kumaoni",
    "Maithili",
    "Malayalam",
    "Manipuri",
    "Marathi",
    "Mizo (Lushai)",
    "Nepali",
    "Odia",
    "Punjabi",
    "Rajasthani",
    "Santali",
    "Sindhi",
    "Tamil",
    "Telugu",
    "Tulu",
    "Urdu",
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Chinese (Simplified)",
    "Japanese",
    "Korean",
    "Russian",
  ];

  const purposeOfPerformance = [
    "Annual / Foundation Day",
    "Conference/ Workshop/ Training",
    "Employee Engagement",
    "Family functions",
    "National/ State Day Celebration",
    "Office Functions",
    "Performance for hotel guests",
    "Product Launch",
    "Special Day – Marriage, Anniversary",
    "Special Events",
    "Any other",
  ];

  const ArtNames = [
    "Bharatanatyam",
    "Bihu",
    "Chhau",
    "Dandiya Raas",
    "Dollu Kunitha",
    "Dumhal",
    "Garba",
    "Gaur Dance",
    "Giddha",
    "Gotipua",
    "Jhumar",
    "Kacchi Ghodi",
    "Kalbelia",
    "Karakattam",
    "Kathak",
    "Kathakali",
    "Kathakar",
    "Koli",
    "Kuchipudi",
    "Lavani",
    "Manipuri",
    "Mayurbhanj Chhau",
    "Mohiniyattam",
    "Odissi",
    "Raas Leela",
    "Sattriya",
    "Tamasha",
    "Tera Tali",
    "Thang-Ta",
    "Yakshagana",
    "Dhrupad",
    "Khayal",
    "Thumri",
    "Tappa",
    "Ghazal",
    "Qawwali",
    "Kriti",
    "Varnam",
    "Tillana",
    "Ragamalika",
    "Javali",
    "Swarajati",
    "Bhajans",
    "Kirtan",
    "Sufi Music",
    "Abhangas",
    "Shabad Kirtan (Sikh)",
    "Bansuri",
    "Dilruba",
    "Dholak",
    "Ektara",
    "Esraj",
    "Flute (Bansuri)",
    "Ghatam",
    "Harmonium",
    "Jal Tarang",
    "Mridangam",
    "Nadaswaram",
    "Pakhawaj",
    "Ravanahatha",
    "Sarangi",
    "Sarod",
    "Santoor",
    "Shehnai",
    "Sitar",
    "Tabla",
    "Tanpura",
    "Tumbi",
    "Veena",
    "Bhavai",
    "Bhand Pather",
    "Jatra",
    "Koodiyattam",
    "Mudiyettu",
    "Nautanki",
    "Pandavani",
    "Pothu Koothu",
    "Ramlila",
    "Ram Lila",
    "Ras Leela",
    "Sattriya",
    "Tamaasha",
    "Therukoothu",
    "Yakshagana",
  ];

  const venueTypes = [
    "Banquette Hall",
    "Classroom",
    "Corporate",
    "Hotel",
    "Open Ground",
    "Private House",
    "Theater",
    "Training Center",
    "Any other",
  ];
  const performanceFacilitiesaArr = [
    "Accommodation",
    "Food",
    "Light",
    "Local Travel",
    "Musical Instruments",
    "Outstation Travel",
    "Photography",
    "Sound",
    "Stage",
    "Video",
    "Any other",
  ];
  return (
    <>
      <Patron_Navbar />
      <div className="ArtistOpportunities_Page">
        <div className="ArtistOpportunities_Image">
          <div
            style={{ textAlign: "center" }}
            className="ArtistOpportunities_Image_Content"
          >
            <p>Upload Opportunities for Artist</p>
          </div>
        </div>
        <div className="oppurtunity_tab p-2 mt-3 d-flex">
          <p
            className={uploadTab == 1 ? "active" : ""}
            onClick={() => setUploadTab(1)}
          >
            Upload Opportunities
          </p>
          <p
            className={uploadTab == 2 ? "active" : ""}
            onClick={() => setUploadTab(2)}
          >
            Uploaded Opportunities
          </p>
        </div>
        <div className="ArtistOpportunities_Page_Infoform">
          <form onSubmit={submitHandler}>
            <div className="ArtistOpportunities_Page_Infoform_Contentone">
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
                style={{ width: "100%" }}
              >
                <label>PURPOSE OF PERFORMANCE</label>
                <select
                  required
                  name="purpose"
                  value={formData?.purpose}
                  onChange={inputChangeHandler}
                  style={{ width: "100%" }}
                >
                  <option selected hidden>
                    Select purpose
                  </option>
                  {purposeOfPerformance?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
                style={{ width: "100%" }}
              >
                <label>Description*</label>
                <input
                  required
                  name="description"
                  value={formData?.description}
                  onChange={inputChangeHandler}
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Enter art Description"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Performance</label>
                <select
                  onChange={inputChangeHandler}
                  name="location"
                  value={formData?.location}
                  required
                >
                  <option selected hidden>
                    Select location
                  </option>
                  <option value="City/District">City/District</option>
                  <option value="State">State</option>
                  <option value="Country">Country</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Language of Performance</label>
                <select
                  onChange={inputChangeHandler}
                  name="languages"
                  value={formData?.languages}
                >
                  <option selected>Enter Language</option>
                  {allLanguages?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Approx. Budget for Performance</label>
                <select
                  required
                  onChange={inputChangeHandler}
                  value={formData?.budget}
                  name="budget"
                >
                  <option selected hidden>
                    Select budget
                  </option>
                  <option value="24000">Below 25000</option>
                  <option value="35000">25000-50000</option>
                  <option value="70000">50000-100000</option>
                  <option value="200000">100000-250000</option>
                  <option value="800000">250000-1000000</option>
                  <option value="1200000">Above 1000000</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Date of Performance*</label>
                <input
                  required
                  value={formData?.performanceDate}
                  name="performanceDate"
                  onChange={inputChangeHandler}
                  type="date"
                  placeholder="Enter event date"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Duration of Performance (hrs)*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.performanceDuration}
                  name="performanceDuration"
                  type="number"
                  placeholder="Enter Performance Duration"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Application Last Date</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  name="end"
                  value={formData?.applicationPeriod?.end}
                  type="date"
                  placeholder="Enter application last date"
                />
              </div>

              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Type of Art*</label>
                <select
                  required
                  value={formData?.artType}
                  name="artType"
                  onChange={inputChangeHandler}
                >
                  <option selected>Select Art</option>
                  <option value="Folk">Folk</option>
                  <option value="Classical">Classical</option>
                  <option value="Fusion">Fusion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Category of Art</label>
                <select
                  required
                  onChange={inputChangeHandler}
                  name="artCategory"
                  value={formData?.artCategory}
                >
                  <option selected>Enter Category</option>
                  <option value="dance">Dance</option>
                  <option value="song">song</option>
                  <option value="music">Music</option>
                  <option value="theater">Theater</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Name of Art</label>
                <select
                  required
                  value={formData?.artName}
                  name="artName"
                  onChange={inputChangeHandler}
                >
                  <option selected hidden>
                    Select
                  </option>
                  {ArtNames?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Theme of Performance</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.theme}
                  name="theme"
                  type="text"
                  placeholder="Theme for Performmance/Event"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Live/Recorded/Part Live</label>
                <select onChange={inputChangeHandler} name="mediaType">
                  <option selected hidden>
                    Select
                  </option>
                  <option value="Live">Live</option>
                  <option value="Recorded">Recorded</option>
                  <option value="PartLive">Part Live</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Need Customized/ curated Performance</label>
                <select onChange={inputChangeHandler} name="customization">
                  <option selected hidden>
                    Select
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>No. of Required Artist*</label>
                <select
                  required
                  value={formData?.requiredArtists}
                  name="requiredArtists"
                  onChange={inputChangeHandler}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="3">2-5</option>
                  <option value="7">5-10</option>
                  <option value="20">10-50</option>
                  <option value="60">Above 50</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Level of Artist</label>
                <select
                  required
                  onChange={inputChangeHandler}
                  value={formData?.artistLevel}
                  name="artistLevel"
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="international">International</option>
                  <option value="national">National</option>
                  <option value="state">State</option>
                  <option value="district">District</option>
                  <option value="taluka">Taluka</option>
                  <option value="local">Local</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Artist</label>
                <select
                  onChange={inputChangeHandler}
                  name="artistLocation"
                  value={formData?.artistLocation}
                  required
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="local">Local</option>
                  <option value="outstation">Outstation</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Size of Audience</label>
                <select
                  onChange={inputChangeHandler}
                  name="audienceSize"
                  value={formData?.audienceSize}
                  required
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="20">Below 25</option>
                  <option value="35">25-50</option>
                  <option value="70">50-100</option>
                  <option value="300">100-500</option>
                  <option value="800">500-1000</option>
                  <option value="1200">Above 1000</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Profile of Audience</label>
                <select
                  onChange={inputChangeHandler}
                  name="audienceProfile"
                  value={formData?.audienceProfile}
                  required
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="Hotel inhouse Guests ">
                    Hotel inhouse Guests
                  </option>
                  <option value="Professional/ Executives">
                    Professional/ Executives
                  </option>
                  <option value="Students">Students</option>
                  <option value="Family Guests">Family Guests</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Venue of Performance</label>
                <select
                  onChange={inputChangeHandler}
                  name="venue"
                  value={formData?.venue}
                  required
                >
                  <option selected hidden>
                    Select
                  </option>
                  {venueTypes?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
                style={{ width: "100%" }}
              >
                <label>Performance Facilities</label>
                <select
                  style={{ width: "100%" }}
                  onChange={inputChangeHandler}
                  name="facilities"
                  value={formData?.facilities}
                  required
                >
                  <option selected hidden>
                    Select
                  </option>
                  {performanceFacilitiesaArr?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* </div> */}
              {/* <div className="ArtistOpportunities_Page_Infoform_Contenttwo"> */}

              <div
                className="ArtistOpportunities_Page_Infoform_inputfield textareafield"
                style={{ width: "100%" }}
              >
                <label>Any Other Requirements:</label>
                {/* <input onChange={inputChangeHandler} name="otherRequirements" value={formData?.otherRequirements} style={{ height: "200px" }} type="text" placeholder="Enter Any Other requirements" /> */}
                <textarea
                  onChange={inputChangeHandler}
                  name="otherRequirements"
                  value={formData?.otherRequirements}
                  style={{ height: "60px", resize: "none", width: "100%" }}
                  placeholder="Enter Any Other requirements"
                ></textarea>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Name</label>
                <input
               
                  value={"william wilson"}
                  name="Name"
                  type="text"
                  placeholder="Name of User"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Contact Number</label>
                <input
                
                  value={"1234567890"}
                  name="Name"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Email</label>
                <input
                  
                  value={"william@gmail.com"}
                  name="Email"
                  type="text"
                  placeholder="Email of User"
                />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_btns">
              <button type="Submit">Upload Opportunity</button>
              {/* <Link
                style={{ textDecoration: "none" }}
                to={"/UploadedOpportunities"}
              >
                <button type="button">Uploaded Opportunities</button>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadOpportunities;
