import React from "react";
import "./EditUserProtfolio.css";
import PortfolioDisplayTemplate from "../../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";
import Input from "../../AdminComponent/InputComponent/Input";
import Footer from "../../../Footer/Footer";

function EditUserPortfolio() {
  return (
    <div className="admin-page-root-container">
      {/* <Artist_navbar /> */}
      <div className="section-division-admin-viewPortfolio">
        <PortfolioDisplayTemplate />
        <button className="admin-vp-btn">Upload Profile Picture</button>

        <div className="d-flex flex-column w-100 align-items-center justify-content-center gap-4">
          <Input
            label="Card Display Name"
            placeholder="Enter the name for card"
          />
          <Input
            label="Category"
            placeholder="Enter your performance category"
            type="number"
          />
          <Input
            label="Contact Number"
            placeholder="Enter your mobile number"
          />
          <Input
            label="Email Id"
            placeholder="Enter your email address"
            type="email"
          />
          <Input label="Location" placeholder="Enter your location" />
          <Input label="Instagram" placeholder="Instagram profile url" />
          <Input label="Facebook" placeholder="Facebook profile url" />
          <Input label="Full  Name" placeholder="Enter your full name here" />

          <label className="d-flex flex-column gap-2 label-port">
            <p className="m-0" style={{ color: "black" }}>
              About
            </p>
            <textarea
              className="flex-grow-1 adin-tetxx "
              placeholder="Tell the world about yourself"
            ></textarea>
          </label>
          <Input label="Art Name" placeholder="Enter art name" />
          <Input
            label="Performance type"
            placeholder="Enter performance type"
          />
          <Input
            label="No of Performance"
            placeholder="Enter no of performance"
          />

          <Input
            label="Charges per performance"
            placeholder="Enter charges per performances"
          />
          <Input label="Experience" placeholder="Enter your experience" />
          <Input
            label="Events Type"
            placeholder="Enter multiple events you like to host"
          />
          <Input
            label="Minimum Budget"
            placeholder="Enter your minimum budget"
          />
          <label
            className="d-flex label-port-file"
            style={{ marginTop: "20px" }}
          >
            <p className="m-0" style={{ color: "black" }}>
              Performance Photo
            </p>
            <input type="file" placeholder="Upload File" />
          </label>
          <label
            className="d-flex label-port-file "
            style={{ marginTop: "30px" }}
          >
            <p className="m-0" style={{ color: "black" }}>
              Performance Video
            </p>
            <input type="file" placeholder="Upload File" />
          </label>
        </div>
        <button style={{ minWidth: "200px" }} className="admin-vp-btn">
          Upload
        </button>
        <button
          style={{
            padding: "10px",
            fontSize: "20px",
            fontWeight: "600",
            color: "#000000",
            border: "none",
            backgroundColor: "transparent",
            marginTop: "-20px",
          }}
        >
          Cancel
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default EditUserPortfolio;
