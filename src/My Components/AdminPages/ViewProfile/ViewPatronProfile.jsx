import React from "react";
import "./ViewProfile.css";
import Patron_navbar from "../../PatronPages/Patron_Navbar";
import PortfolioDisplayTemplate from "./PatronCard/PatronPortfolioCard";
import tick from "../assets/tick.svg";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

function ViewProfile() {
  const navigate = useNavigate();
  return (
    <div className="admin-page-root-container-vp">
      <Patron_navbar />
      <div className="section-division-admin-viewProfile">
        <PortfolioDisplayTemplate />

        <div className="userName_review_container" style={{ alignItems: 'center',justifyContent:'center' }}>
          <div className="portfolio_verify_userName">
            <p className="portfolio_userName">Dael Steyn</p>
            <div className="portfolio_verify_img">
              {" "}
              <img src={tick} alt="tick" />{" "}
            </div>
          </div>
        </div>
        <div className="admin-about-me-container">
          <h2>About Company</h2>
          <p>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </div>
      </div>

      <div className="section-division-admin-viewProfile">
        <div className="admin-vp-button-bottom">
          <button className="admin-vp-btn">Remove Patron</button>
          <button className="admin-vp-btn" onClick={() => navigate("/EditPatronPortfolio")}>Edit Patron Details</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewProfile;
