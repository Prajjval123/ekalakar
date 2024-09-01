import React from "react";
import "./Our_Team.css";

export default function Our_Team() {
  return (
    <div className="OurTeam_Page">
      <h1 className="OurTeam_heading1">eK TEAM</h1>
      <div className="OurTeam_Media">
        <div className="OurTeam_Media_Items">
          <img
            src="assets/OurTeam/Sanjaya.png"
            className="OurTeam_Media_Item"
            alt="Photos"
          />
          <h3>
            Dr. Sanjaya Pradhan
            <span style={{ display: "inline-block" }}>CEO & Founder</span>
          </h3>
          <div className="OurTeam_hover">
            <p>
              Sanjaya is an accomplished and versatile leader with a strong social compass. He brings over two decades of experience working with Corporates, Governments and NGOs in CSR, Skills & Livelihoods, Disability & Inclusion. He has worked with organizations - Tata Power, Mahindra, National Skill Development Corporation and Gram Vikas. He is an Erasmus Mundus Scholar, Ph. D, and M.A. in Social Work (MSW) from TISS.
            </p>
          </div>
        </div>

        <div className="OurTeam_Media_Items">
          <img
            src="assets/OurTeam/Amit.png"
            className="OurTeam_Media_Item"
            alt="Videos"
          />
          <h3>
            Amit Dutta
            <span style={{ display: "inline-block" }}>Co-Founder and Chief Strategy Officer</span>
          </h3>
          <div className="OurTeam_hover">
            <p>
              Amit is a senior strategy leader, who is passionate about social
              impact. He brings 20+ years of experience in Government & Social
              Sector Consulting, Strategy and Implementation with Firms like EY
              & KPMG. He has led national level programs related to Private
              Sector Development, Skills & Livelihoods, Social Welfare and
              Sanitation. He is an MBA in Marketing and has a certification in
              Leading Innovation from Stanford University.
            </p>
          </div>
        </div>

        <div className="OurTeam_Media_Items">
          <img
            src="assets/OurTeam/Yogesh.png"
            alt="Media Print"
            className="OurTeam_Media_Item"
          />
          <h3>
            Yogesh Pandey
            <span style={{ display: "inline-block" }}>Head-Operations</span>
          </h3>
          <div className="OurTeam_hover">
            <p>
              Yogesh is a seasoned professional and multi-talented artist. He
              has over 15 years of experience in Administration & Operations
              gained through an impressive career in the armed forces. He is a
              creative artist himself, excelling in the areas of script writing,
              poetry and singing. Yogesh is passionate about discovering
              talented arts and artists and showcasing them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
