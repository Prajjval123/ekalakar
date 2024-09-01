import { HomePage } from "./HomePage";
import { EkPhotos } from "./EkPhotos";
import { EkVideos } from "./EkVideos";
import { EkPrint } from "./EkPrint";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Ekevents } from "./Ekevents";
import { LoginPage } from "../LoginPages/LoginPage";
import Choosing from "../LoginPages/Choosing";
import Signup from "../../My Components/LoginPages/Authorization/Signup";
import ResetPassword from "../../My Components/LoginPages/Authorization/ResetPassword";
import ForgetPassword from "../../My Components/LoginPages/Authorization/ForgetPassword";
import ForgetCodeVerification from "../../My Components/LoginPages/Authorization/ForgetCodeVerification";
import VerificationCode from "../../My Components/LoginPages/Authorization/VerificationCode";
import { useSelector } from "react-redux";
import { Artist_Profile } from "../ArtisitPages/ProfilePages/Artist_Profile";
import  Artist_limited_Profile  from "../ArtisitPages/ProfilePages/Artist_limited_Profile";
import { Artist_OpportunitiesMoreInfo } from "../ArtisitPages/ProfilePages/Artist_OpportunitiesMoreInfo";
import { Newsletter } from "../ArtisitPages/Newsletter/Newsletter";
import { Artist_Opportunities } from "../ArtisitPages/ProfilePages/Artist_Opportunities";
import StatusOfApplication from "../ArtisitPages/StatusOfApplication/StatusOfApplication";
// import PortfolioDisplay1 from "../ArtisitPages/PortfollioDisplay/PortfolioDisplay1";
import PortfolioDisplay1 from "../ArtisitPages/PortfollioDisplay/PortfolioDisplay1";
import EditPortfolio from "../ArtisitPages/PortfollioDisplay/EditPortfolio";
import ContactUs from "../ArtisitPages/ContactUs/ContactUs";
import ChatViewSection from "../ArtisitPages/ChatDisplay/ChatViewSection";
import ChatDisplay from "../ArtisitPages/ChatDisplay/ChatDisplay";
import PatronProfile from "../PatronPages/PatronProfile/PatronProfile";
import ArtistProfiles from "../PatronPages/ArtistProfiles/ArtistProfiles";
import ViewArtist from "../PatronPages/PatronViewAritist/ViewArtist";
import EventApplication from "../PatronPages/PatronViewAritist/EventApplication";
import ArtistApplication from "../PatronPages/PatronViewAritist/ArtistApplication";
import Partner_Profile from "../PartnersPages/ProfilePage/Partner_Profile";
import AboutPartner from "../PartnersPages/AboutUs/AboutPartner";
import EditAboutPartner from "../PartnersPages/AboutUs/EditAboutPartner";
import SellProduct from "../PartnersPages/SellProduct/SellProduct";
import MyProductsandCourses from "../PartnersPages/MyProducts/MyProductsandCourses";
import SkillDevelopment from "../ArtisitPages/Skill Development/SkillDevelopment";
import CourseCategories from "../ArtisitPages/Course Categories/CourseCategories";
import PatronPortfolioDisplay from "../ArtisitPages/PortfollioDisplay/PatronPortfolioDisplay";
import UploadedOpportunities from "../PatronPages/OpportunitesforArtist/UploadedOpportunities";
import UploadOpportunities from "../PatronPages/OpportunitesforArtist/UploadOpportunities";
import EditOpportunity from "../PatronPages/OpportunitesforArtist/EditOpportunity";
import Patron_Portfolio from "../PatronPages/PatronProfile/Portfolio/Patron_Portfolio";
import Edit_Patron_Portfolio from "../PatronPages/PatronProfile/Portfolio/Edit_Patron_Portfolio";
import UserVerfication from "../AdminPages/UserVerification/UserVerfication";
import ViewProfile from "../AdminPages/ViewProfile/ViewProfile";
import EditAdminProtfolio from "../AdminPages/ViewUser/EditUserPortfolio/EditUserProtfolio";
import RootAdmin from "../AdminPages/RootAdmin";
import DashBoard from "../AdminPages/Dashboard/DashBoard";
import ViewApplicants from "../AdminPages/ViewApplicants/ViewApplicants";
import ViewUser from "../AdminPages/ViewUser/ViewUser";
import ViewCoursesProduct from "../AdminPages/ViewCoursesProduct/ViewCoursesProduct";
import Contact from "../AdminPages/Contact/Contact";
import ViewArtistApplication from "../AdminPages/ViewApplicants/ViewArtistApplication/ViewArtistApplication";
import Chat from "../AdminPages/AdmiChatPage/Chat";
import MoreinfoArtistOppurtunity from "../AdminPages/ViewApplicants/ViewArtistApplication/ArtistOppurtunity/MoreInfo/MoreinfoArtistOppurtunity";
import TermAndCondition from "./TermAndCondition";
import Contactus from "../PatronPages/ContactUs/ContactUs";
import ArtistDashboard from "../ArtisitPages/Dashboard/ArtistDashboard";
import Privacypolicy from "./Privacypolicy";
import AdminDashboard from "../Admin/Dashboard/Dashboard"
import AdminNavbar from "../Admin/Navbar/Navbar"
import AdminFooter from "../Admin/footer/footer"
import AdminUserArtist from "../Admin/ManageUser/UserArtist";
import AdminUserPatron from "../Admin/ManageUser/UserPatron";
import AdminUserArtLover from "../Admin/ManageUser/UserArt-lover";
import AdminUserPartner from "../Admin/ManageUser/UserPartner";
import AdminOpportunity from "../Admin/ManageOpportunities/Opportunity";
import DashboardArtist from "../Admin//Dashboard/DashboardArtist";
import DashboardApplication from "../Admin//Dashboard/DashboardApplications";
import DashboardArtLover from "../Admin//Dashboard/DashboardArtlover";
import DashboardRevenue from "../Admin//Dashboard/Dashboardrevenue";
import DashboardOpportunity from "../Admin//Dashboard/Dashboardopportunity";
import Dashboardpartner from "../Admin//Dashboard/Dashboardpartner";
import DashboardPerformance from "../Admin//Dashboard/Dashboardperformance";
import Profile from '../Admin/ManageOpportunities/profile'
import Skills from "../Admin/Skills/Manageskills";
import Language from "../Admin/Languages/ManageLanguages";
import Artistprofile from '../Admin/ArtistManagement/artistprofile'
import ArtsistManagement from "../Admin/ArtistManagement/artistmanagement";
import AdminUploadOpportunities from "../Admin/ManageOpportunities/OpportunitesforArtist/UploadOpportunities";
import AdminUploadedOpportunities from "../Admin/ManageOpportunities/OpportunitesforArtist/UploadedOpportunities";
import EditOpportunities from "../Admin/ManageOpportunities/EditOpportunities";
import OppApplications from "../Admin/ManageOpportunities/OpportunityApplications";
import HowItWorks from "./HowItWorks";
import Viewevents from "../AdminPages/Events/Viewevents";
import EventDetails from "../AdminPages/Events/EventDetails";
import UploadEvents from "../AdminPages/Events/UploadEvents";


