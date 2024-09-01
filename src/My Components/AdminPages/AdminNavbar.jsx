import React, { useState, useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../FrontPage/Images/eK_Logo_Trasnparent_1.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setRefreshToken,
} from "../../reducer/slices/authSlice";

export default function AdminNavbar() {
  const [AccountpopupVisible, setAccountPopupVisible] = useState(false);
  const accountPopupRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleAccountPopup = () => {
    setAccountPopupVisible(!AccountpopupVisible);
  };
  const handleClickOutside = (event) => {
    if (
      accountPopupRef.current &&
      !accountPopupRef.current.contains(event.target)
    ) {
      setAccountPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      style={{ zIndex: "99" }}
      className="navbar nav_frontpage navbar-expand-lg "
      // bg="light"
      expand="lg"
    >
      {/* <Container> */}
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
        <div>
          <Link to={"/chatApp"}>
            <button style={{ border: "none", background: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g filter="url(#filter0_d_422_1847)">
                  <circle cx="30" cy="29" r="20" fill="white" />
                  <circle
                    cx="30"
                    cy="29"
                    r="19.5"
                    stroke="black"
                    stroke-opacity="0.2"
                  />
                </g>
                <path
                  d="M36.7692 21H23.2308C22.9044 21 22.5913 21.1405 22.3605 21.3905C22.1297 21.6406 22 21.9797 22 22.3333V35.6667C21.9986 35.9209 22.065 36.1702 22.1912 36.3846C22.3174 36.5989 22.4981 36.7692 22.7116 36.875C22.8742 36.957 23.0514 36.9997 23.2308 37C23.5197 36.9993 23.7991 36.8877 24.0193 36.685C24.0229 36.6824 24.0263 36.6793 24.0293 36.6758L26.5 34.3333H36.7692C37.0957 34.3333 37.4087 34.1929 37.6395 33.9428C37.8703 33.6928 38 33.3536 38 33V22.3333C38 21.9797 37.8703 21.6406 37.6395 21.3905C37.4087 21.1405 37.0957 21 36.7692 21ZM36.7692 33H26.5C26.2102 32.9999 25.9296 33.1105 25.7077 33.3125L25.6985 33.3217L23.2308 35.6667V22.3333H36.7692V33Z"
                  fill="black"
                />
                <defs>
                  <filter
                    id="filter0_d_422_1847"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_422_1847"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_422_1847"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </Link>
          <button
            onClick={toggleAccountPopup}
            style={{ border: "none", background: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <g filter="url(#filter0_d_422_1850)">
                <circle cx="30" cy="29" r="20" fill="#AD2F3B" />
              </g>
              <path
                d="M30 21C31.0609 21 32.0783 21.4214 32.8284 22.1716C33.5786 22.9217 34 23.9391 34 25C34 26.0609 33.5786 27.0783 32.8284 27.8284C32.0783 28.5786 31.0609 29 30 29C28.9391 29 27.9217 28.5786 27.1716 27.8284C26.4214 27.0783 26 26.0609 26 25C26 23.9391 26.4214 22.9217 27.1716 22.1716C27.9217 21.4214 28.9391 21 30 21ZM30 23C29.4696 23 28.9609 23.2107 28.5858 23.5858C28.2107 23.9609 28 24.4696 28 25C28 25.5304 28.2107 26.0391 28.5858 26.4142C28.9609 26.7893 29.4696 27 30 27C30.5304 27 31.0391 26.7893 31.4142 26.4142C31.7893 26.0391 32 25.5304 32 25C32 24.4696 31.7893 23.9609 31.4142 23.5858C31.0391 23.2107 30.5304 23 30 23ZM30 30C32.67 30 38 31.33 38 34V37H22V34C22 31.33 27.33 30 30 30ZM30 31.9C27.03 31.9 23.9 33.36 23.9 34V35.1H36.1V34C36.1 33.36 32.97 31.9 30 31.9Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_422_1850"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_422_1850"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_422_1850"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>

          {AccountpopupVisible && (
            <div
              ref={accountPopupRef}
              className="Accountpopup"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "white",
                position: "absolute",
                width: "297px",
                marginLeft: "-170px",
                borderRadius: "10px",
              }}
            >
              <Link
                to={"/admin/userverification"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                User Verification
              </Link>
              <Link
                to={"/admin/dashboard"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Dashboard
              </Link>
              <Link
                to={"/admin/upload-oppurtunities"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Upload Opportunities
              </Link>
              <Link
                to={"/admin/sell-product"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Sell Product
              </Link>
              <Link
                to={"/admin/skill-development"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Skill Development
              </Link>
              <Link
                to={"/admin/product-store"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Product Store
              </Link>
              <Link
                to={"/admin/latest-news"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Latest News
              </Link>
              <Link
                to={"/admin/contact"}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Contact Us
              </Link>
              <Link
                to={"/login"}
                onClick={() => {
                  console.log("Logging out..."); // Corrected function name
                  dispatch(setAccessToken(null));
                  dispatch(setRefreshToken(null));
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  localStorage.removeItem("role");
                  toast.success("Successfully logged out", {
                    position: "top-center",
                  }); // Assuming 'toast' is correctly imported
                  // Assuming 'navigate' is corr
                }}
                style={{
                  height: "48px",
                  boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
}
