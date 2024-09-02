import React from "react";
import { Helmet } from "react-helmet";
import { Navbar_frontpage } from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "./BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import rect205 from "../../../public/assets/Ekworld/Rectangle206.png"

import {
  faFacebookF,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  faCamera,
  faVideo,
  faPrint,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

import logo from "./Images/eK_Logo_Trasnparent_1.png";
/*HomePage*/
import "./HomePage.css";
/*About US*/
import AboutUstyles from "./AboutUs.module.css";
/*Benefits */
import "./Benefits.css";
/*Services*/
import "./Services.css";
/*Ekworld*/
import "./Ekworld.css";
/*EKperformances*/
import "./Ekperformances.css";
/*our Patrons*/
import "./OurPatrons.css";
/*OurArtists*/
import "./OurArtists.css";
/*OurPartners*/
import "./OurPartners.css";
/*MediaGallery*/
import "./MediaGallery.css";
import "./Navbar.css";
/*OurAdvisors*/
import "./Our_Advisors.css";

/*our experts */
import "./Ekexperts.css";
/*OurTeam*/
import "./Our_Team.css";
/*Joinek*/
import "./Joinek.css";

// import Joinekstyles from './Joinek.css';
import Joinek_image from "./Images/FrameComponent/pic.png";
/*JoinUs*/
// import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import "./JoinUs.css";
/*EkPhotos*/
import { useSelector } from "react-redux";

const HomePage_images = [
  {
    src: "assets/Homepage/img1.png",
  },
  {
    src: "assets/Homepage/Odissi.mp4",
  },
  {
    src: "assets/Homepage/Bharatnatyam.mp4",
  },
];
{
  /** 
  {
    src: 'assets/HomePage/3. Katthak.mp4',
  },
  {
    src: 'assets/HomePage/4. Kathakkali.mp4',
  },
  {
    src: 'assets/HomePage/5. Mohiniyattam.mp4',
  },
  {
    src: 'assets/HomePage/6. Kuchipudi.mp4',
  },
  {
    src: 'assets/HomePage/7. Manipuri.mp4',
  },
  {
    src: 'assets/HomePage/8. Sattriya.mp4',
  },
  {
    src: 'assets/HomePage/9. Bhortal Nritya.mp4',
  },
  {
    src: 'assets/HomePage/10. Chhau 1.mp4',
  },
  {
    src: 'assets/HomePage/11. Graba.mp4',
  },
  {
    src: 'assets/HomePage/12. Gotipua.mp4',
  },
  {
    src: 'assets/HomePage/13. Lavani.mp4',
  },
  {
    src: 'assets/HomePage/14. Bagurumba.mp4',
  },
  {
    src: 'assets/HomePage/15. Sambhalpuri1.mp4',
  },
  {
    src: 'assets/HomePage/16. Lambadi.mp4',
  },
  */
}

const OurArtists_images = [
  {
    src: "assets/OurArtists/AshokChhauOdisha.jpg",
    caption: "Ashok",
    subcaption: "CHHAU",
  },
  {
    src: "assets/OurArtists/SayliKathakMumbai.jpg",
    caption: "Sayli",
    subcaption: "KATHAK",
  },
  {
    src: "assets/OurArtists/ChitrasenGOTIPUAOdisha.jpg",
    caption: "Chitrasen",
    subcaption: "GOTIPUA",
  },
  {
    src: "assets/OurArtists/MissSubhashriODISSIOdisha.jpeg",
    caption: "Subhashri",
    subcaption: "ODISSI",
  },
  {
    src: "assets/OurArtists/PadminiDoraFOLKOdisha.bmp",
    caption: "Padmini ",
    subcaption: "FOLK",
  },
  {
    src: "assets/OurArtists/SadasivaJiCHHAUOdisha.jpeg",
    caption: "Sadasiva",
    subcaption: "CHHAU",
  },
  {
    src: "assets/OurArtists/JayantiMalaKathakMumbai.jpg",
    caption: "Jayanti",
    subcaption: "KATHAK",
  },

  {
    src: "assets/OurArtists/BabitaMayurbhanjChhauOdisha.jpg",
    caption: "Babita",
    subcaption: "CHHAU",
  },

  {
    src: "assets/OurArtists/JyotirmayiOdissiOdisha.jpeg",
    caption: "Jyotirmayi",
    subcaption: "ODISSI",
  },
  {
    src: "assets/OurArtists/JyotiKathakMumbai.jpg",
    caption: "Jyoti",
    subcaption: "KATHAK",
  },
  {
    src: "assets/OurArtists/JayantiMalaKathakMumbai.jpg",
    caption: "Chitta",
    subcaption: "CHHAU",
  },
  {
    src: "assets/OurArtists/ManasiAtreKathakMumbai.jpg",
    caption: "Manasi",
    subcaption: "KATHAK",
  },
  {
    src: "assets/OurArtists/SomyashreeSambalpuriOdisha.jpeg",
    caption: "Somyashree",
    subcaption: "SAMBALPURI",
  },
  {
    src: "assets/OurArtists/RishikaKathakMumbai.bmp",
    caption: "Rishika",
    subcaption: "KATHAK",
  },

  {
    src: "assets/OurArtists/SmailshreeSambalpuriOdisha.jpeg",
    caption: "Smailshree",
    subcaption: "SAMBALPURI",
  },
  {
    src: "assets/OurArtists/TapoiChhauOdisha.jpg",
    caption: "Tapoi",
    subcaption: "CHHAU",
  },
  {
    src: "assets/OurArtists/TejashreeKathakMumbai.jpg",
    caption: "Tejashree",
    subcaption: "KATHAK",
  },
  {
    src: "assets/OurArtists/AneriShethMohiniAttam.jpg",
    caption: "Aneri",
    subcaption: "Mohini Attam",
  },
  {
    src: "assets/OurArtists/ShrutiRanadeBharatNatyam.jpg",
    caption: "Shruti",
    subcaption: "BharatNatyam",
  },
];

const OurPatrons_images = [
  {
    src: "assets/OurPatrons/GIZ.jpg",
    // caption: "Chitrasen",
    subcaption: "GIZ",
  },
  {
    src: "assets/OurPatrons/Goregaon.jpg",
    // caption: "Subhashri",
    subcaption: "Goregaon",
  },
  {
    src: "assets/OurPatrons/Mayfair.jpg",
    // caption: "Padmini ",
    subcaption: "MayFair",
  },
  {
    src: "assets/OurPatrons/Pantiss.jpg",
    // caption: "Sadasiva",
    subcaption: "Pantiss",
  },
  {
    src: "assets/OurPatrons/Bhartiya.jpg",
    // caption: "Ashok",
    subcaption: "Bhartiya",
  },
  {
    src: "assets/OurPatrons/Tatapower.jpg",
    // caption: "Chitta",
    subcaption: "TataPower",
  },
  {
    src: "assets/OurPatrons/Tiss.jpg",
    // caption: "TISS",
    subcaption: "TISS",
  },
  {
    src: "assets/OurPatrons/Unicef.jpg",
    // caption: "Hardik",
    subcaption: "Unicef",
  },
];
const OurPartners_images = [
  {
    src: "assets/OurPartners/OurPartners_Kalakruti.jpeg",
    caption:
      "Jayanti Mala has given her best performance in every part of the world, in India as well as abroad for which she will be remembered forever about her Art in the Audience. mala is very versatile in Abhinaya & laikari, the clearity of her hand mudras and movements are just excellent.",
    //subcaption: "",
    //url:""
  },
  {
    src: "assets/OurPartners/OurPartners_Aamad.jpg",
    caption:
      "AAMAD Dance Centre (NGO), founded by renowned Kathak exponent & Choreographer Rani Khanum in 1996 and considered  one of the premier performing arts organizations in India, its main mission is to enhance integration and diversity in the arts, uniting all abilities. It has been recognised by the Dept. of Culture & Sangeet Natak Akademi, empanelled under ICCR - (Ministry of External Affairs) & worked in cooperation with Kathak Kendra  New Delhi. ",
  },

  {
    src: "assets/OurPartners/OurPartners_Gokul_Gurukul.png",
    //caption: "Jayanti Mala has given her best performance in every part of the world, in India as well as abroad for which she will be remembered forever about her Art in the Audience. mala is very versatile in Abhinaya & laikari, the clearity of her hand mudras and movements are just excellent.",
    //subcaption: "",
    //url:""
  },
];

function ReadMore({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setIsExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  if (role === "Admin") {
    navigate("/AdminDashboard");
  }
  const handleReadMore = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <div style={{ display: isExpanded ? "block" : "none" }}>{children}</div>
      {showButton && !isExpanded && (
        <button
          style={{
            outline: "none",
            color: "blue",
            background: "none",
            textDecoration: "underline",
            border: "none",
          }}
          onClick={handleReadMore}
        >
          Read More
        </button>
      )}
    </>
  );
}

function ResponsiveCarousel({ children }) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [responsive, setResponsive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setShowCarousel(true);
        setResponsive(true);
      } else {
        setShowCarousel(false);
        setResponsive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return showCarousel ? (
    <Carousel>{children}</Carousel>
  ) : (
    <div className="Benefits_Media">
      {React.Children.map(children, (child) => (
        <div>{child.props.children}</div>
      ))}
    </div>
  );
}

export function HomePage() {
  const { role, accessToken } = useSelector((state) => state.auth);
  const isSmallScreen = window.matchMedia("(max-width: 800px)").matches;
  const OurArtistsimagesPerSlide = isSmallScreen ? 1 : 3;
  const OurPatronsimagesPerSlide = isSmallScreen ? 1 : 3;
  const OurPartnersimagesPerSlide = isSmallScreen ? 1 : 2;

  let [inputData, setInputData] = useState({});

  const inputChangeHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const [interestedIn, setInterestedIn] = useState("");

  const onClickInterestedOptions = (e) => {
    setInterestedIn(e.target.name);
  };

  const [formStatus, setFormStatus] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    fetch("https://api-ekalakaar-com.onrender.com/api/v1/quries/post-query", {
      method: "POST",
      body: JSON.stringify({ ...inputData, intrestedIn: interestedIn }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("ine 359", res);
        console.log(
          res.statusCode === 201 ? "Form submitted" : "Form not submitted"
        );

        if (res.statusCode === 201) {
          setInputData({
            name: "",
            organization: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
            link: "",
            location: "",
          });

          setFormStatus(true);
          toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          setFormStatus(false);
          toast.error("Unable to submit form. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

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

  const token = localStorage.getItem("accessToken");

  return (
    <>
      <Helmet>
        <script
          src="https://widget.lovi.ai/lovi-widget.min.js"
          lovi-id="mrtKarKS4DMnzyQh4a15kOzq2BG3"
        ></script>
      </Helmet>

      <BackToTop />
      <div id="HomePage" className="HomePage">
        <Navbar
          style={{ zIndex: "99" }}
          className="navbar nav_frontpage navbar-expand-lg "
          id="#navbar"
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
                {/* {!token && (
                  <Link
                    to="/Login"
                    className="nav-item nav-link"
                    style={{ color: "black", border: "1px solid black" }}
                  >
                    Login/Signup
                  </Link>
                )} */}
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
            {/* </Container> */}
          </div>
        </Navbar>
        {/*HomePage*/}

        {/* <Navbar_frontpage /> */}
        <Carousel interval={3000}>
          {/* Display the first image */}
          <Carousel.Item>
            <div className="HomePage_Items" style={{ display: "flex" }}>
              <div className="HomePage_imgitems" style={{ flex: 1 }}>
                <a href={HomePage_images[0].url}>
                  <div className="HomePage_image_container" style={{}}>
                    <img src={HomePage_images[0].src} alt={`Slide 1`} />
                    {/* Add buttons and links as children of this div */}
                    <a href="/#Joinus">
                      <button>Contact eK</button>
                    </a>

                    <a
                      href="https://www.facebook.com/eKalakaarIndia"
                      target="_blank"
                      style={{
                        position: "absolute",
                        top: "85%",
                        left: "10%",
                        fontSize: "2.5rem",
                        transform: "translate(-50%, -50%)",
                        color: "#4267B2",
                      }}
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href="https://twitter.com/eKalakaarIndia"
                      target="_blank"
                      style={{
                        position: "absolute",
                        top: "85%",
                        left: "17%",
                        fontSize: "2.5rem",
                        transform: "translate(-50%, -50%)",
                        color: "#00ACEE",
                      }}
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://www.instagram.com/ekalakaar/"
                      target="_blank"
                      style={{
                        position: "absolute",
                        top: "85%",
                        fontSize: "2.5rem",
                        left: "24%",
                        transform: "translate(-50%, -50%)",
                        color: "#E4405F",
                      }}
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/96085233/admin/"
                      target="_blank"
                      style={{
                        position: "absolute",
                        top: "85%",
                        fontSize: "2.5rem",
                        left: "31%",
                        transform: "translate(-50%, -50%)",
                        color: "#0077B5",
                      }}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://www.youtube.com/@eKalakaarIndia"
                      target="_blank"
                      style={{
                        position: "absolute",
                        top: "85%",
                        fontSize: "2.5rem",
                        left: "38%",
                        transform: "translate(-50%, -50%)",
                        color: "#FF0606",
                      }}
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                      href="https://wa.me/917701872112?text="
                      target="_blank"
                      style={{
                        position: "absolute",
                        top: "85%",
                        fontSize: "2.5rem",
                        left: "45%",
                        transform: "translate(-50%, -50%)",
                        color: "Green",
                      }}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </Carousel.Item>

          {/* Display the rest of the images and videos */}
          {HomePage_images.slice(1).map((image, i) => (
            <Carousel.Item key={i}>
              <div className="HomePage_Items" style={{ display: "flex" }}>
                {image.type === "image" ? (
                  // Display an image
                  <div className="HomePage_imgitems" style={{ flex: 1 }}>
                    <div className="HomePage_image_container">
                      <video src={image.src} alt={`Slide ${i + 2}`} />
                    </div>
                  </div>
                ) : (
                  // Display a video
                  <div className="HomePage_video_items" style={{ flex: 1 }}>
                    <div className="HomePage_video_container">
                      <video src={image.src} autoPlay loop muted>
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/*About US*/}

      <div className={AboutUstyles.frameParent}>
        <div className={AboutUstyles.aboutUsParent}>
          <b className={AboutUstyles.aboutUs}>ABOUT eK</b>
          <b style={{ width: "100%", fontSize: "20px" }}>
            Our mission is to take Art beyond entertainment and harness it's
            untapped potential for business and society
          </b>
          <div className={AboutUstyles.frameGroup}>
            <div className={AboutUstyles.ekalakaarekIsBuildingTheParent}>
              <div className={AboutUstyles.ekalakaarekIsBuilding}>
                eKalakaar (eK) is a Unit of InspirArt Global Pvt. Ltd. eKalakaar
                is building the first integrated technology enabled platform
                that will connect opportunity seekers-Indian traditional
                performing artists, including classical and folk singers,
                dancers, musicians, and theatre artists to performance
                opportunities with talent seekers- Patrons such as high-end
                hospitality, corporates and development sector organizations.
                <ReadMore id="AboutUS_text_Readmore">
                  {" "}
                  <br></br>
                  We provide Indian traditional performing Artists with
                  <i> Naam</i> (recognition), <i>Kaam</i> (opportunities) and{" "}
                  <i>Daam</i> (fair compensation). We are doing this by curating
                  unique experiences for discerning patrons that seek
                  authenticity, experiential engagement, and cultural immersion
                  to create memorable experiences for their end users. These
                  experiences will enable patrons to achieve their business and
                  social impact goals by harnessing the power of traditional
                  Indian performing art
                  <br />
                  <br />
                  <b className={AboutUstyles.whatWeDo}>What We Do</b>
                  <div className={AboutUstyles.makeTalentMeetContainer}>
                    <ul className={AboutUstyles.makeTalentMeetOpportunityT}>
                      <li className={AboutUstyles.makeTalentMeet}>
                        Make talent meet opportunity
                      </li>
                      <li className={AboutUstyles.makeTalentMeet}>
                        Take art beyond entertainment
                      </li>
                      <li>Create an art conscious society</li>
                    </ul>
                    <br />
                  </div>
                  <b className={AboutUstyles.whatWeDo}>Why We Do</b>
                  <div className={AboutUstyles.makeTalentMeetContainer}>
                    <ul className={AboutUstyles.makeTalentMeetOpportunityT}>
                      <li className={AboutUstyles.makeTalentMeet}>
                        Major economic driver for tourism and livelihood
                      </li>
                      <li className={AboutUstyles.makeTalentMeet}>
                        Art for wellness and social behaviour change
                      </li>
                      <li>Position India as the world’s cultural superpower</li>
                    </ul>
                  </div>
                </ReadMore>
              </div>
            </div>
            <img
              className={AboutUstyles.pg22}
              alt=""
              src={"assets/AboutUs/pg2.png"}
            />
          </div>
        </div>
      </div>

      {/*Benefits First page*/}
      <div id="Benefits" className="Benefits_Page">
        <h1 className="Benefits_heading1">BENEFITS TO eK STAKEHOLDERS</h1>
        <div className="Benefits_Media">
          <ResponsiveCarousel>
            <Carousel.Item>
              <div className="Benefits_Media_Items">
                <img
                  src="assets/Benefits/Benefits_img_1.png"
                  className="Benefits_Media_Item"
                  alt="Patrons"
                />
                <h3>Patrons</h3>
                <p className="Benefits_hover">
                  Our Patrons are businesses, organisations, and individuals
                  seeking talented performing artists or groups for performances
                  at their events for a payment.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="Benefits_Media_Items">
                <img
                  src="assets/Benefits/Benefits_img_2.png"
                  className="Benefits_Media_Item"
                  alt="Artists"
                />
                <h3>Artists</h3>
                <p className="Benefits_hover">
                  Our Artists (Kalakaars) are talented, aspiring and ambitious
                  Indian traditional performing artists,individual or
                  groups,seeking performing opportunities and growth.{" "}
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="Benefits_Media_Items">
                <img
                  src="assets/Benefits/Benefits_img_3.png"
                  alt="Partners"
                  className="Benefits_Media_Item"
                />
                <h3>Partners</h3>
                <p className="Benefits_hover">
                  Our Partners are businesses, organisations, and individuals
                  seeking to provide supplies and services to Artists, Patrons
                  and the Art Lover Community
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="Benefits_Media_Items">
                <img
                  src="assets/Benefits/Benefits_img_4.png"
                  alt="Art Lovers"
                  className="Benefits_Media_Item"
                />
                <h3>Art-Lovers</h3>
                <p className="Benefits_hover">
                  Our Art Lovers are individuals who follow, appreciate and
                  support traditional performing artists and also want to
                  discover / develop their own performing talent
                </p>
              </div>
            </Carousel.Item>
          </ResponsiveCarousel>
        </div>
      </div>

      {/*Benefits*/}
      <div className="Benefits_Page">
        <Carousel>
          <Carousel.Item>
            <h1 className="Benefits_heading1">BENEFITS TO PATRONS</h1>
            <div className="Benefits_Carousel">
              <div className="Benefits_Carousel_Items">
                <p className="Benefits_P">
                  <ul>
                    <li>
                      Curated performances, creating unique and memorable
                      experiences for customers and audiences
                    </li>
                    <br />
                    <li>
                      Building brand engagement, employee engagement and
                      stakeholder engagement
                    </li>
                    <br />

                    <li>
                      Driving improved prospects for business, employee
                      motivation, and social impact
                    </li>
                    <br />
                    <li>
                      Choice of high quality, ethically sourced performing
                      artists with the right skills and experience
                    </li>
                    <br />
                    <li>
                      Customized event formats, ethically sourced performing
                      artists with the right kills and experience
                    </li>
                  </ul>
                </p>

                <a href="#Joinus">
                  {" "}
                  <button>Contact Us</button>
                </a>
              </div>
              <div className="Benefits_Carousel_Items">
                <img
                  className="Benefits_Carousel_Item"
                  src={"assets/Benefits/Benefits_img_1.png"}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="Benefits_heading1">BENEFITS TO ARTISTS</h1>
            <div className="Benefits_Carousel">
              <div className="Benefits_Carousel_Items">
                <p className="Benefits_P">
                  <ul>
                    <li>Personal branding/profiling</li>
                    <br />
                    <li> Access to improved and stable livelihoods</li>
                    <br />
                    <li>Fair compensation</li>
                    <br />
                    <li> Art reaching a wider audience</li>
                    <br />
                    <li>Art creating a greater impact</li>
                    <br />
                    <li>Working with verified and respectable organizations</li>
                    <br />
                    <li> Mentoring, training and skill upgradation</li>
                    <br />
                    <li>Collaboration with other artists, groups.</li>
                  </ul>
                </p>

                <a href="#Joinus">
                  {" "}
                  <button>Contact Us</button>
                </a>
              </div>
              <div className="Benefits_Carousel_Items">
                <img
                  className="Benefits_Carousel_Item"
                  src={"assets/Benefits/Benefits_img_2.png"}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="Benefits_heading1">BENEFITS TO PARTNERS</h1>
            <div className="Benefits_Carousel">
              <div className="Benefits_Carousel_Items">
                <p className="Benefits_P">
                  <ul>
                    <li>
                      Brand promotion/Advertising/Communication for products and
                      services for performing artists
                    </li>
                    <br />
                    <li> Even sponsorship and joint event promotion</li>
                    <br />
                    <li> Grants and scholarship for students</li>
                    <br />
                    <li>
                      Non-financial collaboration and strategic partnerships
                    </li>
                  </ul>
                </p>

                <a href="#Joinus">
                  {" "}
                  <button>Contact Us</button>
                </a>
              </div>
              <div className="Benefits_Carousel_Items">
                <img
                  className="Benefits_Carousel_Item"
                  src={"assets/Benefits/Benefits_img_3.png"}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="Benefits_heading1">BENEFITS TO ART-LOVERS</h1>
            <div className="Benefits_Carousel">
              <div className="Benefits_Carousel_Items">
                <p className="Benefits_P">
                  <ul>
                    <li>Learn/improve performing art</li>
                    <br />
                    <li>Discover and groom their inner artist</li>
                    <br />
                    <li>Follow and support favourite artists and arts</li>
                    <br />
                    <li>Connect with people with similar interests/taste</li>
                    <br />
                    <li>
                      Perform in online and offline competitions and events
                    </li>
                    <br />
                    <li>
                      Earn rewards Karma credit points through gamification
                    </li>
                    <br />
                    <li>
                      Give and get feedback/ratings/reviews social media sharing
                    </li>
                    <br />
                  </ul>
                </p>

                <a href="#Joinus">
                  {" "}
                  <button>Contact Us</button>
                </a>
              </div>
              <div className="Benefits_Carousel_Items">
                <img
                  className="Benefits_Carousel_Item"
                  src={"assets/Benefits/Benefits_img_4.png"}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/*Services first Page */}
      <div className="Services_Page" id="Services">
        <h1 className="Services_heading1">
          {" "}
          eK SERVICES: <span style={{ color: "#EDAB41" }}>ABCDE</span> OF
          PERFORMING ART{" "}
        </h1>
        <img
          className="Services_Main_image"
          src={"assets/Services/Services_img_1.png"}
          alt="First slide"
        />
      </div>

      {/*Services*/}
      <div className="Services_Page">
        <Carousel>
          <Carousel.Item>
            <h1 className="Services_heading1" style={{ height: "130px" }}>
              ART FOR ENTERTAINMENT
            </h1>
            <div className="Services_Carousel">
              <div className="Services_Carousel_Items">
                <p className="Services_P">
                  Performing art for hotels & resorts, tour, festival and event
                  organizers, focused on creating unique and authentic cultural
                  experiences for guests/tourists
                  <br />
                  <br />
                  Services for Hotels/Resorts:
                  <br />
                  <span>
                    <ul>
                      <li>
                        Research shows 86% of buyers are willing to pay more for
                        a great customer experience
                      </li>
                      <li>
                        Customers willing to pay premium up to 13% -18% for
                        luxury and indulgence services
                      </li>
                      <li>
                        49% of buyers made impulse purchases after receiving a
                        more personalized experience
                      </li>
                      <li>
                        72% customers will share a positive experience with 6 or
                        more people
                      </li>
                    </ul>
                  </span>
                </p>
              </div>
              <div className="Services_Carousel_Items">
                <img
                  className="Services_Carousel_Item"
                  src={"assets/Services/Services_img_2.png"}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="Services_heading1" style={{ height: "130px" }}>
              ART FOR DEVELOPMENT
            </h1>
            <div className="Services_Carousel">
              <div className="Services_Carousel_Items">
                <p className="Services_P">
                  Performing art for Government, Donors, Foundations,
                  International agencies, CSR, and NGOs focused on theme based,
                  social behavior change communication and messaging
                  <br />
                  <br />
                  Services for Social Sector Organization:
                  <br />
                  <span>
                    <ul>
                      <li>
                        Communicate key messages to beneficiaries/stakeholders
                        that trigger social behavior's change
                      </li>
                      <li>Provide sustainable livelihoods to artists</li>
                      <li>
                        Preserve and promote local and regional folk art forms
                      </li>
                      <li>Support creation of thriving local communities</li>
                    </ul>
                  </span>
                </p>
              </div>
              <div className="Services_Carousel_Items">
                <img
                  className="Services_Carousel_Item"
                  src={"assets/Services/Services_img_3.png"}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="Services_heading1" style={{ height: "130px" }}>
              ART FOR CARE
            </h1>
            <div className="Services_Carousel">
              <div className="Services_Carousel_Items">
                <p className="Services_P">
                  Performing art for Hospitals, Health Institutions, Wellness
                  Centres, Health Retreats, etc. focused on promoting wellness
                  and mental health
                  <br />
                  <br />
                  Studies suggest that Art Services:
                  <br />
                  <span>
                    <ul>
                      <li>Develop positive body image</li>
                      <li>Improve self-concept and self-esteem</li>
                      <li>Reduce stress, anxiety, and depression</li>
                      <li>
                        Decrease isolation, chronic pain, and body tension
                      </li>
                      <li>Increase communication skills</li>
                      <li>Encourage a sense of well-being</li>
                    </ul>
                  </span>
                </p>
              </div>
              <div className="Services_Carousel_Items">
                <img
                  className="Services_Carousel_Item"
                  src={"assets/Services/Services_img_4.png"}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="Services_heading1" style={{ height: "130px" }}>
              ART FOR BUSINESS
            </h1>
            <div className="Services_Carousel">
              <div className="Services_Carousel_Items">
                <p className="Services_P">
                  Performing art for Corporates, Businesses, Industry
                  Association, Academic Institutions for learning & development,
                  employee engagement events etc
                  <br />
                  <br />
                  Services for Business Organizations:
                  <br />
                  <span>
                    <ul>
                      <li>Higher employee engagement</li>
                      <li>
                        Promotes goodwill among customers, consumers, clients
                        and investors
                      </li>
                      <li>Vibrant and inclusive corporate culture</li>
                      <li>
                        Thriving cultural community helps businesses recruit and
                        retain talent
                      </li>
                      <li>Improves the bottom line</li>
                    </ul>
                  </span>
                </p>
              </div>
              <div className="Services_Carousel_Items">
                <img
                  className="Services_Carousel_Item"
                  src={"assets/Services/Services_img_5.png"}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="Services_heading1" style={{ height: "130px" }}>
              ART FOR ALL
            </h1>
            <div className="Services_Carousel">
              <div className="Services_Carousel_Items">
                <p className="Services_P">
                  Performing art for everyone’s special occasions - celebrations
                  like birthdays , wedding functions, anniversaries and other
                  social and cultural functions
                  <br />
                  <br />
                  Services for All:
                  <br />
                  <span>
                    <ul>
                      <li>Bring joy to family/ friends</li>
                      <li>Benefit the community</li>
                      <li>Celebrate your culture</li>
                      <li>Be different</li>
                    </ul>
                  </span>
                </p>
              </div>
              <div className="Services_Carousel_Items">
                <img
                  className="Services_Carousel_Item"
                  src={"assets/Services/Services_img_6.png"}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/*Ekworld*/}
      <div className="Ekworld_Page">
        <h1 className="Ekworld_heading1">eK WORLD OF PERFORMING ARTS</h1>
        <div className="Ekworld_content">
          <p>
            eKalakaar brings a curated offering from the vibrant kaleidoscope of
            Indian Traditional Performing Classical and Folk Art (dance, music,
            song and theatre) for creating a truly authentic cultural
            experience. We offer suitable art form for every occasion and theme
            including
            <br />
            <br />
            <ul>
              <li>Pure traditional form</li>
              <li>Creative Fusion forms ( blending traditional and modern)</li>
              <li>
                Theme based with specific purpose such as education environment
                care
              </li>
            </ul>
          </p>
        </div>
        <div className="Ekworld_Media">
          <a href="#Mediagallery">
            <div className="Ekworld_Media_Items">
              <img
                src="assets/MediaGallery/MediaGallerry_img_1.png"
                className="Ekworld_Media_Item"
                alt="Dance"
              />
              <h3>Dance</h3>
            </div>
          </a>

          <a href="#Mediagallery">
            <div className="Ekworld_Media_Items">
              <img
                src="assets/Ekworld/image49.png"
                className="Ekworld_Media_Item"
                alt="Song"
              />
              <h3>Song</h3>
            </div>
          </a>
          <a href="#Mediagallery">
            <div className="Ekworld_Media_Items">
              <img
                src="assets/Ekworld/MUSIC.jpg"
                alt="Music"
                className="Ekworld_Media_Item"
              />
              <h3>Music</h3>
            </div>
          </a>
          <a href="#Mediagallery">
            <div className="Ekworld_Media_Items">
              <img
                src="assets/Ekworld/Rectangle206.png"
                alt="Theatre"
                className="Ekworld_Media_Item"
              />
              <h3>Theatre</h3>
            </div>
          </a>
        </div>
      </div>

      {/*Ekperformances */}
      <div div className="Ekperformance_page">
        <h1 className="Ekperformance_heading1">eK PERFORMANCES</h1>
        <Carousel className="Ekperformance_Carousel">
          <Carousel.Item>
            <img
              className="performance_image"
              src={"assets/Ekperformances/EK-performance-3.jpg"}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3 className="Ekperformance_heading3">
                Diwali Pahat, GSC, Mumbai
              </h3>
              <p className="Ekperformance_p">
                On the auspicious morning of Diwali, eKalakaar organized a
                special cultural program that captivated the audience with a
                vibrant display of Maharashtra and Northern Indian mixed
                cultural practices. A talented team of 14 artists delivered
                captivating live performances, including songs, dances, and
                musical instruments. The event created a festive atmosphere, and
                the audience enthusiastically joined professional dancers in
                celebrating the significance of the day through dance. eKalakaar
                extends its heartfelt gratitude to Goregaon Sports Club (GSC),
                the supportive audience, and the talented group of artists who
                contributed to making this Diwali celebration truly memorable.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="performance_image"
              src={"assets/Ekperformances/EK-performance-4.jpg"}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="Ekperformance_heading3">
                National Consultation on Disability in TISS, Mumbai{" "}
              </h3>
              <p className="Ekperformance_p">
                During the National Consultation on Persons with Disability
                (PwD) at TISS, Mumbai, eKalakaar played a significant role by
                presenting a specific program. A blend of talented musical
                instrumentalists and singers curated performances directly
                related to the theme of disability. The program commenced with a
                soulful rendition of Vishwa Shanti Prayer, setting an uplifting
                tone. Motivational songs followed, fostering an inclusive
                environment where the audience actively participated by joining
                the chorus with the artists. eKalakaar extends its gratitude to
                TISS, experts from Tata Steel, RCI (Govt of India), SBI
                Foundation, all other organisations; and the groups of artists
                involved, acknowledging their contribution to this meaningful
                initiative.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="performance_image"
              src={"assets/Ekperformances/EK-performance-5.jpg"}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="Ekperformance_heading3">
                Purple Bharat Ustav, New Delhi
              </h3>
              <p className="Ekperformance_p">
                During the Purple Bharat Ustav held in New Delhi, with a special
                focus on Disability and EGS (Employment Guarantee Scheme),
                eKalakaar supplemented with a captivating performance, including
                a live Rajasthani Ghoomar dance presented by folk artists
                accompanied by experienced musicians performing patriotic and
                motivational tunes. The program also showcased talented
                disability artists, who delivered inspiring songs and dances.
                eKalakaar expresses its gratitude to partners IDEA, FIIB, and
                the various artist groups involved, contributing to the success
                and inclusivity of the event.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="performance_image"
              src={"assets/Ekperformances/Ekperformance_img_1.png"}
              alt="fourth slide"
            />
            <Carousel.Caption>
              <h3 className="Ekperformance_heading3">
                Chhau Dance on aquaculture in Five Star Hotel
              </h3>
              <p className="Ekperformance_p">
                eKalakaar (eK) successfully organized a captivating performance
                of Indian Traditional Performing Art on May 25th, 2023, at
                Mayfair Hotel in Bhubaneswar, Odisha. The event featured an
                enchanting live performance by Chhau Dancers, skillfully
                portraying the lives of Fisherfolk and their profound connection
                to the realm of fishing. The talented group of performers hailed
                from Mayurbhanj, Odisha, which is recognised by the TIME
                Magazine among the World’s Greatest Places of 2023. The
                audience, comprising of stakeholders from industry, government
                and social sector who were participating in the Seminar on
                Aquaculture, was immersed in a truly remarkable experience. eK
                expresses deep gratitude to esteemed partners, including
                Artists, GIZ, Pantiss, and others, for their invaluable support.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="performance_image"
              src={"assets/Ekperformances/Ekperformance_img_2.png"}
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h3 className="Ekperformance_heading3">
                Odissi & Sambalpuri Dance on Sanitation
              </h3>
              <p className="Ekperformance_p">
                eKalakaar (ek) organized a captivating performance featuring
                Classical Odissi and energetic Sambalpuri dance, centered around
                the theme of sanitation. The event attracted a diverse audience,
                including international guests, spreading awareness and
                fostering meaningful conversations on the subject.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/*our patrons */}

      <div div className="OurPatrons_page">
        <h1 className="OurPatrons_heading1">eK PATRONS</h1>
        <Carousel interval={1000}>
          {Array.from({
            length: Math.ceil(
              OurPatrons_images.length / OurPatronsimagesPerSlide
            ),
          }).map((_, i) => (
            <Carousel.Item key={i}>
              <div className="OurPatrons_Items" style={{ display: "flex" }}>
                {OurPatrons_images.slice(
                  i * OurPatronsimagesPerSlide,
                  i * OurPatronsimagesPerSlide + OurPatronsimagesPerSlide
                ).map((image, j) => (
                  <div
                    className="OurPatrons_imgitems"
                    key={j}
                    style={{ flex: 1 }}
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${i * OurPatronsimagesPerSlide + j + 1}`}
                      // alt={`Slide ${i * OurPatronsimagesPerSlide + j + 1}`}
                    />
                    <h3>{image.caption}</h3>
                    <p>{image.subcaption}</p>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/*OurArtists*/}

      <div div className="OurArtists_page">
        <h1 className="OurArtists_heading1">eK ARTISTS</h1>
        <Carousel interval={1000}>
          {Array.from({
            length: Math.ceil(
              OurArtists_images.length / OurArtistsimagesPerSlide
            ),
          }).map((_, i) => (
            <Carousel.Item key={i}>
              <div className="OurArtists_Items" style={{ display: "flex" }}>
                {OurArtists_images.slice(
                  i * OurArtistsimagesPerSlide,
                  i * OurArtistsimagesPerSlide + OurArtistsimagesPerSlide
                ).map((image, j) => (
                  <div
                    className="OurArtists_imgitems"
                    key={j}
                    style={{ flex: 1 }}
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${i * OurArtistsimagesPerSlide + j + 1}`}
                      // alt={`Slide ${i * OurArtistsimagesPerSlide + j + 1}`}
                    />
                    <h3>{image.caption}</h3>
                    <p>{image.subcaption}</p>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/*OurPartners*/}
      <div div className="OurPartners_page">
        <h1 className="OurPartners_heading1">eK PARTNERS</h1>

        <Carousel>
          {Array.from({
            length: Math.ceil(
              OurPartners_images.length / OurPartnersimagesPerSlide
            ),
          }).map((_, i) => (
            <Carousel.Item key={i}>
              <div className="OurPartners_Items" style={{ display: "flex" }}>
                {OurPartners_images.slice(
                  i * OurPartnersimagesPerSlide,
                  i * OurPartnersimagesPerSlide + OurPartnersimagesPerSlide
                ).map((image, j) => (
                  <div
                    className="OurPartners_imgitems"
                    key={j}
                    style={{ flex: 1 }}
                  >
                    <div className="OurPartners_image_container">
                      <img
                        src={image.src}
                        alt={`Slide ${i * OurPartnersimagesPerSlide + j + 1}`}
                      />
                      <div className="OurPartners_image_text">
                        {image.caption}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/*MediaGallery*/}
      <div div className="MediaGallery_page" id="Mediagallery">
        <h1 className="MediaGallery_heading1">eK GALLERY</h1>
        {/*<div className='MediaGallery-Searchbox'>
                <form >
                    <div>

                        <input className='searchbox'
                            type="text"
                            placeholder="Search &#61442; "
                        />

                    </div>
                    <div className='filter'>
                        <p>Filter</p>
                    </div>
                </form>
    </div>*/}
        <div className="MediaGallery_Media">
          <div className="MediaGallery_Media_Items">
            <Link style={{ textDecoration: "none" }} to="/EkPhotos">
              <img
                src="assets/MediaGallery/MediaGallerry_img_1.png"
                className="MediaGallery_Media_Item"
                alt="Photos"
              />
              <h3>
                <span style={{ display: "inline-block" }}>
                  Photos{" "}
                  <FontAwesomeIcon icon={faCamera} style={{ color: "#000" }} />
                </span>
              </h3>
            </Link>
          </div>

          <div className="MediaGallery_Media_Items">
            <Link style={{ textDecoration: "none" }} to="/EkVideos">
              <img
                src="assets/MediaGallery/MediaGallery_img_2.png"
                className="MediaGallery_Media_Item"
                alt="Videos"
              />
              <h3>
                <span style={{ display: "inline-block" }}>
                  Videos{" "}
                  <FontAwesomeIcon icon={faVideo} style={{ color: "#000" }} />
                </span>
              </h3>
            </Link>
          </div>

          <div className="MediaGallery_Media_Items">
            <Link style={{ textDecoration: "none" }} to="/EkPrint">
              <img
                src="assets/MediaGallery/MediaGallery_img_3.png"
                alt="Media Print"
                className="MediaGallery_Media_Item"
              />
              <h3>
                <span style={{ display: "inline-block" }}>
                  Print{" "}
                  <FontAwesomeIcon icon={faPrint} style={{ color: "#000" }} />
                </span>
              </h3>
            </Link>
          </div>
        </div>
        {/* <div className="MediaGallery_Upcoming">
          <h4>eK Update</h4>
          <Carousel className="MediaGallery_Carousel">
            <Carousel.Item>
              Traditional Art Performance on Climate Change is Scheduled in
              Bhubhneshwar on 8-10 Aug 2023
            </Carousel.Item>
            <Carousel.Item>
              Traditional Art performance on Handloom will be held in Delhi on 8
              September 2023
            </Carousel.Item>
          </Carousel>
        </div> */}
      </div>

      {/*OurAdvisors*/}
      <div div className="OurAdvisors_Page">
        <h1 className="OurAdvisors_heading1">eK ADVISORS</h1>
        <div className="OurAdvisors_Media">
          <div
            style={{ overflowY: "hidden" }}
            className="OurAdvisors_Media_Items"
          >
            <img
              src="assets/OurAdvisors/Amarendra.png"
              className="OurAdvisors_Media_Item"
              alt="Photos"
            />
            <h3>
              Dr. Amarendra Khatua
              <span style={{ display: "inline-block" }}>IFS (Retd.)</span>
            </h3>
            <div style={{ overflowY: "hidden" }} className="OurAdvisors_hover">
              <p st>
                Dr. Amarendra is a senior Indian Foreign Service (IFS), Former
                Secretary (Special Assignment) at Ministry of External Affairs,
                Govt of India and Director General, Indian Council for Cultural
                Relations. He was the former High Commissioner of India to
                Argentina, Ivory Coast. He has been mentoring several social and
                cultural enterprises
              </p>
            </div>
          </div>

          <div
            style={{ overflowY: "hidden" }}
            className="OurAdvisors_Media_Items"
          >
            <img
              src="assets/OurAdvisors/Prakash.png"
              className="OurAdvisors_Media_Item"
              alt="Videos"
            />
            <h3>
              Dr. T Krishna Prasad
              <span style={{ display: "inline-block" }}>IPS (Retd.)</span>
            </h3>
            <div style={{ overflowY: "hidden" }} className="OurAdvisors_hover">
              <p>
                He is retired Telangana Director General of Police (DGP). He
                studied Engineering in REC Warangal and masters from IIM
                Ahmedabad. He has been working with vulnerable groups
                particularly from rural and tribal areas. He advises eKalakaar
                for bringing hidden talents from unknown areas and create
                opportunity for them.
              </p>
            </div>
          </div>

          <div
            style={{ overflowY: "hidden" }}
            className="OurAdvisors_Media_Items"
          >
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
                Col Prakash Tewari, is a retired Indian Army veteran. He
                currently sits on the Board of the Grameen Foundation. He has
                worked with DLF Ltd., Jindal Steel and Power Limited and Tata
                Power Company Limited. He has written a book on Leadership
                Development “Bunker to Bliss”.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*ek experts */}
      <div className="Ourexperts_Page">
        <h1 className="Ourexperts_heading1">eK EXPERTS</h1>
        <div className="Ourexperts_Media">
          <div className="Ourexperts_Media_Items">
            <img
              src="assets/Ekexperts/Picture1.png"
              className="Ourexperts_Media_Item"
              alt="Photos"
            />
            <h3>
              Shri Harish Dash
              <span style={{ display: "inline-block" }}>Technology Expert</span>
            </h3>
            <div className="Ourexperts_hover">
              <p>
                Harish is a seasoned professional with over 23 years of
                experience, excelling in entrepreneurship, business excellence,
                analysis, product management, and sustainability. He's both a
                founder and mentor to successful start-ups, combining strategic
                insight with hands-on experience. His corporate journey includes
                leadership roles at Tata Motors, GE, and Tata Capital, where he
                led product launches, digital transformations, and drove
                sustainability initiatives. Currently, as the Co-founder and
                Chief Product Officer at Ciphense, he leverages AI to empower
                Small and Medium Businesses. Harish is a sought-after mentor,
                offering guidance in strategy, fundraising, and more. He holds
                an impressive academic and certification record and has a strong
                commitment to sustainability and academic pursuits. He is an
                alumnus of NIT Rourkela, and pursuing MTech from BITS Pilani.
              </p>
            </div>
          </div>

          <div className="Ourexperts_Media_Items">
            <img
              src="assets/Ekexperts/Picture2.png"
              className="Ourexperts_Media_Item"
              alt="Videos"
            />
            <h3>
              Maitreyi Tripathyi
              <span style={{ display: "inline-block" }}>
                Communication Expert{" "}
              </span>
            </h3>
            <div className="Ourexperts_hover">
              <p>
                Her diverse career journey includes managing stakeholder
                relations and communication strategy for PMKVY (Skill India) at
                NSDC, heading communications for the United Nations Industrial
                Development Organisation (UNIDO), and currently leading
                Organizational Change Management and Communication at HCL
                Technologies. With her strong communication skills and
                adaptability, she excels in roles that demand effective
                communication, strategic planning, and navigating complex
                organizational changes, making her a valuable asset in her
                current position.
              </p>
            </div>
          </div>

          <div className="Ourexperts_Media_Items">
            <img
              src="assets/Ekexperts/Picture3.png"
              alt="Media Print"
              className="Ourexperts_Media_Item"
            />
            <h3>
              Dr. Sreeram Darbha
              <span style={{ display: "inline-block" }}>
                Art, HR, Hospitality Expert
              </span>
            </h3>
            <div className="Ourexperts_hover">
              <p>
                Dr. Sreeram is a highly accomplished professional with a diverse
                educational background, holding double Masters in English and
                Human Resources Management from the prestigious Tata Institute
                of Social Sciences-Mumbai, as well as a Ph.D. from Acharya
                Nagarjuna University, Andhra Pradesh. With approximately three
                decades of extensive leadership experience in HR with prominent
                roles such as Head-HR at BSE and Senior Vice President-HR in a
                Mumbai-based financial services company. He received numerous
                National and International HR leadership awards. Additionally,
                his deep spiritual practice as a 'Srividya' practitioner and his
                passion for integrating ancient wisdom into modern management
                practices make him a unique and influential figure in the
                industry. He has launched a groundbreaking initiative,
                www.gotogita.in, which offers psycho-spiritual counseling
                services based on Ancient Wisdom and Modern Management
                principles for holistic work-life balance and well-being. Dr.
                Sreeram's professional and personal passions align in his
                commitment to leveraging human potential through strategic HR,
                learning, and OD interventions, while also promoting values and
                principles rooted in Indian Vedanta Philosophy and the Bhagavad
                Gita, earning him the title of a Practical Vedantin and a
                Work-Life Guru. He has been promoting Indian Arts and Artists.
              </p>
            </div>
          </div>

          <div className="Ourexperts_Media_Items">
            <img
              src="assets/Ekexperts/Picture4.png"
              className="Ourexperts_Media_Item"
              alt="Videos"
            />
            <h3>
              Nidhi Basu
              <span style={{ display: "inline-block" }}>Art Expert </span>
            </h3>
            <div className="Ourexperts_hover">
              <p>
                Nidhi Basu is the Co-founder and Director of Logicbox
                Communications Pvt Ltd, a company renowned for providing
                comprehensive media services in India and internationally. As a
                highly acclaimed voice actor, her distinctive voice resonates on
                premium trains throughout India, in numerous national museums,
                leading banks, and e-learning companies. She is the founder of
                'Hindi Diary,' a program designed to empower individuals by
                enhancing their Hindi speaking and writing skills to create
                livelihood opportunities. Since her college days in NIFT Delhi,
                Nidhi has passionately promoted Indian cultural heritage and
                performing arts in various roles, and she continues to be a
                dedicated advocate for these cultural treasures.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*OurTeam*/}
      <div div className="OurTeam_Page">
        <h1 className="OurTeam_heading1">eK TEAM</h1>
        <div className="OurTeam_Media">
          <div style={{ overflowY: "hidden" }} className="OurTeam_Media_Items">
            <img
              src="assets/OurTeam/Sanjaya.png"
              className="OurTeam_Media_Item"
              alt="Photos"
            />
            <h3>
              Dr. Sanjaya Pradhan
              <span style={{ display: "inline-block" }}>Founder & CEO</span>
            </h3>
            <div style={{ overflowY: "hidden" }} className="OurTeam_hover">
              <p>
                Sanjaya is an accomplished and versatile leader with a strong
                social compass. He brings over two decades of experience working
                with Corporates, Governments and NGOs in CSR, Skills &
                Livelihoods, Disability & Inclusion. He has worked with
                organizations - Tata Power, Mahindra, National Skill Development
                Corporation and Gram Vikas. He is an Erasmus Mundus Scholar, Ph.
                D, and M.A. in Social Work (MSW) from TISS.
              </p>
            </div>
          </div>

          <div style={{ overflowY: "hidden" }} className="OurTeam_Media_Items">
            <img
              src="assets/OurTeam/Amit.png"
              className="OurTeam_Media_Item"
              alt="Videos"
            />
            <h3>
              Amit Dutta
              <span style={{ display: "inline-block" }}>
                Co-Founder and Chief Strategy Officer
              </span>
            </h3>
            <div style={{ overflowY: "hidden" }} className="OurTeam_hover">
              <p>
                Amit is a senior strategy leader, who is passionate about social
                impact. He brings 20+ years of experience in Government & Social
                Sector Consulting, Strategy and Implementation with Firms like
                EY & KPMG. He has led national level programs related to Private
                Sector Development, Skills & Livelihoods, Social Welfare and
                Sanitation. He is an MBA in Marketing and has a certification in
                Leading Innovation from Stanford University.
              </p>
            </div>
          </div>

          <div style={{ overflowY: "hidden" }} className="OurTeam_Media_Items">
            <img
              src="assets/OurTeam/Yogesh.png"
              alt="Media Print"
              className="OurTeam_Media_Item"
            />
            <h3>
              Yogesh Pandey
              <span style={{ display: "inline-block" }}>Head-Operations</span>
            </h3>
            <div style={{ overflowY: "hidden" }} className="OurTeam_hover">
              <p>
                Yogesh is a seasoned professional and multi-talented artist. He
                has over 15 years of experience in Administration & Operations
                gained through an impressive career in the armed forces. He is a
                creative artist himself, excelling in the areas of script
                writing, poetry and singing. Yogesh is passionate about
                discovering talented arts and artists and showcasing them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Joinek*/}
      <div
        id="Joinek"
        className="row"
        style={{
          backgroundColor: "#ad2f3b",
          width: "100vw",
          maxWidth: "100%",
          minHeight: "100vh",
        }}
      >
        <div className="joinUs">CONTACT eK</div>
        <div className="col-lg-8 col-md-12" style={{ "  width": "100%" }}>
          <div className="joinUsParent">
            <div className="joinTheCulturalContainer">
              <p className="joinTheCultural">
                Join the cultural revolution with eKalakaar! Become a patron- A
                catalyst for preserving and promoting cultural heritage by
                creating unforgettable experiences. Become an investor- in the
                future of cultural enterprise and excellence with eKalakar.
              </p>
              <p className="joinTheCultural">&nbsp;</p>
              <p className="joinTheCultural">
                We call out to all stakeholders in our ecosystem- Artists,
                Partners, Art Lovers, Volunteers and Interns, to join us today
                on a transformative journey of art, connection and shared
                prosperity!
              </p>
            </div>

            <div className="joinusbutton">
              <div className="row">
                <div className="col-lg-10  col-md-10 offset-md-1  col-md-6">
                  {/*<button className="btn11">Patron</button>
                                    <button className="btn11">Artist</button>
                                    <button className="btn11">Partners</button>
                                    <button className="btn11">Art-Lover</button>
                                    <button className="btn11">Volunteer</button>
                                    <button className="btn11">Investor</button>
                                    <button className="btn11">Work with us</button>
                                    <button className="btn11">Intern</button>*/}
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Patrons"
                      onClick={onClickInterestedOptions}
                    >
                      Patrons
                    </button>
                  </a>
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Artists"
                      onClick={onClickInterestedOptions}
                    >
                      Artists
                    </button>
                  </a>
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Partners"
                      onClick={onClickInterestedOptions}
                    >
                      Partners
                    </button>
                  </a>
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Art-Lovers"
                      onClick={onClickInterestedOptions}
                    >
                      Art-Lovers
                    </button>
                  </a>
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Volunteers"
                      onClick={onClickInterestedOptions}
                    >
                      Volunteers
                    </button>
                  </a>
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Investors"
                      onClick={onClickInterestedOptions}
                    >
                      Investors
                    </button>
                  </a>
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Aspirants"
                      onClick={onClickInterestedOptions}
                    >
                      Aspirants
                    </button>
                  </a>
                  <a href="#Joinus">
                    <button
                      className="btn11"
                      name="Interns"
                      onClick={onClickInterestedOptions}
                    >
                      Interns
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4" style={{}}>
          <img
            className="Joinek_Page_Image"
            style={{ width: "30vw", height: "60vh" }}
            alt=""
            src={Joinek_image}
          />
        </div>
      </div>

      {/*JoinUs*/}
      <div className="footer">
        <div className="row">
          <div className="col-lg-6">
            <div className="foot-1-parent">
              <img
                className="foot-1-icon"
                alt=""
                src="assets/JoinUs/footer.png"
              />

              <div className="connect-with-us-parent">
                <b className="connect-with-us">Connect With Us</b>
                <div className="facebookcolor-parent">
                  <a
                    className="facebookcolor"
                    href="https://www.facebook.com/eKalakaarIndia"
                    target="_blank"
                  >
                    <img
                      className="JoinUs_frame-icon"
                      alt=""
                      src="assets/JoinUs/facebook.svg"
                    />
                  </a>
                  <a
                    className="facebookcolor"
                    href="https://twitter.com/eKalakaarIndia"
                    target="_blank"
                  >
                    <img
                      className="JoinUs_frame-icon"
                      alt=""
                      src="assets/JoinUs/twitter.svg"
                    />
                  </a>
                  <a
                    className="facebookcolor"
                    href="https://www.youtube.com/@eKalakaarIndia"
                    target="_blank"
                  >
                    <img
                      className="JoinUs_frame-icon"
                      alt=""
                      src="assets/JoinUs/youtube.svg"
                    />
                  </a>
                  <a
                    className="facebookcolor"
                    href="https://www.instagram.com/ekalakaar/"
                    target="_blank"
                  >
                    <img
                      className="JoinUs_frame-icon"
                      alt=""
                      src="assets/JoinUs/instagram.svg"
                    />
                  </a>
                  <a
                    className="facebookcolor"
                    href="https://www.linkedin.com/in/ekalakaar-india-a0b697272/"
                    target="_blank"
                  >
                    <img
                      className="JoinUs_frame-icon"
                      alt=""
                      src="assets/JoinUs/linkedin.svg"
                    />
                  </a>
                  <a
                    className="whatsappcolor"
                    href="https://wa.me/917701872112?text="
                    target="_blank"
                  >
                    <img
                      className="JoinUs_frame-icon"
                      alt=""
                      src="assets/JoinUs/whatsapp.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-5" id="Joinus">
            <div className="JoinUs_frame-parent mt-2">
              <div className="JoinUs_frame-group">
                <form className="full-name-parent" onSubmit={formSubmitHandler}>
                  <h2
                    style={{
                      marginBottom: "5vh",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    CONTACT US
                  </h2>
                  <div className="row">
                    {/* Full Name */}
                    <div className="col">
                      <div className="full-name">
                        Full Name <span className="required-asterisk">*</span>
                      </div>
                      <input
                        className="JoinUs_frame-item"
                        type="text"
                        onChange={inputChangeHandler}
                        value={inputData.name || ""}
                        name="name"
                        style={{ color: "white" }}
                        required
                      />
                    </div>

                    {/* Organization */}
                    <div className="col">
                      <div className="full-name">Organization (optional)</div>
                      <input
                        className="JoinUs_frame-item"
                        type="text"
                        onChange={inputChangeHandler}
                        value={inputData?.organization}
                        name="organization"
                        style={{ color: "white" }}
                      />
                    </div>
                  </div>
                  <div className="row ml-3">
                    {/* E-Mail */}
                    <div className="col">
                      <div className="full-name">
                        E-Mail <span className="required-asterisk">*</span>
                      </div>
                      <input
                        className="JoinUs_frame-item"
                        type="email"
                        name="email"
                        onChange={inputChangeHandler}
                        value={inputData.email}
                        style={{ color: "white" }}
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="col">
                      <div className="full-name">
                        Phone Number
                        <span className="required-asterisk">*</span>
                      </div>
                      <input
                        className="JoinUs_frame-item"
                        type="tel"
                        maxLength={10}
                        minLength={10}
                        onChange={inputChangeHandler}
                        value={inputData.phoneNumber}
                        name="phoneNumber"
                        style={{ color: "white" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="attachment-parent ml-3 ">
                    <label htmlFor="cars" className="full-name ml-0">
                      Subject : <span className="required-asterisk ">*</span>
                    </label>
                    <select
                      id="Subject"
                      name="subject"
                      onChange={inputChangeHandler}
                      value={inputData.subject}
                      required
                    >
                      <option selected hidden>
                        Please Select
                      </option>
                      <option value="Business">Business Enquiry</option>
                      <option value="General">General Enquiry</option>
                      <option value="Media">Media Enquiry</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Tech">Tech Support</option>
                      <option value="Suggestion">Suggestions</option>
                      <option value="Work">Work with us</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="how-do-you-want-to-associate-w-parent ml-3">
                    <div className="full-name">
                      Write your message{" "}
                      <span className="required-asterisk">*</span>
                    </div>
                    <textarea
                      className="JoinUs_frame-item"
                      name="message"
                      onChange={inputChangeHandler}
                      value={inputData.message}
                      style={{
                        color: "white",
                        height: "100px",
                        resize: "none",
                        fontSize: "16px",
                      }}
                      required
                    />
                  </div>

                  <div className="row ml-3">
                    {/* Link (optional) */}
                    <div className="col">
                      <div className="full-name">Link (optional)</div>
                      <input
                        className="JoinUs_frame-item"
                        type="text"
                        onChange={inputChangeHandler}
                        value={inputData?.link}
                        name="link"
                        style={{ color: "white" }}
                      />
                    </div>

                    <div className="col">
                      <div className="full-name">Location (optional)</div>
                      <input
                        className="JoinUs_frame-item"
                        type="text"
                        onChange={inputChangeHandler}
                        value={inputData?.location}
                        name="location"
                        style={{ color: "white" }}
                      />
                    </div>
                    {/* Attachment (optional) 
        <div className="col">
          <div className="full-name">
            Attachment (optional)
          </div>
          <label htmlFor="file-upload" className="paper-clip-6-xxl-1">
            <input
              id="file-upload"
              name="document"
              type="file"
              style={{ display: 'none' }}
              onChange={inputChangeHandler}
            />
            <FontAwesomeIcon icon={faPaperclip} />
            {/* Add the icon or text for the paper clip here 
          </label>
        </div>*/}
                    {formStatus === true && console.log(formStatus)}

                    {formStatus === false && console.log(formStatus)}
                  </div>

                  <button className="msg-1 ml-3">Submit</button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
