// import React, { useState } from "react";
import "../Applications/application.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const ManageSkills = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  
  // const traditionalDance = ["Bharatanatyam", "Kathak", "Kuchipudi", "Kathakali", "Odissi"];
  // const traditionalMusic = ["Gaana", "Classical", "Western", "Carnatic"];

  // const filteredDance = traditionalDance.filter((dance) =>
  //   dance.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const filteredMusic = traditionalMusic.filter((music) =>
  //   music.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>
    <h1 className="manage_languages_heading">Skills</h1>
    <div className="usercontainer">
    <div className="filter-dropdown-Application">
        <div className="searchbar">
          <IoSearch className="searchicon" />
          <input
            type="search"
            placeholder="Search"
           
          />
        </div>
        <div className="filterdrop">
          Filter
          <select className="artistfilter">
            <option value="0">All Artist</option>
            <option value="filter2">Patron</option>
          </select>
        </div>
      </div>
      <div className="traditionaldance">
        <div className="traditionaldance-left-div">
          <h2>Traditional Dance</h2>
          <ul>
            {/* {filteredDance.map((dance, index) => (
              <li key={index}>{dance}</li>
            ))} */}
            <li>
              <div className="dashboard-filter">
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
            {/* {filteredMusic.map((music, index) => (
              <li key={index}>{music}</li>
            ))} */}
            <li>
              <div className="dashboard-filter">
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
    </>
  );
};

export default ManageSkills;
