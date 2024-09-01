import React, { useState } from "react";
import "./UploadEvent.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function UploadEvents() {
  
  const token = localStorage.getItem("accessToken");
  const [formData, setFormData] = useState({
    feedback: { type: "video" }, // Default feedback type
  });
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
  
    if (name.startsWith("feedback")) {
      setFormData((prevState) => ({
        ...prevState,
        feedback: {
          ...prevState.feedback,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  
  

  const handleFeedbackTypeChange = (type) => {
    setFormData((prevState) => ({
      ...prevState,
      feedback: { type },
    }));
  };

  const addImage = () => {
    setFormData((prevState) => ({
      ...prevState,
      images: [...(prevState.images || []), ""],
    }));
  };

  const addVideo = () => {
    setFormData((prevState) => ({
      ...prevState,
      videos: [...(prevState.videos || []), ""],
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
  
    try {
      console.log("FormData:", formData);
  
      // Add additional checks here if needed
      if (!formData.subject || !formData.themeName || !formData.date || !formData.venue || !formData.duration) {
        toast.error("Please fill in all the required fields");
        return;
      }
  
     
  
      const response = await makeAuthenticatedPOSTRequest(
        `${BASE_URL}/admin/events`,
        formData,
        token
      );
  
      if (response ) {
        toast.success("Event uploaded successfully");
        setFormData({}); // Clear form fields
        navigate('/Viewevents');
      } else {
        console.log(response);
        // console.log(response.Status)
        toast.error("Failed to upload event. Please check the form data.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again");
    }
  
    toast.dismiss(toastId);
  };
  
  

  return (
    <>
     
     <div className="UploadEvents_Page">
        <div className="opportunity_container">
        <div className="">
            <strong
              style={{ marginTop: "3%", color: "#AD2F3B", fontSize: "35px" }}
            >
              Upload Events
            </strong>
          </div>
          <div className="UploadEvents_Page_Infoform">
          <form onSubmit={submitHandler}>
          <div className="UploadEvents_Page_Infoform_Contentone">
                <div className="opp_top">


            <div className="UploadEvents_Page_Infoform_inputfield required">
              <label>Event Subject</label>
              <input
                required
                onChange={inputChangeHandler}
                value={formData?.subject || ''}
                name="subject"
                type="text"
                placeholder="Enter event subject"
              />
            </div>

            <div className="UploadEvents_Page_Infoform_inputfield required">
              <label>Event Theme</label>
              <input
                required
                onChange={inputChangeHandler}
                value={formData?.themeName || ''}
                name="themeName"
                type="text"
                placeholder="Enter event theme"
              />
            </div>

            <div className="UploadEvents_Page_Infoform_inputfield required">
              <label>Event Date</label>
              <input
                required
                onChange={inputChangeHandler}
                value={formData?.date || ''}
                name="date"
                type="date"
                placeholder="Enter event date"
              />
            </div>

            <div className="UploadEvents_Page_Infoform_inputfield required">
              <label>Event Venue</label>
              <input
                required
                onChange={inputChangeHandler}
                value={formData?.venue || ''}
                name="venue"
                type="text"
                placeholder="Enter event venue"
              />
            </div>

            <div className="UploadEvents_Page_Infoform_inputfield required">
              <label>Event Duration</label>
              <input
                required
                onChange={inputChangeHandler}
                value={formData?.duration || ''}
                name="duration"
                type="text"
                placeholder="Enter event duration in hrs"
              />
            </div>

            <div className="UploadEvents_Page_Infoform_inputfield">
              <label>Event Description</label>
              <textarea
                required
                onChange={inputChangeHandler}
                value={formData?.description || ''}
                name="description"
                placeholder="Enter event description"
              ></textarea>
            </div>

            {/* Images Input Field */}
            <div className="UploadEvents_Page_Infoform_inputfield">
          <label>Event Images (Upload Links)</label>
          {formData.images &&
            formData.images.map((image, index) => (
              <div key={index}>
                <input
                  onChange={(e) => {
                    const updatedImages = [...formData.images];
                    updatedImages[index] = e.target.value;
                    setFormData((prevState) => ({
                      ...prevState,
                      images: updatedImages,
                    }));
                  }}
                  value={image}
                  type="text"
                  placeholder={`Image URL ${index + 1}`}
                />
              </div>
            ))}
          <button type="button" onClick={addImage}>
            Add Image
          </button>
        </div>

        <div className="UploadEvents_Page_Infoform_inputfield">
          <label>Event Videos(Youtube Links)</label>
          {formData.videos &&
            formData.videos.map((video, index) => (
              <div key={index}>
                <input
                  onChange={(e) => {
                    const updatedVideos = [...formData.videos];
                    updatedVideos[index] = e.target.value;
                    setFormData((prevState) => ({
                      ...prevState,
                      videos: updatedVideos,
                    }));
                  }}
                  value={video}
                  type="text"
                  placeholder={`Video URL ${index + 1}`}
                />
              </div>
            ))}
          <button type="button" onClick={addVideo}>
            Add Video
          </button>
        </div>

        <div className="UploadEvents_Page_Infoform_inputfield">
          <label>Feedback Type</label>
          <select
            value={formData.feedback.type}
            onChange={(e) => handleFeedbackTypeChange(e.target.value)}
          >
            <option value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="text">Text</option>
          </select>
        </div>

        {formData.feedback.type && (
  <div className="UploadEvents_Page_Infoform_inputfield">
    <label>Feedback - {formData.feedback.type}</label>
    <input
      onChange={inputChangeHandler}
      value={formData.feedback[formData.feedback.type] || ""}
      name={`feedback.${formData.feedback.type}`}
      type="text"
      placeholder={`Enter ${formData.feedback.type} links`}
    />
  </div>
)}


        <div className="UploadEvents_Page_Infoform_btns">
          <button type="submit" style={{ cursor: "pointer" }}>
            Upload
          </button>
        </div>
      </div>
           </div>
           
        </form>
         </div>
      </div>
    </div>
       
    </>
  );
}

export default UploadEvents;
