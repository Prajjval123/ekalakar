import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import "./HowItWorks.css"
import logo from "./Images/eK_Logo_Trasnparent_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function HowItWorks() {
  const { role, accessToken } = useSelector((state) => state.auth)
  const mystyle = {
    fontSize: "large",
    fontWeight: "500",
    color: "black",
  };
  const back = {
    backgroundColor: "transparent",
    marginLeft: "0vh",
    marginTop: "0vh",
  };

  const How_It_Works = [
    {
      src: "assets/HowItWorks/usermanual.pdf",
    },
    {
      src: "assets/HowItWorks/platform.mp4",
    },
    {
      src: "assets/HowItWorks/app.mp4",
    }
  ]

  const token = localStorage.getItem("accessToken");

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", flexDirection: "column"}}>
      {/* <Navbar
          style={{ zIndex: "99", width: "100%" }}
          className="navbar nav_frontpage navbar-expand-lg "
          id="#navbar"
          expand="lg"
        >
          
          <div className="container-fluid">
            <Navbar.Brand
              className="navbar-brand"
              style={{ position: "static", marginLeft: "0px" }}
            >
              {" "}
              <Link to="/">
                <img src={logo} height="60px" width="80px" alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={mystyle}>
              <div className="navbar-nav" style={back}>
                <Nav className="">
                  <Link
                    to="/"
                    className="nav-item nav-link link-padding"
                    style={{ color: "black" }}
                    onClick={() => window.location.reload()}
                  >
                    Home
                  </Link>
                  <a
                    href="#Benefits"
                    className="nav-item nav-link link-padding"
                    style={{ color: "black" }}
                  >
                    Benefits
                  </a>
                  <a
                    href="#Services"
                    className="nav-item nav-link link-padding"
                    style={{ color: "black" }}
                  >
                    Services
                  </a>
                  <a
                    href="#Mediagallery"
                    className="nav-item nav-link link-padding"
                    style={{ color: "black" }}
                  >
                    Gallery
                  </a>
                  <a
                    href="#Joinek"
                    className="nav-item nav-link link-padding"
                    style={{ color: "black" }}
                  >
                    Join eK
                  </a>
                  <Link
                    to="/Ekevents"
                    className="nav-item nav-link link-padding"
                    style={{ color: "#AD2F3B" }}
                  >
                    Updates
                  </Link>
                  <Link
                    to="/HowItWorks"
                    className="nav-item nav-link link-padding"
                    style={{ color: "#AD2F3B" }}
                  >
                    How It Works
                  </Link>
                </Nav>
              </div>

              <div className="navbar-nav ms-auto" style={back}>
                <button
                  className="nav-item nav-link language"
                  style={{
                    color: "black",
                    fontSize: "25px",
                    marginRight: "20px",
                  }}
                >
                  <FontAwesomeIcon icon={faLanguage} />
                </button>
                {!token && (
                  <Link
                    to="/Login"
                    className="nav-item nav-link"
                    style={{ color: "black", border: "1px solid black" }}
                  >
                    Login/Signup
                  </Link>
                )}
                {accessToken !== null && role === "Artist" && (
                  <Link
                    to="/artist_profile"
                    className="nav-item nav-link"
                    style={{ color: "black", border: "1px solid black" }}
                  >
                    Go To Profile
                  </Link>
                )}
                {accessToken !== null && role === "Patron" && (
                  <Link
                    to="/Patron_Profile"
                    className="nav-item nav-link"
                    style={{ color: "black", border: "1px solid black" }}
                  >
                    Go To Profile
                  </Link>
                )}
              </div>
            </Navbar.Collapse>
          
          </div>
        </Navbar> */}
      <div className='User-manual' style={{marginTop: "5%"}}>
        <h1>User Manual</h1>
        <div style={{width:"100%", height:"100%", boxShadow: "4px 4px 15px black", display: "flex", alignItems: "center", justifyContent:"center", margin: "0px"}}>
        <embed src={`../${How_It_Works[0].src}`} type="application/pdf" style={{width: "100%", height: "100%"}}  />
       </div>
      </div>
      <div className='P_A_Videos'>
        <h1>Platform Video</h1>
        <video style={{width:"100%", height:"100%", boxShadow: "4px 4px 15px black"}} controls>
          <source src={`../${How_It_Works[1].src}`} type="video/mp4"/>
        </video>
        <h1 style={{marginTop: "50px"}}>APP Video</h1>
        <video style={{marginBottom:"30px", height:"400px", boxShadow: "4px 4px 15px black"}}  controls>
          <source src={`../${How_It_Works[2].src}`} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}

export default HowItWorks;
