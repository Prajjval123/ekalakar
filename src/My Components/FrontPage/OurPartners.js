import React from "react";
import "./OurPartners.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const OurPartners_images = [
    {
        src: "assets/OurPartners/OurPartners_Suranjali.jpeg",
        caption:
            "'SURANJALI' is a group of Professional Artists ( Instrumental & Vocal ) bringing together on one platform. The Group has so far performed on various occasions such as ,prestigious Award celebrations & theater shows, Corporate events & parties, Festivals, reputed marriages & Wedding Receptions, well known Star Hotels & Clubs.",
       
    },
    {
        src: "assets/OurPartners/OurPartners_Gokul_Gurukul.png",
        
    },
    {
        src: "assets/OurPartners/OurPartners_Kalakruti.jpeg",
        caption: "Jayanti Mala has given her best performance in every part of the world, in India as well as abroad for which she will be remembered forever about her Art in the Audience. mala is very versatile in Abhinaya & laikari, the clearity of her hand mudras and movements are just excellent.",
       
    }
];

export function OurPartners() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
    const OurPartnersimagesPerSlide = isSmallScreen ? 1 : 2;
    return (
        <div className="OurPartners_page">
            <h1 className="OurPartners_heading1">eK PARTNERS</h1>


            <Carousel activeIndex={index} onSelect={handleSelect}>
                {Array.from({ length: Math.ceil(OurPartners_images.length / OurPartnersimagesPerSlide) }).map((_, i) => (
                    <Carousel.Item key={i}>
                        <div className="OurPartners_Items" style={{ display: "flex" }}>
                            {OurPartners_images.slice(i * OurPartnersimagesPerSlide, i * OurPartnersimagesPerSlide + OurPartnersimagesPerSlide).map((image, j) => (
                                <div
                                    className="OurPartners_imgitems"
                                    key={j}
                                    style={{ flex: 1 }}
                                >
                                    <div className="OurPartners_image_container">
                                        <img src={image.src} alt={`Slide ${i * OurPartnersimagesPerSlide + j + 1}`} />
                                        <div className="OurPartners_image_text">{image.caption}</div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    );
}
