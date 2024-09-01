import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import './EventDetails.css';
import ReactPlayer from 'react-player';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/events/${id}`, token); // fix the template literal
        setEvent(response);
      } catch (error) {
        console.error('Error fetching event details:', error.message);
      }
    };

    fetchEventDetails();
  }, [id, token]);

  return (
    <div className="event-details-container">
      <h1 className="event-title">{event.themeName || 'Loading...'}</h1>
      {Object.keys(event).length > 0 && ( 
        <>
      <div className="event-info">
        <p><strong>Subject:</strong> {event.subject}</p>
        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Duration:</strong> {event.duration} hrs</p>
      </div>

      <div className="event-description">
        <p><strong>Description:</strong> {event.description}</p>
      </div>

      <div className="event-media">
            {event.images && (
              <div className="event-images">
                <p><strong>Images:</strong></p>
                <div className="image-row">
                  {event.images.map((image, index) => (
                    <img key={index} src={image} alt={`Event Image ${index}`} className="img-fluid" />
                  ))}
                </div>
              </div>
            )}


{/* {event.videos && (
              <div className="event-videos">
                <p><strong>Videos:</strong></p>
                <div className="video-row">
                  {event.videos.map((video, index) => (
                    <video key={index} src={video} controls className="img-fluid" />
                  ))}
                </div>
              </div>
            )} */}

      {event.videos && (
              <div className="event-videos">
                <p><strong>Videos:</strong></p>
                <div className="video-row">
                  {event.videos.map((video, index) => (
                    <div key={index} className="img-fluid">
                      <ReactPlayer
                        url={video} 
                        controls={true}
                        width="auto"
                        // height="auto"
                        style={{ marginBottom: '10px' }}
                      />
                    </div>
                  ))}
                      </div>
                    </div>
                  )}
          </div>

      <div className="event-feedback">
        <h3>Feedback</h3>
        <p><strong>Video:</strong> {event.feedback && event.feedback.video}</p>
        <p><strong>Audio:</strong> {event.feedback && event.feedback.audio}</p>
        <p><strong>Text:</strong> {event.feedback && event.feedback.text}</p>
      </div>

      </>
      )}
    </div>
  );
};

export default EventDetails;
