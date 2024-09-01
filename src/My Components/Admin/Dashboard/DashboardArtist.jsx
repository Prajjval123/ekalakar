import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import { Calendar } from 'primereact/calendar';
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Dashboard() {
  const [totalArtists, setTotalArtists] = useState(0);
  const [totalPatrons, setTotalPatrons] = useState(0);
  const [totalPartners, setTotalPartners] = useState(0);
  const [totalArtlovers, setTotalArtlovers] = useState(0);
  const [totalOpportunities, setTotalOpportunities] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const [totalperformances, setTotalPerformances] = useState(0);
  const [totalrevenue, setTotalRevenue] = useState(0);

  const token = localStorage.getItem('accessToken');
  
  const navigate = useNavigate();

   if(!token) {
    toast.error("Please login to access")
    navigate("/login");
   }

  useEffect(() => {
    const getUser = async (role) => {
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/users?role=${role}`, token);
       
        //  console.log(response)
        if (role === "Artist") {
          setTotalArtists(response.data.length);
        } else if (role === "Patron") {
          setTotalPatrons(response.data.length);
        } else if(role === "Partner"){
          setTotalPartners(response.data.length);
        } else if(role === "Art-lover"){
          setTotalArtlovers(response.data.length);
        }
      } catch (error) {
        console.error(`Error fetching ${role} data:`, error);
      }
    };

    const getOpportunity = async () => {
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/opps`, token);
        
        // console.log(response)
        setTotalOpportunities(response.data.length);
      } catch (error) {
        console.error("Error fetching opportunity data:", error);
      }
    };

    const getApplications = async () =>{

      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/allapps`, token);

        console.log(response)
        setTotalApplications(response.length);
        toast.dismiss(toast.loading("loading..."));
         
        const data = response.filter((a) => {
          return a.status === 'Hired';
        })
        console.log(data);
        setTotalPerformances(data.length);
        
        let sum = 0;
        data.forEach((elm) =>{
          // console.log(elm.opportunity)
          if(elm.opportunity)
            sum += elm.opportunity.budget
        })
        setTotalRevenue(sum);
        console.log(sum)
        toast.success("Dashboard loaded successfully")
      } catch (error) {
         console.log("Error fetching application data:", error);
      }
    }
      
    
    getUser("Artist");
    getUser("Patron");
    getUser("Partner");
    getUser("Art-lover");
    getOpportunity();
    getApplications();

  }, []);

  return (
    <div className="Dashboard">
    <div className="dashboarditems">
      {/* <div className="card flex justify-content-center">
        <Calendar label="Basic date picker" />
      </div>
      <div className="card flex justify-content-center">
        <Calendar label="Basic date picker" />
      </div> */}
      <button className="dashboardbutton">Filter</button>
    </div>
    <div className="dashboard_circle">
      <div className="circle">
        <Link to="/Patron" className="Link">
          <p>Total Patrons</p>
          <p>{totalPatrons}</p>
        </Link>
      </div>
      <div className="circle">
        <Link to="/Artist" className="Link">
          <p>Total Artists</p>
          <p>{totalArtists}</p>
        </Link>
      </div>
      <div className="circle">
        <Link to="/partner" className="Link">
          <p>Total Partners</p>
          <p>{totalPartners}</p>
        </Link>
      </div>
      <div className="circle">
        <Link to="/ArtLover" className="Link">
          <p>Total Art-Lovers</p>
          <p>{totalArtlovers}</p>
        </Link>
      </div>
    </div>
    <div className="dashboard_circle">
      <div className="circle">
        <Link to="/Opportunity" className="Link">
          <p>Opportunities</p>
          <p>{totalOpportunities}</p>
        </Link>
      </div>
      <div className="circle applicationprogress">
        <div className="uppercircle">
          <div className="progressbar1">M</div>
          <Link to="/DashboardApplication" className="Link">
            <p>Applications</p>
            <p>{totalApplications}</p>
          </Link>
          <div className="progressbar2">M</div>
        </div>
      </div>
      <div className="circle">
        <Link to="/DashboardPerformance" className="Link">
          <p>Performances</p>
          <p>{totalperformances}</p>
        </Link>
      </div>
      <div className="circle" style={{ border: "3px solid #AD2F3B" }}>
        <Link to="/DashboardRevenue" className="Link">
          <p>Revenue</p>
          <p>₹{totalrevenue}</p>
        </Link>
      </div>
      </div>
    <div className="dashboarditems">
    <div className="card flex justify-content-center" style={{height : "30px", backgroundColor: "white", border: "2px solid black"}}>
            <input type="text" className="p-invalid" style={{border: "none"}} />
        </div>
    <button class="dashboardbutton">Submit</button>
    </div>
    <div className="dashboard_graph">
      <h3>Artists</h3>
      <img src="./artist1.png" alt="" />
      <img src="./artist2.png" alt="" />
      <div className="dashboard_graph_square">
       <div className="square"></div>
        <p>Patrons</p>
      </div>
    </div>

    </div>
  );
}