export default function RouterPage() {
  const { role, accessToken } = useSelector((state) => state.auth);

  return (
    <div>
      {
        role === "Admin" && <AdminNavbar/>
      }
      <Routes>
        <Route path="admin" element={<RootAdmin />}/>
          <Route
            path="admin"
            element={<Navigate to="userverification" replace />}
          />
          <Route path="userverification" element={<UserVerfication />}/>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="view-user" element={<ViewUser />}/>
            <Route path=":id" element={<ViewProfile />}/>
              <Route path="edit" element={<EditAdminProtfolio />} />
          
        

          <Route path="view-applicants" element={<ViewApplicants />}/>
            <Route path=":id" element={<ViewArtistApplication />}/>
              <Route path="view-more" element={<MoreinfoArtistOppurtunity />} />
        
         
          <Route path="courses-products" element={<ViewCoursesProduct />} />
          <Route path="contact" element={<Contact />}/>
            <Route path="chat" element={<Chat />} />
         
        

        {!accessToken && (
          <>
            <Route path="/Login" exact element={<LoginPage />} />
            <Route path="/Choose" exact element={<Choosing />} />
            <Route path="/register" exact element={<Signup />} />
           
            <Route path="/resetPassword" exact element={<ResetPassword />} />
            <Route path="/forgetPassword" exact element={<ForgetPassword />} />
            <Route path="/forgetCodeVerification/:email" exact element={<ForgetCodeVerification />} />
            <Route path="/verifyCode/:email" exact element={<VerificationCode />} />
          </>
        )}
        
        <Route path="/" exact element={<HomePage />} />
        <Route path="/HowItWorks" exact element={<HowItWorks />} />
        <Route path="/EkPhotos" exact element={<EkPhotos />} />
        <Route path="/termAndCondition" element={<TermAndCondition />} />
        <Route path="/Privacypolicy" element={<Privacypolicy/>} />
        <Route path="/EkVideos" exact element={<EkVideos />} />
        <Route path="/EkPrint" exact element={<EkPrint />} />
        <Route path="/Ekevents" exact element={<Ekevents />} />

        {
          role === "Admin" && (
            <>
            <Route path="/AdminDashboard" exact element={<AdminDashboard/>} />
            <Route path="/Login" exact element={<LoginPage />} />
            <Route path="/Opportunity" element={<AdminOpportunity/>} />
            <Route path="/EditOpportunity" element={<EditOpportunities/>} />
            <Route path="/Patron" element={<AdminUserPatron />} />
            <Route path="/OppApplications" element={<OppApplications/>} />
            <Route path="/Partner" element={<AdminUserPartner />} />
            <Route path="/artLover" element={<AdminUserArtLover />} />
            <Route path="/artist" element={<AdminUserArtist />} />
            <Route path="/ArtsistManagement" element={<ArtsistManagement />} />
            <Route path="/artistProfile" element={<Artistprofile />} />
            <Route path="/UploadOpportunities" element={<AdminUploadOpportunities/>}/>
            <Route path="/UploadedOpps" element={<AdminUploadedOpportunities/>}/>
            <Route path="/DashboardArtist" element={<DashboardArtist />}></Route>
            <Route
              path="/DashboardApplication"
              element={<DashboardApplication />}
            />
            <Route path="/DashboardArtLover" element={<DashboardArtLover />} />
            <Route
            path="/DashboardOpportunity"
              element={<DashboardOpportunity />}
            />
            <Route
              path="/DashboardPerformance"
              element={<DashboardPerformance />}
            ></Route>
            <Route path="/Dashboardpartner" element={<Dashboardpartner />} />

            <Route
              path="/DashboardRevenue"
              element={<DashboardRevenue />}
            ></Route>
            <Route path="/OppProfile" element={<Profile />} />
           <Route path="/ManageLanguages" element={<Language />} />
           <Route path="/Manageskills" element={<Skills />} />
           <Route path="/Viewevents" element={<Viewevents />} />
           <Route path="/UploadEvents" element={<UploadEvents/>} />
           <Route path="/EventDetails/:id" element={<EventDetails />} />
            </>
          )
        }

        {role === "Artist" && (
          <>
            <Route path="/Artist_limited_Profile" exact element={<Artist_limited_Profile />}/>
            <Route path="/Artist_Profile" exact element={<Artist_Profile />} />
            <Route
              path="/Artist_Opportunities"
              exact
              element={<Artist_Opportunities />}
            />
            <Route
              path="/statusOfApplication"
              element={<StatusOfApplication />}
            />
            <Route
              path="/ArtistDashboard"
              element={<ArtistDashboard />}
            />
            <Route
              path="/Artist_OpportunityDetails"
              exact
              element={<Artist_OpportunitiesMoreInfo />}
            />

            <Route path="/PortfolioDisplay" element={<PortfolioDisplay1 />} />

            <Route
              path="/patron_view_artist/:id"
              element={<PatronPortfolioDisplay />}
            />

            <Route path="/EditPortfolio" element={<EditPortfolio />} />

            <Route path="/latestNews" exact element={<Newsletter />} />

            <Route path="/contactUs" element={<ContactUs />} />

            <Route path="/chatApp" element={<ChatDisplay />} />
            <Route
              path="/viewChat/:id"
              element={<ChatViewSection showViewChat={true} />}
            />
          </>
        )}

        {role === "Patron" && (
          <>
            <Route
              path="/UploadOpportunity"
              exact
              element={<UploadOpportunities />}
            />
            <Route
              path="/UploadedOpportunities"
              exact
              element={<UploadedOpportunities />}
            />
            <Route
              path="/EditOpportunity"
              exact
              element={<EditOpportunity />}
            />
            <Route path="/Patron_Profile" element={<PatronProfile />} />

            <Route path="/ViewArtistProfiles" element={<ArtistProfiles />} />

            <Route path="/patron-view-artist/:id" element={<ViewArtist />} />

            <Route path="/contactUs" element={<Contactus />} />

            <Route path="/latestNews" exact element={<Newsletter />} />

            <Route
              path="/patron-event-appli/:id"
              element={<EventApplication />}
            />
            <Route
              path="/patron-artist-appli"
              element={<ArtistApplication />}
            />
            <Route
              path="/Patron_Portfolio"
              exact
              element={<Patron_Portfolio />}
            />
            <Route
              path="/Edit_Patron_Portfolio"
              exact
              element={<Edit_Patron_Portfolio />}
            />
            <Route
              path="/Patron_Portfolio"
              exact
              element={<Patron_Portfolio />}
            />
            <Route
              path="/Edit_Patron_Portfolio"
              exact
              element={<Edit_Patron_Portfolio />}
            />
          </>
        )}

        <Route path="/partner-profile" element={<Partner_Profile />} />
        <Route path="/skilldevelopment" element={<SkillDevelopment />} />
        <Route path="/CourseCategories" exact element={<CourseCategories />} />
        <Route path="/About_Partner" exact element={<AboutPartner />} />
        <Route
          path="/Edit_About_Partner"
          exact
          element={<EditAboutPartner />}
        />
        <Route path="/SellProduct" exact element={<SellProduct />} />
        <Route
          path="/Partner_ProductsandCourses"
          exact
          element={<MyProductsandCourses />}
        />
      </Routes>
      {
        // role === "Admin" && <AdminFooter/>
      }
    </div>
  );
}
