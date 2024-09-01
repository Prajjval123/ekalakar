import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import "./ManageProfile.css";
const YourComponent = () => {
  return (
    <div className="opportunity-ManageProfile">
      <div className="top-division">
        <div class="circleprofile">
          <img src="" alt="" />
        </div>
        <div className="profileheading">
          <h1 className="profileh1">Kavya</h1>
          <h2 className="profileh2">Dancer</h2>
        </div>
      </div>
      <div className="ManageProfile-middle">
        <div className="icon-text">
          <div className="icons">
            <FiPhone className="profileicons" />
          </div>
          <p>1234567890</p>
        </div>
        <div className="icon-text">
          <div className="icons">
            <MdOutlineLocationOn className="profileicons" />
          </div>
          <p>Cochin</p>
        </div>
        <div className="icon-text">
          <div className="icons">
            <MdOutlineMailOutline className="profileicons" />
          </div>
          <p>kava02@gmail.com</p>
        </div>
      </div>
      <div class="ManageProfile-card">
        <div class="left-division">
          <div class="profilesection-heading">Personal Info</div>
          <div class="profileparagraph-text">
          <ul class="list-items">
            <li class="list-item">Tamil</li>
            <li class="list-item">Malayalam</li>
          </ul>
          </div>
          <div class="profilesection-heading">Languages</div>

          <ul class="list-items">
            <li class="list-item">Tamil</li>
            <li class="list-item">Malayalam</li>
          </ul>
          <div class="profileparagraph-text"></div>
          <div class="profilesection-heading">Address</div>
          <div class="profileparagraph-text">
            No 12, Gst Apartment, Gst road, Vandalore, Chennai -600028. Tamil
            Nadu.
          </div>
          <div class="profilesection-heading">Person with Disbilty</div>
          <div class="profileparagraph-text">NO</div>
          <div class="profilesection-heading">Source of Income</div>
          <div class="profileparagraph-text">NO</div>
          <div class="profilesection-heading">PAN number</div>
          <div class="profileparagraph-text">12DF45688CVB</div>
          <div class="profilesection-heading">UPI Id</div>
          <div class="profileparagraph-text">1234567890@paytm.com</div>
          <div class="profilesection-heading">Youtube</div>
          <div className="profileparagraph-text">
            https://www.youtube.com/watch?v=kcTV3G-Wi34&list=RDkcTV3G-Wi34&start_radio=1VB
          </div>
        </div>

        <div class="right-division">
          <div class="profilesection-heading">About me as Artist</div>
          <div class="profileparagraph-text">
           Dedicated and passionate Hula dancer with two years of experience seeking opportunities to showcase expertise and commitment as a main dancer. Proficient in both Hula 'Auana and Hula Kahiko styles, with a strong foundation in traditional Hawaiian dance techniques.
          </div>

          <div class="profilesection-heading">Category of Art</div>
          <div class="profileparagraph-text">Dancer(Hula)</div>
          <div class="profilesection-heading">Guru</div>
          <div class="profileparagraph-text">A.R.RAHMAN</div>
          <div class="profilesection-heading">Education</div>
          <div class="profileparagraph-text">ASR Culturals And Art Collage</div>
          <div class="profilesection-heading">Experience</div>
          <div class="profileparagraph-text">2 Years of background Dancer in collage team</div>
          <div class="profilesection-heading">Performance Type</div>
          <div class="profileparagraph-text">
          Both solo and group dance
          </div>
          <div class="profilesection-heading">No of Performances</div>
          <div class="profileparagraph-text">136</div>
          <div class="profilesection-heading">Image And Video</div>
          <div class="profileparagraph-text">goole drive link of Image and video</div>
        </div>
      </div>
      <div className="ManageProfile-footer">
        <div className="socialicon">
          <FaInstagram></FaInstagram>
          <h3> Instagram ID</h3>
        </div>
        <div className="socialicon">
          <FaFacebook></FaFacebook>
          <h3>Facebook ID</h3>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
