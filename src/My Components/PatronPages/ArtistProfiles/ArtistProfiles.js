import React, { useEffect, useState } from 'react';
import './ArtistProfiles.css';
import profileImg from "../Images/profile.svg"
import Patron_Navbar from '../Patron_Navbar';
import {faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import { makeAuthenticatedGETRequest } from '../../../services/serverHelper';
import { patronProfilePoints } from '../../../services/apis';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


export default function ArtistProfiles() {

  const {accessToken} = useSelector((state)=>state.auth);
  
  const [profileData , setProfileData] = useState([]);

  const navigate = useNavigate();

  // this is to fetch the application details 
  const fetchAllApplication = async()=>{
    const toastId = toast.loading('Loading...');
    try{

      const response = await makeAuthenticatedGETRequest(patronProfilePoints.FETCH_PATRON_ALL_APPLI_API ,accessToken);
      console.log('res'  ,response);
      if(response.status === 'success'){
        setProfileData(response.data);
      }
      else{
        toast.error(response.message);
      }


    } catch(error){
      console.log(error);
      toast.error("something went wrong , please try again");
    }

    toast.dismiss(toastId);
  }

  useEffect(()=>{
   fetchAllApplication();

  },[])

  const [showFiltersPopup, setShowFiltersPopup] = useState(false);

  return (
    <>
      <Patron_Navbar />
      <div className='ArtistProfiles_Page'>
        <div className='ArtistProfiles_Image'>
          <div className='ArtistProfiles_Image_Content'>
            <p>Artist Profiles</p>
          </div>
        </div>
        <div className='ArtistProfiles_Main'>
          
          {/*  this is for filter part  */}
          <div style={{
            height:"fit-content"
          }} className='ArtistProfiles_Allfilters'>
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
              All filters (not working now )
            </h5>
            <div className='ArtistProfiles_Allfilters_form'>
              <form>
                <div className='ArtistProfiles_Allfilters_form_inputfield'>
                  <label>Art Name</label>
                  <select>
                    <option selected hidden>Select Art Name</option>
                  </select>
                </div>
                <div className='ArtistProfiles_Allfilters_form_inputfield'>
                  <label>Category</label>
                  <select>
                    <option selected hidden>Select Category</option>
                  </select>
                </div>
                <div className='ArtistProfiles_Allfilters_form_inputfield'>
                  <label>Event</label>
                  <select>
                    <option selected hidden>Select Event</option>
                  </select>
                </div>
                <div className='ArtistProfiles_Allfilters_form_inputfield'>
                  <label>Budget</label>
                  <select>
                    <option selected hidden>Select Budget</option>
                  </select>
                </div>
                <div className='ArtistProfiles_Allfilters_form_inputfield'>
                  <label>Location</label>
                  <input type='text' placeholder='Enter Location'>
                  </input>
                </div>
                <div className='ArtistProfiles_Allfilters_form_inputfield'>
                  <label>Language</label>
                  <select>
                    <option selected hidden>Select Language</option>
                  </select>
                </div>
              </form>
            </div>
          </div>


{/* this is for artist application */}
          <div className='ArtistProfiles_allprofilecards'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5>Filters Applied:</h5>
              <button className='ArtistProfiles_allprofilecards_filterbtn' type="button" onClick={() => setShowFiltersPopup(true)}>Filters</button>
            </div>

            {/* this is for mobile view filter remove from comment later  */}

            {/* <div style={{ display: "flex",  justifyContent: "center" }}>
              {showFiltersPopup === true && (

                <div className='ArtistProfiles_Allfilterspopup'>
                  <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
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
                    <button style={{ background: "none", color: 'black',width:"auto",height:"auto",fontWeight:"bolder" }} onClick={() => setShowFiltersPopup(null)}>X</button>
                  </div>
                  <div className='ArtistProfiles_Allfilters_form'>
                    <form>
                      <div className='ArtistProfiles_Allfilters_form_inputfield'>
                        <label>Art Name</label>
                        <select>
                          <option selected hidden>Select Art Name</option>
                        </select>
                      </div>
                      <div className='ArtistProfiles_Allfilters_form_inputfield'>
                        <label>Category</label>
                        <select>
                          <option selected hidden>Select Category</option>
                        </select>
                      </div>
                      <div className='ArtistProfiles_Allfilters_form_inputfield'>
                        <label>Event</label>
                        <select>
                          <option selected hidden>Select Event</option>
                        </select>
                      </div>
                      <div className='ArtistProfiles_Allfilters_form_inputfield'>
                        <label>Budget</label>
                        <select>
                          <option selected hidden>Select Budget</option>
                        </select>
                      </div>
                      <div className='ArtistProfiles_Allfilters_form_inputfield'>
                        <label>Location</label>
                        <input type='text' placeholder='Enter Location'>
                        </input>
                      </div>
                      <div className='ArtistProfiles_Allfilters_form_inputfield'>
                        <label>Language</label>
                        <select>
                          <option selected hidden>Select Language</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div> */}

            <div className='ArtistProfiles_allprofilecards_content'>
              {profileData.map(profile => (
                <div key={profile.id} className='ArtistProfiles_ProfileCardwithbtn'>
                  <div className='ArtistProfiles_ProfileCard'>
                    <div className='ArtistProfiles_ProfileCard_left'>
                      <img src="assets/HomePage/eK_Logo_Trasnparent_1.png" />
                      <div className='ArtistProfiles_ProfileCard_left_components'>
                        <div className='ArtistProfiles_ProfileCard_left_components1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M7.45455 6.76016L7.67156 6.99022L7.45414 6.76016H7.45455ZM2.28334 5.82782L2.49994 5.59776L2.28293 5.82782H2.28334ZM0.590785 1.24737L0.37419 1.01774L0.591195 1.2478L0.590785 1.24737ZM5.48797 5.46629L5.67544 5.2704L5.24101 4.81028L5.05478 5.00617L5.48797 5.46629ZM6.30266 5.18823L7.08659 5.63754L7.37989 5.06758L6.59637 4.6187L6.30266 5.18823ZM7.23713 6.5301L6.65463 7.14115L7.08823 7.60083L7.67073 6.99022L7.23713 6.5301ZM6.29938 7.33748C5.70456 7.39629 4.16624 7.34396 2.49994 5.59776L2.06593 6.05744C3.88401 7.96322 5.61472 8.05663 6.35681 7.98355L6.29897 7.33748H6.29938ZM2.49994 5.59776C0.911985 3.93285 0.648626 2.53303 0.615808 1.92544L0.00130179 1.9622C0.0423236 2.72676 0.368447 4.27837 2.06593 6.05744L2.49994 5.59776ZM3.06399 2.92525L3.18172 2.80157L2.74853 2.34189L2.6308 2.46513L3.0644 2.92482L3.06399 2.92525ZM3.27525 1.22964L2.75838 0.501406L2.2657 0.890606L2.78258 1.61841L3.27525 1.22964ZM1.01864 0.342699L0.3746 1.01731L0.808611 1.47743L1.45224 0.80282L1.01864 0.342699ZM2.84739 2.69519C2.62998 2.46513 2.62998 2.46513 2.62998 2.466H2.62916L2.62793 2.46773C2.60856 2.48857 2.59111 2.5113 2.57583 2.53562C2.55368 2.57022 2.52947 2.61562 2.50896 2.67314C2.45901 2.8216 2.44657 2.98122 2.47286 3.13629C2.52783 3.51035 2.77232 4.00463 3.39832 4.66108L3.83233 4.20096C3.24613 3.58689 3.10665 3.21326 3.08081 3.03682C3.0685 2.95293 3.08122 2.91142 3.08491 2.9019C3.08696 2.89585 3.08778 2.89541 3.08491 2.89931C3.08129 2.9053 3.07717 2.91095 3.0726 2.91617L3.0685 2.9205C3.06717 2.92184 3.06581 2.92314 3.0644 2.92439L2.84698 2.69519H2.84739ZM3.39832 4.66108C4.02472 5.31753 4.49606 5.57354 4.85131 5.63062C5.03303 5.66003 5.17948 5.63668 5.29065 5.593C5.35282 5.56874 5.41096 5.5343 5.46294 5.49094C5.47 5.48472 5.47684 5.47823 5.48345 5.47148L5.48633 5.46889L5.48756 5.46759L5.48797 5.46672C5.48797 5.46672 5.48838 5.46629 5.27137 5.23623C5.05396 5.00617 5.05519 5.00574 5.05519 5.00574L5.05601 5.00488L5.05683 5.00401L5.05929 5.00185L5.06339 4.99752C5.06832 4.99286 5.07353 4.98852 5.07898 4.98455C5.08308 4.98152 5.08185 4.98282 5.07611 4.98541C5.06585 4.98931 5.02565 5.00271 4.94484 4.98974C4.77501 4.96206 4.41812 4.81503 3.83233 4.20096L3.39832 4.66108ZM2.75838 0.500974C2.33995 -0.0871497 1.51788 -0.180558 1.01864 0.342699L1.45224 0.80282C1.67048 0.574057 2.05772 0.597841 2.2657 0.890606L2.75797 0.500974H2.75838ZM0.616218 1.92588C0.608014 1.77625 0.673239 1.61971 0.808611 1.47786L0.37419 1.01774C0.153903 1.24867 -0.0196193 1.5756 0.00130179 1.9622L0.616218 1.92588ZM6.65463 7.14115C6.54223 7.25964 6.4208 7.32623 6.29979 7.33791L6.35681 7.98355C6.65832 7.95371 6.90486 7.7937 7.08864 7.60127L6.65463 7.14115ZM3.18172 2.80157C3.58579 2.37821 3.61573 1.70922 3.27566 1.23007L2.78299 1.61884C2.94831 1.85193 2.92369 2.15767 2.74812 2.34232L3.18172 2.80157ZM7.087 5.63797C7.42214 5.82998 7.47424 6.28231 7.23755 6.53054L7.67156 6.99022C8.22125 6.41378 8.05183 5.45245 7.3803 5.06801L7.087 5.63797ZM5.67544 5.27083C5.83296 5.10563 6.08647 5.06498 6.30307 5.18866L6.59678 4.61914C6.15211 4.36399 5.60078 4.43448 5.24143 4.81071L5.67544 5.27083Z" fill="white" />
                          </svg>
                        </div>

                        <p> &nbsp; {profile?.appliedBy?.phoneNumber}</p>
                      </div>
                      <div className='ArtistProfiles_ProfileCard_left_components'>
                        <div className='ArtistProfiles_ProfileCard_left_components1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 7" fill="none">
                            <path d="M1.30769 1.29032V1C1.22609 1 1.14782 1.03059 1.09012 1.08503C1.03242 1.13948 1 1.21332 1 1.29032H1.30769ZM8.69231 1.29032H9C9 1.21332 8.96758 1.13948 8.90988 1.08503C8.85218 1.03059 8.77391 1 8.69231 1V1.29032ZM1.30769 1.58065H8.69231V1H1.30769V1.58065ZM8.38462 1.29032V5.93548H9V1.29032H8.38462ZM7.8718 6.41935H2.12821V7H7.8718V6.41935ZM1.61538 5.93548V1.29032H1V5.93548H1.61538ZM2.12821 6.41935C1.84513 6.41935 1.61538 6.20258 1.61538 5.93548H1C1 6.21781 1.11886 6.48857 1.33044 6.68821C1.54202 6.88785 1.82899 7 2.12821 7V6.41935ZM8.38462 5.93548C8.38462 6.20258 8.15487 6.41935 7.8718 6.41935V7C8.17101 7 8.45798 6.88785 8.66956 6.68821C8.88114 6.48857 9 6.21781 9 5.93548H8.38462Z" fill="white" />
                            <path d="M1.30859 1.29004L5.0009 4.77391L8.69321 1.29004" fill="white" />
                            <path d="M1.30859 1.29004L5.0009 4.77391L8.69321 1.29004" stroke="white" stroke-width="0.681243" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <p> &nbsp; {profile?.appliedBy?.email}</p>
                      </div>
                      <div className='ArtistProfiles_ProfileCard_left_components'>
                        <div className='ArtistProfiles_ProfileCard_left_components1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 5 8" fill="none">
                            <path d="M2.5 1.8C2.7368 1.8 2.9639 1.90536 3.13135 2.09289C3.29879 2.28043 3.39286 2.53478 3.39286 2.8C3.39286 2.93132 3.36976 3.06136 3.32489 3.18268C3.28002 3.30401 3.21425 3.41425 3.13135 3.50711C3.04844 3.59997 2.95001 3.67362 2.84168 3.72388C2.73336 3.77413 2.61725 3.8 2.5 3.8C2.2632 3.8 2.0361 3.69464 1.86865 3.50711C1.70121 3.31957 1.60714 3.06522 1.60714 2.8C1.60714 2.53478 1.70121 2.28043 1.86865 2.09289C2.0361 1.90536 2.2632 1.8 2.5 1.8ZM2.5 0C3.16304 0 3.79893 0.294999 4.26777 0.820101C4.73661 1.3452 5 2.05739 5 2.8C5 4.9 2.5 8 2.5 8C2.5 8 0 4.9 0 2.8C0 2.05739 0.263392 1.3452 0.732233 0.820101C1.20107 0.294999 1.83696 0 2.5 0ZM2.5 0.8C2.0264 0.8 1.5722 1.01071 1.23731 1.38579C0.902423 1.76086 0.714286 2.26957 0.714286 2.8C0.714286 3.2 0.714286 4 2.5 6.684C4.28571 4 4.28571 3.2 4.28571 2.8C4.28571 2.26957 4.09758 1.76086 3.76269 1.38579C3.4278 1.01071 2.9736 0.8 2.5 0.8Z" fill="white" />
                          </svg>
                        </div>
                        <p> &nbsp; {profile?.appliedBy?.address?.details ?(profile?.appliedBy?.address?.details):('NA')} </p>
                      </div>
                      <div style={{gap:"20px"}} className='ArtistProfiles_ProfileCard_left_components_social'>
                        <div className='insta'>
                          <p>
                            <FontAwesomeIcon icon={faInstagram} /> &nbsp;
                            {profile?.appliedBy?.socialLinks?.facebook} &nbsp;</p>
                        </div>
                        <div className='fb'>
                          <p>
                            <FontAwesomeIcon icon={faFacebookF} /> &nbsp;
                            {profile?.appliedBy?.socialLinks?.instagram}
                            &nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <div className='ArtistProfiles_ProfileCard_right'>
                      <div>
                        <img src={profileImg} /><br></br> <br></br>
                        <p>{profile?.appliedBy?.firstName} {profile?.appliedBy?.lastName}</p>
                        <p>{profile?.artNature}</p>
                      </div>
                    </div>
                  </div>
                  <div className='Profilecard_btns'>

{/* this is for send invitation  */}

                    {/* <button className='btnone'>Send Invitation</button> */}


                  <Link style={{textDecoration: "none"}} to={`/patron-view-artist/${profile?.appliedBy?._id}`}>
                   <button  className='btntwo'>View Artist</button>
                  </Link> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
