import React from 'react'
import './MediaGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCamera,faVideo,faPrint } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faSearch} />
export function MediaGallery() {

    return (
        <div className='MediaGallery_page'>
            <h1 className='MediaGallery_heading1'>eK GALLERY</h1>
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
                    <img src="assets/MediaGallery/MediaGallerry_img_1.png" className="MediaGallery_Media_Item" alt="Photos" />
                    <h3>
                        <span style={{ display: "inline-block" }}>
                            Photos   <FontAwesomeIcon icon={faCamera} style={{ color: "#ffffff" }} />
                        </span>
                    </h3>

                </div>

                <div className="MediaGallery_Media_Items">
                    <img src="assets/MediaGallery/MediaGallery_img_2.png" className="MediaGallery_Media_Item" alt="Videos" />
                    <h3>
                        <span style={{ display: "inline-block" }}>
                            Videos   <FontAwesomeIcon icon={faVideo} style={{color: "#ffffff",}} />
                        </span>
                    </h3>

                </div>

                <div className="MediaGallery_Media_Items">
                    <img src="assets/MediaGallery/MediaGallery_img_3.png" alt="Media Print" className="MediaGallery_Media_Item" />
                    <h3>
                        <span style={{ display: "inline-block" }}>
                            Print   <FontAwesomeIcon icon={faPrint} style={{color: "#ffffff",}} />
                        </span>
                    </h3>
                </div>

            </div>
            <div className='MediaGallery_Upcoming'>
                <h4>Upcoming Events</h4>
                <Carousel className='MediaGallery_Carousel'>
                    <Carousel.Item>
                        Hey
                    </Carousel.Item>
                    <Carousel.Item>
                        Hello Worlds
                    </Carousel.Item>
                    <Carousel.Item>
                        Hey
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
