import "./partnerProfile.css";
import bg from "./assets/bg.svg";
import dp from "./assets/dp.svg";
import telephone from "./assets/telephone.svg";
import mail from "./assets/mail.svg";
import { useState } from "react";
import ConfirmationModal from "../Common/ConfirmationModal";
import BasicInformation from "./BasicInformation";
import ContactInfo from "./ContactInfo";
import ServiceInfo from "./ServiceInfo";
import AdditionalInfo from "./AdditionalInfo";
import SocialMediaInfo from "./SocialMediaInfo";
import Partner_Navbar from "../Partner_Navbar";


const partnerName = "Partner Name";

function Partner_Profile() {

  const [confirmationModal, setConfirmationModal] = useState(null);
  console.log(confirmationModal);



  return (
    <>
      <Partner_Navbar />
      <div className={`partner_profile_wrapper ${confirmationModal !== null && 'addBgFilter'}  `}>
        {/* dp section */}
        <section className="partner_hero_section">
          <div className="partner_dp_section">
            <img src={bg} alt="" className="partner_hero_bg" />
            <img src={dp} alt="" className="partner_hero_dp" />
            <p className="partner_name">{partnerName}</p>
            <div className="partnerHeroData">
              <p className="partnerdata">
                Member Since{" "}
                <span className="partner_user_data"> Last Month </span>{" "}
              </p>

              <p className="partnerdata">
                Product Posted <span className="partner_user_data"> 0</span>{" "}
              </p>

              <p className="partnerdata">
                Verified With{" "}
                <span className="partner_user_data">
                  <img src={telephone} alt="" />
                </span>{" "}
                <span>
                  <img src={mail} alt="" />{" "}
                </span>{" "}
              </p>

              <p className="partnerdata">
                Product Sold <span className="partner_user_data">0</span>
              </p>
            </div>
          </div>
        </section>

        {/* basic info */}
        <BasicInformation />

        {/* contact information */}
        <ContactInfo setConfirmationModal={setConfirmationModal} />

        {/* service information */}
        <ServiceInfo />

        {/* additional information */}
        <AdditionalInfo setConfirmationModal={setConfirmationModal} />


        {/* social media links */}
        <SocialMediaInfo />

        <button className="updateBtn">Update</button>


        {
          confirmationModal !== null && (
            <ConfirmationModal confirmationModal={confirmationModal} setConfirmationModal={setConfirmationModal} />
          )
        }

      </div>


    </>
  );
}

export default Partner_Profile;
