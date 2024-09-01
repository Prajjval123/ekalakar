import React from 'react';
import { useState } from "react";
import './Services.css';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export function Services() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='Services_Page'>
            <Carousel>
                <Carousel.Item>
                    <h1 className="Services_heading1"> eK SERVICES </h1>
                    <img
                        className="Services_Main_image"
                        src={"assets/Services/Services_img_1.png"}
                        alt="First slide"
                    />
                </Carousel.Item>



                <Carousel.Item>
                    <h1 className="Services_heading1">ART FOR ENTERTAINMENT</h1>
                    <div className='Services_Carousel'>

                        <div className='Services_Carousel_Items'>
                            <p className="Services_P">
                                Performing art for hotels & resorts, tour, festival and event organizers,
                                focused on creating unique and authentic cultural experiences for
                                guests/tourists<br /><br />
                                Services for Hotels/Resorts:
                                <br />
                                <span>
                                    <ul>
                                        <li>Research shows 86% of buyers are willing to pay more for a great customer experience</li>
                                        <li>Customers willing to pay premium up to 13% -18% for luxury and indulgence services</li>
                                        <li>49% of buyers made impulse purchases after receiving a more personalized experience</li>
                                        <li>72% customers will share a positive experience with 6 or more people</li>
                                    </ul>
                                </span>
                            </p>

                        </div>
                        <div className='Services_Carousel_Items'>
                            <img
                                className="Services_Carousel_Item"
                                src={"assets/Services/Services_img_2.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <h1 className="Services_heading1">ART FOR DEVELOPMENT</h1>
                    <div className='Services_Carousel'>

                        <div className='Services_Carousel_Items'>
                            <p className="Services_P">
                                Performing art for Government, Donors, Foundations, International agencies,  CSR, and  NGOs focused on theme based, social behavior change communication and messaging

                                <br /><br />

                                Services for Social Sector Organization:
                                <br /><span>
                                    <ul>
                                        <li>Communicate key messages to beneficiaries/stakeholders that trigger social behavior's change</li>
                                        <li>Provide sustainable livelihoods to artists</li>
                                        <li>Preserve and promote local and regional folk art forms</li>
                                        <li>Support creation of thriving local communities</li>
                                    </ul></span>
                            </p>

                        </div>
                        <div className='Services_Carousel_Items'>
                            <img
                                className="Services_Carousel_Item"
                                src={"assets/Services/Services_img_3.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <h1 className="Services_heading1">ART FOR CARE</h1>
                    <div className='Services_Carousel'>

                        <div className='Services_Carousel_Items'>
                            <p className="Services_P">
                                Performing art for Hospitals, Health Institutions, Wellness Centres, Health Retreats, etc. focused on promoting wellness and mental health

                                <br /><br />

                                Studies suggest that Art Services:
                                <br /><span>

                                    <ul>
                                        <li>Develop positive body image</li>
                                        <li>Improve self-concept and self-esteem</li>
                                        <li>Reduce stress, anxiety, and depression</li>
                                        <li>Decrease isolation, chronic pain, and body tension</li>
                                        <li>Increase communication skills</li>
                                        <li>Encourage a sense of well-being</li>
                                    </ul>
                                </span>
                            </p>

                        </div>
                        <div className='Services_Carousel_Items'>
                            <img
                                className="Services_Carousel_Item"
                                src={"assets/Services/Services_img_4.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <h1 className="Services_heading1">ART FOR BUSINESS</h1>
                    <div className='Services_Carousel'>

                        <div className='Services_Carousel_Items'>
                            <p className="Services_P">
                                Performing art for Corporates, Businesses, Industry Association, Academic Institutions for  learning & development, employee engagement events etc

                                <br /><br />

                                Services for Business Organizations:
                                <br /><span>

                                    <ul>
                                        <li>Higher employee engagement</li>
                                        <li>Promotes goodwill among customers, consumers, clients and investors</li>
                                        <li>Vibrant and inclusive corporate culture</li>
                                        <li>Thriving cultural community helps businesses recruit and retain talent</li>
                                        <li>Improves the bottom line</li>
                                    </ul>
                                </span>
                            </p>

                        </div>
                        <div className='Services_Carousel_Items'>
                            <img
                                className="Services_Carousel_Item"
                                src={"assets/Services/Services_img_5.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <h1 className="Services_heading1">ART FOR ALL</h1>
                    <div className='Services_Carousel'>

                        <div className='Services_Carousel_Items'>
                            <p className="Services_P">
                            Performing art for everyone’s special occasions - celebrations like birthdays , wedding functions, anniversaries and other social and cultural functions

                                <br /><br />

                                Services for All:
                                <br /><span>

                                    <ul>
                                    <li>Bring joy to family/ friends</li>
                                <li>Benefit the community</li>
                                <li>Celebrate your culture</li>
                                <li>Be different</li>
                                    </ul>
                                </span>
                            </p>

                        </div>
                        <div className='Services_Carousel_Items'>
                            <img
                                className="Services_Carousel_Item"
                                src={"assets/Services/Services_img_6.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>
        </div >
    )
}
