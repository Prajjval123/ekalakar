import React, { useEffect } from "react";
import "./Artist_Opportunities.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Artist_navbar from "../Artist_navbar";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPOSTRequest,
} from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { artistOpportunityPoints } from "../../../services/apis";
import { toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { AllLanguage } from "../../../CommonData/language";
import natureOfArt from "./assets/natureOfArt.svg"
import category from "./assets/category.svg"
import language from "./assets/language.svg"

const filterAmount = [
  {
    title: "Below 5000",
  },
  {
    title: "Rs 8,000 - Rs 10,000",
  },
  {
    title: "Rs 10,000 - Rs 20,000",
  },
  {
    title: "Rs 20,000 - Rs 50,000",
  },
  {
    title: "Above 50,000",
  },
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
  "West Bengal"
];

export function Artist_Opportunities() {

  const { accessToken } = useSelector((state) => state.auth);

  const [jobData, setJobData] = useState([]);

  const [OpportunityapplynowPopup, setOpportunityapplynowPopup] = useState(null);
    
  const [showOpportunityFiltersPopup, setShowOpportunityFiltersPopup] =useState(false);

    const navigate = useNavigate();

  const [applyAns, setApplyAns] = useState({quotedPrice:"",answer:""});

  const [isFilterOn , setIsFilterOn] = useState(false);

  const [filterData ,setFilterData] = useState([]);

  // console.log('jobda' , jobData);

  const applySubmitHandler = async (event) => {

    const toastId = toast.loading("Loading..." , {
      position:"top-center"
    });

    try {
      event.preventDefault();
      // console.log(applyAns);
      const response = await makeAuthenticatedPOSTRequest(
        artistOpportunityPoints.APPLY_OPPOR_API +
          `/${OpportunityapplynowPopup?.id}`,
        { applyAns },
        accessToken
      );


      if (response.status === "success") {
        toast.success("successfully applied" ,{
          position:"top-center"
        });

        setOpportunityapplynowPopup(null);
        setApplyAns({quotedPrice:"",answer:""});
        navigate("/statusOfApplication");

      } else {

        toast.error(response.message , {
          position:"top-center"
        });
        setApplyAns("");

      }
    } catch (error) {
      console.log(error);
      toast.error("server error , please try again" , {
        position:"top-center"
      });
    }

    toast.dismiss(toastId);
  };

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

      } else {
        toast.error(response.message , {
          position:"top-center"
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("server error , please try again " , {
        position:"top-center"
      });
    }
  };

  useEffect(() => {
    fetchOpportunity();
  }, []);

  // ! this is for filters


  const [filterOption, setFilterOption] = useState({
    location: "",
    minAmount: "",
    maxAmount: "",
    language: "",
    amountRange: "",
  });

  const [amountCondition, setAmountCondition] = useState(false);

  useEffect(() => {
    if (parseInt(filterOption.maxAmount) < parseInt(filterOption.minAmount)) {
      setAmountCondition(true);
    } else {
      setAmountCondition(false);
    }
  }, [filterOption]);

  const filterChangeHandler = (event) => {
    const { name, value } = event.target;
    setFilterOption((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilterHandler = (event) => {
    event.preventDefault();
    console.log("filteroption", filterOption);

    if (
      filterOption.amountRange === "" &&
      filterOption.language === "" &&
      filterOption.location === "" &&
      filterOption.maxAmount === "" &&
      filterOption.minAmount === ""
    ) {
      toast.error('Please fill the fields' , {
        position:"top-center"
      });
    }
    else if(amountCondition){
      toast.error('Please enter the valid maximum value' , {
        position:"top-center"
      });
    }
    else{
      let location = filterOption.location.toLowerCase();
      let language = filterOption.language;
      let minAmount = filterOption.minAmount;
      let maxAmount = filterOption.maxAmount;
      let amountRange = filterOption.amountRange;

      const filteredData = jobData.filter((job) => {

        if (amountRange !== "") {
          if(amountRange === "Below 50,000" && job.budget <= 50000){
             return true;
          }
          else if(amountRange === "Rs 8,000 - Rs 10,000" && job.budget >= 8000 &&  job.budget <= 10000 ){
            return true;
          }
          else if(amountRange === "Rs 10,000 - Rs 20,000" &&  job.budget >= 10000  && job.budget <= 20000 ){
            return true;
          }
          else if(amountRange === "Rs 20,000 - Rs 50,000" && job.budget <=20000 && job.budget <= 50000 ) {
       return true;
          }
          else if(job.budget >= 50000 ){
               return true;
          }
        }

        if (minAmount !== "" && maxAmount !== "" && job.budget > minAmount && job.budget < maxAmount ) {
          return true;
        }

        if(minAmount !== "" && maxAmount === "" && job.budget > minAmount){
          return true;
        }
        if(maxAmount !== "" && minAmount === "" && job.budget < maxAmount){
          return true;
        }

        
        if (location !== "" && job.location.toLowerCase().includes(location)) {
          return true;
        }
      
        if (language !== ""  && job.languages.includes(language)) {
          return true;
        }
  
        return false;
      });

      setFilterData(filteredData);
      
    }

     
  };

  const removeAmountRange = (event)=>{
    const {name , value} = event.target;
    if(filterOption.amountRange === value ){
      setFilterOption((prev)=>({
        ...prev , 
        amountRange:""
      }))
    }
  }


  const eventToMap = isFilterOn? filterData:jobData;

  return (
    <div className="OpportunitiesPage">
      <Artist_navbar />

      <div className="OpportunitiesPage_HeadingSearch">
        <div className="OpportunitiesPage_Heading">
          <h2>OPPORTUNITIES</h2>
        </div>
        <div >

          <form className="OpportunitiesPage_SearchSort">

            <div className="OpportunitiesPage_Search">

{/* remove from comment it later , ! important */}

              {/* <input placeholder="Search for opportunity" /> */}
              
            </div>

{/* remove from comment it later , ! important */}

            {/* <div className="OpportunitiesPage_Sort">
              <label>Sort By:</label>
              <select>
                <option selected>Default</option>
              </select>
              <button
                type="button"
                onClick={() => setShowOpportunityFiltersPopup(true)}
              >
                Filters
              </button>
            </div> */}


          </form>


          <div>
            {showOpportunityFiltersPopup === true && (
              <div className="OppotunitiesPage_allfilters_formpopup_parent">
                <div className="OppotunitiesPage_allfilters_formpopup">
                  <button onClick={() => setShowOpportunityFiltersPopup(null)}>
                    X
                  </button>
                  <form>
                    <div className="OppotunitiesPage_allfilters_form_inputfield">
                      <label>Location</label>
                     
                    </div>
                    <div className="OppotunitiesPage_allfilters_form_inputfield">
                      <label>Amount</label>
                      <div className="minmaxamount">
                        <label>Min</label>
                        <input type="text" />

                        <label>Max</label>
                        <input type="text" />
                      </div>
                      <div className="minmaxamountradio">
                        <label>
                          <input
                            onChange={filterChangeHandler}
                            name="amountRange"
                            checked={filterOption.amountRange.includes(
                              "Below 5000"
                            )}
                            type="radio"
                          />
                          Below 5000
                        </label>
                        <label>
                          <input type="radio" />
                          Rs 8,000 - Rs 10,000
                        </label>
                        <label>
                          <input type="radio" />
                          Rs 10,000 - Rs 20,000
                        </label>
                        <label>
                          <input type="radio" />
                          Rs 20,000 - Rs 50,000
                        </label>
                        <label>
                          <input type="radio" />
                          Above 50,000
                        </label>
                      </div>
                    </div>

                    <div className="OppotunitiesPage_allfilters_form_inputfield">
                      <label>Language</label>
                      <select></select>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="OpportunitiesPage_Maincontent">


        {/* this is filter section  */}
        <div className="OpportunitiesPage_allfilters">
          <h5>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
            >
              <path
                d="M1 1H25M5.28571 8H20.7143M10.4286 15H15.5714"
                stroke="#AD2F3B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            All filters
          </h5>
            
          <div className="OppotunitiesPage_allfilters_form">
            <form>
              <div className="OppotunitiesPage_allfilters_form_inputfield">
                <label>Location</label>
                {/* <input
                  value={filterOption.location}
                  onChange={filterChangeHandler}
                  style={{ fontWeight: "500" }}
                  name="location"
                  type="text"
                /> */}
                 <select onChange={filterChangeHandler} name="language">
                  <option value="" defaultChecked selected>
                    Choose State
                  </option>
                  {indianStates.map((lan, index) => (
                    <option value={lan} key={index}>
                      {lan}
                    </option>
                  ))}
                </select>
              </div>
              <div className="OppotunitiesPage_allfilters_form_inputfield">
                <label>Amount</label>
                <div className="minmaxamount">
                 
                </div>
                <div className="minmaxamountradio">
                  {filterAmount.map((data, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="amountRange"
                        onChange={filterChangeHandler}
                        onClick={removeAmountRange}
                        value={data.title}
                        checked={filterOption.amountRange === data.title}
                      />
                      {data.title}
                    </label>
                  ))}
                </div>
              </div>

              <div className="OppotunitiesPage_allfilters_form_inputfield">
                <label>Language</label>
                <select onChange={filterChangeHandler} name="language">
                  <option value="" defaultChecked selected>
                    Choose Language
                  </option>
                  {AllLanguage.map((lan, index) => (
                    <option value={lan} key={index}>
                      {lan}
                    </option>
                  ))}
                </select>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  alignItems: "center",
                  marginTop: "10px",
                  justifyContent: "center",
                }}
                className="filter_btn"
              >
                <button
                  onClick={(e)=>{applyFilterHandler(e)
                  setIsFilterOn(true)
                  }}
                  style={{
                    width: "100px",
                    height: "50px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#AD2F3B",
                    color: "white",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                  }}
                >
                  Apply
                </button>
                <button
                  onClick={()=>{
                    setFilterOption({
                      location: "",
                       minAmount: "",
                       maxAmount: "",
                        language: "",
                      amountRange: "",
                    })
                  setIsFilterOn(false)}}
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                    border: "none",
                    backgroundColor: "transparent",
                    fontSize: "18px",
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* this is all  opportunity section */}
        <div className="OpportunitiesPage_displayjobs">
          <h4>Recommended Jobs</h4>

          {eventToMap.map((job, index) => (
            <div className="OpportunitiesPage_displayonejob" key={index}>
              <h4>{job.purpose}</h4>
              <h5>{job.description}</h5>
              <div className="OpportunitiesPage_displayonejob_content">
                <div className="OpportunitiesPage_displayonejob_contentdetailsone">
                  <div className="OpportunitiesPage_displayonejob_contentdetailsone_text">
                    <div>
                    
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                        >
                          <path
                            d="M2.13925 7.75407L13.7993 2.20207C15.4993 1.39207 17.2733 3.16707 16.4643 4.86807L10.9123 16.5271C10.1533 18.1201 7.85325 18.0221 7.23325 16.3691L6.20725 13.6301C6.107 13.3629 5.95072 13.1202 5.74892 12.9184C5.54712 12.7166 5.30446 12.5603 5.03725 12.4601L2.29725 11.4331C0.645253 10.8131 0.546253 8.51307 2.13925 7.75407Z"
                            stroke="#AD2F3B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>{" "}
                        Location of Performance:
                      </p>
                      <p style={{display:"flex",gap:"4px"}}>
                        <img src={language} alt="" />
                        Language of Performance :
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="13"
                          viewBox="0 0 22 13"
                          fill="none"
                        >
                          <path
                            d="M14.6667 6.5C14.6667 7.21421 14.4516 7.91238 14.0487 8.50623C13.6458 9.10007 13.0732 9.56292 12.4032 9.83623C11.7332 10.1095 10.9959 10.1811 10.2847 10.0417C9.57341 9.90239 8.92007 9.55846 8.40728 9.05344C7.89448 8.54842 7.54527 7.90498 7.40379 7.20449C7.26231 6.50401 7.33492 5.77793 7.61244 5.11809C7.88996 4.45824 8.35993 3.89426 8.96291 3.49747C9.56589 3.10068 10.2748 2.88889 11 2.88889C11.9725 2.88889 12.9051 3.26934 13.5927 3.94656C14.2804 4.62377 14.6667 5.54227 14.6667 6.5ZM22 0.722222V12.2778C22 12.4693 21.9227 12.653 21.7852 12.7885C21.6477 12.9239 21.4612 13 21.2667 13H0.733333C0.538841 13 0.352315 12.9239 0.214788 12.7885C0.0772617 12.653 0 12.4693 0 12.2778V0.722222C0 0.530677 0.0772617 0.346977 0.214788 0.211534C0.352315 0.0760912 0.538841 0 0.733333 0H21.2667C21.4612 0 21.6477 0.0760912 21.7852 0.211534C21.9227 0.346977 22 0.530677 22 0.722222ZM20.5333 4.9066C19.7006 4.66412 18.9428 4.22031 18.3288 3.61561C17.7148 3.01091 17.2641 2.26452 17.0179 1.44444H4.98208C4.73587 2.26452 4.28524 3.01091 3.67124 3.61561C3.05723 4.22031 2.29936 4.66412 1.46667 4.9066V8.0934C2.29936 8.33588 3.05723 8.77969 3.67124 9.38439C4.28524 9.98909 4.73587 10.7355 4.98208 11.5556H17.0179C17.2641 10.7355 17.7148 9.98909 18.3288 9.38439C18.9428 8.77969 19.7006 8.33588 20.5333 8.0934V4.9066Z"
                            fill="#AD2F3B"
                          />
                        </svg>{" "}
                        Amount :
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.673 0C5.85865 0 6.0367 0.0737498 6.16797 0.205025C6.29925 0.336301 6.373 0.514348 6.373 0.7V2.009H13.89V0.709C13.89 0.523348 13.9637 0.345301 14.095 0.214025C14.2263 0.0827498 14.4043 0.009 14.59 0.009C14.7757 0.009 14.9537 0.0827498 15.085 0.214025C15.2162 0.345301 15.29 0.523348 15.29 0.709V2.009H18C18.5303 2.009 19.0388 2.21958 19.4139 2.59443C19.7889 2.96929 19.9997 3.47774 20 4.008V18.001C19.9997 18.5313 19.7889 19.0397 19.4139 19.4146C19.0388 19.7894 18.5303 20 18 20H2C1.46974 20 0.961184 19.7894 0.58614 19.4146C0.211096 19.0397 0.00026513 18.5313 0 18.001L0 4.008C0.00026513 3.47774 0.211096 2.96929 0.58614 2.59443C0.961184 2.21958 1.46974 2.009 2 2.009H4.973V0.699C4.97327 0.513522 5.04713 0.335731 5.17838 0.204672C5.30963 0.0736123 5.48752 -1.89263e-07 5.673 0ZM1.4 7.742V18.001C1.4 18.0798 1.41552 18.1578 1.44567 18.2306C1.47583 18.3034 1.52002 18.3695 1.57574 18.4253C1.63145 18.481 1.69759 18.5252 1.77039 18.5553C1.84319 18.5855 1.92121 18.601 2 18.601H18C18.0788 18.601 18.1568 18.5855 18.2296 18.5553C18.3024 18.5252 18.3685 18.481 18.4243 18.4253C18.48 18.3695 18.5242 18.3034 18.5543 18.2306C18.5845 18.1578 18.6 18.0798 18.6 18.001V7.756L1.4 7.742ZM6.667 14.619V16.285H5V14.619H6.667ZM10.833 14.619V16.285H9.167V14.619H10.833ZM15 14.619V16.285H13.333V14.619H15ZM6.667 10.642V12.308H5V10.642H6.667ZM10.833 10.642V12.308H9.167V10.642H10.833ZM15 10.642V12.308H13.333V10.642H15ZM4.973 3.408H2C1.92121 3.408 1.84319 3.42352 1.77039 3.45367C1.69759 3.48382 1.63145 3.52802 1.57574 3.58374C1.52002 3.63945 1.47583 3.70559 1.44567 3.77839C1.41552 3.85119 1.4 3.92921 1.4 4.008V6.343L18.6 6.357V4.008C18.6 3.92921 18.5845 3.85119 18.5543 3.77839C18.5242 3.70559 18.48 3.63945 18.4243 3.58374C18.3685 3.52802 18.3024 3.48382 18.2296 3.45367C18.1568 3.42352 18.0788 3.408 18 3.408H15.29V4.337C15.29 4.52265 15.2162 4.7007 15.085 4.83197C14.9537 4.96325 14.7757 5.037 14.59 5.037C14.4043 5.037 14.2263 4.96325 14.095 4.83197C13.9637 4.7007 13.89 4.52265 13.89 4.337V3.408H6.373V4.328C6.373 4.51365 6.29925 4.6917 6.16797 4.82297C6.0367 4.95425 5.85865 5.028 5.673 5.028C5.48735 5.028 5.3093 4.95425 5.17803 4.82297C5.04675 4.6917 4.973 4.51365 4.973 4.328V3.408Z"
                            fill="#AD2F3B"
                          />
                        </svg>{" "}
                        Date of Performance :
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.673 0C5.85865 0 6.0367 0.0737498 6.16797 0.205025C6.29925 0.336301 6.373 0.514348 6.373 0.7V2.009H13.89V0.709C13.89 0.523348 13.9637 0.345301 14.095 0.214025C14.2263 0.0827498 14.4043 0.009 14.59 0.009C14.7757 0.009 14.9537 0.0827498 15.085 0.214025C15.2162 0.345301 15.29 0.523348 15.29 0.709V2.009H18C18.5303 2.009 19.0388 2.21958 19.4139 2.59443C19.7889 2.96929 19.9997 3.47774 20 4.008V18.001C19.9997 18.5313 19.7889 19.0397 19.4139 19.4146C19.0388 19.7894 18.5303 20 18 20H2C1.46974 20 0.961184 19.7894 0.58614 19.4146C0.211096 19.0397 0.00026513 18.5313 0 18.001L0 4.008C0.00026513 3.47774 0.211096 2.96929 0.58614 2.59443C0.961184 2.21958 1.46974 2.009 2 2.009H4.973V0.699C4.97327 0.513522 5.04713 0.335731 5.17838 0.204672C5.30963 0.0736123 5.48752 -1.89263e-07 5.673 0ZM1.4 7.742V18.001C1.4 18.0798 1.41552 18.1578 1.44567 18.2306C1.47583 18.3034 1.52002 18.3695 1.57574 18.4253C1.63145 18.481 1.69759 18.5252 1.77039 18.5553C1.84319 18.5855 1.92121 18.601 2 18.601H18C18.0788 18.601 18.1568 18.5855 18.2296 18.5553C18.3024 18.5252 18.3685 18.481 18.4243 18.4253C18.48 18.3695 18.5242 18.3034 18.5543 18.2306C18.5845 18.1578 18.6 18.0798 18.6 18.001V7.756L1.4 7.742ZM6.667 14.619V16.285H5V14.619H6.667ZM10.833 14.619V16.285H9.167V14.619H10.833ZM15 14.619V16.285H13.333V14.619H15ZM6.667 10.642V12.308H5V10.642H6.667ZM10.833 10.642V12.308H9.167V10.642H10.833ZM15 10.642V12.308H13.333V10.642H15ZM4.973 3.408H2C1.92121 3.408 1.84319 3.42352 1.77039 3.45367C1.69759 3.48382 1.63145 3.52802 1.57574 3.58374C1.52002 3.63945 1.47583 3.70559 1.44567 3.77839C1.41552 3.85119 1.4 3.92921 1.4 4.008V6.343L18.6 6.357V4.008C18.6 3.92921 18.5845 3.85119 18.5543 3.77839C18.5242 3.70559 18.48 3.63945 18.4243 3.58374C18.3685 3.52802 18.3024 3.48382 18.2296 3.45367C18.1568 3.42352 18.0788 3.408 18 3.408H15.29V4.337C15.29 4.52265 15.2162 4.7007 15.085 4.83197C14.9537 4.96325 14.7757 5.037 14.59 5.037C14.4043 5.037 14.2263 4.96325 14.095 4.83197C13.9637 4.7007 13.89 4.52265 13.89 4.337V3.408H6.373V4.328C6.373 4.51365 6.29925 4.6917 6.16797 4.82297C6.0367 4.95425 5.85865 5.028 5.673 5.028C5.48735 5.028 5.3093 4.95425 5.17803 4.82297C5.04675 4.6917 4.973 4.51365 4.973 4.328V3.408Z"
                            fill="#AD2F3B"
                          />
                        </svg>{" "}
                        Duration of Performance :
                      </p>
                      
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z"
                            fill="#AD2F3B"
                          />
                        </svg>{" "}
                        Application Due Date :
                      </p>
                    </div>

                    <div className="OpportunitiesPage_displayonejob_contentdetailstwo">
                      <p>{job.location}</p>
                      <p>
                        {/* {job.languages?.map((lag, index) => (
                          <span key={index}>{lag} </span>
                        ))}
                        {!job.language && "NA"} */}
                        {job.languages}
                      </p>
                      <p>{job.budget}</p>
                      <p>
                        {new Date(job.performanceDate).toLocaleDateString(
                          "en-US",
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                      </p>
                      <p>{job.performanceDuration}</p>
                      <p>
                        {new Date(job.applicationPeriod.end).toLocaleDateString(
                          "en-US",
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="OpportunitiesPage_displayonejob_contentdetailsbuttons">
                  <button className="btnone">
                    {" "}
                    <Link
                      to={`/Artist_OpportunityDetails`}
                      state={{ job: jobData[index] }} // Pass the data of the clicked job
                      style={{ textDecoration: "none", color: "#ad2f3b" }}
                    >
                      More Information
                    </Link>
                  </button>
                  <button
                    className="btntwo"
                    onClick={() =>
                      setOpportunityapplynowPopup({ index, id: job._id })
                    }
                  >
                    Apply Now
                  </button>
                </div>

                {/* this is for apply now pop up */}

                {OpportunityapplynowPopup?.index === index && (
                  <div className="Opportunityapplynowpopup_fullscreen">
                    <div className="Opportunityapplynowpopup">
                      <button onClick={() => setOpportunityapplynowPopup(null)}>
                        X
                      </button>
                      <h1 style={{color:"#AD2F3B"}}>{job.purpose}</h1>
                      <div className="Opportunityapplynowpopup_content">
                        <h4>{job.position}</h4>
                        <div className="Opportunityapplynowpopup_contentone">
                          <p>
                            Posted on: <span>{new Date(job.applicationPeriod.start).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                          </p>
                          <p>
                            Last Date to apply:{" "}
                            <span>{new Date(job.applicationPeriod.end).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                          </p>
                        </div>
                      </div>
                      <div className="Opportunityapplynowpopup_contentform">
                        <form onSubmit={applySubmitHandler}>
                        <div style={{display:"flex"}}>
                        <p>My quoted price:</p>
                        <input type="number" style={{marginLeft:"5px"}} name="quotedPrice" value={applyAns.quotedPrice} 
                        onChange={(e) => setApplyAns((prevData) => ({
                              ...prevData,
                              quotedPrice: e.target.value
                            }))} required/>
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
                          <button
                            onClick={() => setOpportunityapplynowPopup(null)}
                          >
                            Cancel
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
