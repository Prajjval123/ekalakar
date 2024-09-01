import React from "react";
import "./Artist_Profile.css";
import { useState, useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../FrontPage/Navbar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMicOutline } from "react-icons/io5";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
  makeAuthenticatedPOSTRequest,
  makeAuthenticated_Multi_Patch_REQ,
} from "../../../services/serverHelper";
// import {
//   makeAuthenticatedGETRequest,
//   makeAuthenticatedPATCHRequest,
//   makeAuthenticatedPOSTRequest,
//   makeAuthenticated_Multi_Patch_REQ,
// } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { artistProfilePoints } from "../../../services/apis";
import Artist_navbar from "../Artist_navbar";
import art from "./assets/art.svg";
import star from "./assets/star.svg";
import performance from "./assets/performance.svg";
import Facebook from "./assets/Facebook.svg";
import Instagram from "./assets/Instagram.svg";
import Globe from "./assets/Globe.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import TwitterX from "./assets/TwitterX.svg";
import YouTube from "./assets/YouTube.svg";
import {
  specialization,
  languages,
  typeOfArt,
  artform,
  performanceduration,
  artTypeData,
  performancetype,
  natureofArt,
  nameofart,
  courses,
  categories,
  disabilitiesArray,
  highestLevelOfPerformance,
  ChargesPerPerformance,
  artInfo1,
  indian_cities,
  indian_states,
} from "../../../Data/artistProfile";
import Select from "react-select";

