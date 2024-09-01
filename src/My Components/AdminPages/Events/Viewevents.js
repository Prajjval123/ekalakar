import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Viewevent.css';
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Viewevents() {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("accessToken");

const truncateDescription = (description) => {
  if (typeof description !== 'string') {
    return ''; // Return an empty string or handle accordingly if description is not a string
  }

  const words = description.split(' ');
  const truncated = words.slice(0, 30).join(' ');
  return truncated + (words.length > 30 ? '...' : ''); // Add ellipsis if truncated
};
  
const navigate = useNavigate();

useEffect(() => {
  const fetchEvents = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/events`, token); // fix the template literal
      setEvents(response);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };

  fetchEvents();
}, [token]);

const handleUploadButtonClick = () => {
  navigate('/UploadEvents');
};


  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', padding: '20px' }}>
        <h2>All Events Performed</h2>
        <button
          onClick={handleUploadButtonClick}
          style={{ backgroundColor: '#AD2F3B', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Upload New Events
        </button>
      </div>

        <div className="content-wrapperevent">
      
        {events && events.map(event => (
          <div key={event._id} className="event-card">
            <a href="#" className="event-card__card-link" />
            <img src={event.images[0]} alt={event.themeName} className="event-card__image" />
            <div className="event-card__text-wrapper">
              <h2 className="event-card__title">{event.themeName}</h2>
              <div className="event-card__post-date">{new Date(event.date).toLocaleDateString()}</div>
              <div className="event-card__details-wrapper">
              <p className="event-card__excerpt">{truncateDescription(event.description)}</p>
              <Link to={`/EventDetails/${event._id}`} className="event-card__read-more">Read more <i className="fas fa-long-arrow-alt-right" /></Link>    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
