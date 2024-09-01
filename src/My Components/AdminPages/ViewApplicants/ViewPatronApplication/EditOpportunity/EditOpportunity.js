import React , { useEffect, useState } from "react";
import "../../PatronPages/OpportunitesforArtist/UploadOpportunities.css"

export default function EditOpportunity() {
    const [formData, setFormData] = useState({});
  return (
    <>
      <div className="ArtistOpportunities_Page">
            <h1>Edit Opportunities</h1>
        <div className="ArtistOpportunities_Page_Infoform">
          <form >
            <div className="ArtistOpportunities_Page_Infoform_Contentone" style={{width:937}}>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Nature of Art*</label>
                <input
                  defaultValue={formData?.artNature}
                  name="artNature"
                  
                  type="text"
                  placeholder="Enter nature of art"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Performance*</label>
                <input
                  defaultValue={formData?.location}
                  name="location"
                  
                  type="text"
                  placeholder="Enter location"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Description*</label>
                <input
                  name="description"
                  defaultValue={formData?.description}
                  
                  type="text"
                  placeholder="Enter art Description"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Date of Performance*</label>
                <input
                  defaultValue={formData?.performanceDate}
                  name="performanceDate"
                  
                  type="date"
                  placeholder="Enter event date"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Type of Performance*</label>
                <input
                  defaultValue={formData?.performanceType}
                  name="performanceType"
                  
                  type="text"
                  placeholder="Enter performance type"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Languages*</label>
                <input
                  defaultValue={formData?.languages}
                  name="languages"
                  
                  type="text"
                  placeholder="Enter languages"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Live / Record *</label>
                <select  name="mediaType">
                  <option selected hidden>
                    Select
                  </option>
                  <option
                    value="Live"
                    selected={formData?.mediaType === "Live" && true}
                  >
                    Live
                  </option>
                  <option
                    value="Recorded"
                    selected={formData?.mediaType === "Recorded" && true}
                  >
                    Recorded
                  </option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Theme*</label>
                <input
                  
                  defaultValue={formData?.theme}
                  name="theme"
                  type="text"
                  placeholder="Enter theme"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Number of Artist*</label>
                <input
                  defaultValue={formData?.requiredArtists}
                  name="requiredArtists"
                  
                  type="number"
                  placeholder="Enter number of artist"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Time of Performance*</label>
                <select  name="timeSlot">
                  <option selected hidden>
                    Select Time Slot
                  </option>
                  <option
                    value="Day"
                    selected={formData?.timeSlot === "Day" && true}
                  >
                    Day
                  </option>
                  <option
                    value="Night"
                    selected={formData?.timeSlot === "Night" && true}
                  >
                    Night
                  </option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Position*</label>
                <input
                  
                  type="text"
                  defaultValue={formData?.position}
                  placeholder="Enter Position"
                  name="position"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Duration of Performance*</label>
                <input
                  
                  defaultValue={formData?.performanceDuration}
                  name="performanceDuration"
                  type="text"
                  placeholder="Enter Performance Duration"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Artist Level*</label>
                <input
                  
                  defaultValue={formData?.artistLevel}
                  name="artistLevel"
                  type="text"
                  placeholder="Enter Artist Level"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Expertise*</label>
                <input
                  
                  defaultValue={formData?.expertise}
                  name="expertise"
                  type="text"
                  placeholder="Enter Artist Expertise"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Category*</label>
                <input
                  
                  type="text"
                  name="category"
                  defaultValue={formData?.category}
                  placeholder="Enter Category"
                />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_Contenttwo">
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Proposed Budget*</label>
                <input
                  
                  defaultValue={formData?.budget}
                  name="budget"
                  type="text"
                  placeholder="Enter proposed budget"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Start Date of Application*</label>
                <input
                  
                  name="start"
                  efaultValue={formData?.applicationPeriod?.start}
                  type="date"
                  placeholder="Enter application Start date"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Last Date of Application*</label>
                <input
                  
                  name="end"
                  defaultValue={formData?.applicationPeriod?.end}
                  type="date"
                  placeholder="Enter application last date"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Any Other Requirements*</label>
                <input
                  
                  name="otherRequirements"
                  defaultValue={formData?.otherRequirements}
                  style={{ height: "200px" }}
                  type="text"
                  placeholder="Enter Any Other requirements"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  Do you Offer any Additional Facilities(incentives)*
                </label>
                <input
                  
                  name="incentives"
                  defaultValue={formData?.incentives}
                  style={{ height: "200px" }}
                  type="text"
                  placeholder="Enter Incentives"
                />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_btns">
              <button type="Submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