export function Artist_Profile() {
  const { accessToken } = useSelector((state) => state.auth);
  // const defaultPic =
  let defaultPic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  // const defaultPic =
  //   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const initialActiveSection = "basic";

  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const [art, setArt] = useState([]);
  const [artName, setArtName] = useState("");
  const [artTypes, setArtTypes] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [anyLanguage, setAnyLanguage] = useState("");
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(0);
    const [chiku,setChiku] = useState([])


  //Profile Prograss Bar
  const calculateProgressPercentage = () => {
    // Your logic to calculate the progress percentage
    // Replace this with the actual logic based on your form data
    const totalFields = 40;
    const filledFields = 20;
    const percentage = (filledFields / totalFields) * 100;
    const rotation = (percentage / 100) * 360;
    setRotation(rotation);
    return percentage;
  };

  const numbersArray = Array.from({ length: 250 }, (_, index) => index + 1);
  const years = Array.from(
    { length: 2030 - 1950 + 1 },
    (_, index) => index + 1950
  );
  const months = Array.from({ length: 120 }, (_, index) => index + 1);
  const documentList = [
    "Aadhar Card (India)",
    "Bank Statement (with matching address)",
    "Birth Certificate",
    "Driver's License",
    "National ID Card",
    "PAN Card (India)",
    "Passport",
    "Social Security Card",
  ];
  const indianStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
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

  const [toggle, setToggle] = useState([
    { name: "Language", isActive: false },
    { name: "Object 2", isActive: false },
    { name: "Object 3", isActive: false },
  ]);

  const MajorInternationalCities = [
    "Bangladesh",
    "Brazil",
    "China",
    "Colombia",
    "DR Congo",
    "Egypt",
    "Ethiopia",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Iran",
    "Italy",
    "Japan",
    "Mexico",
    "Myanmar",
    "Nigeria",
    "Pakistan",
    "Philippines",
    "Russia",
    "South Africa",
    "South Korea",
    "Spain",
    "Tanzania",
    "Thailand",
    "Turkey",
    "United Kingdom",
    "United States",
    "Vietnam",
  ];

  const MajorIndianCities = [
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

  //multiple select

  const languageOptions = languages.map((item) => ({
    value: item,
    label: item,
  }));
  const categoryOfArt = artInfo1.map((item) => ({
    value: item.art,
    label: item.art,
  }));

  const majorCities = MajorIndianCities.map((item) => ({
    value: item,
    label: item,
  }));

  const majorContry = MajorInternationalCities.map((item) => ({
    value: item,
    label: item,
  }));

  //multiple select for art profile
  const Dance = [
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
    "Any Other",
  ];
  const Song = [
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
    "Any Other",
  ];
  const Theatre = [
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
    "Any Other",
  ];
  const Music = [
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
    "Any Other",
  ];
  const Any_Other = ["Any Other"];

  const artdata = {
    Dance: Dance,
    Song: Song,
    Theatre: Theatre,
    Music: Music,
  };

  const [languagesoptions, setlanguagesoptions] = useState(null);
  const [categoryOption, setCategoryOption] = useState([]);
  const [artNameOption, setArtNameOption] = useState([]);
  const [artOption, setArtOption] = useState([]);
  const [cities, setCities] = useState(null);
  const [country, setCountry] = useState(null);
  const [nameOfArt, setnameOfArt] = useState([]);

  useEffect(() => {
    const newProgress = calculateProgressPercentage();
    setCount(newProgress);
    if (categoryOption === null || categoryOption.length === 0) {
      setnameOfArt([]);
      return;
    }
    const dataart = categoryOption?.map((option) => option.value);
    const newOptions = dataart?.flatMap((item) =>
      artdata[item]?.map((subItem) => ({ value: subItem, label: subItem }))
    );
    setnameOfArt(newOptions);
  
  }, [categoryOption]);


  const typeOfArts = typeOfArt.map((item) => ({
    value: item,
    label: item,
  }));

  const perfArtName = [
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
  ];

  // ! this is for avatar
  // const [profileAvatar, setProfileAvatar] = useState(null);
  const [profileAvatar, setProfileAvatar] = useState(defaultPic);
  // ! this is for avatar
  // const [profileAvatar, setProfileAvatar] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  const statesOFIndiaData = [
    {
      key: "AN",
      name: "Andaman and Nicobar Islands",
    },
    {
      key: "AP",
      name: "Andhra Pradesh",
    },
    {
      key: "AR",
      name: "Arunachal Pradesh",
    },
    {
      key: "AS",
      name: "Assam",
    },
    {
      key: "BR",
      name: "Bihar",
    },
    {
      key: "CG",
      name: "Chandigarh",
    },
    {
      key: "CH",
      name: "Chhattisgarh",
    },
    {
      key: "DH",
      name: "Dadra and Nagar Haveli",
    },
    {
      key: "DD",
      name: "Daman and Diu",
    },
    {
      key: "DL",
      name: "Delhi",
    },
    {
      key: "GA",
      name: "Goa",
    },
    {
      key: "GJ",
      name: "Gujarat",
    },
    {
      key: "HR",
      name: "Haryana",
    },
    {
      key: "HP",
      name: "Himachal Pradesh",
    },
    {
      key: "JK",
      name: "Jammu and Kashmir",
    },
    {
      key: "JH",
      name: "Jharkhand",
    },
    {
      key: "KA",
      name: "Karnataka",
    },
    {
      key: "KL",
      name: "Kerala",
    },
    {
      key: "LD",
      name: "Lakshadweep",
    },
    {
      key: "MP",
      name: "Madhya Pradesh",
    },
    {
      key: "MH",
      name: "Maharashtra",
    },
    {
      key: "MN",
      name: "Manipur",
    },
    {
      key: "ML",
      name: "Meghalaya",
    },
    {
      key: "MZ",
      name: "Mizoram",
    },
    {
      key: "NL",
      name: "Nagaland",
    },
    {
      key: "OR",
      name: "Odisha",
    },
    {
      key: "PY",
      name: "Puducherry",
    },
    {
      key: "PB",
      name: "Punjab",
    },
    {
      key: "RJ",
      name: "Rajasthan",
    },
    {
      key: "SK",
      name: "Sikkim",
    },
    {
      key: "TN",
      name: "Tamil Nadu",
    },
    {
      key: "TS",
      name: "Telangana",
    },
    {
      key: "TR",
      name: "Tripura",
    },
    {
      key: "UK",
      name: "Uttar Pradesh",
    },
    {
      key: "UP",
      name: "Uttarakhand",
    },
    {
      key: "WB",
      name: "West Bengal",
    },
  ];

  const completionYearData = [
    1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
    1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
    2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
    2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];
  // !  for basic proile
  const [basicFormData, setBasicFormData] = useState({
    firstName: "",
    highestEducation: "",
    yearOfCompletion: "",
    lastName: "",
    email: "",
    contactNumber: {
      countryCode: "",
      number: "",
    },
    customID: "",
    age: "",
    gender: "",
    languages: [],
    monthlyIncome: "",
    about: "",
    pwd: "",
    incomeSrc: "",
    socialCategory: "",
    idProof: {
      name: "",
      num: "",
    },
    bank: {
      bankAccountNumber: "",
      bankName: "",
      ifscCode: "",
      bankBranchLocation: "",
    },
    address: {
      state: "",
      city: "",
      pincode: "",
      details: "",
    },
    anunalIncomeByPerf: "",
    numOfperformanceLastYear: "",
    handles: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedIn: "",
      website: "",
      twitter: "",
    },
    gstIn: "",
    aadharNumber: "",
    panNumber: "",
    upiId: "",
    passportNumber: "",
  });
  const [numberOfAward, setNumberOfAward] = useState("");
  const [hightLevel, sethightLevel] = useState("");
  // ! change  handler for basic profile
  // const changeHandler = (event) => {
  //   const { name, value } = event.target;
  //   const filledFields = Object.values(basicFormData).filter(field => field).length;
  //   const tryy = Object.values(basicFormData).sort().reverse().slice(0, 5);
  //   console.log("==>");
  //     console.log("Check By", tryy)
  //     console.log("==>");

  //   setNumberOfAward(value);
  //   sethightLevel(value);
  //   if (name.startsWith("address.")) {
  //     // If the change is related to address, update the nested state
  //     PinFetch(value);
  //     setBasicFormData((prevData) => ({
  //       ...prevData,
  //       address: {
  //         ...prevData.address,
  //         [name.split(".")[1]]: value,
  //       },
  //     }));
  //   } else if (name.startsWith("handles.")) {
  //     setBasicFormData((prevData) => ({
  //       ...prevData,
  //       handles: {
  //         ...prevData.handles,
  //         [name.split(".")[1]]: value,
  //       },
  //     }));
  //   } else if (name.startsWith("contactNumber.")) {
  //     setBasicFormData((prevData) => ({
  //       ...prevData,
  //       contactNumber: {
  //         ...prevData.contactNumber,
  //         [name.split(".")[1]]: value,
  //       },
  //     }));
  //   } else if (name.startsWith("idProof.")) {
  //     setBasicFormData((prevData) => ({
  //       ...prevData,
  //       idProof: {
  //         ...prevData.idProof,
  //         [name.split(".")[1]]: value,
  //       },
  //     }));
  //     // }else if (name.startsWith("Date")) {
  //     //   setBasicFormData((prevData) => ({
  //     //     ...prevData,
  //     //     passportNumber:event.getFullYear()
  //     //   }));
  //   } else {
  //     // Otherwise, update the top-level state
  //     setBasicFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };

  const PinFetch = async (value) => {
    try {
      if (value.length === 6) {
        const url = `https://api.postalpincode.in/pincode/` + value;
        const Responce = await fetch(url);
        const data = await Responce.json();
        // console.log("checkPin",data[0].Status);
        if (data[0].Status === "Success") {
          setBasicFormData((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              state: data[0].PostOffice[0].State,
              city: data[0].PostOffice[0].District,
            },
          }));
    

        } else {
          toast.error("PIN Code not found");
        }
      } else {
        setBasicFormData((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            state: "",
            city: "",
          },
        }));
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    const filledFields = Object.values(basicFormData).filter(
      (field) => field
    ).length;
    const tryy = Object.values(basicFormData).sort().reverse().slice(0, 5);


    setNumberOfAward(value);
    sethightLevel(value);
    if (name.startsWith("address.")) {
      // If the change is related to address, update the nested state
      PinFetch(value);
      setBasicFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("handles.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        handles: {
          ...prevData.handles,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("contactNumber.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        contactNumber: {
          ...prevData.contactNumber,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("idProof.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        idProof: {
          ...prevData.idProof,
          [name.split(".")[1]]: value,
        },
      }));
      // }else if (name.startsWith("Date")) {
      //   setBasicFormData((prevData) => ({
      //     ...prevData,
      //     passportNumber:event.getFullYear()
      //   }));
    } else {
      // Otherwise, update the top-level state
      setBasicFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [errors, setErrors] = useState({});
  //   ! submit update handler for basic profile
  const basicSubmitHandler = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Loading...");

    let address = basicFormData.address;
    let idProof = basicFormData.idProof;

    let {
      firstName,
      lastName,
      about,
      age,
      contactNumber: { countryCode, number },
      email,
      gender,
      socialCategory,
      customID,
      monthlyIncome,
      aadharNumber,
      panNumber,
      upiId,

      anunalIncomeByPerf,
      highestEducation,
      yearOfCompletion,
      numOfperformanceLastYear,
      handles,
      pwd,
      incomeSrc,
      gstIn,
    } = basicFormData;

    let personalInfo = {
      firstName,
      lastName,
      about,
      age,
      customID,
      contactNumber: {
        number: number,
        countryCode: countryCode,
      },
      pwd,
      email,
      gender,
      monthlyIncome,
      socialCategory,
      incomeSrc,
    };

    personalInfo.languages = languagesoptions.map((option) => option.value);

    let otherInfo = {
      aadharNumber,
      panNumber,
      upiId,
      numOfperformanceLastYear,
      idProof,
      gstIn,
      anunalIncomeByPerf,
      yearOfCompletion,
      highestEducation,
    };

    otherInfo.passportNumber = startDate;

    let socialLinks = handles;
    // validate
    let isValid = true;
    const newErrors = {};

    if (firstName.trim() === "") {
      isValid = false;
      toast.error("Firstname  is required");
    } else if (!/^[A-Za-z\s]+$/.test(firstName)) {
      toast.error("Please enter only text");
      isValid = false;
    }
    if (personalInfo.contactNumber.number.trim() === "") {
      toast.error("Mobile number is required");
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(personalInfo.contactNumber.number)) {
      toast.error("Please enter a valid 10-digit mobile number");

      isValid = false;
    }

    // Add more validation checks for other fields (e.g., email format, password strength, etc.)

    if (!isValid) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Proceed with form submission or other actions
    }
    ////
    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { address, personalInfo, otherInfo, socialLinks },
        accessToken
      );

      if (response.status === "success") {
        toast.success(" successFully updated", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setActiveSection("art");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
        toast.error("server error please try again", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };

  //   ! for art Profile funtion
  const [artFormData, setArtFormData] = useState({
    natureOfArt: "",
    areaOfInterest: "",
    genre: "",
    artForm: "",
    performanceType: "",
    artEducation: "",
    artName: "",
    nameOfGuru: "",
    traditionArtName: "",
    artEduDuration: {
      start: "",
      end: "",
    },
    yearOfCompletation: "",
    certificateOfArt: "",
    academicQualification: "",
    course: "",
    specialization: "",
    institute: "",
    academicQualificationDuration: {
      start: "",
      end: "",
    },
    certificateOfAcademicQualification: "",
    certificateInstitute: "",
    certificateCourse: "",
    certificateDuration: {
      start: "",
      end: "",
    },
  });
  const [traditionalTable, setTraditionalTable] = useState([
    {
      artName: "",
      guruName: "",
      location: "",
      duration: "",
      completionYear: 0,
      documentUrl: "",
    },
    {
      artName: "",
      guruName: "",
      location: "",
      duration: "",
      completionYear: 0,
      documentUrl: "",
    },
    {
      artName: "",
      guruName: "",
      location: "",
      duration: "",
      completionYear: 0,
      documentUrl: "",
    },
  ]);
  const handleArtProfileChanges = (e, rowIdx, key) => {
    const newData = [...professionalTable];
    newData[rowIdx][key] = e.target.value;
    setProfessionalTable(newData);
  };
  const [artInfoFormData, setArtInfoFormData] = useState({
    aboutArt: "",
    artCategory: [],
    artEducation: "",
    artName: [],
    artType: [],
  });
  // console.log("table",professionalTable);

  const artChangesHandler = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("artCategory")) {
      setArt(artInfo1.find((ctr) => ctr.art === value).category);
      setArtInfoFormData((prev) => ({
        ...prev,
        artCategory: value,
      }));
    } else {
      setArtInfoFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  //  ! for performance profile section

  const [tableData, setTableData] = useState([
    // Initial data with column headings
    {
      eventName: "",
      duration: "",
      level: "",
      location: "",
      collaborator: "",
      link: "",
    },
    {
      eventName: "",
      duration: "",
      level: "",
      location: "",
      collaborator: "",
      link: "",
    },
    {
      eventName: "",
      duration: "",
      level: "",
      location: "",
      collaborator: "",
      link: "",
    },
  ]);
  const [performanceFormData, setPerformanceFormData] = useState({
    totalNoOfArtist: "",
    artName: "",
    affiliatedToAnyGroup: Boolean,
    nameOfArtistGroupOrg: "",
    locationOfGroupOrg: "",
    contactNumber: "",
    countryCode: "",
    typeOfPerformance: "",
    highestLevelOfPerformance: "",
    totalPerfs: "",
    experience: "",
    avgPerfDurationIn: "",
    avgPerfFeeIn: "",
    avgPerfDurationInternational: "",
    avgPerfFeeInternational: "",
    majorPerfCityIndia: "",
    majorPerfCountryInternational: "",
    aboutJourney: "",
    topFivePerformance: [],
    performanceImages: [],
    performancevideos: [],
  });
  const [perfInfoData, setPerfInfoData] = useState({
    nameOfArts: "",
    totalNoOfArtists: 0,
    existingProductions: 0,
    nameOfProductions: "",
    briefOfPerformance: "",
    approxBudget: 0,
    samples: [],
  });

  const performanceInfohandler = (event) => {
    const { name, value } = event.target;

    setPerfInfoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSampleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setPerfInfoData({
        ...perfInfoData,
        samples: event.target.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const perforChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("topFivePerformance.")) {
      // Parse the index from the name
      const index = parseInt(name.replace("topFivePerformance.", ""), 10);

      // Create a copy of the current topFivePerformance array
      const updatedPerformanceArray = [
        ...performanceFormData.topFivePerformance,
      ];

      // Update the specific element at the index with the new value
      updatedPerformanceArray[index] = value;

      // Update the performanceFormData state with the modified array
      setPerformanceFormData((prevData) => ({
        ...prevData,
        topFivePerformance: updatedPerformanceArray,
      }));
    } else {
      // Handle other form fields as needed
      setPerformanceFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const perforSubmitHandler = async (event) => {
    console.log("clicked");
    event.preventDefault();
    // console.log("PERF INFO - >", perfInfoData);

    const toastId = toast.loading("Loading...");

    // uploading Videos
    if (perfVideo !== "") {
      const VideosLinks = perfVideo.map((item) => item.trim());
      console.log(VideosLinks);
      const formData = new FormData();
      formData.append("videoUrls", VideosLinks[0]);
      formData.append("videoUrls", VideosLinks[1]);
      formData.append("videoUrls", VideosLinks[2]);

      try {
        const videoApiResponse = await makeAuthenticated_Multi_Patch_REQ(
          artistProfilePoints.UPLOAD_PERF_VIDEOS,
          formData,
          accessToken
        );
        console.log("Upload Video Response", videoApiResponse);
      } catch (error) {
        console.log("Upload Video Error", error);
      }
    }

    try {
      const {
        affiliatedToAnyGroup,
        nameOfArtistGroupOrg,
        locationOfGroupOrg,
        contactNumber,
        countryCode,
        typeOfPerformance,
        highestLevelOfPerformance,
        totalPerfs,
        experience,
        avgPerfDurationIn,
        avgPerfFeeIn,
        avgPerfDurationInternational,
        avgPerfFeeInternational,
        aboutJourney,
        majorPerfCountryInternational,
        performanceImages,
        // performancevideos,
      } = performanceFormData;


      let performanceInfo = {
        affiliation: {
          name: nameOfArtistGroupOrg,
          isAffiliated: affiliatedToAnyGroup,
          location: locationOfGroupOrg,
          contactNumber: {
            countryCode: countryCode,
            number: contactNumber,
          },
        },
        perfDuration: {
          india: avgPerfDurationIn,
          international: avgPerfDurationInternational,
        },
        perfCharge: {
          india: avgPerfFeeIn,
          international: avgPerfFeeInternational,
        },
        perfType: typeOfPerformance,
        experience: experience,
        highlights: aboutJourney,
        totalPerfs: totalPerfs,
        peakPerf: highestLevelOfPerformance,
        majorPerfCountry: majorPerfCountryInternational,
        perfDetails: tableData,
        perfImgs: performanceImages,
        // perfVideos: performancevideos,
        performances: [
          {
            nameOfArts: perfInfoData.nameOfArts,
            totalNoOfArtists: perfInfoData.totalNoOfArtists,
            existingProductions: perfInfoData.existingProductions,
            nameOfProductions: perfInfoData.nameOfProductions,
            briefOfPerformance: perfInfoData.briefOfPerformance,
            approxBudget: perfInfoData.approxBudget,
            sample: perfInfoData.sample,
          },
        ],
      };
      // majorPerfCity: majorPerfCityIndia,
      // performanceInfo.majorPerfCities = cities.map((option) => option.map);

      // console.log(performanceFormData);

      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { performanceInfo },
        accessToken
      );
      console.log("response ", response);
      if (response.status === "success") {
        toast.success("successfully updated ", {
          position: "top-center",
        });
        setActiveSection("award");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("cannot updated successfully , please try again", {
        position: "top-center",
      });
    }

    toast.dismiss(toastId);
  };

  console.log("==>");
    console.log("Check By Chiku", tableData[0].eventName);
    console.log("==>");

  const [startDate, setStartDate] = useState(new Date());
  // ! for award profile
  const [awardFormData, setAwardFormData] = useState({
    totalAwards: "",
    totalNoOfLocalAwards: "",
    totalNoOfDistrictAwards: "",
    totalNoOfStateAwards: "",
    totalNoOfNationalAwards: "",
    totalNoOfInternationalAwards: "",
    awards: [],
  });

  // Professional Profile
  const [artProfile, setArtProfile] = useState({
    categoryOfArt: "",
    nameOfArt: "",
    typeOFArt: "",
    artEducation: "",
    professional: [],
    Traditional: [],
  });

  const awardChangeHandler = (event) => {
    const { name, value } = event.target;

    setAwardFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ! in this for awardd
  const handleInputChange = (index, field, value) => {
    const newAwards = [...awardFormData.awards];
    newAwards[index][field] = value;

    setAwardFormData({
      ...awardFormData,
      awards: newAwards,
    });
  };

  // ! award section update
  const awardSubmitsHandler = async (event) => {
    event.preventDefault();
    const taostId = toast.loading("Loding...");
    try {
      const {
        totalAwards,
        totalNoOfLocalAwards,
        totalNoOfDistrictAwards,
        totalNoOfStateAwards,
        totalNoOfNationalAwards,
        totalNoOfInternationalAwards,
        awards,
      } = awardFormData;

      let awardsInfo = {
        districtAwards: totalNoOfDistrictAwards,
        internationalAwards: totalNoOfInternationalAwards,
        localAwards: totalNoOfLocalAwards,
        nationalAwards: totalNoOfNationalAwards,
        stateAwards: totalNoOfStateAwards,
        totalAwards: totalAwards,
        awardsDetails: [...awards],
      };

      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { awardsInfo },
        accessToken
      );
      // console.log("response", response);
      if (response.status === "success") {
        toast.success("successfully update", {
          position: "top-center",
        });

        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }

    toast.dismiss(taostId);
  };

  // ! this is to add the new award in award section
  const addNewAward = () => {
    const newAward = {
      NameOfGuru: "",
      Location: "",
      Duration: "",
      year: "",
      Document: "",
    };
    setAwardFormData({
      ...awardFormData,
      awards: [...awardFormData.awards, newAward],
    });
  };

  // this is add button in Professional Art Education

  const addProfessional = () => {
    const filled = {
      NameOfGuru: "",
      Location: "",
      Duration: "",
      year: "",
      Document: "",
    };
    setArtProfile({
      ...artProfile,
      professional: [...artProfile.professional, filled],
    });
  };

  const addTraditional = () => {
    const newTradition = {
      Course: "",
      Specialisation: "",
      Institute: "",
      Duration: "",
      Completion: "",
      Document: "",
    };
    setArtProfile({
      ...artProfile,
      Traditional: [...artProfile.Traditional, newTradition],
    });
  };

  //remove the //remove the Professional
  const removeLastTradition = () => {
    const newTradition = [...artProfile.Traditional];
    newTradition.pop(); // Remove the last element

    setArtProfile({
      ...artProfile,
      Traditional: newTradition,
    });
  };
  const removeLastProfessional = () => {
    const filled = [...artProfile.professional];
    filled.pop(); // Remove the last element

    setArtProfile({
      ...artProfile,
      professional: filled,
    });
  };

  // ! remove the award detail in award section
  const removeLastAward = () => {
    const newAwards = [...awardFormData.awards];
    newAwards.pop(); // Remove the last element

    setAwardFormData({
      ...awardFormData,
      awards: newAwards,
    });
  };

  const [chikuData,setChikuData] = useState([])


  //  ! fetch  profile data function
  const fetchProileData = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        artistProfilePoints.FETCH_PROFILE_DATA_API,
        accessToken
      );
      console.log("All traditional Info 1496 ===> ", response.data.traditionalInfo);
      console.log("All Data 1496 ===> ", response.data);

      const {
        address,
        appliedOpportunities,
        artInfo,
        awardsInfo,
        certificateInfo,
        otherInfo,
        performanceInfo,
        personalInfo,
        professionalInfo,
        savedOpportunities,
        socialLinks,
        traditionalInfo,
      } = response.data;

      setChikuData(...chikuData ,performanceInfo?.perfDetails)

      console.log("==>");
        console.log("Check By Abhi",performanceInfo?.perfDetails);
        console.log("==>");

      if (personalInfo?.avatar?.url) {
        setProfileAvatar(personalInfo?.avatar?.url);
      }
      setChiku(traditionalInfo)

      // if (performanceInfo.perfDetails?.length > 0) {
      //   setTableData(performanceInfo?.perfDetails);
      // }
      // console.log(
      //   performanceInfo.performances[0],
      //   setPerfInfoData((prev) => ({
      //     ...prev,
      //      nameOfArts: performanceInfo.performances[0].nameOfArts,
      //     totalNoOfArtists: performanceInfo.performances[0].totalNoOfArtists,
      //     existingProductions:
      //       performanceInfo.performances[0].existingProductions,
      //     nameOfProductions: performanceInfo.performances[0].nameOfProductions,
      //     briefOfPerformance:
      //       performanceInfo.performances[0].briefOfPerformance,
      //     approxBudget: performanceInfo.performances[0].approxBudget,
      //     sample: performanceInfo.performances[0].samples,
      //   }))
      // );

      if (
        performanceInfo.performances &&
        performanceInfo.performances.length > 0 &&
        performanceInfo.performances[0]
      ) {
        const firstPerformance = performanceInfo.performances[0];

        setPerfInfoData((prev) => ({
          ...prev,
          nameOfArts: firstPerformance.nameOfArts,
          totalNoOfArtists: firstPerformance.totalNoOfArtists,
          existingProductions: firstPerformance.existingProductions,
          nameOfProductions: firstPerformance.nameOfProductions,
          briefOfPerformance: firstPerformance.briefOfPerformance,
          approxBudget: firstPerformance.approxBudget,
          sample: firstPerformance.samples,
        }));
      } else {
        // Handle the case when performanceInfo.performances[0] is undefined or an empty array
        // For example, set default values or handle the absence of data
        // Or you can log an error message for debugging purposes
        console.error("performanceInfo.performances[0] is undefined or empty");
      }

      setArtInfoFormData((prev) => ({
        ...prev,
        aboutArt: artInfo?.aboutArt,
        artCategory: artInfo?.artCategory,
        artEducation: artInfo?.artEducation,
        artName: artInfo?.artName,
        artType: artInfo?.artType,
      }));
      setCategoryOption(
        artInfo?.artCategory.map((item) => ({ value: item, label: item }))
      );
      setArtOption(
        artInfo?.artType.map((item) => ({ value: item, label: item }))
      );
      // console.log("ioioo");
      // console.log("iiiio", artInfoFormData);

      setAwardData((prev) => ({
        ...prev,
        highlights: awardsInfo?.highlights,
        level: awardsInfo?.level,
        totalAwards: awardsInfo?.totalAwards,
        awardsDetails: awardsInfo?.awardsDetails,
      }));

      if (awardsInfo?.awardsDetails.length > 0) {
        setAwardTable(awardsInfo?.awardsDetails);
      }
      if (traditionalInfo?.length > 0) {
        setTraditionalTable(traditionalInfo);
      }
      if (professionalInfo?.length > 0) {
        setProfessionalTable(professionalInfo);
      }

      setBasicFormData((prev) => ({
        ...prev,
        firstName: personalInfo?.firstName,
        lastName: personalInfo?.lastName,
        email: personalInfo?.email,
        age: personalInfo?.age,

        phoneNumber: personalInfo?.contactNumber?.number,
        countryCode: personalInfo?.contactNumber?.countryCode,
        gender: personalInfo?.gender,
        about: personalInfo?.about,
        monthlyIncome: personalInfo?.monthlyIncome,
        socialCategory: personalInfo?.socialCategory,
        customID: personalInfo?.customID,
        pwd: personalInfo?.pwd,
        incomeSrc: personalInfo?.incomeSrc,
        aadharNumber: otherInfo?.aadharNumber,
        highestEducation: otherInfo?.highestEducation,
        panNumber: otherInfo?.panNumber,
        anunalIncomeByPerf: otherInfo?.anunalIncomeByPerf,
        yearOfCompletion: otherInfo?.yearOfCompletion,

        upiId: otherInfo?.upiId,
        gstIn: otherInfo?.gstIn,
        numOfperformanceLastYear: otherInfo?.lastYearPerfsCount,
        passportNumber: otherInfo?.passportNumber,
        languages: personalInfo?.languages,
        contactNumber: {
          ...prev.contactNumber,
          ...response.data.personalInfo.contactNumber,
        },

        address: {
          ...prev.address,
          ...response.data.address,
        },
        handles: {
          ...prev.handles,
          ...response.data.socialLinks,
        },
        idProof: {
          ...prev.idProof,
          ...response.data.otherInfo.idProof,
        },
      }));

      setlanguagesoptions(
        personalInfo?.languages.map((item) => ({ value: item, label: item }))
      );

      setArtFormData((prev) => ({
        ...prev,
        natureOfArt: artInfo?.artCategory,
        // check
        areaOfInterest: artInfo?.areaOfInterest,

        // genre,

        traditionArtName: traditionalInfo?.artName,

        artForm: artInfo?.artForm,

        performanceType: artInfo?.perfType,
        // check
        artEducation: artInfo?.learningSrc,
        artName: artInfo?.artName,

        nameOfGuru: traditionalInfo?.guruName,
        yearOfCompletation: traditionalInfo?.completionYear,
        certificateOfArt: traditionalInfo?.certificate,
        academicQualification: professionalInfo?.qualification,
        course: professionalInfo?.course,
        specialization: professionalInfo?.specialization,
        institute: professionalInfo?.institute,

        // certificateOfAcademicQualification,
        certificateInstitute: certificateInfo?.institute,

        certificateCourse: certificateInfo?.course,

        artEduDuration: {
          ...prev.artEduDuration,
          ...response.data?.traditionalInfo?.duration,
        },

        academicQualificationDuration: {
          ...prev.academicQualificationDuration,
          // check
          ...professionalInfo?.duration,
        },

        certificateDuration: {
          ...prev.certificateDuration,
          // check
          ...certificateInfo?.duration,
        },
      }));

      setArtOption(
        artInfo?.artType.map((item) => ({ value: item, label: item }))
      );
      setCategoryOption(
        artInfo?.artCategory.map((item) => ({ value: item, label: item }))
      );

      setArtNameOption(
        artInfo?.artName?.map((item) => ({ value: item, label: item }))
      );

      // setProfessionalTable(())
      // console.log("->>");
      // console.log("art Info ", response.data);
      // console.log("->>");

      setPerformanceFormData((prev) => ({
        ...prev,
        experience: performanceInfo?.experience,
        typeOfPerformance: performanceInfo?.perfType,
        nameOfArtistGroupOrg: performanceInfo?.affiliation?.name,
        affiliatedToAnyGroup: performanceInfo?.affiliation?.isAffiliated,
        totalPerfs: performanceInfo?.totalPerfs,
        highestLevelOfPerformance: performanceInfo?.peakPerf,
        topFivePerformance: performanceInfo?.perfDetails,
        locationOfGroupOrg: performanceInfo?.affiliation?.location,
        contactNumber: performanceInfo?.affiliation?.contactNumber.number,
        countryCode: performanceInfo?.affiliation?.contactNumber?.countryCode,
        avgPerfDurationIn: performanceInfo?.perfDuration?.india,
        avgPerfFeeIn: performanceInfo?.perfCharge?.india,
        avgPerfDurationInternational:
          performanceInfo?.perfDuration?.international,
        avgPerfFeeInternational: performanceInfo?.perfCharge?.international,
        majorPerfCityIndia: performanceInfo?.majorPerfCity,
        majorPerfCountryInternational: performanceInfo?.majorPerfCountry,
        aboutJourney: performanceInfo?.highlights,
        performanceImages: performanceInfo?.perfImgs,
        performancevideos: performanceInfo?.perfVideos,
      }));
      setCities(
        performanceInfo?.majorPerfCity.map((item) => ({
          value: item,
          label: item,
        }))
      );

      // setAwardFormData((prev) => ({
      //   ...prev,
      //   totalAwards: awardsInfo?.totalAwards,
      //   totalNoOfLocalAwards: awardsInfo?.localAwards,
      //   totalNoOfDistrictAwards: awardsInfo?.districtAwards,
      //   totalNoOfStateAwards: awardsInfo?.stateAwards,
      //   totalNoOfNationalAwards: awardsInfo?.nationalAwards,
      //   totalNoOfInternationalAwards: awardsInfo?.internationalAwards,
      //   awards:
      //     awardsInfo?.awardsDetails.length === 0
      //       ? [
      //           {
      //             title: "",
      //             level: "",
      //             category: "",
      //             stage: "",
      //             year: "",
      //             givenBy: "",
      //           },
      //         ]
      //       : awardsInfo?.awardsDetails,
      // }));

      // PrograssBar
    } catch (error) {
      console.log(error);
    }
  };

  // const handlePerformanceTableChange = (e, rowIdx, key) => {
  //   const newData = [...tableData];
  //   newData[rowIdx][key] = e.target.value;
  //   setTableData(newData);
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const updatedTableData = [...tableData];
  //     updatedTableData[rowIdx][key] = event.target.result;
  //     setTableData(updatedTableData);
  //   };

  //   reader.readAsDataURL(file);
  // };

  const handlePerformanceTableChange = (e, rowIdx, key) => {
  // Clone the existing tableData array to avoid mutating the state directly
  const newData = [...tableData];

  // Update the value of the specified cell in the cloned array
  newData[rowIdx][key] = e.target.value;

  // Set the state with the updated array
  setTableData(newData);

  // Check if the input is a file input
  if (e.target.type === 'file') {
    // If it's a file input, read the contents of the file
    const file = e.target.files[0];
    const reader = new FileReader();

    // Set up a callback for when the file reading is complete
    reader.onload = (event) => {
      // Clone the existing tableData array again
      const updatedTableData = [...tableData];
      // Update the value of the specified cell with the file content (e.g., base64 data)
      updatedTableData[rowIdx][key] = event.target.result;

      // Set the state with the tableData containing the updated file content
      setTableData(updatedTableData);
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
};


  const handleAwardTable = (e, rowIdx, key) => {
    const newData = [...awardsTable];
    newData[rowIdx][key] = e.target.value;
    setAwardTable(newData);
  };

  useEffect(() => {
    fetchProileData();
  }, []);

  // ! this is to add avatar file
  // ! this is to add avatar file
  const handleButtonClick = () => {
    // const fileInput = document.createElement("input");
    // fileInput.type = "file";
    // fileInput.accept = ".jpg, .jpeg, .png";
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".jpg, .jpeg, .png";
    fileInput.onchange = handleFileChange;
    fileInput.click();
  };
  const [profileLoading, setProfileLoading] = useState(false);

  // ! this is to add the avatar
  // ! this is to add the avatar
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    console.log(
      "🚀 ~ file: Artist_Profile.js:1444 ~ handleFileChange ~ selectedFile:",
      selectedFile
    );

    if (selectedFile) {
      // console.log("sele", selectedFile);
      let fileSizeKiloBytes = selectedFile.size / 1024;

      if (fileSizeKiloBytes >= 1024) {
        return toast.error("Image should be be less than 1mb");
      }
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      setProfileLoading(true);
      const toastId = toast.loading("Updating");
      try {
        const response = await makeAuthenticated_Multi_Patch_REQ(
          artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
          formData,
          accessToken
        );
        console.log("res", response);
        setProfileAvatar(response?.data?.avatar?.url);
        toast.dismiss(toastId);
        toast.success("Avatar Updated");
        setProfileLoading(false);
      } catch (error) {
        console.log(error);
        setProfileLoading(false);
        // toast.success(res)
      }
      // const response = await makeAuthenticated_Multi_Patch_REQ(
      //   artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
      //   formData,
      //   accessToken
      // );
      // console.log("res", response);
      // setProfileAvatar(response?.data?.avatar);
    }
  };

  const [perfVideo, setPerfVideo] = useState(["", "", ""]);
  const handleInputChangeVideo = (index, value) => {
    const newInputValues = [...perfVideo];
    newInputValues[index] = value;
    setPerfVideo(newInputValues);
  };

  const handelMultipleImages = async (e) => {
    // const [selectedImages, setSelectedImages] = useState([]);

    // console.log("okko");
    const Files = e.target.files;
    console.log(Files);

    // Convert the FileList to an array
    const newImages = Array.from(Files);
    console.log("new Images", newImages);

    let formData = new FormData();
    let sizeCounter = 0;
    let EachImageSize = true;
    if (newImages.length > 6)
      return toast.error("More than 6 Images are not allowed");

    newImages.forEach((image) => {
      let size = image.size / 1024;
      if (size >= 1024) {
        EachImageSize = false;
      }
      sizeCounter = sizeCounter + size;
    });

    if (!EachImageSize || sizeCounter >= 16384) {
      return toast.error(
        "Image Size exceeds, Single Image Should Not be more than 1 mb"
      );
    }

    newImages.forEach((image) => {
      formData.append(`images`, image);
    });
    const toastId = toast.loading("Uploading...");
    try {
      const response = await makeAuthenticated_Multi_Patch_REQ(
        artistProfilePoints.UPLOAD_PERF_IMAGES,
        formData,
        accessToken
      );

      console.log("Images Reponse -> ", response);
      toast.dismiss(toastId);
      if (response.status !== "error") {
        setPerformanceFormData({
          ...performanceFormData,
          performanceImages: response?.data?.performanceInfo?.perfImgs,
        });
        return toast.success("Performance Images Uploaded");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  //! this is for remove avatart
  const handleRemoveAvatar = async (event) => {
    //! this is for remove avatart
    const handleRemoveAvatar = async (event) => {
      event.preventDefault();

      const response = await makeAuthenticatedPOSTRequest(
        artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
        { avatar: "" },
        accessToken
      );
      setProfileAvatar(null);
    };

    const response = await makeAuthenticatedPOSTRequest(
      artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
      { avatar: "" },
      accessToken
    );
    setProfileAvatar(null);
  };

  //   ! dont change this
  const mystyle = {
    fontSize: "large",
    fontWeight: "500",
  };
  const back = {
    backgroundColor: "transparent",
    marginLeft: "0vh",
    marginTop: "-2vh",
  };
  //   ! dont change this
  // const mystyle = {
  //   fontSize: "large",
  //   fontWeight: "500",
  // };
  // const back = {
  //   backgroundColor: "transparent",
  //   marginLeft: "0vh",
  //   marginTop: "-2vh",
  // };

  //Art Profile page

  const [artTable, setArtTable] = useState([
    {
      art: "",
      guru: "",
      Location: "",
      duration: "",
      completion: "",
      link: "",
    },
    {
      art: "",
      guru: "",
      Location: "",
      duration: "",
      completion: "",
      link: "",
    },
    {
      art: "",
      guru: "",
      Location: "",
      duration: "",
      completion: "",
      link: "",
    },
  ]);

  //new Award Page
  const [awardData, setAwardData] = useState({
    highlights: "",
    level: "",
    totalAwards: "",
    awardsDetails: [],
  });

  const handleTraditional = (e, rowIdx, key) => {
    const newData = [...traditionalTable];
    newData[rowIdx][key] = e.target.value;
    setTraditionalTable(newData);
  };

  console.log("==>");
    console.log("2059 TraditionalTable",traditionalTable);
    console.log("==>");







  const [professionalTable, setProfessionalTable] = useState([
    {
      course: "",
      specialization: "",
      institute: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
    {
      course: "",
      specialization: "",
      institute: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
    {
      course: "",
      specialization: "",
      institute: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
  ]);

  const [awardsTable, setAwardTable] = useState([
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
  ]);

  const awardHandle = (event) => {
    const { name, value } = event.target;

    setAwardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // console.log("Award",awardData);

  const awardSubmitHandler = async (event ,) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      let awardsInfo = {
        awardsDetails: awardsTable,
        level: awardData.level,
        highlights: awardData.highlights,
        totalAwards: awardData.totalAwards,
      };

      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { awardsInfo },
        accessToken
      );
      // console.log("response ", response);
      if (response.status === "success") {
        toast.success("successfully updated ", {
          position: "top-center",
        });
        setActiveSection("award");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("cannot updated successfully , please try again", {
        position: "top-center",
      });
    } finally {
      toast.dismiss(toastId);
    }
  };

  const awardTableHandle = (e, rowIdx, key) => {
    const newAwardsTable = [...awardsTable];
    newAwardsTable[rowIdx][key] = e.target.value;
    setAwardData(awardsTable);
  };

  // console.log("==>");
  // console.log("Check By Chiku => ",basicFormData.passportNumber);
  // console.log("==>");

  // console.log("award Page",awardData);
  const artNameHandler = (e) => {
    artNameOption.push({ value: artName, label: artName });
    const NewArtNameOption = artNameOption?.filter(
      (item) => item.value !== "Any Other"
    );
    setArtNameOption(NewArtNameOption);
    setArtName("");
  };

  const languageHandle = (e) => {
    languagesoptions.push({ value: anyLanguage, label: anyLanguage });
    const NewLanguageOption = languagesoptions?.filter(
      (item) => item.value !== "Any Other"
    );
    setlanguagesoptions(NewLanguageOption);
  };
  const multiSectionHandle = (e) => {
    const { name } = e.target;
    if (name === "Category") {
      categoryOption.push({ value: newCategory, label: newCategory });
      const NewCategoryOption = categoryOption.filter(
        (item) => item.value !== "Any Other"
      );
      setCategoryOption(NewCategoryOption);
      setNewCategory("");
    }
    if (name === "Type") {
      artOption.push({ value: artTypes, label: artTypes });
      const newTypeOption = artOption.filter(
        (item) => item.value !== "Any Other"
      );
      setArtOption(newTypeOption);
      setArtTypes("");
    }
  };

  const [togglePerfAfflication, settogglePerfAfflication] = useState(
    performanceFormData.affiliatedToAnyGroup
  );
  const tableStyles = `
  .table-container {
    width: 100%;
    overflow-x: auto;
  }

  .performance_table {
    width: 100%;
  }

  .performance_table th, .performance_table td {
    min-width: 150px;
    word-break: break-all;
  }

  @media (max-width: 768px) {
    .performance_table th, .performance_table td {
      min-width: auto;
    }
  }
`;

  const [showForms, setShowForms] = useState([true]);

  const toggleForm = () => {
    if (showForms.length < 4) {
      setShowForms([...showForms, true]);
    }
  };

  const removeForm = (indexToRemove) => {
    setShowForms(showForms.filter((_, index) => index !== indexToRemove));
  };
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = tableStyles;
    document.head.appendChild(styleElement);

    // Clean up the style element when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);



  const artSubmitHandler = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");



    const {
      artEduDuration,
      artForm,
      // artName,
      performanceType,
      natureOfArt,
      // nameOfGuru,
      yearOfCompletation,
      traditionArtName,
      academicQualification,
      course,
      specialization,
      institute,
      academicQualificationDuration,
      certificateCourse,
      certificateInstitute,
      certificateDuration,
    } = artFormData;

    const { aboutArt, artCategory, artEducation, artName, artType } =
      artInfoFormData;


    let artInfo = {
      aboutArt: aboutArt,
      // artCategory: artCategory,
      artEducation: artEducation,
      artName: artName,
      // artType: artType,
      artCategory: categoryOption.map((option) => option.value),
      artEducation: artEducation,
      artName: artNameOption.map((option) => option.value),
      artType: artOption.map((option) => option.value),
    };
    artInfo.artCategory = categoryOption.map((option) => option.value);

    artInfo.artType = artOption.map((option) => option.value);
  const traditionalInfo = traditionalTable

    let professionalInfo = professionalTable;
 

    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { artInfo, professionalInfo ,  traditionalInfo },
        accessToken
      );

      // console.log("artrespone", response);

      if (response.status === "success") {
        toast.success("Successfully Updated", {
          position: "top-center",
        });
        setActiveSection("performance");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Not Updated Successfully , Please try again", {
        position: "top-center",
      });
    }

    toast.dismiss(toastId);
  };


  console.log("==>");
    console.log("Check By Chikuu",chikuData[0]?.eventName);
    console.log("==>");

  return (
    <div className="Profile_Page">
      <div
        className="ProfilePage_Navbar"
        style={{ position: "sticky", top: "0" }}
      >
        <Artist_navbar />
        <Navbar
          style={{ zIndex: "99" }}
          className="navbar nav_frontpage navbar-expand-lg "
          expand="lg"
        >
          {/* <Container> */}
          <div className="container-fluid">
            {/* <!--Art Lover : i am comment the Navbar.Toggle for remove the menu Button--> */}
            {/* <!--Art Lover : i am comment the Navbar.Toggle for remove the menu Button--> */}

            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav" style={mystyle}>
              <div className="navbar-nav" style={back}>
                <Nav className="Profile_navbarbutton">
                  <button
                    className={activeSection === "basic" ? "active" : ""}
                    onClick={() => handleClick("basic")}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5C15 6.32608 14.4732 7.59785 13.5355 8.53553C12.5979 9.47322 11.3261 10 10 10C8.67392 10 7.40215 9.47322 6.46447 8.53553C5.52678 7.59785 5 6.32608 5 5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0ZM10 20C10 20 20 20 20 17.5C20 14.5 15.125 11.25 10 11.25C4.875 11.25 0 14.5 0 17.5C0 20 10 20 10 20Z"
                        fill="black"
                      />
                    </svg>{" "}
                    Basic Profile
                  </button>
                  <button
                    className={activeSection === "art" ? "active" : ""}
                    onClick={() => handleClick("art")}
                  >
                    <img src="assets/Basic Profile/ArtProfile.svg" /> Art
                    Profile
                  </button>
                  <button
                    className={activeSection === "performance" ? "active" : ""}
                    onClick={() => handleClick("performance")}
                  >
                    <img src="assets/Basic Profile/PerformanceProfiile.svg" />{" "}
                    Performance Profile
                  </button>
                  <button
                    className={activeSection === "award" ? "active" : ""}
                    onClick={() => handleClick("award")}
                  >
                    <img src="assets/Basic Profile/AwardProfile.svg" /> Award
                    Profile
                  </button>
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

      <div className="chiku-ProfileSection">
        <div className="profile-left">
          <div className="BasicProfile_AccSet">
            <h1>Account Settings</h1>
            <button
              className={activeSection === "basic" ? "active" : ""}
              onClick={() => handleClick("basic")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5C15 6.32608 14.4732 7.59785 13.5355 8.53553C12.5979 9.47322 11.3261 10 10 10C8.67392 10 7.40215 9.47322 6.46447 8.53553C5.52678 7.59785 5 6.32608 5 5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0ZM10 20C10 20 20 20 20 17.5C20 14.5 15.125 11.25 10 11.25C4.875 11.25 0 14.5 0 17.5C0 20 10 20 10 20Z"
                  fill="black"
                />
              </svg>{" "}
              Basic Profile
            </button>
            <button
              className={activeSection === "art" ? "active" : ""}
              onClick={() => handleClick("art")}
            >
              <IoMicOutline /> Art Profile
            </button>
            <button
              className={activeSection === "performance" ? "active" : ""}
              onClick={() => handleClick("performance")}
            >
              <img src={performance} /> Performance Profile
            </button>
            <button
              className={activeSection === "award" ? "active" : ""}
              onClick={() => handleClick("award")}
            >
              <img src={star} /> Award Profile
            </button>
          </div>
          <div className="BasicProfile_avatar">
            {/* <img loading="lazy" src={(profileAvatar === undefined || profileAvatar === null) ?(`https://ui-avatars.com/api/?name=${basicFormData.firstName}+${basicFormData.lastName}`):(`https://api.ekalakaar.com/uploads/avatars/${profileAvatar}`)} /> */}
            <div
              className="profileImg"
              style={{
                background: `conic-gradient(#AD2F3B ${rotation}deg, #d9d9d9 0deg)`,
              }}
            >
              {/* <img loading="lazy" src={defaultPic} /> */}
              <img loading="lazy" src={profileAvatar} />
              <div
                className="progressBar"
                style={{
                  transform: `rotate(${rotation}deg)translate(0px , -115px)rotate(-${rotation}deg)`,
                }}
              >
                {count}%
              </div>
            </div>
            <p
              style={{ fontWeight: "500", fontSize: "30px", marginTop: "15px" }}
            >
              {" "}
              {basicFormData.firstName.toUpperCase()}{" "}
              {basicFormData.lastName.toUpperCase()}(eK ID: 12334)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle cx="25" cy="25" r="25" fill="#61C6FF" />
                <path
                  d="M14 26.7143L19.4935 32.2791C19.885 32.6757 20.5252 32.6757 20.9168 32.2791L36 17"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <b></b>
            </p>
            <button
              onClick={handleButtonClick}
              className="BasicProfile_editavatar"
            >
              Upload/Edit Profile Picture
            </button>
            {/* <button onClick={handleRemoveAvatar} className="BasicProfile_removeavatar">Remove Avatar</button> */}
          </div>
        </div>

        {/* this is for basic  */}

        <div className="profile-right">
          {activeSection === "basic" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="BasicProfile_Infoform"
            >
              <form onSubmit={basicSubmitHandler}>
                <h4>BASIC PROFILE</h4>
                {/* //PERSONAL INFORMATIONAL */}
                <div className="BasicProfile_PersonalINfo">
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="firstName">
                      First Name <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      name="firstName"
                      value={basicFormData.firstName}
                      type="text"
                      pattern="[a-zA-Z]+"
                    ></input>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="lastName">
                      Last Name <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      value={basicFormData.lastName}
                      name="lastName"
                      type="text"
                      pattern="[a-zA-Z]+"
                    ></input>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="email">
                      Email Id <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      value={basicFormData.email}
                      name="email"
                      type="email"
                      readOnly
                      style={{ backgroundColor: " rgba(0, 0, 0, 0.15);" }}
                    />
                  </div>
                  {/* <div className="BasicProfile_inputfield">
                    <label htmlFor="phoneNumber">
                      Contact Number <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      name="phoneNumber"
                      value={basicFormData.phoneNumber}
                      placeholder="+91"
                      type="tel"
                    ></input>
                  </div> */}
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="">
                      Contact Number <span className="red">*</span>
                    </label>
                    <div>
                      <select
                        onChange={changeHandler}
                        name="contactNumber.countryCode"
                        value={basicFormData?.contactNumber?.countryCode}
                        defaultValue={"+91"}
                        style={{
                          width: "21%",
                          marginRight: "4px",
                          paddingRight: "2px",
                        }}
                      >
                        {numbersArray.map((number) => (
                          <option
                            key={number}
                            value={`+${number}`}
                          >{`+${number}`}</option>
                        ))}
                      </select>
                      <input
                        name="contactNumber.number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        onChange={changeHandler}
                        value={basicFormData?.contactNumber?.number}
                        placeholder="1234567890"
                        style={{ width: "77%" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="age_basics">
                    <div
                      className="BasicProfile_inputfield"
                      // style={{ width: "30%" }}
                    >
                      <label htmlFor="age">
                        Age <span className="red">*</span>
                      </label>
                      {/* <input
                      type="number"
                      name="age"
                      onChange={changeHandler}
                      value={basicFormData.age}
                      style={{ width: "100%" }}
                    ></input> */}

                      <select
                        name="age"
                        onChange={changeHandler}
                        value={basicFormData.age}
                        style={{ width: "100%" }}
                        required
                      >
                       {Array.from({ length: 100 - 17 }, (_, index) => (
                  <option key={index} value={index + 18}>
                    {index + 18}
                  </option>
                ))}
                        <option value="100+">100+</option>
                      </select>
                    </div>

                    <div
                      className="BasicProfile_inputfield gender"
                      // style={{ width: "30%" }}
                    >
                      <label>
                        Gender <span className="red">*</span>
                      </label>
                      <div className="Genderinfo1">
                        <select
                          style={{
                            // width: "100%",
                            fontFamily: "Poppins",
                            background: "transparent",
                            color: "black",
                            height: "60px",
                          }}
                          onChange={changeHandler}
                          value={basicFormData.gender}
                          name="gender"
                        >
                          <option selected hidden>
                            Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Transgender">Transgender</option>
                          <option value="Any Other">Any Other</option>
                          <option value="Prefer not to say">
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="BasicProfile_inputfield"
                      // style={{ width: "30%" }}
                    >
                      <label>
                        Language Known <span className="red">*</span>
                      </label>
                      <Select
                        styles={{ overflowY: "auto", height: "50px" }}
                        defaultValue={languagesoptions}
                        value={languagesoptions}
                        isMulti
                        onChange={setlanguagesoptions}
                        options={languageOptions}
                      />
                    </div>
                    {languagesoptions?.find((e) => e.value === "Any Other") !==
                    undefined ? (
                      <>
                        <div className="BasicProfile_inputfield">
                          <label htmlFor="firstName">Enter Your Language</label>
                          <input
                            onChange={(e) => setAnyLanguage(e.target.value)}
                            name="firstName"
                            value={anyLanguage}
                            type="text"
                          ></input>
                          <button
                            name="Language"
                            onClick={multiSectionHandle}
                            style={{
                              background: "red",
                              marginTop: "10px",
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              border: "none",
                              fontSize: "25px",
                              color: "#fff",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    {/* <div> */}
                    <h4>ADDRESS</h4>
                    <div className="BasicProfile_Address">
                      <div className="BasicProfile_Addressshort">
                        <div className="BasicProfile_inputfield">
                          <label>
                            Pincode <span className="red">*</span>
                          </label>
                          <input
                            maxLength={6}
                            pattern="[0-9]{6}"
                            onChange={changeHandler}
                            value={basicFormData.address.pincode}
                            name="address.pincode"
                            type="number"
                            style={{ width: "100%" }}
                            required
                          ></input>
                        </div>
                        <div className="BasicProfile_inputfield">
                          <label>State</label>
                          <select
                            onChange={changeHandler}
                            name="address.state"
                            value={basicFormData.address.state}
                            style={{ width: "100%" }}
                          >
                            <option selected hidden>
                              Select State
                            </option>
                            <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                            <option value="Andaman and Nicobar Islands">
                              Andaman and Nicobar Islands
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">
                              Dadar and Nagar Haveli
                            </option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jammu and Kashmir">
                              Jammu and Kashmir
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                          </select>
                        </div>
                        <div className="BasicProfile_inputfield">
                          <label>City</label>
                          <input
                            onChange={changeHandler}
                            name="address.city"
                            value={basicFormData.address.city}
                            type="text"
                            style={{ width: "100%" }}
                          ></input>
                        </div>
                      </div>

                      {/* <div className="BasicProfile_inputfield BasicProfile_Addresslong">
                <label>Detailed Address</label>
                <textarea style={{width:"100%" , height:"150px" , resize:"none" , borderRadius:"10px" , padding:"10px"}} onChange={changeHandler} name="address.details" value={basicFormData.address.details} type="text" />
              </div> */}
                    </div>
                    {/* </div> */}
                    {/* </div> */}

                    <div className="BasicProfile_OtherDetails">
                      {/* <div className="BasicProfile_inputfield">
                <label>No of Performance Last Year</label>
                <input onChange={changeHandler} name="numOfperformanceLastYear" placeholder="Enter no of performance" value={basicFormData.numOfperformanceLastYear} type="text"></input>
              </div> */}
                      <div className="BasicProfile_inputfield">
                        <label>Highest Education Qualification </label>
                        <select
                          onChange={changeHandler}
                          name="highestEducation"
                          value={basicFormData.highestEducation}
                        >
                          <option selected hidden>
                            Select
                          </option>
                          <option value="Illterate">Illterate</option>
                          <option value="Below Class 10">Below Class 10</option>
                          <option value="10th Pass">10th Pass </option>
                          <option value="Under Graduate">Under Graduate</option>
                          <option value="Graduation">Graduation</option>
                          <option value="Post Gradute">Post Graduate</option>
                          <option value="phd">PhD </option>
                          <option value="Professional Education">
                            Professional Education{" "}
                          </option>
                          <option value="Any Other">Any Other </option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Year of Completion</label>
                        <select
                          onChange={changeHandler}
                          name="yearOfCompletion"
                          value={basicFormData.yearOfCompletion}
                        >
                          <option selected hidden>
                            Select
                          </option>
                          {years.map((item) => {
                            return <option value={item}>{item}</option>;
                          })}
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Social Category </label>
                        <select
                          onChange={changeHandler}
                          name="socialCategory"
                          value={basicFormData.socialCategory}
                        >
                          <option selected hidden>
                            Select socialCategory
                          </option>
                          <option value="General">General</option>
                          <option value="OBC">
                            OBC (Other Backward Classes)
                          </option>
                          <option value="SC">SC (Scheduled Caste)</option>
                          <option value="ST">ST (Scheduled Tribe)</option>
                          <option value="Any Other">Any Other</option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Person With Disability (PwD)</label>
                        <select
                          onChange={changeHandler}
                          name="pwd"
                          value={basicFormData.pwd}
                        >
                          <option selected hidden>
                            Select
                          </option>
                          <option value="No">No</option>
                          {disabilitiesArray.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>{" "}
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Primary Source Of Income</label>
                        <select
                          onChange={changeHandler}
                          name="incomeSrc"
                          value={basicFormData.incomeSrc}
                        >
                          <option selected hidden>
                            Select income Source
                          </option>
                          {categories.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div className="BasicProfile_inputfield">
                        <label>Annual Income from Performing Art (INR)</label>
                        <select
                          onChange={changeHandler}
                          name="anunalIncomeByPerf"
                          value={basicFormData.anunalIncomeByPerf}
                        >
                          <option selected hidden>
                            Select Income
                          </option>
                          <option value="<5000">Below Rs 5,000</option>
                          <option value="5000-10000">
                            Rs 5,000 - Rs 10,000
                          </option>
                          <option value="10000-20000">
                            Rs 10,000 - Rs 20,000
                          </option>
                          <option value="20000-50000">
                            Rs 20,000 - Rs 50,000
                          </option>
                          <option value="50000-100000">
                            Rs 50,000 - Rs 100,000
                          </option>
                          <option value="100000-250000">
                            Rs 100,000 - Rs 250,000
                          </option>
                          <option value="250000-500000">
                            Rs 250,000 - Rs 500,000
                          </option>
                          <option value=">500000">Above Rs 500,000</option>
                        </select>
                      </div>

                      <div className="BasicProfile_inputfield">
                        <label>Identity Proof</label>
                        <select
                          onChange={changeHandler}
                          name="idProof.name"
                          value={basicFormData.idProof.name}
                        >
                          {documentList.map((e) => (
                            <option value={e}>{e}</option>
                          ))}
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>ID Proof No</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.idProof.num}
                          placeholder="Enter Id Num"
                          name="idProof.num"
                          type="text"
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Pan Card</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.panNumber}
                          placeholder="Enter Pan Number"
                          name="panNumber"
                          type="text"
                        />
                      </div>

                      <div
                        className="BasicProfile_inputfield"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <label>Valid Passport</label>
                        <DatePicker
                          className="date_picker"
                          id="date"
                          name="Date"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="MM/yyyy"
                          showMonthYearPicker
                        />{" "}
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>UPI Id (Optional)</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.upiId}
                          placeholder="Enter UPI Id"
                          name="upiId"
                          type="text"
                        />
                      </div>
                      {/* <div className="BasicProfile_inputfield"> */}
                      {/* <label>Upload Profile (If Any)</label>
                        <input
                          style={{ display: "none" }}
                          onChange={changeHandler}
                          id="fileID"
                          placeholder="Enter UPI Id"
                          name="upiId"
                          type="file"
                        />
                        <div className="input">
                          <label id="upload" htmlFor="fileID">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                fill="black"
                                fill-opacity="0.54"
                              />
                            </svg>
                          </label>
                        </div> */}
                      {/* </div> */}
                      <div className="BasicProfile_inputfield">
                        <label>GST IN</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.gstIn}
                          placeholder="Enter GST IN"
                          name="gstIn"
                          type="text"
                        />
                      </div>
                      {/* <div className="BasicProfile_inputfield">
                        <label>Bank Account Number (optional)</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.bankAccountNumber}
                          placeholder="Enter Bank Account Number"
                          name="bankAccountNumber"
                          type="text"
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Name of Bank</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.bankName}
                          placeholder="Enter Bank Name"
                          name="bankName"
                          type="text"
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>IFSC Code</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.bank.ifscCode}
                          placeholder="Enter IFSC Code"
                          name="ifscCode"
                          type="text"
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Bank Branch Location</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.bankBranchLocation}
                          placeholder="Enter Bank Branch Location "
                          name="bankBranchLocation"
                          type="text"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div>
                  <h4>SOCIAL MEDIA</h4>
                  <div className="BasicProfile_Social">
                    <div className="BasicProfile_inputfield">
                      <label>Instagram</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.instagram}
                        name="handles.instagram"
                        type="text"
                      ></input>
                      <img src={Instagram} alt="Instagram" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>Facebook</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.facebook}
                        name="handles.facebook"
                        type="text"
                      ></input>
                      <img src={Facebook} alt="Facebook" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>Youtube</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.youtube}
                        name="handles.youtube"
                        type="text"
                      ></input>
                      <img src={YouTube} alt="Youtube" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>LinkedIn</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.linkedIn}
                        name="handles.linkedIn"
                        type="text"
                      ></input>
                      <img src={LinkedIn} alt="LinkedIn" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>Website</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.website}
                        name="handles.website"
                        type="text"
                      ></input>
                      <img src={Globe} alt="Globe" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>X</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.twitter}
                        name="handles.twitter"
                        type="text"
                      ></input>
                      <img src={TwitterX} alt="TwitterX" />
                    </div>
                  </div>

                  <div style={{ width: "100%", marginTop: "20px" }}>
                    <label htmlFor="about">About My Journey</label>
                    <textarea
                      name="about"
                      value={basicFormData.about}
                      onChange={changeHandler}
                      style={{
                        width: "100%",
                        border: "2px solid rgb(0,0,0,0.5)",
                        padding: "10px",
                        borderRadius: "10px",
                        resize: "none",
                        height: "166px",
                      }}
                    />
                  </div>
                </div>
                <button type="submit" className="updateBtn">
                  Update
                </button>
              </form>
            </div>
          )}

          {/* this is for art profile */}
          {activeSection === "art" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="ArtProfile_Infoform"
            >
              <form onSubmit={artSubmitHandler}>
                <h4>ART PROFILE</h4>
                <div className="ArtProfile_ArtInfo">
                  <div className="ArtProfile_inputfield">
                    <label>
                      Category of Art <span className="red">*</span>
                    </label>
                    <Select
                      defaultValue={categoryOption}
                      value={categoryOption}
                      isMulti
                      onChange={setCategoryOption}
                      options={categoryOfArt}
                    />
                  </div>

                  <div className="ArtProfile_inputfield">
                    <label>
                      Name Of Art <span className="red">*</span>
                    </label>
                    <Select
                      defaultValue={artNameOption}
                      value={artNameOption}
                      isMulti
                      onChange={setArtNameOption}
                      options={nameOfArt}
                    />
                  </div>
                  {artNameOption.find((e) => e.value === "Any Other") !==
                  undefined ? (
                    <>
                      <div className="BasicProfile_inputfield">
                        <label htmlFor="firstName"> Enter Name Of Art </label>
                        <input
                          onChange={(e) => setArtName(e.target.value)}
                          name="firstName"
                          value={artName}
                          type="text"
                        ></input>
                        <button
                          name="Art"
                          onClick={artNameHandler}
                          style={{
                            background: "red",
                            marginTop: "10px",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "none",
                            fontSize: "25px",
                            color: "#fff",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <div className="ArtProfile_inputfield">
                    <label>Type of Art</label>
                    {/* <select
                      onChange={artChangesHandler}
                      name="artType"
                      placeholder="Select name of the art "
                      value={artInfoFormData.artType[0]}
                    >
                      <option value={""} disabled>
                        Select name of the art
                      </option>
                      {artTypeData.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select> */}
                    <Select
                      defaultValue={artOption}
                      value={artOption}
                      isMulti
                      onChange={setArtOption}
                      options={typeOfArts}
                    />
                  </div>
                  {artOption.find((e) => e.value === "Any Other") !==
                  undefined ? (
                    <>
                      <div className="BasicProfile_inputfield">
                        <label htmlFor="firstName">Enter Type Of Art </label>
                        <input
                          onChange={(e) => setArtTypes(e.target.value)}
                          value={artTypes}
                          type="text"
                        ></input>
                        <button
                          name="Type"
                          onClick={multiSectionHandle}
                          style={{
                            background: "red",
                            marginTop: "10px",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "none",
                            fontSize: "25px",
                            color: "#fff",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <div className="ArtProfile_inputfield">
                    <label>Art Education</label>
                    <select
                      onChange={artChangesHandler}
                      name="artEducation"
                      placeholder="Select name of the art "
                      value={artInfoFormData.artEducation}
                    >
                      <option value={""} disabled>
                        Select performance type
                      </option>
                      {performancetype.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* <div className="ArtProfile_inputfield">
                <label>Genre</label>
                <input onChange={artChangeHandler} value={artFormData.genre} name="genre" type="text"></input>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Performance Type</label>
                <select onChange={artChangeHandler} value={artFormData.performanceType} name="performanceType">
                  <option selected hidden>
                    Select type
                  </option>
                </select>
              </div> */}
                </div>
                {artInfoFormData.artEducation === "Both" ||
                artInfoFormData.artEducation === "Traditional" ? (
                  <>
                    {/* <h4>Traditional Art Education </h4>
                    <div className="table-container">
                      <table className="performance_table">
                        <thead>
                          <tr>
                            <th> Name of Art </th>
                            <th> Name of Guru</th>
                            <th> Location (City/District)</th>
                            <th> Duration (Months)</th>
                            <th> Year of Completion </th>
                            <th>Upload Document </th>
                          </tr>
                        </thead>
                        <tbody>
                          {traditionalTable.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {Object.keys(row).map((key, colIndex) => (
                                <td key={colIndex}>
                                  {key === "documentUrl" && (
                                    <div>
                                      <input
                                        type="file"
                                        onChange={(e) => {
                                          e.preventDefault();
                                          const reader = new FileReader();
                                          reader.readAsDataURL(
                                            e.target.files[0]
                                          );
                                          reader.onload = () => {
                                            const imageData = reader.result;
                                            const newData = [
                                              ...traditionalTable,
                                            ];
                                            newData[rowIndex][key] = imageData;
                                            setTraditionalTable(newData);
                                            console.log(reader.result);
                                          };
                                          reader.onerror = (er) => {
                                            console.log(er);
                                          };
                                          console.log(row[key]);
                                        }}
                                      />
                                      {row[key] && (
                                        <object
                                          data={row[key]}
                                          type={
                                            row[key].startsWith("data:image")
                                              ? "image/png"
                                              : "application/pdf"
                                          }
                                          width="50px"
                                          height="50px"
                                        ></object>
                                      )}
                                    </div>
                                  )}
                                  {(key == "artName" || key == "guruName") && (
                                    <input
                                      type="text"
                                      // value={row[key]}
                                      // defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleTraditional(e, rowIndex, key)
                                      }
                                    />
                                  )}
                                  {key === "location" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      defaultalue={awardData.highlight}
                                      onChange={(e) =>
                                        handleTraditional(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {indian_states.map((item, index) => (
                                        <option key={index} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {key == "completionYear" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      // value={row[key]}
                                      // defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleTraditional(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {years.map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {key == "duration" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      // value={row[key]}
                                      // defaultValue={awardData.highlight}
                                      onChange={(e) => {
                                        handleTraditional(e, rowIndex, key);
                                      }}
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {months.map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div> */}



{/* sharad table code */}
<div className="award_plus_icon" onClick={toggleForm}>
<h4>Traditional Art Education  </h4>
                    <div className="add-icon mobile">+</div>
                  </div>

                  <div className="award_table desktop">
                    <table className="performance_table">
                      <thead>
                        <tr>
                            <th> Name of Art </th>
                            <th> Name of Guru</th>
                            <th> Location (City/District)</th>
                            <th> Duration (Months)</th>
                            <th> Year of Completion </th>
                            {/* <th>Upload Document </th> */}
                        </tr>
                      </thead>
                      <tbody>
                      {traditionalTable.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {Object.keys(row).map((key, colIndex) => (
                                <td key={colIndex}>
                                  {/* {key === "documentUrl" && (
                                    <div>
                                      <input
                                        type="file"
                                        onChange={(e) => {
                                          e.preventDefault();
                                          const reader = new FileReader();
                                          reader.readAsDataURL(
                                            e.target.files[0]
                                          );
                                          reader.onload = () => {
                                            const imageData = reader.result;
                                            const newData = [
                                              ...traditionalTable,
                                            ];
                                            newData[rowIndex][key] = imageData;
                                            setTraditionalTable(newData);
                                            console.log(reader.result);
                                          };
                                          reader.onerror = (er) => {
                                            console.log(er);
                                          };
                                          console.log(row[key]);
                                        }}
                                      />
                                      {row[key] && (
                                        <object
                                          data={row[key]}
                                          type={
                                            row[key].startsWith("data:image")
                                              ? "image/png"
                                              : "application/pdf"
                                          }
                                          width="50px"
                                          height="50px"
                                        ></object>
                                      )}
                                    </div>
                                  )} */}
                                  {(key === "artName" || key === "guruName") && (
                                    <input
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleTraditional(e, rowIndex, key)
                                      }
                                    />
                                  )}
                                  {key === "location" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      onChange={(e) =>
                                        handleTraditional(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {indian_states.map((item, index) => (
                                        <option key={index} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {key === "completionYear" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      defaultValue={chiku[rowIndex]?.completionYear}

                                      type="text"
                                      onChange={(e) =>
                                        handleTraditional(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {years.map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {key === "duration" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                    defaultValue={chiku[rowIndex]?.duration}

                                      onChange={(e) => {
                                        handleTraditional(e, rowIndex, key);
                                      }}
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {months.map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {showForms.map((showForm, index) => (
                    <div
                      key={index}
                      className={`award_form mobile ${
                        showForm ? "show" : "hide"
                      }`}
                    >
                    {/*sharad mobile table */}
                      <div className="BasicProfile_inputfield">
                        <label htmlFor="Name of The Award">
                        Name of Course
                        </label>
                        <input type="text" pattern="[a-zA-Z]+" />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label htmlFor="Awarding Body">Specialisation</label>
                        <input type="text" pattern="[a-zA-Z]+" />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Name of Institute</label>
                        <input type="text" pattern="[a-zA-Z]+" />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Duration (Months)</label>
                        <select name="location">
                          <option selected hidden>
                            Select
                          </option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Year of Completion </label>
                        <select name="year">
                          <option selected hidden>
                            Select
                          </option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Upload Document</label>
                        <input
                          style={{ display: "none" }}
                          onChange={() => {}}
                          id="fileID"
                          placeholder="Enter UPI Id"
                          name="upiId"
                          type="file"
                        />
                        <div className="input">
                          <label id="upload" htmlFor="fileID">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                fill="black"
                                fillOpacity="0.54"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      {showForms.length > 1 && (
                        <div className="another_mobile_div">
                          Traditional Art Education Another input
                          <div
                            className="remove-icon mobile"
                            onClick={() => removeForm(index)}
                          >
                            -
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                
                  </>
                ) : (
                  ""
                )}

                <div className="ArtProfile_Traditional">
                  {artInfoFormData.artEducation === "Both" ||
                  artInfoFormData.artEducation === "Professional" ? (
                    <>
                      {/* <h4>Professional Art Education </h4>
                      <div className="table-container">
                        <table className="performance_table">
                          <thead>
                            <tr>
                              <th> Name of Course</th>
                              <th> Specialisation</th>
                              <th> Name of Institute</th>
                              <th> Duration (Months)</th>
                              <th> Year of Completion </th>
                              <th>Upload Document </th>
                            </tr>
                          </thead>
                          <tbody>
                            {professionalTable.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {Object.keys(row).map((key, colIndex) => (
                                  <td key={colIndex}>
                                    {key == "documentUrl" && (
                                      <div>
                                        <input
                                          type="file"
                                          onChange={(e) => {
                                            e.preventDefault();
                                            const reader = new FileReader();
                                            reader.readAsDataURL(
                                              e.target.files[0]
                                            );
                                            reader.onload = () => {
                                              const imageData = reader.result;
                                              const newData = [
                                                ...professionalTable,
                                              ];
                                              newData[rowIndex][key] =
                                                imageData;
                                              setProfessionalTable(newData);
                                            };
                                            reader.onerror = (er) => {
                                              console.log(er);
                                            };
                                            console.log(row[key]);
                                          }}
                                        />
                                        {row[key] && (
                                          <object
                                            data={row[key]}
                                            type={
                                              row[key].startsWith("data:image")
                                                ? "image/png"
                                                : "application/pdf"
                                            }
                                            width="50px"
                                            height="50px"
                                          ></object>
                                        )}
                                      </div>
                                    )}
                                    {(key == "course" ||
                                      key == "institute" ||
                                      key == "specialization") && (
                                      <input
                                        type="text"
                                        // value={row[key]}
                                        // defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleArtProfileChanges(
                                            e,
                                            rowIndex,
                                            key
                                          )
                                        }
                                      />
                                    )}

                                    {key == "completionYear" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        // value={row[key]}
                                        // defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleArtProfileChanges(
                                            e,
                                            rowIndex,
                                            key
                                          )
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {years.map((item) => (
                                          <option key={item} value={item}>
                                            {item}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                    {key == "duration" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        // value={row[key]}
                                        // defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleArtProfileChanges(
                                            e,
                                            rowIndex,
                                            key
                                          )
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {months.map((item) => (
                                          <option key={item} value={item}>
                                            {item}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div> */}


{/* sharad table code */}
<div className="award_plus_icon" onClick={toggleForm}>
<h4>Professional Art Education </h4>
                    <div className="add-icon mobile">+</div>
                  </div>
                  <div className="award_table desktop">
                    <table className="performance_table">
                      <thead>
                        <tr>
                        <th> Name of Course</th>
                              <th> Specialisation</th>
                              <th> Name of Institute</th>
                              <th> Duration (Months)</th>
                              <th> Year of Completion </th>
                              {/* <th>Upload Document </th> */}
                        </tr>
                      </thead>
                      <tbody>
                      {professionalTable.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {Object.keys(row).map((key, colIndex) => (
                                  <td key={colIndex}>
                                    {/* {key == "documentUrl" && (
                                      <div>
                                        <input
                                          type="file"
                                          onChange={(e) => {
                                            e.preventDefault();
                                            const reader = new FileReader();
                                            reader.readAsDataURL(
                                              e.target.files[0]
                                            );
                                            reader.onload = () => {
                                              const imageData = reader.result;
                                              const newData = [
                                                ...professionalTable,
                                              ];
                                              newData[rowIndex][key] =
                                                imageData;
                                              setProfessionalTable(newData);
                                            };
                                            reader.onerror = (er) => {
                                              console.log(er);
                                            };
                                            console.log(row[key]);
                                          }}
                                        />
                                        {row[key] && (
                                          <object
                                            data={row[key]}
                                            type={
                                              row[key].startsWith("data:image")
                                                ? "image/png"
                                                : "application/pdf"
                                            }
                                            width="50px"
                                            height="50px"
                                          ></object>
                                        )}
                                      </div>
                                    )} */}
                                    {(key == "course" ||
                                      key == "institute" ||
                                      key == "specialization") && (
                                      <input
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleArtProfileChanges(
                                            e,
                                            rowIndex,
                                            key
                                          )
                                        }
                                      />
                                    )}

                                    {key == "completionYear" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleArtProfileChanges(
                                            e,
                                            rowIndex,
                                            key
                                          )
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {years.map((item) => (
                                          <option key={item} value={item}>
                                            {item}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                    {key == "duration" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleArtProfileChanges(
                                            e,
                                            rowIndex,
                                            key
                                          )
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {months.map((item) => (
                                          <option key={item} value={item}>
                                            {item}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
                  {showForms.map((showForm, index) => (
                    <div
                      key={index}
                      className={`award_form mobile ${
                        showForm ? "show" : "hide"
                      }`}
                    >
                    {/*sharad mobile table */}
                      <div className="BasicProfile_inputfield">
                        <label htmlFor="Name of The Award">
                        Name of Art
                        </label>
                        <input type="text" pattern="[a-zA-Z]+" />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label htmlFor="Awarding Body">Name of Guru</label>
                        <input type="text" pattern="[a-zA-Z]+" />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Location (City/District)</label>
                        <select name="level">
                          <option selected hidden>
                            Select
                          </option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Duration (Months)</label>
                        <select name="location">
                          <option selected hidden>
                            Select
                          </option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Year of Completion </label>
                        <select name="year">
                          <option selected hidden>
                            Select
                          </option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Upload Document</label>
                        <input
                          style={{ display: "none" }}
                          onChange={() => {}}
                          id="fileID"
                          placeholder="Enter UPI Id"
                          name="upiId"
                          type="file"
                        />
                        <div className="input">
                          <label id="upload" htmlFor="fileID">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                fill="black"
                                fillOpacity="0.54"
                              />
                            </svg>
                          </label>
                        </div>
                      </div>
                      {showForms.length > 1 && (
                        <div className="another_mobile_div">
                          Professional Art Education Another input
                          <div
                            className="remove-icon mobile"
                            onClick={() => removeForm(index)}
                          >
                            -
                          </div>
                        </div>
                      )}
                    </div>
                  ))}


                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ width: "100%", marginTop: "20px" }}>
                  <label htmlFor="aboutArt">About The Art</label>
                  <textarea
                    name="aboutArt"
                    onChange={artChangesHandler}
                    value={artInfoFormData.aboutArt}
                    style={{
                      width: "100%",
                      border: "2px solid rgb(0,0,0,0.5)",
                      padding: "10px",
                      borderRadius: "10px",
                      resize: "none",
                      height: "166px",
                    }}
                  />
                </div>

                {artProfile.professional.map((professional, index) => (
                  <React.Fragment key={index}>
                    <h4>Professional Art Education +</h4>

                    {index === artProfile.professional.length - 1 ? (
                      // last index => add plus button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Guru</label>
                            <input
                              value={professional.NameOfGuru}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Location</label>
                            <input
                              value={professional.Location}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Location",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={professional.Duration}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Art
                              </option>
                              <option>1</option>
                            </select>
                          </div>
                          {/* <div className="AwardProfile_inputfield">
                        <label>Name of the Stage</label>
                        <input value={award.stage} onChange={(e) => handleInputChange(index, "stage", e.target.value)} type="text"></input>
                      </div> */}
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={professional.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              value={professional.Document}
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Add More Awards Details</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={addProfessional}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                              <text
                                x="50%"
                                y="50%"
                                text-anchor="middle"
                                fill="white"
                                font-size="24px"
                                font-family="Arial"
                                dy=".3em"
                              >
                                +
                              </text>
                            </svg>
                          </button>
                        </div>
                      </>
                    ) : (
                      // not last index => add - button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Guru</label>
                            <input
                              value={professional.NameOfGuru}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Location</label>
                            <input
                              value={professional.Location}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Location",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={professional.Duration}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={professional.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              value={professional.Document}
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Remove</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={removeLastProfessional}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                              <text
                                x="50%"
                                y="50%"
                                text-anchor="middle"
                                fill="white"
                                font-size="24px"
                                font-family="Arial"
                                dy=".3em"
                              >
                                -
                              </text>
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                ))}

                {
                  //comment
                }
                {awardFormData.awards.map((award, index) => (
                  <React.Fragment key={index}>
                    <h4>Traditional Art Education +</h4>

                    {index === awardFormData.awards.length - 1 ? (
                      // last index => add plus button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Course</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Specialisation </label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>
                          {/* <div className="AwardProfile_inputfield">
                        <label>Name of the Stage</label>
                        <input value={award.stage} onChange={(e) => handleInputChange(index, "stage", e.target.value)} type="text"></input>
                      </div> */}
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Add More Awards Details</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={addProfessional}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                              <text
                                x="50%"
                                y="50%"
                                text-anchor="middle"
                                fill="white"
                                font-size="24px"
                                font-family="Arial"
                                dy=".3em"
                              >
                                +
                              </text>
                            </svg>
                          </button>
                        </div>
                      </>
                    ) : (
                      // not last index => add - button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Course</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Specialisation</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Remove</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={removeLastProfessional}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                              <text
                                x="50%"
                                y="50%"
                                text-anchor="middle"
                                fill="white"
                                font-size="24px"
                                font-family="Arial"
                                dy=".3em"
                              >
                                -
                              </text>
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                ))}

                <button type="submit" className="updateBtn">
                  Update
                </button>
              </form>
            </div>
          )}

          {/* this is for performance */}
          {activeSection === "performance" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="PerformanceProfile_Infoform"
            >
              <form onSubmit={perforSubmitHandler}>
                <h4>PERFORMANCE PROFILE</h4>

                <div className="PerformanceProfile_PerformInfo">
                  {/* <div className="PerformanceProfile_inputfield">
                <label>Performance Type</label>
                <select name="performanceType" onChange={perforChangeHandler} value={performanceFormData?.performanceType} >
                  <option  disabled value={""} >
                    Select Type
                  </option>
                  {performancetype.map((option , index) => (
          <option key={index}  value={option}>
            {option}
          </option>
        ))}
                </select>
              </div> */}
                  <div className="BasicProfile_inputfield">
                    <label>Affiliated To Any Group/Organization</label>
                    <select
                      onChange={perforChangeHandler}
                      name={"affiliatedToAnyGroup"}
                      value={performanceFormData.affiliatedToAnyGroup}
                    >
                      <option selected>Select</option>

                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>

                  {(performanceFormData?.affiliatedToAnyGroup == "true" ||
                    performanceFormData?.affiliatedToAnyGroup == true) && (
                    <>
                      <div className="BasicProfile_inputfield">
                        <label>Name Of Artist Group/Organisation </label>
                        <input
                          onChange={(e) =>
                            setPerformanceFormData({
                              ...performanceFormData,
                              nameOfArtistGroupOrg: e.target.value,
                            })
                          }
                          name="nameOfArtistGroupOrg"
                          value={performanceFormData.nameOfArtistGroupOrg}
                        ></input>
                      </div>

                      <div className="BasicProfile_inputfield">
                        <label>Location of Group/Organization</label>
                        <select
                          onChange={perforChangeHandler}
                          name="locationOfGroupOrg"
                          value={performanceFormData.locationOfGroupOrg}
                        >
                          <option selected>Select</option>
                          {MajorIndianCities.map((i, index) => {
                            return (
                              <option key={index} value={i.city}>
                                {i}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label htmlFor="">
                          Contact Number <span className="red">*</span>
                        </label>
                        <div style={{ display: "flex" }}>
                          <select
                            onChange={(e) => {
                              setPerformanceFormData((prev) => {
                                return {
                                  ...prev,
                                  countryCode: e.target.value,
                                };
                              });
                            }}
                            name="countryCode"
                            value={performanceFormData?.countryCode}
                            defaultValue={"+91"}
                            style={{
                              width: "25%",
                              marginRight: "4px",
                              paddingRight: "2px",
                            }}
                          >
                            {numbersArray.map((number) => (
                              <option
                                key={number}
                                value={`+${number}`}
                              >{`+${number}`}</option>
                            ))}
                          </select>
                          <input
                            name="contactNumber"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            onChange={(e) => {
                              setPerformanceFormData((prev) => {
                                return {
                                  ...prev,
                                  contactNumber: e.target.value,
                                };
                              });
                            }}
                            value={performanceFormData?.contactNumber}
                            placeholder="1234567890"
                            style={{ width: "83%" }}
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="BasicProfile_inputfield">
                    <label>Name of Arts</label>
                    <select
                      onChange={performanceInfohandler}
                      name="nameOfArts"
                      value={perfInfoData.nameOfArts}
                    >
                      <option selected>Select</option>
                      {perfArtName.map((item, index) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Total no. of Artist</label>
                    <select
                      onChange={performanceInfohandler}
                      name="totalNoOfArtists"
                      value={perfInfoData?.totalNoOfArtists}
                    >
                      <option selected>Select</option>
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20,
                      ].map((item) => {
                        return (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Type of Performance</label>
                    <select
                      onChange={perforChangeHandler}
                      name="typeOfPerformance"
                      value={performanceFormData.typeOfPerformance}
                    >
                      <option selected>Select</option>
                      <option value="solo">Solo</option>
                      <option value="group">Group</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Highest Level of Performance</label>
                    <select
                      onChange={perforChangeHandler}
                      name="highestLevelOfPerformance"
                      value={performanceFormData.highestLevelOfPerformance}
                    >
                      <option selected>Select</option>
                      <option value="International">International</option>
                      <option value="National">National</option>
                      <option value="State">State</option>
                      <option value="District">District</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>
                      Total Number of Performance <span className="red">*</span>
                    </label>
                    <select
                      onChange={perforChangeHandler}
                      name="totalPerfs"
                      value={performanceFormData.totalPerfs}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      {[...Array(251).keys()].map((item, index) => {
                        if (item === 250) {
                          return (
                            <option key={item} value="250+">
                              250+
                            </option>
                          );
                        }
                        return (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>
                      No. of Years Of Experience <span className="red">*</span>{" "}
                    </label>
                    <select
                      onChange={perforChangeHandler}
                      name="experience"
                      value={performanceFormData.experience}
                    >
                      <option disabled>Select</option>
                      {[...Array(100).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                      <option value="100+">100+</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Average Duration of Performance (India)</label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfDurationIn"
                      value={performanceFormData.avgPerfDurationIn}
                    >
                      <option selected>Select</option>
                      <option value="<10min">&lt; 10 Minutes</option>
                      <option value="10min">10 Minutes</option>
                      <option value="10-30min">10-30 Minutes</option>
                      <option value="30-60min">30-60 Minutes</option>
                      <option value="60-120min">60-120 Minutes</option>
                      <option value=">120min">&gt; 120 Minutes</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Average Fee Per Performance (India) </label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfFeeIn"
                      value={performanceFormData.avgPerfFeeIn}
                    >
                      <option selected>Select</option>
                      <option value="<5000">&lt; Rs 5000</option>
                      <option value="5000-10000">Rs 5000 - Rs 10000</option>
                      <option value="10000-20000">Rs 10000 - Rs 20000</option>
                      <option value="20000-50000">Rs 20000 - Rs 50000</option>
                      <option value="50000-100000">Rs 50000 - Rs 100000</option>
                      <option value=">100000">&gt; Rs 100000</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>
                      Average Duration of Performance (International)
                    </label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfDurationInternational"
                      value={performanceFormData.avgPerfDurationInternational}
                    >
                      <option selected>Select</option>
                      <option value="<30min">&lt; 30 Minutes</option>
                      <option value="30-60min">30-60 Minutes</option>
                      <option value="60-120min">60-120 Minutes</option>
                      <option value=">120min">&gt; 120 Minutes</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Average Fee Per Performance (International)</label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfFeeInternational"
                      value={performanceFormData.avgPerfFeeInternational}
                    >
                      <option selected>Select</option>
                      <option value="<25000">&lt; Rs 25000</option>
                      <option value="25000-50000">Rs 25000 - Rs 50000</option>
                      <option value="50000-100000">Rs 50000 - Rs 100000</option>
                      <option value="100000-250000">
                        Rs 100000 - Rs 250000
                      </option>
                      <option value=">250000">&gt; Rs 250000</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Major Performance Cities (India)</label>
                    <Select
                      defaultValue={cities}
                      value={cities}
                      isMulti
                      onChange={setCities}
                      options={majorCities}
                    />
                    {/* <select
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>
                      Major Countries for Performance (International)
                    </label>
                    <Select
                      defaultValue={contry}
                      value={contry}
                      isMulti
                      onChange={setContry}
                      options={majorContry}
                    />
                    {/* <select
                      onChange={perforChangeHandler}
                      name="majorPerfCountryInternational"
                      value={performanceFormData.majorPerfCountryInternational}
                    >
                      <option selected>Select</option>
                      {MajorInternationalCities.map((i, index) => {
                        return (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        );
                      })}
                    </select> */}
                  </div>
                  {/* <div className="ArtProfile_Traditional">
                    <label style={{ display: "block", marginTop: "40px" }}>
                      Major Performances/ Events (Max. 5)
                    </label>

               
                    <table className="performance_table">
                      <thead>
                        <tr>
                          <th>Name of Event</th>
                          <th>Duration (Month)</th>
                          <th>Level</th>
                          <th>Location</th>
                          <th>
                            Partner/ <br /> Organizer
                          </th>
                          <th>Media Links</th>
                        </tr>
                      </thead>
                     <tbody>


                        {tableData.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {Object.keys(row).map((key, colIndex) => (
                              <td key={colIndex}>
                                {(key === "collaborator" ||
                                  key === "eventName") && (
                                  <input
                                    type="text"
                                    value={row[key]}
                                    defaultValue={awardData.highlights}
                                    onChange={(e) =>
                                      handlePerformanceTableChange(
                                        e,
                                        rowIndex,
                                        key
                                      )
                                    }
                                  />
                                )}
                                {key === "link" && (
                                  <div>
                                    <input
                                      type="file"
                                      onChange={(e) =>
                                        handlePerformanceTableChange(
                                          e,
                                          rowIndex,
                                          key
                                        )
                                      }
                                    />

                                    {row[key] && (
                                      <img src={row[key]} alt="File Preview" />
                                    )}
                                  </div>
                                )}

                                {key === "level" && (
                                  <select
                                    style={{
                                      maxWidth: "150px",
                                      border: "none",
                                      padding: 0,
                                    }}
                                    type="text"
                                    value={row[key]}
                                    defaultValue={awardData?.level}
                                    onChange={(e) =>
                                      handlePerformanceTableChange(
                                        e,
                                        rowIndex,
                                        key
                                      )
                                    }
                                  >
                                    <option selected hidden>
                                      Select
                                    </option>
                                    {[
                                      "International",
                                      "National",
                                      "State",
                                      "District",
                                      "Local",
                                    ].map((item) => (
                                      <option key={item} value={item}>
                                        {item}
                                      </option>
                                    ))}
                                  </select>
                                )}
                                {key === "duration" && (
                                  <select
                                    style={{
                                      maxWidth: "150px",
                                      border: "none",
                                      padding: 0,
                                    }}
                                    type="text"
                                    value={row[key]}
                                    defaultValue={awardData.highlights}
                                    onChange={(e) =>
                                      handleTraditional(e, rowIndex, key)
                                    }
                                  >
                                    <option selected hidden>
                                      Select
                                    </option>
                                    {months.map((item) => (
                                      <option key={item} value={item}>
                                        {item}
                                      </option>
                                    ))}
                                  </select>
                                )}
                                {key === "location" && (
                                  <select
                                    style={{
                                      maxWidth: "150px",
                                      border: "none",
                                      padding: 0,
                                    }}
                                    type="text"
                                    value={row[key]}
                                    defaultValue={awardData.highlights}
                                    onChange={(e) =>
                                      handlePerformanceTableChange(
                                        e,
                                        rowIndex,
                                        key
                                      )
                                    }
                                  >
                                    <option selected hidden>
                                      Select
                                    </option>
                                    {indian_states.map((item, index) => (
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    ))}
                                  </select>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div> */}
                  <div>
                    <div className="award_plus_icon" onClick={toggleForm}>
                      <h4> Major Performances/ Events (Max. 5)</h4>
                      <div className="add-icon mobile">+</div>
                    </div>
                    <div className="award_table desktop">
                      <table className="performance_table">
                        <thead>
                          <tr>
                            <th>Name of Event</th>
                            <th>
                              Duration <br />
                              (Month)
                            </th>
                            <th>Level</th>
                            <th>Location</th>
                            <th>
                              Partner/ <br /> Organizer
                            </th>
                            {/* <th>Media Links</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {Object.keys(row).map((key, colIndex) => (
                                <td key={colIndex}>
                                  {(key == "collaborator" ||
                                    key == "eventName") && (
                                    <input
                                      type="text"
                                      value={row[key]}
                                      defaultValue={chikuData[key]?.eventName}
                                      onChange={(e) =>
                                        handlePerformanceTableChange(
                                          e,
                                          rowIndex,
                                          key
                                        )
                                      }
                                    />
                                  )}
                                  {/* {key === "link" && (
                                    <div>
                                      <input
                                        type="file"
                                        onChange={(e) =>
                                          handlePerformanceTableChange(
                                            e,
                                            rowIndex,
                                            key
                                          )
                                        }
                                      />

                                      {row[key] && (
                                        <img
                                          src={row[key]}
                                          alt="File Preview"
                                        />
                                      )}
                                    </div>
                                  )} */}

                                  {key == "level" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      // defaultValue={awardData.highlight}
                                      defaultValue={chikuData?.level}

                                      onChange={(e) =>
                                        handlePerformanceTableChange(
                                          e,
                                          rowIndex,
                                          key
                                        )
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {[
                                        "International",
                                        "National",
                                        "State",
                                        "District",
                                        "Local",
                                      ].map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {key == "duration" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleTraditional(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {months.map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {key == "location" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handlePerformanceTableChange(
                                          e,
                                          rowIndex,
                                          key
                                        )
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {indian_states.map((item, index) => (
                                        <option key={index} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {showForms.map((showForm, index) => (
                      <div
                        key={index}
                        className={`award_form mobile ${
                          showForm ? "show" : "hide"
                        }`}
                      >
                      {/*sharad mobile table */}
                        <div className="BasicProfile_inputfield">
                          <label htmlFor="Name of The Award">
                            Name of The Event
                          </label>
                          <input type="text" pattern="[a-zA-Z]+" />
                        </div>
                        <div className="BasicProfile_inputfield">
                          <label htmlFor="Awarding Body">
                            Duration (Month)
                          </label>
                          <select name="Duration">
                            <option selected hidden>
                              Select
                            </option>
                          </select>
                        </div>
                        <div className="BasicProfile_inputfield">
                          <label>Level</label>
                          <select name="level">
                            <option selected hidden>
                              Select
                            </option>
                          </select>
                        </div>
                        <div className="BasicProfile_inputfield">
                          <label>Location</label>
                          <select name="location">
                            <option selected hidden>
                              Select
                            </option>
                          </select>
                        </div>
                        <div className="BasicProfile_inputfield">
                          <label>Year</label>
                          <select name="year">
                            <option selected hidden>
                              Select
                            </option>
                          </select>
                        </div>
                        <div className="BasicProfile_inputfield">
                          <label>Media Links</label>
                          <input
                            style={{ display: "none" }}
                            onChange={() => {}}
                            id="fileID"
                            placeholder="Enter UPI Id"
                            name="upiId"
                            type="file"
                          />
                          <div className="input">
                            <label id="upload" htmlFor="fileID">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                  fill="black"
                                  fillOpacity="0.54"
                                />
                              </svg>
                            </label>
                          </div>
                        </div>
                        {showForms.length > 1 && (
                          <div className="another_mobile_div">
                            Major Performances Another input
                            <div
                              className="remove-icon mobile"
                              onClick={() => removeForm(index)}
                            >
                              -
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="images">
                    <div
                      className="BasicProfile_inputfield "
                      style={{ position: "relative" }}
                    >
                      <label
                        htmlFor="performanceImages"
                        className="custom-file-input"
                      >
                        Performance Photograph (Max 6)
                      </label>

                      <input
                        className="performance_profile"
                        style={{ color: "white", background: "none" }}
                        onChange={handelMultipleImages}
                        type="file"
                        accept="image/*"
                        multiple
                        name="performanceImages"
                      />

                      <svg
                        className="possso"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="14"
                        viewBox="0 0 448 512"
                      >
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                      </svg>
                      <p style={{ fontSize: "10px", color: "red" }}>
                        Each Image should be less than 1mb
                      </p>
                    </div>
                    <div className="thumbnail-cc">
                      {performanceFormData?.performanceImages?.map((item) => {
                        return <img src={item} className="thumbnail-cc-img" />;
                      })}
                    </div>
                  </div>
                  <div className="BasicProfile_inputfield iiooo">
                    <label htmlFor="perfVideo">Performance Video(Max. 1)</label>
                    <input
                      value={perfVideo[0]}
                      onChange={(e) =>
                        handleInputChangeVideo(0, e.target.value)
                      }
                      id="perfVideo"
                      placeholder="Enter Video links"
                      name="perfVideo"
                      type="url"
                      className="perfino"
                    />
                  </div>

                  <div className="BasicProfile_inputfield iiooo">
                    <label htmlFor="perfVideo">Performance Video(Max. 2)</label>
                    <input
                      value={perfVideo[1]}
                      onChange={(e) =>
                        handleInputChangeVideo(1, e.target.value)
                      }
                      id="perfVideo"
                      placeholder="Enter Video links"
                      name="perfVideo"
                      type="url"
                      className="perfino"
                    />
                  </div>

                  <div className="BasicProfile_inputfield iiooo">
                    <label htmlFor="perfVideo">Performance Video(Max. 3)</label>
                    <input
                      value={perfVideo[2]}
                      onChange={(e) =>
                        handleInputChangeVideo(2, e.target.value)
                      }
                      id="perfVideo"
                      placeholder="Enter Video links"
                      name="perfVideo"
                      type="url"
                      className="perfino"
                    />
                  </div>
                  {/* <div className="PerformanceProfile_inputfield">
                <label>Income for Performing Art*</label>
                <select value={performanceFormData.averagePerformanceIncome} onChange={perforChangeHandler} name="averagePerformanceIncome">
                  <option selected >
                    Select average income
                  </option>
                  {ChargesPerPerformance.map((option) => (
          <option  value={option}>
            {option}
          </option>
        ))}
                </select>
              </div> */}

                  <div style={{ width: "100%", marginTop: "20px" }}>
                    <label htmlFor="aboutJourney">
                      Highlights of your performance
                    </label>
                    <textarea
                      name="aboutJourney"
                      value={performanceFormData.aboutJourney}
                      onChange={(e) =>
                        setPerformanceFormData({
                          ...performanceFormData,
                          aboutJourney: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        border: "2px solid rgb(0,0,0,0.5)",
                        padding: "10px",
                        borderRadius: "10px",
                        resize: "none",
                        height: "166px",
                      }}
                    />
                  </div>
                </div>
                <h4>Current Production - Performances</h4>
                <div className="PerformanceProfile_PerformInfo">
                  <div className="BasicProfile_inputfield">
                    <label>Existing Production</label>
                    <select
                      onChange={performanceInfohandler}
                      name={"existingProductions"}
                      value={perfInfoData?.existingProductions}
                    >
                      <option selected>Select</option>

                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {(perfInfoData?.existingProductions == "true" ||
                    perfInfoData?.existingProductions == true) && (
                    <>
                      <div className="BasicProfile_inputfield">
                        <label>Name of Existing Production</label>
                        <input
                          onChange={performanceInfohandler}
                          name={"nameOfProductions"}
                          value={perfInfoData.nameOfProductions}
                          type="text"
                        ></input>
                      </div>
                      <div style={{ width: "100%", marginTop: "20px" }}>
                        <label htmlFor="briefOfPerformance">
                          Brief Of Your Performance
                        </label>
                        <textarea
                          name="briefOfPerformance"
                          value={perfInfoData?.briefOfPerformance}
                          onChange={(e) =>
                            setPerfInfoData((prev) => ({
                              ...prev,
                              briefOfPerformance: e.target.value,
                            }))
                          }
                          style={{
                            width: "100%",
                            border: "2px solid rgb(0,0,0,0.5)",
                            padding: "10px",
                            borderRadius: "10px",
                            resize: "none",
                            height: "80px",
                          }}
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Approx Budget</label>
                        <input
                          onChange={performanceInfohandler}
                          name={"approxBudget"}
                          value={perfInfoData.approxBudget}
                          type="number"
                        ></input>
                      </div>
                      {/* <div className="BasicProfile_inputfield">
                        <label>Upload Sample</label>
                        <input
                          onChange={performanceInfohandler}
                          name={"sample"}
                          value={perfInfoData.samples}
                          type="file"
                        ></input>
                      </div> */}
                      <div className="BasicProfile_inputfield">
                        <label>Upload Sample</label>
                        <input
                          onChange={(e) => handleSampleFileUpload(e)}
                          name="sample"
                          type="file"
                        />
                        {/* Display the uploaded file */}
                        {/* {perfInfoData.samples && (
                          <img src={perfInfoData.samples} alt="Sample Preview" />
                        )} */}
                        {perfInfoData.samples && (
                          <a
                            href={perfInfoData.samples}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Sample
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <button className="updateBtn">Update</button>
              </form>
            </div>
          )}

          {/* this is for award  */}
          {activeSection === "award" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="AwardProfile_Infoform"
            >
              <form onSubmit={awardSubmitHandler}>
                <h4>AWARD PROFILE</h4>
                <div className="AwardProfile_AwardInfo">
                  <div className="BasicProfile_inputfield">
                    <label>Total Number of Awards</label>
                    <select
                      onChange={awardHandle}
                      name="totalAwards"
                      value={awardData.totalAwards}
                    >
                      <option value="" hidden>
                        Total Number of Awards
                      </option>
                      {[...Array(199).keys()].map((item) => {
                        const value = item + 1; // Adding 1 to start from 1 instead of 0
                        return (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        );
                      })}
                      <option value="200">200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Highest Level of Awards </label>
                    <select
                      onChange={awardHandle}
                      name="level"
                      value={awardData.level}
                    >
                      <option selected hidden>
                        Highest Level of Awards
                      </option>
                      <option value="International">International</option>
                      <option value="National">National</option>
                      <option value="State">State</option>
                      <option value="District">District</option>
                      <option value="Taluka">Taluka</option>
                      <option value="Local">Local</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  {/* 
                  
                  <div className="PerformanceProfile_Traditional">
                  <div className="table-container">
                    <div className="award_table">
                      <table>
                        <thead>
                          <tr>
                            <th> Name of The Award </th>
                            <th> Awarding Body</th>
                            <th> Level </th>
                            <th> Location</th>
                            <th> Year </th>
                            <th>Upload Document </th>
                          </tr>
                        </thead>
                        <tbody>
                          {awardsTable.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {Object.keys(row).map((key, colIndex) => {
                                return (
                                  <td key={colIndex}>
                                    {key == "level" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleAwardTable(e, rowIndex, key)
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {[
                                          "International",
                                          "National",
                                          "State",
                                          "District",
                                          "Local",
                                        ].map((item) => (
                                          <option key={item} value={item}>
                                            {item}
                                          </option>
                                        ))}
                                      </select>
                                    )}

                                    {(key == "awardingBody" ||
                                      key == "title") && (
                                      <input
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleAwardTable(e, rowIndex, key)
                                        }
                                      />
                                    )}

                                    {key === "documentUrl" && (
                                      <div>
                                        <input
                                          type="file"
                                          onChange={(e) => {
                                            e.preventDefault();
                                            const reader = new FileReader();
                                            reader.readAsDataURL(
                                              e.target.files[0]
                                            );
                                            reader.onload = () => {
                                              const imageData = reader.result;
                                              const newData = [...awardsTable];
                                              newData[rowIndex][key] =
                                                imageData;
                                              setAwardTable(newData);
                                            };
                                            reader.onerror = (er) => {
                                              console.log(er);
                                            };
                                            console.log(row[key]);
                                          }}
                                        />
                                        {row[key] && (
                                          <object
                                            data={row[key]}
                                            type={
                                              row[key].startsWith("data:image")
                                                ? "image/png"
                                                : "application/pdf"
                                            }
                                            width="50px"
                                            height="50px"
                                          ></object>
                                        )}
                                      </div>
                                    )}
                                    {key == "location" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleAwardTable(e, rowIndex, key)
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {row.level == "International"
                                          ? MajorInternationalCities.map(
                                              (item, index) => (
                                                <option
                                                  key={index}
                                                  value={item}
                                                >
                                                  {item}
                                                </option>
                                              )
                                            )
                                          : indian_states.map((item, index) => (
                                              <option key={index} value={item}>
                                                {item}
                                              </option>
                                            ))}
                                      </select>
                                    )}
                                    {key == "year" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleAwardTable(e, rowIndex, key)
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {completionYearData.map((item) => (
                                          <option key={item} value={item}>
                                            {item}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                    {key == "duration" && (
                                      <select
                                        style={{
                                          maxWidth: "150px",
                                          border: "none",
                                          padding: 0,
                                        }}
                                        type="text"
                                        value={row[key]}
                                        defaultValue={awardData.highlight}
                                        onChange={(e) =>
                                          handleAwardTable(e, rowIndex, key)
                                        }
                                      >
                                        <option selected hidden>
                                          Select
                                        </option>
                                        {[
                                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                        ].map((item) => (
                                          <option key={item} value={item}>
                                            {item}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </div> */}
                  <div className="award_plus_icon" onClick={toggleForm}>
                    <h4>Major Awards</h4>
                    <div className="add-icon mobile">+</div>
                  </div>
                  <div className="award_table desktop">
                    <table className="performance_table">
                      <thead>
                        <tr>
                          <th> Name of The Award </th>
                          <th> Awarding Body</th>
                          <th> Level </th>
                          <th> Location</th>
                          <th> Year </th>
                          <th> Upload Document </th>
                        </tr>
                      </thead>
                      <tbody>
                        {awardsTable.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {Object.keys(row).map((key, colIndex) => {
                              return (
                                <td key={colIndex}>
                                  {key === "level" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleAwardTable(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {[
                                        "International",
                                        "National",
                                        "State",
                                        "District",
                                        "Local",
                                      ].map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}

                                  {(key == "awardingBody" ||
                                    key == "title") && (
                                    <input
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleAwardTable(e, rowIndex, key)
                                      }
                                    />
                                  )}

                                  {key === "documentUrl" && (
                                    <div>
                                      <input
                                        type="file"
                                        onChange={(e) => {
                                          e.preventDefault();
                                          const reader = new FileReader();
                                          reader.readAsDataURL(
                                            e.target.files[0]
                                          );
                                          reader.onload = () => {
                                            const imageData = reader.result;
                                            const newData = [...awardsTable];
                                            newData[rowIndex][key] = imageData;
                                            setAwardTable(newData);
                                          };
                                          reader.onerror = (er) => {
                                            console.log(er);
                                          };
                                          console.log(row[key]);
                                        }}
                                      />
                                      {row[key] && (
                                        <object
                                          data={row[key]}
                                          type={
                                            row[key].startsWith("data:image")
                                              ? "image/png"
                                              : "application/pdf"
                                          }
                                          width="50px"
                                          height="50px"
                                        ></object>
                                      )}
                                    </div>
                                  )}
                                  {key == "location" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleAwardTable(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {row.level == "International"
                                        ? MajorInternationalCities.map(
                                            (item, index) => (
                                              <option key={index} value={item}>
                                                {item}
                                              </option>
                                            )
                                          )
                                        : indian_states.map((item, index) => (
                                            <option key={index} value={item}>
                                              {item}
                                            </option>
                                          ))}
                                    </select>
                                  )}
                                  {key == "year" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleAwardTable(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {completionYearData.map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {key == "duration" && (
                                    <select
                                      style={{
                                        maxWidth: "150px",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      type="text"
                                      value={row[key]}
                                      defaultValue={awardData.highlight}
                                      onChange={(e) =>
                                        handleAwardTable(e, rowIndex, key)
                                      }
                                    >
                                      <option selected hidden>
                                        Select
                                      </option>
                                      {[
                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                      ].map((item) => (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {showForms.map((showForm, index) => (
        <div key={index} className={`award_form mobile ${showForm ? 'show' : 'hide'}`}>
          <div className="BasicProfile_inputfield">
            <label htmlFor="Name of The Award">Name of The Award</label>
            <input type="text" pattern="[a-zA-Z]+" />
          </div>
          <div className="BasicProfile_inputfield">
            <label htmlFor="Awarding Body">Awarding Body</label>
            <input type="text" pattern="[a-zA-Z]+" />
          </div>
          <div className="BasicProfile_inputfield">
            <label>Level</label>
            <select name="level">
              <option selected hidden>Select</option>
              {['International', 'National', 'State', 'District', 'Local'].map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="BasicProfile_inputfield">
            <label>Location</label>
            <select name="location">
              <option selected hidden>Select</option>
              {/* Your options here, for example: */}
              {showForm.level === 'International'
                ? MajorInternationalCities.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))
                : indian_states.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
            </select>
          </div>
          <div className="BasicProfile_inputfield">
            <label>Year</label>
            <select name="year">
              <option selected hidden>Select</option>
              {/* Your options here */}
            </select>
          </div>
          <div className="BasicProfile_inputfield">
            <label>Upload Document</label>
            <input
              style={{ display: 'none' }}
              onChange={() => {}}
              id="fileID"
              placeholder="Enter UPI Id"
              name="upiId"
              type="file"
            />
            <div className="input">
              <label id="upload" htmlFor="fileID">
                {/* Your SVG icon */}
              </label>
            </div>
          </div>
          {showForms.length > 1 && (
            <div className="another_mobile_div">
              Major Awards Another input
              <div
                className="remove-icon mobile"
                onClick={() => removeForm(index)}
              >
                -
              </div>
            </div>
          )}
                    </div>
                  ))}
                </div>
                <div style={{ width: "100%", marginTop: "20px" }}>
                  <label htmlFor="aboutJourney">
                    Highlights of Awards (if any)
                  </label>
                  <textarea
                    onChange={awardHandle}
                    value={awardData.highlights}
                    name="highlights"
                    style={{
                      width: "100%",
                      border: "2px solid rgb(0,0,0,0.5)",
                      padding: "10px",
                      borderRadius: "10px",
                      resize: "none",
                      height: "166px",
                    }}
                  />
                </div>

                {awardFormData.awards.map((award, index) => (
                  <React.Fragment key={index}>
                    {index === awardFormData.awards.length - 1 ? (
                      // last index => add plus button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Course</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name of Art</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Art
                              </option>
                              {nameofart.map((option) => (
                                <option value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                          {/* <div className="AwardProfile_inputfield">
                        <label>Name of the Stage</label>
                        <input value={award.stage} onChange={(e) => handleInputChange(index, "stage", e.target.value)} type="text"></input>
                      </div> */}
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Given By</label>
                            <input
                              value={award.givenBy}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "givenBy",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Add More Awards Details</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={addNewAward}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                              <text
                                x="50%"
                                y="50%"
                                text-anchor="middle"
                                fill="white"
                                font-size="24px"
                                font-family="Arial"
                                dy=".3em"
                              >
                                +
                              </text>
                            </svg>
                          </button>
                        </div>
                      </>
                    ) : (
                      // not last index => add - button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Award Name</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                            </select>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.stage}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "stage",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Award Year</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Given By</label>
                            <input
                              value={award.givenBy}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "givenBy",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Remove</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={removeLastAward}
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                              <text
                                x="50%"
                                y="50%"
                                text-anchor="middle"
                                fill="white"
                                font-size="24px"
                                font-family="Arial"
                                dy=".3em"
                              >
                                -
                              </text>
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                ))}

                <button className="updateBtn">Update</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
