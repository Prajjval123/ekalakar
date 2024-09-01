import React, { useState, useEffect } from "react";
import "./RootAdmin.css";
import Avatar from "./AdminComponent/Avatar/Avatar";
import Artist_navbar from "../ArtisitPages/Artist_navbar";
import menu from "./assets/threeLine.svg";
import Contact from "./Contact/Contact";
import DashBoard from "./Dashboard/DashBoard";
import ViewUser from "./ViewUser/ViewUser";
import ViewApplicants from "./ViewApplicants/ViewApplicants";
import ViewCoursesProduct from "./ViewCoursesProduct/ViewCoursesProduct";
import Footer from "../Footer/Footer";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import ViewArtistApplication from "./ViewApplicants/ViewArtistApplication/ViewArtistApplication";
import AdminNavbar from "./AdminNavbar";
import UserVerfication from "./UserVerification/UserVerfication";
import MoreinfoArtistOppurtunity from "./ViewApplicants/ViewArtistApplication/ArtistOppurtunity/MoreInfo/MoreinfoArtistOppurtunity";
import ViewProfile from "./ViewProfile/ViewProfile";
import EditAdminProtfolio from "./ViewUser/EditUserPortfolio/EditUserProtfolio";

function RootAdmin() {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();
  let { id } = useParams();

  useEffect(() => {
    if (windowWidth >= 650) {
      setNav(true);
    }
    const updateDimension = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [windowWidth]);

  const navhandler = () => {
    setNav((pre) => {
      return !pre;
    });
  };
  const [checkNav, setCheckNav] = useState([
    "userverification",
    "admineditPortfolio",
    "viewmoreappliaction",
  ]);
  if (id !== undefined) {
    checkNav.push(`view-user/${id}`, `/view-applicants/${id}`);
  }

  let leftNavVisibilty = true;
  checkNav.map((i) => {
    if (pathname.includes(i)) {
      leftNavVisibilty = false;
    }
  });

  return (
    <div className="root-admin-wrapper">
      <div className="root-admin-container">
        <AdminNavbar />
        <div className="root-admin-content-wrapper">
          {leftNavVisibilty && (
            <div className="menu-icon-admin-cont" onClick={navhandler}>
              <img src={menu} />
            </div>
          )}
          {nav && leftNavVisibilty && (
            <div className="admin-menu-wrapper">
              <div className="admin-status-btn-container r_container_admin">
                <Avatar styling={{ alignSelf: "center", width: "150px" }} />
                <h5>Admin Name</h5>
                <NavLink
                  to="/admin/dashboard"
                  className="admin-status-btn"
                  defaultChecked={true}
                >
                  Dashboard
                </NavLink>
                <NavLink to="/admin/view-user" className="admin-status-btn">
                  View User
                </NavLink>
                <NavLink
                  to="/admin/view-applicants"
                  className="admin-status-btn"
                >
                  View Applicants
                </NavLink>
                <NavLink
                  to="/admin/courses-products"
                  className="admin-status-btn"
                >
                  View Courses and Products
                </NavLink>
                <NavLink to="/admin/contact" className="admin-status-btn">
                  Contact
                </NavLink>
              </div>
            </div>
          )}

          <div className="root-desc-tab-cont">
            {/* {pathname === `/admin/view-user/${id}` && <ViewProfile />}
            {pathname === `/admin/view-user/${id}/edit` && (
              <EditAdminProtfolio />
            )}
            {pathname == `/admin/view-applicants/${id}` && (
              <ViewArtistApplication />
            )}
            {pathname == `/admin/view-applicants/${id}/view-more` && (
              <MoreinfoArtistOppurtunity />
            )} */}
            <Outlet />

            {/* {pathname == "/admin/userverification" && <UserVerfication />}

            {pathname == "/admin/dashboard" && <DashBoard />}
            {pathname == "/admin/view-user" && <ViewUser />}

            {pathname == "/admin/view-applicants" && <ViewApplicants />}

            {pathname == "/admin/courses-products" && <ViewCoursesProduct />}

            {pathname == "/admin/contact" && <Contact />}
             */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RootAdmin;
