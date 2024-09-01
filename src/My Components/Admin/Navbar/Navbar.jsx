import React, { useState } from "react";
import "./Navbar.css"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const YourComponent = () => {
  const [sideNavWidth, setSideNavWidth] = useState(0);

  const openNav = () => {
    setSideNavWidth(250);
  };

  const navigate = useNavigate();

  const token  = localStorage.getItem("accessToken");

  const closeNav = () => {
    setSideNavWidth(0);
  };
  function toggledropdown() {
    let ddown = document.querySelector(".dropdown-container");

    if (ddown) {
      if (ddown.style.display == "block") ddown.style.display = "none";
      else ddown.style.display = "block";
    } else {
      console.error("Element with class 'dropdown-container' not found.");
    }
  }
  
  if(!token){
    return <div>

    </div>
  }
  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: sideNavWidth + "px" }}
      >
        <div className="sidebar-header">
          <Link to="javascript:void(0)" onClick={closeNav} className="header-icon" >
            &times;
          </Link>
          <img src="./logo.png" alt=""  className="sidebarlogo"/>
        </div>

        <Link to="/AdminDashboard">Dashboard</Link>
        <button
          onClick={() => {
            toggledropdown();
          }}
          class="dropdown-btn"
        >
          Manage Users
        </button>
        <div class="dropdown-container">
          <ul>
            <li>
              <Link to="/artist">Artist</Link>
            </li>
            <li>
              <Link to="/patron">Patron</Link>
            </li>
            <li>
              <Link to="/partner">Partners</Link>
            </li>
            <li>
              <Link to="/Artlover">Art-Lover</Link>
            </li>
          </ul>
        </div>
        <Link to="#">ManageProfile</Link>
        <Link to="/ArtsistManagement">Manage Artists</Link>
        <Link to="/Opportunity">Manage Opportunities</Link>
        <Link to="/Viewevents">Manage Events</Link>
        <Link to="#">Manage Art </Link>
        <Link to="/ManageSkills">Manage Skills</Link>
        <Link to="/ManageLanguages">Manage Languages</Link>
        <Link to="#">Manage Jobs</Link>
        <Link to="">Manage Banners</Link>
        <Link to="#">Manage Advertisement</Link>
        <Link to="#">Manage Payments</Link>
        <Link to="">Plans</Link>
        <Link to="">Review</Link>
        <Link to="">Credit</Link>
        <Link to="">Feedbacks</Link>
        <Link to="">Users Notification</Link>
        <Link to="">Reports</Link>
        
      </div>
      <div className="Navbar">
        <img
        className="first_nav_image"
          style={{
            position: "absolute",
            left: "16%",
            top: "2rem",
            width: "14rem",
          }}
          src="./navimage.png"
          alt=""
        />
        <div className="Ham_log">
        <span
          className="Hamburger"
          style={{
            cursor: "pointer",
            color: "white",
            fontSize: "30px",
            margin: "auto 40px",
          }}
          onClick={openNav}
        >
          &#9776;
        </span>
        
        <Link className="Admin-logout" to="/" onClick={() =>{
           toast.dismiss(toast.loading("loading..."));
           toast.success("Successfully Log-out");
           localStorage.clear();
           navigate("/login");
        }}>Logout </Link>
          </div>

        <img
          style={{
            position: "absolute",
            left: "55%",
            top: "-11rem",
            width: "14rem",
          }}
          src="./navimage.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default YourComponent;