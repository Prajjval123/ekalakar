import React, { useState, useEffect } from "react";
import { BiSolidHide } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import "./artistmanage.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const ArtsistManagement = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    artType: [],
    language: [],
    location: [],
    age: [],
    gender: [],
    averageDuration: [],
    averagePrice: [],
  });
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const itemsPerRow = 4;
  const itemsPerPage = 20;
  const itemsPerRowMobile = 2;

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      const toastId = toast.loading("loading...");
      try {
        const response = await makeAuthenticatedGETRequest(
          `${BASE_URL}/admin/users?role=Artist`,
          token
        );

        setData(response.data);
        console.log(response);
        toast.dismiss(toastId);
        toast.success("Artists loaded successfully")
      } catch (error) {
        toast.dismiss(toastId);
        console.error("Error fetching artist data:", error);
        toast.error(error);
      }
    };

    getUser();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const getSortedProfiles = () => {
    switch (selectedOption) {
      case "ascending":
        return [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
      case "descending":
        return [...data].sort((a, b) => b.firstName.localeCompare(a.firstName));
      case "recentlyAdded":
        return [...data].sort((a, b) => b.createdAt - a.createdAt);
      default:
        return data;
    }
  };

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      }
      return updatedFilters;
    });
  };

  const applyFilters = (profile) => {
    return (
      (filters.artType.length === 0 ||
        filters.artType.includes(profile.artType)) &&
      (filters.language.length === 0 ||
        filters.language.includes(profile.language)) &&
      (filters.location.length === 0 ||
        filters.location.includes(profile.location)) &&
      (filters.age.length === 0 || filters.age.includes(profile.age.toString())) &&
      (filters.gender.length === 0 ||
        filters.gender.includes(profile.gender)) &&
      (filters.averageDuration.length === 0 ||
        filters.averageDuration.includes(profile.averageDuration.toString())) &&
      (filters.averagePrice.length === 0 ||
        filters.averagePrice.includes(profile.averagePrice.toString()))
    );
  };

  const pageCount = Math.ceil(data?.length / itemsPerPage);

  useEffect(() => {
    const sortedProfiles = getSortedProfiles();
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(
      startIndex + itemsPerPage,
      sortedProfiles && sortedProfiles.length
    );
    const profilesToDisplay = sortedProfiles &&
      sortedProfiles.slice(startIndex, endIndex).filter(applyFilters);
    setFilteredProfiles(profilesToDisplay);
  }, [currentPage, filters, selectedOption, data]);

  return (
    <>
      <div className="artist_management">
        <div className="artist_management_topdivision">
          <h1>Artist Management</h1>
          <BiSolidHide className="hiddenicon" />
        </div>
      </div>
      <div className="artist_top_buttons">
        <button
          className="total_artist"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filter
        </button>
        {showFilters && (
          <div className="filter-options">{/* Add your filter options */}</div>
        )}

        <button className="total_artist">
          Total Artist : <br />
          <span style={{ color: "black", fontStyle: "bold" }}>
            {" "}
            {data && data.length}
          </span>
        </button>
        <div className="total_artist">
          <select
            id="sortDropdown"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value="default">Sort by</option>
            <option value="ascending">Ascending Order</option>
            <option value="descending">Descending Order</option>
            <option value="recentlyAdded">Recently Added</option>
          </select>
        </div>
        {/* <button className="total_artist">
            <input
              type="text"
              placeholder="Search Artists"
              value={searchQuery}
              onChange={handleSearchChange}
            />

          </button> */}
      </div>
      <div className="artist_top-division">
        {Array.from({
          length: Math.ceil(
            itemsPerPage / (window.innerWidth < 655 ? itemsPerRowMobile : itemsPerRow)
          ),
        }).map((_, rowIndex) => (
          <div key={rowIndex} className="artist_row">
            {filteredProfiles &&
              filteredProfiles
                .slice(
                  rowIndex *
                    (window.innerWidth < 655
                      ? itemsPerRowMobile
                      : itemsPerRow),
                  (rowIndex + 1) *
                    (window.innerWidth < 655 ? itemsPerRowMobile : itemsPerRow)
                )
                .map((profile) => (
                  <div
                    key={profile._id}
                    className="artist_management_profile"
                  >
                    <Link
                      to="/artistProfile"
                      style={{ textDecoration: "none" }}
                      onClick={() =>
                        localStorage.setItem("artId", profile._id)
                      }
                    >
                      <img src={profile.avatar?.url} alt="" />
                      <h1>{profile.firstName}</h1>
                      <h2>{profile.role}</h2>
                    </Link>
                  </div>
                ))}
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

const CheckboxFilter = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div className="filter-group">
      <label>{label}</label>
      <div className="checkbox-options">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ArtsistManagement;
