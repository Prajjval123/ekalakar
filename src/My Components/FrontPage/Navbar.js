import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/eK_Logo_Trasnparent_1.png";
import './Navbar.css';


export function Navbar_frontpage() {

    const mystyle = {
        fontSize: "large",
        fontWeight: "500",
    };
    const back = {
        backgroundColor: "transparent",
        marginLeft: "0vh",
        marginTop: "-2vh" ,

    };
    return (
        <Navbar 
            style={{ zIndex: "99" }}
            className="navbar nav_frontpage navbar-expand-lg "
            // bg="light"
            expand="lg"
        >
            {/* <Container> */}
            <div className="container-fluid" >
                <Navbar.Brand
                    className="navbar-brand"
                    style={{ position: "static", marginLeft: "0px"  }}
                >
                    {" "}
                    <Link to="/">
                        <img
                            src={logo}
                            height="60px"
                            width="80px"
                            alt="logo"
                        />

                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={mystyle}>
                    <div className="navbar-nav" style={back}>
                        <Nav className="">
                            <Link
                                to="/"
                                className="nav-item nav-link link-padding"
                                style={{ color: "black" }}
                            >
                                Home
                            </Link>
                            <Link
                                to="/#Benefits"
                                className="nav-item nav-link link-padding"
                                style={{ color: "black" }}
                            >
                                Benefits
                            </Link>
                            <Link
                                to="/Services"
                                className="nav-item nav-link link-padding"
                                style={{ color: "black" }}
                            >Services
                            </Link>
                            <Link
                                to="/MediaGallery"
                                className="nav-item nav-link link-padding"
                                style={{ color: "#AD2F3B" }}
                            >
                                Events
                            </Link>

                        </Nav>
                    </div>

                  
                </Navbar.Collapse>
                {/* </Container> */}
            </div>
        </Navbar>
    );
}