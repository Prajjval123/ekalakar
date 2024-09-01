import React from "react";
import "./Dashboard.css";
import LiveUserButton from "./SmallComponents/LiveUser/LiveUserButton";
import User from "../assets/DashboardIcon/User.svg";
import Artist from "../assets/DashboardIcon/Artist.svg";
import ArtLover from "../assets/DashboardIcon/ArtLover.svg";
import Partner from "../assets/DashboardIcon/Partner.svg";
import Patron from "../assets/DashboardIcon/Patron.svg";
import BtnCircle from "./SmallComponents/BtnCircle/btnCircle";
import Male from "../assets/DashboardIcon/Male.svg";
import Female from "../assets/DashboardIcon/Female.svg";
import Others from "../assets/DashboardIcon/Others.svg";
import Verified from "../assets/DashboardIcon/Verified.svg";
import BottomUserCount from "./SmallComponents/bottom-cont/BottomUserCount";

function DashBoard() {
  let check = [1, 2, 23, 3, 3];
  return (
    <div className="admin-view-User-cont dashboard-cci ">
      <div className="d-flex gap-3 flex-column">
        <div className="d-flex justify-content-between flex-wrap gap-2">
          <LiveUserButton
            img={User}
            action={() => {
              console.log("clikced");
            }}
            userCount={"300"}
            label={"Total User"}
          />
          <LiveUserButton
            img={Artist}
            action={() => {
              console.log("clikced");
            }}
            userCount={"300"}
            label={"Artist"}
          />
          <LiveUserButton
            img={Patron}
            action={() => {
              console.log("clikced");
            }}
            userCount={"300"}
            label={"Patrons"}
          />
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-2">
          <LiveUserButton
            img={Partner}
            action={() => {
              console.log("clikced");
            }}
            userCount={"300"}
            label={"Partners"}
          />
          <LiveUserButton
            img={ArtLover}
            action={() => {
              console.log("clikced");
            }}
            userCount={"300"}
            label={"Art Lovers"}
          />
        </div>
      </div>
      <div className="User-status-gender-cont">
        <div className="dashboard-graph-cont">
          <h2>User Status</h2>
          <div className="dashboard-gender-shadow-cont">Graph</div>
          <div className="dashboard-graph-bttn">
            <div
              className="dashboard-graph-bttn-content"
              onClick={() => console.log("iii")}
            >
              <h6>New User</h6>
              <p>100</p>
            </div>
            <div
              className="dashboard-graph-bttn-content"
              onClick={() => console.log("iii")}
            >
              <h6>User Lost</h6>
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="gender-verifed-cont">
          <div className="dashboard-gender-cont">
            <h2>Users by Gender</h2>
            <div className="dashboard-gender-shadow-cont">
              <BtnCircle label={"Male"} userCount={"5k"} img={Male} />
              <BtnCircle label={"Female"} userCount={"3k"} img={Female} />
              <BtnCircle label={"Others"} userCount={"100"} img={Others} />
            </div>
          </div>
          <div className="dashboard-gender-shadow-cont">
            <BtnCircle
              label={"Verified Users"}
              userCount={"2k"}
              img={Verified}
            />
          </div>
        </div>
      </div>
      <div className="bottom-cont-dashboard">
        <div className="dashboard-bt-c application-db">
          <h6> Total Applications</h6>
          <div className="dashboard-bt-content-gg">
            {check.map((item, index) => {
              return <BottomUserCount label={"For Dance"} count={"1200"} />;
            })}
          </div>
        </div>
        <div className="dashboard-bt-c application-db">
          <h6> Artist Applied</h6>
          <div className="dashboard-bt-content-gg">
            {check.map((item, index) => {
              return <BottomUserCount label={"For Dance"} count={"1200"} />;
            })}
          </div>
        </div>
        <div className="dashboard-bt-c application-db">
          <h6>Artist Hired</h6>
          <div className="dashboard-bt-content-gg">
            {check.map((item, index) => {
              return <BottomUserCount label={"For Dance"} count={"1200"} />;
            })}
          </div>
        </div>
        <div className="dashboard-bt-c application-db">
          <h6>Courses</h6>
          <div className="dashboard-bt-content-gg">
            {check.map((item, index) => {
              return <BottomUserCount label={"For Dance"} count={"1200"} />;
            })}
          </div>
        </div>
        <div className="dashboard-bt-c application-db">
          <h6>Product</h6>
          <div className="dashboard-bt-content-gg">
            {check.map((item, index) => {
              return <BottomUserCount label={"For Dance"} count={"1200"} />;
            })}
          </div>
        </div>

        <div className="dashboard-bt-c application-db">
          <h6>Revenue</h6>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
