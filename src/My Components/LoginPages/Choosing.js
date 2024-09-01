import React from 'react';
import "./Choosing.css";
import { Navbar_frontpage } from '../FrontPage/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Choosing() {
    const navigate = useNavigate();

    return (
        <div className='Choosing_Page'>
            <Navbar_frontpage />
            <h1 className="Choosing_heading1">I Like To Be a</h1>
            <div className="Choosing_Media">
                <button>
                    <div onClick={()=>navigate("/register")} className="Choosing_Media_Items">
                        <img 
                            src="assets/Benefits/Benefits_img_1.png"
                            className="Choosing_Media_Item"
                            alt="Patrons"
                        />
                        <h3>Patrons</h3>
                        <p className="Choosing_hover">
                            Our Patrons are businesses, organisations, and individuals
                            seeking talented performing artists or groups for performances
                            at their events for a payment.
                        </p>
                    </div>
                </button>
                <button>
                <div onClick={()=>navigate("/register")} className="Choosing_Media_Items">
                    <img 
                        src="assets/Benefits/Benefits_img_2.png"
                        className="Choosing_Media_Item"
                        alt="Artists"
                    />
                    <h3>Artists</h3>
                    <p className="Choosing_hover">
                        Our Artists (Kalakaars) are talented, aspiring and ambitious
                        Indian traditional performing artists,individual or
                        groups,seeking performing opportunities and growth.{' '}
                    </p>
                </div>
                </button>
                <button>
                <div onClick={()=>navigate("/register")} className="Choosing_Media_Items">
                    <img 
                        src="assets/Benefits/Benefits_img_3.png"
                        alt="Partners"
                        className="Choosing_Media_Item"
                    />
                    <h3>Partners</h3>
                    <p className="Choosing_hover">
                        Our Partners are businesses, organisations, and individuals
                        seeking to provide supplies and services to Artists, Patrons
                        and the Art Lover Community
                    </p>
                </div>
                </button>
                <button>
                <div onClick={()=>navigate("/register")} className="Choosing_Media_Items">
                    <img 
                        src="assets/Benefits/Benefits_img_4.png"
                        alt="Art Lovers"
                        className="Choosing_Media_Item"
                    />
                    <h3>Art-Lovers</h3>
                    <p className="Choosing_hover">
                        Our Art Lovers are individuals who follow, appreciate and
                        support traditional performing artists and also want to
                        discover / develop their own performing talent
                    </p>
                </div>
                </button>
            </div>
        </div>
    )
}
