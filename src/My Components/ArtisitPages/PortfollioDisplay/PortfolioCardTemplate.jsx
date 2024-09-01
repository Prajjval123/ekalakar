import "./portfolioCardTemplate.css";
import rectangle from "./assets/reactangle.svg";
import ekalakaar from "./assets/ekalakaar.svg";
import Ellipse from "./assets/Ellipse 71.svg";
import blackRec from "./assets/blackRec.svg";
import phone from "./assets/phone.svg";
import mail from "./assets/Mail.svg";
import location from "./assets/location.svg";
import instagram from "./assets/instagram.svg";
import profileImg from "./assets/profile.svg";
import facebookimg from "./assets/facebookimg.svg";

function PortfolioDisplayTemplate({
  portfolioData,
  editCard = false,
  viewAsAdmin = false,
  avatar,

}) {

  console.log(avatar);
  return (
    <section className="portfolio_card">
      {/* left part */}
      <div className="card_userdetails">
        <img src={ekalakaar} alt="" className="portfolio_ekalakaar_image" />
        <div className="card_details_wrapper">
          <div className="card_single_detail">
            <div
              className={`card_details_image ${
                editCard ? "blackBackground" : "redBackground"
              } `}
            >
              {" "}
              <img src={phone} alt="" />{" "}
            </div>
            <p className="card_detail_text">{portfolioData?.phoneNumber}</p>
          </div>

          <div className="card_single_detail">
            <div
              className={`card_details_image ${
                editCard ? "blackBackground" : "redBackground"
              } `}
            >
              {" "}
              <img src={mail} alt="" />{" "}
            </div>
            <p className="card_detail_text">{portfolioData?.email}</p>
          </div>

          <div className="card_single_detail">
            <div
              className={`card_details_image ${
                editCard ? "blackBackground" : "redBackground"
              } `}
            >
              {" "}
              <img src={location} alt="" />{" "}
            </div>
            <p className="card_detail_text">
              {portfolioData?.address?.state}{" "}
              {portfolioData?.address?.pincode}
            </p>
          </div>
        </div>

        <div className="card_user_socialMedia_details">
          <div className="card_single_socialDetail">
            <img
              src={instagram}
              alt="socialMedia_Image"
              className="card_socialMedia_image"
            />
            <p className="card_socialMedia_id">
              {viewAsAdmin == false
                ? portfolioData?.handles?.instagram
                : portfolioData?.handles?.instagram}
            </p>
          </div>
          <div className="card_single_socialDetail">
            <img
              src={facebookimg}
              alt="socialMedia_Image"
              className="card_socialMedia_image"
            />
            <p className="card_socialMedia_id">
              {viewAsAdmin == false
                ? portfolioData?.handles?.facebook
                : portfolioData?.handles?.facebook}
            </p>
          </div>
        </div>
      </div>

      {/* rectangle part  */}
      <img
        src={editCard ? blackRec : rectangle}
        alt=""
        className="rectange_image"
      />

      {/* third part */}
      <div className="card_userName_details">
        {editCard ? (
          <div className="user_photo user_profile">Your Photo Here</div>
        ) : (
          //  <img src={`https://api.ekalakaar.com/uploads/avatars/${portfolioData?.avatar}`} alt="" className="user_profile" />
          <img src={avatar} alt="" />
        )}
        <h1 className="card_userName">
          {portfolioData?.firstName} {portfolioData?.lastName}
        </h1>
        <h1 className="card_userProfession">{portfolioData?.natureOfArt}</h1>
      </div>
    </section>
  );
}

export default PortfolioDisplayTemplate;