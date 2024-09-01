import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import PatronNavbar from "../Patron_Navbar";

import "./UploadOpportunities.css";
import { makeAuthenticatedPATCHRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";

const EditOpportunity = () => {
  const { accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({});

  const [updatedFormData, setUpdatedFormData] = useState({});

  const navigate = useNavigate();

  const { state } = useLocation();

  const { opportunity } = state || {};

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

  useEffect(() => {
    if (opportunity) {
      console.log(opportunity);
      opportunity.performanceDate = opportunity.performanceDate.split("T")[0];
      opportunity.applicationPeriod.start =
        opportunity.applicationPeriod.start.split("T")[0];
      opportunity.applicationPeriod.end =
        opportunity.applicationPeriod.end.split("T")[0];
      setFormData(opportunity);
    }
  }, [opportunity]);

  const inputChangeHandler = (e) => {
    setUpdatedFormData((prevState) => {
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

  console.log("aupd", updatedFormData);

  const submitHandler = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Loading...");
    console.log(" -> ");
    console.log(updatedFormData);
    console.log(formData);
    try {
      const response = await makeAuthenticatedPATCHRequest(
        `${patronProfilePoints.UPDATE_OPPOR_API}/${opportunity._id}`,
        updatedFormData,
        accessToken
      );
      console.log("res", response.data);

      if (response.statusCode === 200) {
        toast.success("successfully saved");
        navigate(-1);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again");
    }
    toast.dismiss(toastId);
  };

  return (
    <>
      <PatronNavbar />
      <div className="ArtistOpportunities_Page">
        <div className="ArtistOpportunities_Image">
          <div className="ArtistOpportunities_Image_Content">
            <p>Edit Opportunities for Artist</p>
          </div>
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
                  onChange={inputChangeHandler}
                  style={{ width: "100%" }}
                >
                  <option selected hidden defaultValue={formData?.purpose}>
                    {formData?.purpose}
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
                  // value={formData?.description}
                  defaultValue={formData?.description}
                  onChange={inputChangeHandler}
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Enter art Description"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Performance</label>
                <select onChange={inputChangeHandler} name="location" required>
                  <option selected hidden defaultValue={formData?.location}>
                    {formData?.location}
                  </option>
                  <option value="City/District">City/District</option>
                  <option value="State">State</option>
                  <option value="Country">Country</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Language of Performance</label>
                <select onChange={inputChangeHandler} name="languages" required>
                  <option selected hidden defaultValue={formData?.languages}>
                    {formData?.languages}
                  </option>
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
                <select required onChange={inputChangeHandler} name="budget">
                  <option selected hidden defaultValuevalue={formData?.budget}>
                    {formData?.budget}
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
                  defaultValue={formData?.performanceDate}
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
                  defaultValue={formData?.performanceDuration}
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
                  defaultValue={formData?.applicationPeriod?.end}
                  type="date"
                  placeholder="Enter application last date"
                />
              </div>

              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Type of Art*</label>
                <select required name="artType" onChange={inputChangeHandler}>
                  <option selected hidden defaultValue={formData?.artType}>
                    {formData?.artType}
                  </option>
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
                >
                  <option selected hidden defaultValue={formData?.artCategory}>
                    {formData?.artCategory}
                  </option>
                  <option value="dance">Dance</option>
                  <option value="song">song</option>
                  <option value="music">Music</option>
                  <option value="theater">Theater</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Name of Art</label>
                <select required name="artName" onChange={inputChangeHandler}>
                  <option selected hidden defaultValue={formData?.artName}>
                    {formData?.artName}
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
                  defaultValue={formData?.theme}
                  name="theme"
                  type="text"
                  placeholder="Theme for Performmance/Event"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Live/Recorded/Part Live</label>
                <select onChange={inputChangeHandler} name="mediaType">
                  <option selected hidden defaultValue={formData?.mediaType}>
                    {formData?.mediaType}
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
                  name="requiredArtists"
                  onChange={inputChangeHandler}
                >
                  <option
                    selected
                    hidden
                    defaultValue={formData?.requiredArtists}
                  >
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
                  name="artistLevel"
                >
                  <option selected hidden defaultValue={formData?.artistLevel}>
                    {formData?.artistLevel}
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
                  required
                >
                  <option
                    selected
                    hidden
                    defaultValue={formData?.artistLocation}
                  >
                    {formData?.artistLocation}
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
                  required
                >
                  <option selected hidden defaultValue={formData?.audienceSize}>
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
                  required
                >
                  <option
                    selected
                    hidden
                    defaultValue={formData?.audienceProfile}
                  >
                    {formData?.audienceProfile}
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
                <select onChange={inputChangeHandler} name="venue" required>
                  <option selected hidden defaultValue={formData?.venue}>
                    {formData?.venue}
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
                  required
                >
                  <option selected hidden defaultValue={formData?.facilities}>
                    {formData?.facilities}
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
                  defaultValue={formData?.otherRequirements}
                  style={{ height: "60px", resize: "none", width: "100%" }}
                  placeholder="Enter Any Other requirements"
                ></textarea>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Name</label>
                <input
                  readOnly
                  defaultValue={opportunity?.contactPersonName}
                  name="Name"
                  type="text"
                  placeholder="Name of User"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Contact Number</label>
                <input
                  readOnly
                  defaultValue={opportunity?.contactPersonNumber}
                  name="Name"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Email</label>
                <input
                  readOnly
                  defaultValue={opportunity?.contactEmail}
                  name="Email"
                  type="text"
                  placeholder="Email of User"
                />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_btns">
              <button type="Submit">Save Opportunity</button>
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
};

export default EditOpportunity;
