import React from "react";
import Patron_Navbar from "../../Patron_Navbar";
import "./Edit_Patron_Portfolio.css";
import { toast } from "react-toastify";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
} from "../../../../services/serverHelper";
import { patronProfilePoints } from "../../../../services/apis";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { makeAuthenticated_Multi_Patch_REQ } from "../../../../services/serverHelper";

export default function Edit_Patron_Portfolio() {
  const [profileAvatar, setProfileAvatar] = useState("");

  const navigate = useNavigate();

  const { accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    personalInfo: {
      profession: "",
      companyName: "",
      authorizedPerson: "",
      designation: "",
      companyDescription: "",
      firstName: "",
      lastName: "",
    },
    address: {
      state: "",
      city: "",
      pincode: "",
      details: "",
    },
    contactDetails: {
      email: "",
      contactNumber: "",
      website: "",
      expectations: "",
    },
  });

  // const changeHandler = (event)=>{
  //     const {name ,value} = event.target;

  //     setFormData((prev)=>({
  //         ...prev ,
  //         [name]:value
  //     }))
  // }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    const [section, property] = name.split("."); // Split the name into section and property

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section], // Keep the previous state of the section
        [property]: value, // Update the property within the section
      },
    }));
    console.log(formData);
  };

  const [userData, setUserData] = useState([]);

  // this is for fetch the edit patron profile data

  const fetchPatronData = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await makeAuthenticatedGETRequest(
        patronProfilePoints.FETCH_PATRON_APPLI_API,
        accessToken
      );
      console.log("res", response);
      if (response.status === "success") {
        setUserData(response.data);
        setFormData(response.data);
        // const {natureOfArt , firstName , lastName , email ,phoneNumber , address ,about } = response.data;
        // const fullName = firstName + lastName;
        // setFormData({
        //     fullName ,
        //     firstName ,
        //     natureOfArt ,
        //     email ,
        //     phoneNumber ,
        //     address , about
        // })
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("internal server error , please try again");
    }
    toast.dismiss(toastId);
  };

  useEffect(() => {
    fetchPatronData();
  }, []);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const citiesByState = {
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
    ],
    "Arunachal Pradesh": [
      "Itanagar",
      "Naharlagun",
      "Tawang",
      "Pasighat",
      "Ziro",
    ],
    Assam: ["Guwahati", "Jorhat", "Dibrugarh", "Silchar", "Nagaon"],
    Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Raigarh"],
    Goa: ["Panaji", "Vasco da Gama", "Margao", "Mapusa", "Ponda"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    Haryana: ["Faridabad", "Gurugram", "Rohtak", "Panipat", "Karnal"],
    "Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Dharamshala", "Kullu"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Kakching"],
    Meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar"],
    Mizoram: ["Aizawl", "Lunglei", "Champhai", "Saiha", "Kolasib"],
    Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
    Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    Sikkim: ["Gangtok", "Namchi", "Mangan", "Singtam", "Gyalshing"],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
    ],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    Tripura: ["Agartala", "Dharmanagar", "Udaipur", "Kailashahar", "Belonia"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
    Uttarakhand: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  };

  // this is update the patron data
  const updatePtronData = async (event) => {
    console.log(formData);
    event.preventDefault();

    const toastId = toast.loading("Loading...");
    try {
      const response = await makeAuthenticatedPATCHRequest(
        patronProfilePoints.FETCH_PATRON_APPLI_API,
        formData,
        accessToken
      );
      console.log("resss", response);
      if (response.status === "success") {
        toast.success("successfuly updated");
        navigate(-1);
        // fetchPatronData()
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal server error , please try again");
    }
    toast.dismiss(toastId);
  };

  // ! this is to add avatar file
  const handleButtonClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".jpg, .jpeg, .png";
    fileInput.onchange = handleFileChange;
    fileInput.click();
  };

  // ! this is to add the avatar
  const handleFileChange = async (event) => {
    const toastId = toast.loading("Loading...");
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("sele", selectedFile);

      const formData = new FormData();
      formData.append("avatar", selectedFile);

      const response = await makeAuthenticated_Multi_Patch_REQ(
        patronProfilePoints.PATRON_AVATAR_UPDATE,
        formData,
        accessToken
      );
      console.log("res", response);
      setProfileAvatar(response?.data?.avatar);
    }

    toast.success("Successfully Updated Profile Picture");
    toast.dismiss(toastId);
    navigate(-1);
  };

  //! this is for remove avatar
  //   const handleRemoveAvatar= async(event)=>{
  //     event.preventDefault();

  //  const response = await makeAuthenticatedPOSTRequest(artistProfilePoints.UPDATE_ARTIST_AVATAR_API ,{avatar:""} , accessToken );
  // setProfileAvatar(null);

  //   }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("+           ->>>>>>>>>>>> ->");
    console.log(formData);
  };

  return (
    <>
      <Patron_Navbar />
      <div className="EditPatronPortfolio_Page">
        <h1>Edit Portfolio Card</h1>

        {/* this is card  */}
        <div className="EditPatronPortfolio_ProfileCard">
          {/* this is left side  */}
          <div className="EditPatronPortfolio_ProfileCard_left">
            <div
              className="EditPatronPortfolio_ProfileCard_left_photo"
              style={{ overflow: "hidden" }}
            >
              <img
                src={userData?.personalInfo?.avatar.url}
                style={{ width: "100%" }}
              />
            </div>
            <h3>
              {userData?.personalInfo?.firstName}{" "}
              {userData?.personalInfo?.lastName}{" "}
            </h3>
            <h5>{userData?.personalInfo?.profession}</h5>
          </div>

          {/* this is strip */}
          <div className="EditPatronPortfolio_ProfileCard_strip"></div>

          {/* this is right side */}
          <div className="EditPatronPortfolio_ProfileCard_right">
            <img
              className="ek_logo_patron_portfolio"
              src="assets/HomePage/eK_Logo_Trasnparent_1.png"
            ></img>
            <div className="EditPatronPortfolio_ProfileCard_right_Main">
              <div className="AboutPartner_ProfileCard_bottomelement_details">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M16.7727 15.2104L17.261 15.728L16.7718 15.2104H16.7727ZM5.13752 13.1126L5.62486 12.5949L5.1366 13.1126H5.13752ZM1.32927 2.80659L0.841927 2.28992L1.33019 2.80756L1.32927 2.80659ZM12.3479 12.2992L12.7697 11.8584L11.7923 10.8231L11.3732 11.2639L12.3479 12.2992ZM14.181 11.6735L15.9448 12.6845L16.6048 11.4021L14.8418 10.3921L14.181 11.6735ZM16.2836 14.6927L14.9729 16.0676L15.9485 17.1019L17.2592 15.728L16.2836 14.6927ZM14.1736 16.5093C12.8353 16.6417 9.37405 16.5239 5.62486 12.5949L4.64834 13.6292C8.73903 17.9173 12.6331 18.1274 14.3028 17.963L14.1727 16.5093H14.1736ZM5.62486 12.5949C2.05197 8.84891 1.45941 5.69931 1.38557 4.33225L0.00292904 4.41495C0.0952281 6.13521 0.829006 9.62633 4.64834 13.6292L5.62486 12.5949ZM6.89397 6.58182L7.15887 6.30354L6.18419 5.26925L5.9193 5.54655L6.8949 6.58085L6.89397 6.58182ZM7.36931 2.76669L6.20635 1.12816L5.09784 2.00386L6.2608 3.64142L7.36931 2.76669ZM2.29194 0.771074L0.84285 2.28895L1.81937 3.32422L3.26755 1.80634L2.29194 0.771074ZM6.40664 6.06418C5.91745 5.54655 5.91745 5.54655 5.91745 5.5485H5.91561L5.91284 5.55239C5.86926 5.59928 5.83001 5.65043 5.79562 5.70515C5.74577 5.78299 5.69132 5.88515 5.64517 6.01456C5.53278 6.34861 5.50478 6.70774 5.56395 7.05664C5.68763 7.89829 6.23773 9.01042 7.64621 10.4874L8.62274 9.45217C7.30378 8.07051 6.98997 7.22984 6.93182 6.83285C6.90413 6.64409 6.93274 6.55068 6.94105 6.52928C6.94566 6.51566 6.94751 6.51468 6.94105 6.52344C6.93291 6.53693 6.92364 6.54963 6.91336 6.56139L6.90413 6.57112C6.90114 6.57414 6.89807 6.57706 6.8949 6.57987L6.40571 6.06418H6.40664ZM7.64621 10.4874C9.05562 11.9644 10.1161 12.5405 10.9154 12.6689C11.3243 12.7351 11.6538 12.6825 11.904 12.5842C12.0438 12.5297 12.1747 12.4522 12.2916 12.3546C12.3075 12.3406 12.3229 12.326 12.3378 12.3108L12.3442 12.305L12.347 12.3021L12.3479 12.3001C12.3479 12.3001 12.3488 12.2992 11.8606 11.7815C11.3714 11.2639 11.3742 11.2629 11.3742 11.2629L11.376 11.261L11.3779 11.259L11.3834 11.2542L11.3926 11.2444C11.4037 11.2339 11.4154 11.2242 11.4277 11.2152C11.4369 11.2084 11.4342 11.2113 11.4212 11.2172C11.3982 11.2259 11.3077 11.2561 11.1259 11.2269C10.7438 11.1646 9.94077 10.8338 8.62274 9.45217L7.64621 10.4874ZM6.20635 1.12719C5.2649 -0.196087 3.41522 -0.406254 2.29194 0.771074L3.26755 1.80634C3.75858 1.29163 4.62988 1.34514 5.09784 2.00386L6.20542 1.12719H6.20635ZM1.38649 4.33322C1.36803 3.99656 1.51479 3.64434 1.81937 3.32519L0.841927 2.28992C0.346282 2.80951 -0.0441435 3.54509 0.00292904 4.41495L1.38649 4.33322ZM14.9729 16.0676C14.72 16.3342 14.4468 16.484 14.1745 16.5103L14.3028 17.963C14.9812 17.8958 15.5359 17.5358 15.9494 17.1028L14.9729 16.0676ZM7.15887 6.30354C8.06802 5.35098 8.1354 3.84575 7.37024 2.76767L6.26173 3.64239C6.63369 4.16684 6.57831 4.85475 6.18327 5.27022L7.15887 6.30354ZM15.9457 12.6854C16.6998 13.1174 16.817 14.1352 16.2845 14.6937L17.261 15.728C18.4978 14.431 18.1166 12.268 16.6057 11.403L15.9457 12.6854ZM12.7697 11.8594C13.1242 11.4877 13.6946 11.3962 14.1819 11.6745L14.8428 10.3931C13.8422 9.81899 12.6017 9.97758 11.7932 10.8241L12.7697 11.8594Z"
                      fill="#000"
                    />
                  </svg>
                  &nbsp; {userData?.contactDetails?.contactNumber} &nbsp;
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M0.769231 0.870968V0C0.565218 0 0.369561 0.0917623 0.225302 0.2551C0.0810436 0.418439 0 0.639973 0 0.870968H0.769231ZM19.2308 0.870968H20C20 0.639973 19.919 0.418439 19.7747 0.2551C19.6304 0.0917623 19.4348 0 19.2308 0V0.870968ZM0.769231 1.74194H19.2308V0H0.769231V1.74194ZM18.4615 0.870968V14.8065H20V0.870968H18.4615ZM17.1795 16.2581H2.82051V18H17.1795V16.2581ZM1.53846 14.8065V0.870968H0V14.8065H1.53846ZM2.82051 16.2581C2.11282 16.2581 1.53846 15.6077 1.53846 14.8065H0C0 15.6534 0.29716 16.4657 0.826109 17.0646C1.35506 17.6635 2.07247 18 2.82051 18V16.2581ZM18.4615 14.8065C18.4615 15.6077 17.8872 16.2581 17.1795 16.2581V18C17.9275 18 18.6449 17.6635 19.1739 17.0646C19.7028 16.4657 20 15.6534 20 14.8065H18.4615Z"
                      fill="#000"
                    />
                    <path
                      d="M1 1.5L9.5 10L18 1.5"
                      stroke="#000"
                      stroke-width="2"
                    />
                  </svg>
                  &nbsp; {userData?.contactDetails?.email} &nbsp;
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                  >
                    <path
                      d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 1C7.61305 1 5.32387 1.92714 3.63604 3.57746C1.94821 5.22778 1 7.46609 1 9.8C1 11.8812 1.45225 13.243 2.6875 14.75L10 23L17.3125 14.75C18.5478 13.243 19 11.8812 19 9.8C19 7.46609 18.0518 5.22778 16.364 3.57746C14.6761 1.92714 12.3869 1 10 1Z"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  &nbsp;{" "}
                  {`${userData?.address?.city}, ${userData?.address?.pincode}`}
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {userData?.address?.state}
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="EditPatronPortfolio_uploadpic"
        >
          Upload Profile Picture
        </button>

        <main
          className="personal_information_wrapper "
          style={{ padding: "15px", maxWidth: "1200px" }}
        >
          <form onSubmit={updatePtronData} className="personal_info_form">
            {/* <p className="personal_information_text">Basic Profile</p> */}
            <label
              htmlFor=""
              className="single_personal_info"
              style={{ width: "100%" }}
            >
              <p className="form_title">About the Company</p>
              <textarea
                name="personalInfo.companyDescription"
                onChange={changeHandler}
                value={formData.personalInfo.companyDescription}
                style={{ height: "150px", resize: "none", width: "100%" }}
                className={`personal_form_input  "aboutUs_input `}
              />
            </label>
            <div className="personal_info_form_part">
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">First Name*</p>
                <input
                  name="personalInfo.firstName"
                  onChange={changeHandler}
                  value={formData.personalInfo.firstName}
                  className={`personal_form_input`}
                  required
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Last Name*</p>
                <input
                  name="personalInfo.lastName"
                  onChange={changeHandler}
                  value={formData.personalInfo.lastName}
                  className={`personal_form_input`}
                  required
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Profession</p>
                <input
                  name="personalInfo.profession"
                  onChange={changeHandler}
                  value={formData.personalInfo.profession}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Company Name</p>
                <input
                  name="personalInfo.companyName"
                  onChange={changeHandler}
                  value={formData.personalInfo.companyName}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Name of the Authorized Person</p>
                <input
                  name="personalInfo.authorizedPerson"
                  onChange={changeHandler}
                  value={formData.personalInfo.authorizedPerson}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Designation</p>
                <input
                  name="personalInfo.designation"
                  onChange={changeHandler}
                  value={formData.personalInfo.designation}
                  className={`personal_form_input`}
                />
              </label>
            </div>
            <p className="personal_information_text">Address</p>
            <div className="personal_info_form_part">
              <label
                htmlFor=""
                className="single_personal_info"
                style={{ maxWidth: "150px" }}
              >
                <p className="form_title">Pincode*</p>
                <input
                  name="address.pincode"
                  maxLength={6}
                  pattern="[0-9]{6}"
                  onChange={changeHandler}
                  value={formData.address.pincode}
                  className={`personal_form_input`}
                  required
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">state*</p>
                {/* <input
                  name="address.state"
                  onChange={changeHandler}
                  value={formData.address.state}
                  className={`personal_form_input`}
                /> */}
                <select
                  style={{ backgroundColor: "White", color: "black" }}
                  name="address.state"
                  onChange={changeHandler}
                  value={formData.address.state}
                  className={`personal_form_input`}
                  required
                >
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">City*</p>
                {/* <input
                  name="address.city"
                  onChange={changeHandler}
                  value={formData.address.city}
                  className={`personal_form_input`}
                /> */}
                <select
                  style={{ backgroundColor: "White", color: "black" }}
                  name="address.city"
                  onChange={changeHandler}
                  value={formData.address.city}
                  className={`personal_form_input`}
                  required
                >
                  {formData.address.state &&
                    citiesByState[formData.address.state] &&
                    citiesByState[formData.address.state].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </label>

              {/* <label htmlFor="" className="single_personal_info">
                <p className="form_title">Detailed Address</p>
                <textarea
                  name="address.details"
                  onChange={changeHandler}
                  value={formData.address.details}
                  style={{ height: "150px", resize: "none" }}
                  className={`personal_form_input  "aboutUs_input `}
                />
              </label> */}
            </div>
            <p className="personal_information_text">Contact</p>
            <div className="personal_info_form_part">
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Company Email*</p>
                <input
                  name="contactDetails.email"
                  onChange={changeHandler}
                  value={formData.contactDetails.email}
                  className={`personal_form_input`}
                  required
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Contact Number*</p>
                <input
                  name="contactDetails.contactNumber"
                  onChange={changeHandler}
                  value={formData.contactDetails.contactNumber}
                  className={`personal_form_input`}
                  required
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Website</p>
                <input
                  name="contactDetails.website"
                  onChange={changeHandler}
                  value={formData.contactDetails.website}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Expectation from eKalakaar</p>
                <input
                  name="contactDetails.expectations"
                  onChange={changeHandler}
                  value={formData.contactDetails.expectations}
                  className={`personal_form_input`}
                  style={{ height: "100px", resize: "none" }}
                />
              </label>
            </div>

            <button type="submit" className="updateButton">
              Update
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
