import React from "react";
import "./OurArtists.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const OurArtists_images = [
    {
        src: "assets/OurArtists/Chitrasen GOTIPUA Odisha.jpg",
        caption: "Chitrasen",
        subcaption: "GOTIPUA",
    },
    {
        src: "assets/OurArtists/Miss Subhashri ODISSI Odisha.jpeg",
        caption: "Subhashri",
        subcaption: "ODISSI",
      
    },
    {
        src: "assets/OurArtists/Padmini Dora FOLK Odisha.bmp",
        caption: "Padmini ",
        subcaption: "FOLK",
        
    },
    {
        src: "assets/OurArtists/Sadasiva Ji CHHAU Odisha.jpeg",
        caption: "Sadasiva",
        subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurArtists/Ashok Chhau Odisha.jpg",
        caption: "Ashok",
        subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurArtists/Babita Mayurbhanj Chhau Odisha.jpg",
        caption: "Babita",
        subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurArtists/Chitta Chhau Odisha.jpg",
        caption: "Chitta",
        subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurArtists/Hansel bassist Mumbai.jpeg",
        caption: "Hansel",
        subcaption: "BASSIST",
        
    },
    {
        src: "assets/OurArtists/Hardik Drummer Mumbai.jpeg",
        caption: "Hardik",
        subcaption: "DRUMMER",
        
    },
    {
        src: "assets/OurArtists/Hitesh Guitarist Mumbai.jpeg",
        caption: "Hitesh",
        subcaption: "GUITARIST",
        
    },
    {
        src: "assets/OurArtists/Jayanti Mala Kathak Mumbai.jpg",
        caption: "Jayanti",
        subcaption: "KATHAK",
        
    },
    {
        src: "assets/OurArtists/Jyoti Kathak Mumbai.jpg",
        caption: "Jyoti",
        subcaption: "KATHAK",
        
    },
    {
        src: "assets/OurArtists/Jyotirmayi Odissi Odisha.jpeg",
        caption: "Jyotirmayi",
        subcaption: "ODISSI",
        
    },
    {
        src: "assets/OurArtists/Manasi Atre Kathak Mumbai.jpg",
        caption: "Manasi",
        subcaption: "KATHAK",
        
    },
    {
        src: "assets/OurArtists/Rishika Kathak Mumbai.bmp",
        caption: "Rishika",
        subcaption: "KATHAK",
        
    },
    {
        src: "assets/OurArtists/Sayli Kathak Mumbai.jpg",
        caption: "Sayli",
        subcaption: "KATHAK",
        
    },
    {
        src: "assets/OurArtists/Smailshree Sambalpuri Odisha.jpeg",
        caption: "Smailshree",
        subcaption: "SAMBALPURI",
        
    },
    {
        src: "assets/OurArtists/Somyashree Sambalpuri Odisha.jpeg",
        caption: "Somyashree",
        subcaption: "SAMBALPURI",
        
    },
    {
        src: "assets/OurArtists/Tapoi Chhau Odisha.jpg",
        caption: "Tapoi",
        subcaption: "CHHAU",
        
    },
    {
        src: "assets/OurArtists/Tejashree Kathak Mumbai.jpg",
        caption: "Tejashree",
        subcaption: "KATHAK",
    }
];

export function OurArtists() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
    const OurArtistsimagesPerSlide = isSmallScreen ? 1 : 3;
    return (
        <div className="OurArtists_page">

            <h1 className="OurArtists_heading1">eK ARTISTS</h1>
            <Carousel interval={400} activeIndex={index} onSelect={handleSelect}>
                {Array.from({ length: Math.ceil(OurArtists_images.length / OurArtistsimagesPerSlide) }).map((_, i) => (
                    <Carousel.Item key={i}>
                        <div className="OurArtists_Items" style={{ display: "flex" }}>
                            {OurArtists_images.slice(i * OurArtistsimagesPerSlide, i * OurArtistsimagesPerSlide + OurArtistsimagesPerSlide).map((image, j) => (
                                <div className="OurArtists_imgitems" key={j} style={{ flex: 1 }}>
                                    
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