import React from "react";
import "./Our_Advisors.css";
import { Link } from "react-router-dom";

export default function Our_Advisors() {
  return (
    <div className="OurAdvisors_Page">
      <h1 className="OurAdvisors_heading1">eK ADVISORS</h1>
      <div className="OurAdvisors_Media">
        <div className="OurAdvisors_Media_Items">
          <img
            src="assets/OurAdvisors/Amarendra.png"
            className="OurAdvisors_Media_Item"
            alt="Photos"
          />
          <h3>
            Dr. Amarendra Khatua
            <span style={{ display: "inline-block" }}>IFS (Retd.)</span>
          </h3>
          <div className="OurAdvisors_hover">
            <p>
              Dr. Amarendra is a senior Indian Foreign Service (IFS), Former
              Secretary (Special Assignment) at Ministry of External Affairs,
              Govt of India and Director General, Indian Council for Cultural
              Relations. He was the former High Commissioner of India to
              Argentina, Ivory Coast. He has been mentoring several social and
              cultural enterprises
            </p>
          </div>
        </div>

        <div className="OurAdvisors_Media_Items">
          <img
            src="assets/OurAdvisors/Prakash.png"
            className="OurAdvisors_Media_Item"
            alt="Videos"
          />
          <h3>
            Dr. T Krishna Prasad
            <span style={{ display: "inline-block" }}>IPS (Retd.)</span>
          </h3>
          <div className="OurAdvisors_hover">
            <p>
            He is retired Telangana Director General of Police (DGP). He studied  Engineering in REC Warangal and masters from IIM Ahmedabad. He has been working with vulnerable groups particularly from rural and tribal areas. He advises eKalakaar for bringing hidden talents from unknown areas and create opportunity for them.
            </p>
          </div>
        </div>

        <div className="OurAdvisors_Media_Items">
          <img
            src="assets/OurAdvisors/Krishna.png"
            alt="Media Print"
            className="OurAdvisors_Media_Item"
          />
          <h3>
            Col Prakash Tewari
            <span style={{ display: "inline-block" }}>(Retd.)</span>
          </h3>
          <div className="OurAdvisors_hover">
            <p>
            Col Prakash Tewari, is a retired Indian Army veteran. He currently sits on the Board of the Grameen Foundation. He has worked with DLF Ltd., Jindal Steel and Power Limited and Tata Power Company Limited. He has written a book on Leadership Development “Bunker to Bliss”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
