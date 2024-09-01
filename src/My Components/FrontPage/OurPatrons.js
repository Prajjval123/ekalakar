import React from "react";
import "./OurPatrons.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const OurPatrons_images = [
    {
        src: "assets/OurPatrons/GIZ.jpg",
        caption: "Chitrasen",
        // subcaption: "GOTIPUA",
    },
    {
        src: "assets/OurPatrons/Goregaon.jpg",
        caption: "Subhashri",
        // subcaption: "ODISSI",
      
    },
    {
        src: "assets/OurPatrons/Mayfair.jpg",
        caption: "Padmini ",
        // subcaption: "FOLK",
        
    },
    {
        src: "assets/OurPatrons/Pantiss",
        caption: "Sadasiva",
        // subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurPatrons/Bhartiya.jpg",
        caption: "Ashok",
        // subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurPatrons/Pantiss.jpg",
        caption: "Babita",
        // subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurPatrons/Tatapower.jpg",
        caption: "Chitta",
        // subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurPatrons/Tiss.jpg",
        caption: "Hansel",
        // subcaption: "BASSIST",
        
    },
    {
        src: "assets/OurPatrons/Unicef.jpg",
        caption: "Hardik",
        subcaption: "DRUMMER",
        
    }
];

export function OurPatrons() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
    const OurArtistsimagesPerSlide = isSmallScreen ? 1 : 3;
    return (
        <div className="OurPatrons_page">

            <h1 className="OurPatrons_heading1">eK PATRONS</h1>
            <Carousel interval={400} activeIndex={index} onSelect={handleSelect}>
                {Array.from({ length: Math.ceil(OurArtists_images.length / OurArtistsimagesPerSlide) }).map((_, i) => (
                    <Carousel.Item key={i}>
                        <div className="OurPatrons_Items" style={{ display: "flex" }}>
                            {OurArtists_images.slice(i * OurArtistsimagesPerSlide, i * OurArtistsimagesPerSlide + OurArtistsimagesPerSlide).map((image, j) => (
                                <div className="OurPatrons_imgitems" key={j} style={{ flex: 1 }}>
                                    
                                        <img src={image.src} alt={`Slide ${i * OurArtistsimagesPerSlide + j + 1}`} />
                                        <h3>{image.caption}</h3>
                                        <p>{image.subcaption}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>


        </div>
    );
}