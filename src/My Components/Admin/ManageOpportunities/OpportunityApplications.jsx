import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import "../ManageUser/User.css";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest, makeAuthenticatedPATCHRequest } from "../../../services/serverHelper";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;




const OppApplications = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 10;

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  const OppId = localStorage.getItem("oppApplicationsId");
  useEffect(() => {
    const getApplications = async () => {
      const toastId = toast.loading("loading...")
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/oppapps?opportunityId=${OppId}`, token)

        setData(response);
        console.log(response)
        toast.dismiss(toastId);
        toast.success("Applications loaded successfully")
      } catch (error) {
        toast.dismiss(toastId);
        console.error("Error fetching artist data:", error);
        toast.error("Error fetching artist data:", error);
      }
    };

    getApplications();
  }, []);

  const updateAppStatus = async(id, data) =>{

      const toastId = toast.loading("loading...");
    try {
         const response = await makeAuthenticatedPATCHRequest(`${BASE_URL}/admin/updateappstatus?id=${id}`, data, token)
            console.log(response);
            toast.dismiss(toastId)
            toast.success("Application Updated successfully")
    } catch (error) {
        toast.dismiss(toastId)
        toast.error(error)
    }

  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  };

  const filteredData = data && data.filter(
    (item) =>
    item.appliedBy &&
      (
        item.appliedBy.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.appliedBy.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.appliedBy.phoneNumber &&
        item.appliedBy.phoneNumber.number.includes(searchQuery.toLowerCase()))
        )
  );

  const pageCount = Math.ceil(filteredData && filteredData.length / itemsPerPage);
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData && filteredData.slice(indexOfFirstItem, indexOfLastItem);


  function splitDate(date) {
    const dateToSplit = String(date);
    
    if (dateToSplit) {
      const dateParts = dateToSplit.split("T");
      return dateParts[0];
    } else {
      console.error("Invalid date:", date);
      return null; 
    }
  }

  return (
    <div className="usercontainer">
      <div className="row-container">
        <h2>
          Manage Opportunity -<span style={{ color: "#AD2F3B" }}>Applications</span>
        </h2>
      </div>
      <div className="filter-dropdown">
        <div className="searchbar">
          <IoSearch className="searchicon" />
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div style={{width: "90%", margin: "auto"}}>
        <h2>Applicant's Details</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Custom Id</th>
            <th>
              First <br /> Name
            </th>
            <th>Email</th>
            <th>Phone No</th>
            <th>
              Registered
              <br /> On
            </th>
            <th>
              Application <br/> Status
            </th>
            <th className="viewicon">
              <FaRegEdit title="Edit" className="edit"/>
              <BsFillEyeFill title="View" className="view"/>
              <RiDeleteBin6Line title="Delete" className="delete"/>
            </th>
          </tr>
        </thead>
        <tbody className="table_body">
          {currentItems && currentItems.map((item, index) => (
            item.appliedBy &&
            <tr key={index}>
              <td>{item.appliedBy.customID}</td>
              <td>{item.appliedBy.firstName}</td>
              <td>{item.appliedBy.email}</td>
              <td>{item.appliedBy.phoneNumber?.number}</td>
              <td>{splitDate(item.appliedBy.createdAt)}</td>
              <td>
                <select title="Update Application Status"
                 defaultValue={item.status} 
                 style={{backgroundColor: "rgba(255, 240, 241, 0.7)", border: "none", width: "135px"}}
                 onChange={(e)=> {
                    item.status = e.target.value;
                    updateAppStatus(item._id, item)
                 }}
                 >
                    <option value="Rejected">Rejected</option>
                    <option value="Hired">Hired</option>
                    <option value="Applied">Applied</option>
                    <option value="In-Progress">In-Progress</option>
                </select>
              </td>
              <td className="viewicon">
              <FaRegEdit title="Edit" className="edit"/>
              <BsFillEyeFill title="View" onClick={()=>{
                localStorage.setItem("artId", item.appliedBy._id)
                navigate("/artistProfile")
              }} className="view"/>
              <RiDeleteBin6Line title="Delete" className="delete"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
    </div>
  );
};

export default OppApplications;
