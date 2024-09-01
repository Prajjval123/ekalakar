import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "application.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const YourComponent = () => {
  return (
    <div className="Application">
      <div className="filter-dropdown-applications">
        <div className="search">
          <IoSearch className="searchicon" />
          <input type="search" placeholder="Search" />
        </div>
        <div className="filter">
          Filter
          <select className="dropdown-applications">
            <option value="0"></option>
            <option value="filter2">Patron</option>
          </select>
        </div>
      </div>
      <div className="traditionaldance">
        <div className="traditionaldance-left-div">
          <h2>Traditional Musicians</h2>
          <ul>
            <li>Bharatanatyam</li>
            <li>Kathak</li>
            <li>Kuchipudi</li>
            <li>Kathakali</li>
            <li>Odissi</li>
            <li>
              {" "}
              <div className="dashboard-filter">
                {/* <label className="filter-label">See More </label> */}
                <select className="dashboard-select" defaultValue="seeMore">
                  <option value="seeMore">
                    See more <RiArrowDropDownLine />
                  </option>
                  <option value=""></option>
                  <option value="Bengali">Bengali</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Kashmiri">Kashmiri</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Tulu">Tulu</option>
                  <option value="Kashmiri">Kashmiri</option>
                </select>
              </div>
            </li>
          </ul>
          <h2>Traditional Music</h2>
          <ul>
            <li>Gaana</li>
            <li>Classical</li>
            <li>Western</li>
            <li>Carnatic</li>
            <li>
              {" "}
              <div className="dashboard-filter">
                {/* <label className="filter-label">See More </label> */}
                <select className="dashboard-select" defaultValue="seeMore">
                  <option value="seeMore">
                    See more <RiArrowDropDownLine />
                  </option>
                  <option value=""></option>
                  <option value="Bengali">Bengali</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Kashmiri">Kashmiri</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Tulu">Tulu</option>
                  <option value="Kashmiri">Kashmiri</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div className="traditionaldance-right-div">
          <img src="./Dance.png" alt="Traditional Dance" />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
