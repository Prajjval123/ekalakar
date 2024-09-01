import Joinekstyles from "./Joinek.css";
import Joinek_image from "./Images/FrameComponent/pic.png";

const FrameComponent = () => {
  return (
    <div className={Joinekstyles.row1}>
      <div className={Joinekstyles.joinUs}>JOIN eK</div>
      <div className="col-lg-8 col-md-12" style={{ "  width": "100%" }}>
        <div className={Joinekstyles.joinUsParent}>

          <div className={Joinekstyles.joinTheCulturalContainer}>
            <p className={Joinekstyles.joinTheCultural}>
              Join the cultural revolution with eKalakaar! Become a patron- A
              catalyst for preserving and promoting cultural heritage by creating
              unforgettable experiences. Become an investor- in the future of
              cultural enterprise and excellence with eKalakar.
            </p>
            <p className={Joinekstyles.joinTheCultural}>&nbsp;</p>
            <p className={Joinekstyles.joinTheCultural}>
              We call out to all stakeholders in our ecosystem- Artists, Partners,
              Art Lovers, Volunteers and Interns, to join us today on a
              transformative journey of art, connection and shared prosperity!
            </p>
          </div>

          <div className="joinusbutton">
            <div className="row">
              <div className="col-lg-10  col-md-10 offset-md-1  col-md-6">

                <button className="btn11">Patron</button>
                <button className="btn11">Artist</button>
                <button className="btn11">Partners</button>
                <button className="btn11">Art-Lover</button>
                <button className="btn11">Volunteer</button>
                <button className="btn11">Investor</button>
                <button className="btn11">Work with us</button>
                <button className="btn11">Intern</button>

              </div>

            </div>

          </div>




        </div>
      </div>
      <div className="col-lg-4" style={{
      }}>
        <img
          className="" style={{ width: "30vw", height: "60vh" }}
          alt=""
          src={Joinek_image}
        />
      </div>
    </div>
  );
};

export default FrameComponent;