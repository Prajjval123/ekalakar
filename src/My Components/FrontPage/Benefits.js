import React from 'react'
import './Benefits.css';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export function Benefits() {
    return (
        <div id='Benefits' className='Benefits_Page'>
            <Carousel>
                <Carousel.Item>
                    <h1 className='Benefits_heading1'>BENEFITS TO eK STAKEHOLDERS</h1>
                    <div className="Benefits_Media">
                        <div className="Benefits_Media_Items">
                            <img src="assets/Benefits/Benefits_img_1.png" className="Benefits_Media_Item" alt="Patrons" />
                            <h3>
                                Patrons
                            </h3>
                            <p className='Benefits_hover'>Our Patrons are businesses, organisations, and individuals seeking talented performing artists or groups for performances at their events for a payment.</p>

                        </div>

                        <div className="Benefits_Media_Items">
                            <img src="assets/Benefits/Benefits_img_2.png" className="Benefits_Media_Item" alt="Artists" />
                            <h3>
                                Artists
                            </h3>
                            <p className='Benefits_hover'>Our Artists (Kalakaars) are talented, aspiring and ambitious Indian traditional performing artists,individual or groups,seeking performing opportunities and growth. </p>

                        </div>

                        <div className="Benefits_Media_Items">
                            <img src="assets/Benefits/Benefits_img_3.png" alt="Partners" className="Benefits_Media_Item" />
                            <h3>
                                Partners
                            </h3>
                            <p className='Benefits_hover'>Our Partners are businesses, organisations, and individuals seeking to provide supplies and services to Artists, Patrons and the Art Lover Community</p>
                        </div>

                        <div className="Benefits_Media_Items">
                            <img src="assets/Benefits/Benefits_img_4.png" alt="Art Lovers" className="Benefits_Media_Item" />
                            <h3>
                                Art- Lovers
                            </h3>
                            <p className='Benefits_hover'>Our Art Lovers are individuals who follow, appreciate and support traditional performing artists and also want to discover / develop their own performing talent</p>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <h1 className="Benefits_heading1">BENEFITS TO PATRONS</h1>
                    <div className='Benefits_Carousel'>

                        <div className='Benefits_Carousel_Items'>
                            <p className="Benefits_P">
                                <ul>
                                    <li>Curated performances, creating unique and memorable experiences for customers and audiences</li>
                                    <br />
                                    <li>Building brand engagement, employee engagement and stakeholder engagement</li>
                                    <br />

                                    <li>Driving improved prospects for business, employee motivation, and social impact</li>
                                    <br />
                                    <li>Choice of high quality, ethically sourced performing artists with the right skills and experience</li>
                                    <br />
                                    <li>Customized event formats, ethically sourced performing artists with the right kills and experience</li>
                                </ul>
                            </p>

                            <button>Join Us</button>
                        </div>
                        <div className='Benefits_Carousel_Items'>
                            <img
                                className="Benefits_Carousel_Item"
                                src={"assets/Benefits/Benefits_img_1.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <h1 className="Benefits_heading1">BENEFITS TO ARTISTS</h1>
                    <div className='Benefits_Carousel'>

                        <div className='Benefits_Carousel_Items'>
                            <p className="Benefits_P">
                                <ul>
                                    <li>Personal branding/profiling</li>
                                    <br />
                                    <li> Access to improved and stable livelihoods</li>
                                    <br />
                                    <li>Fair compensation</li>
                                    <br />
                                    <li> Art reaching a wider audience</li>
                                    <br />
                                    <li>Art creating a greater impact</li>
                                    <br />
                                    <li>Working with verified and respectable organizations</li>
                                    <br />
                                    <li> Mentoring, training and skill upgradation</li>
                                    <br />
                                    <li>Collaboration with other artists, groups.</li>
                                </ul>

                            </p>

                            <button>Join Us</button>
                        </div>
                        <div className='Benefits_Carousel_Items'>
                            <img
                                className="Benefits_Carousel_Item"
                                src={"assets/Benefits/Benefits_img_2.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <h1 className="Benefits_heading1">BENEFITS TO PARTNERS</h1>
                    <div className='Benefits_Carousel'>

                        <div className='Benefits_Carousel_Items'>
                            <p className="Benefits_P">
                                <ul>
                                    <li>Brand promotion/Advertising/Communication for products and services for performing artists</li>
                                    <br />
                                    <li> Even sponsorship and joint event promotion</li>
                                    <br />
                                    <li> Grants and scholarship for students</li>
                                    <br />
                                    <li>Non-financial collaboration and strategic partnerships</li>

                                </ul>
                            </p>

                            <button>Join Us</button>
                        </div>
                        <div className='Benefits_Carousel_Items'>
                            <img
                                className="Benefits_Carousel_Item"
                                src={"assets/Benefits/Benefits_img_3.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <h1 className="Benefits_heading1">BENEFITS TO ART-LOVERS</h1>
                    <div className='Benefits_Carousel'>

                        <div className='Benefits_Carousel_Items'>
                            <p className="Benefits_P">

                                <ul>
                                    <li>Learn/improve performing art</li>
                                    <br />
                                    <li>Discover and groom their inner artist</li><br />
                                    <li>Follow and support favourite artists and arts</li><br />
                                    <li>Connect with people with similar interests/taste</li><br />
                                    <li>Perform in online and offline competitions and events</li><br />
                                    <li>Earn rewards Karma credit points through gamification</li><br />
                                    <li>Give and get feedback/ratings/reviews social media sharing</li><br />
                                </ul>

                            </p>

                            <button>Join Us</button>
                        </div>
                        <div className='Benefits_Carousel_Items'>
                            <img
                                className="Benefits_Carousel_Item"
                                src={"assets/Benefits/Benefits_img_4.png"}
                            />
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}
