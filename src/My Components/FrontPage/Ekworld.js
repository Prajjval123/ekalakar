import React from 'react';
import './Ekworld.css';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import DancePic from '../../../public/assets/Ekworld/Rectangle206.png';
export function Ekworld() {
  return (
    <div className='Ekworld_Page'>
      <h1 className='Ekworld_heading1'>eK WORLD OF PERFORMING ARTS</h1>
      <div className='Ekworld_content'>
        <p>eKalakaar brings a curated offering from the vibrant kaleidoscope of Indian Traditional Performing Classical and Folk Art
          (dance, music, song and theatre) for creating a truly authentic cultural experience. We offer suitable art form for every occasion and theme including
          <br /><br />
          <ul>
            <li>Pure traditional form
            </li>
            <li>
            Creative Fusion forms ( blending traditional and modern)
            </li>
            <li>Theme based with specific purpose such as education environment care</li>
          </ul>

        </p>
      </div>
      <div className="Ekworld_Media">
        <a href='#Mediagallery'>
          <div className="Ekworld_Media_Items">
            {/* <img src="assets/Ekworld/Rectangle 142.png" className="Ekworld_Media_Item" alt="Dance" /> */}
            <img src={DancePic} className="Ekworld_Media_Item" alt="Dance" />
            <h3>
              Dance
            </h3>
          </div>
        </a>

        <a href='#Mediagallery'>
          <div className="Ekworld_Media_Items">
            <img src="assets/Ekworld/image49.png" className="Ekworld_Media_Item" alt="Song" />
            <h3>
              Song
            </h3>


          </div></a>
        <a href='#Mediagallery'>
          <div className="Ekworld_Media_Items">
            <img src="assets/Ekworld/MUSIC.jpg" alt="Music" className="Ekworld_Media_Item" />
            <h3>
              Music
            </h3>

          </div></a>
        <a href='#Mediagallery'>
          <div className="Ekworld_Media_Items">
            <img src="assets/Ekworld/Rectangle206.png" alt="Theatre" className="Ekworld_Media_Item" />
            <h3>
              Theatre
            </h3>

          </div></a>

      </div>
    </div>

  )
}


