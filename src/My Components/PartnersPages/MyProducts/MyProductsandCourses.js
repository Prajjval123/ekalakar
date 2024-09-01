import React from 'react';
import Partner_Navbar from '../Partner_Navbar';
import "./MyProductsandCourses.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { react, useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';


const ProductcarouselImageData = [
    {
        imageSrcs: ['assets/Products/Rectangle22147.png', 'assets/Products/Rectangle22148.png'],
        name: 'Set of Drums',
        description: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        category: "Musical Instruments",
        brand: "Random Brand",
        laststill: "10 Months",
        cost: "10,000",
        quantity: "2",
        postedby: "Mano",
        contact: "1234567890",
        email: "randommail@gmail.com",
    },
    {
        imageSrcs: ['assets/Products/Rectangle22148.png'],
        name: 'Product B',
        description: 'Description of Product B'
    },
    {
        imageSrcs: ['assets/Products/Rectangle22149.png'],
        name: 'Product C',
        description: 'Description of Product C'
    },
    {
        imageSrcs: ['assets/Products/Rectangle22150.png'],
        name: 'Product D',
        description: 'Description of Product D'
    },
    {
        imageSrcs: ['assets/Products/Rectangle22151.png'],
        name: 'Product E',
        description: 'Description of Product E'
    },
    {
        imageSrcs: ['assets/Products/Rectangle22152.png'],
        name: 'Product F',
        description: 'Description of Product F'
    },
    {
        imageSrcs: ['assets/Products/Rectangle22153.png'],
        name: 'Product G',
        description: 'Description of Product G'
    },
    {
        imageSrcs: ['assets/Products/Rectangle22154.png'],
        name: 'Product H',
        description: 'Description of Product I'
    }
];


const CoursesImageData = [
    {
        src: "assets/Products/Rectangle22029.png",
        btntext: "View Details"
    },
    {
        src: "assets/Products/Rectangle22030.png",
        btntext: "View Details"
    },
    {
        src: "assets/Products/Rectangle22031.png",
        btntext: "View Details"
    }
];

export default function MyProductsandCourses() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [popupActive, setPopupActive] = useState(false);

    //const handleViewDetails = (index) => {
    //  setSelectedProduct(index);
    //};

    const handleViewDetails = (index) => {
        setSelectedProduct(index);
        setPopupActive(true); // Open the popup

        if (popupContentRef.current) {
            popupContentRef.current.scrollTop = 0; // Scroll the content to the top
        }
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
        setPopupActive(false); // Close the popup
    };
    useEffect(() => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, []);

    const popupContentRef = useRef(null);

    return (
        <>
            <Partner_Navbar />
            <div className='MyProductsandCourses_Page'>
                <div className='MyProductsandCourses_Top'>
                    <div className='MyProductsandCourses_Content'>
                        <p>My Products and courses</p>
                    </div>
                </div>
                <div className='MyProductsandCourses_MainContent'>
                    {ProductcarouselImageData.map((product, index) => (
                        <div className={`MyProductsandCourses_MainContent_one ${popupActive ? 'disabled' : ''}`} key={index}>
                            <Carousel>
                                {product.imageSrcs.map((imageSrc, innerIndex) => (
                                    <Carousel.Item key={innerIndex}>
                                        <img src={imageSrc} alt={`Image ${innerIndex}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <button type='button' onClick={() => handleViewDetails(index)}>View Details</button>
                        </div>
                    ))}
                </div>
                <h1>Course Categories</h1>
                <div className='MyProductsandCourses_MainContent'>
                    {CoursesImageData.map((imageGroup, index) => (
                        <div className='MyProductsandCourses_MainContent_one'>
                            <img src={imageGroup.src}></img>
                            <button>{imageGroup.btntext}</button>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProduct !== null && (
                <div className="MyProductsandCourses_ProductPopup">
                    <div ref={popupContentRef} className="MyProductsandCourses_ProductPopup_MainContent">
                        <button onClick={handleClosePopup}>X</button>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <Carousel>
                                {ProductcarouselImageData[selectedProduct].imageSrcs.map((imageSrc, innerIndex) => (
                                    <Carousel.Item key={innerIndex}>
                                        <img src={imageSrc} alt={`Image ${innerIndex}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <p>About the Product: <br></br>{ProductcarouselImageData[selectedProduct].description}</p>
                            <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
                                <div>
                                    <p>Product Name: </p>
                                    <p>Category: </p>
                                    <p>Brand: </p>
                                    <p>Last Still:</p>
                                    <p>Cost: </p>
                                    <p>Quantity: </p>
                                    <p>Posted By:</p>
                                    <p>Contact Number: </p>
                                    <p>Email:</p>
                                </div>
                                <div>
                                    <p> {ProductcarouselImageData[selectedProduct].name}</p>
                                    <p> {ProductcarouselImageData[selectedProduct].category}</p>
                                    <p> {ProductcarouselImageData[selectedProduct].brand}</p>
                                    <p> {ProductcarouselImageData[selectedProduct].laststill}</p>
                                    <p> {ProductcarouselImageData[selectedProduct].cost}</p>
                                    <p>{ProductcarouselImageData[selectedProduct].quantity}</p>
                                    <p> {ProductcarouselImageData[selectedProduct].postedby}</p>
                                    <p> {ProductcarouselImageData[selectedProduct].contact}</p>
                                    <p> {ProductcarouselImageData[selectedProduct].email}</p>
                                </div>
                            </div>
                            <Link to={"/SellProduct"} style={{ textDecoration: "none" }}><button className='editbtn'>Edit Product Details</button></Link>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}
