
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../ManageUser/User.css";
import ReactPaginate from "react-paginate";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
const BASE_URL = process.env.REACT_APP_BASE_URL;


const ManageOpportunity = () => {
  const [data, setData] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchLanguages, setSearchLanguages] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [oppApp, setOppApp] = useState([]);

  const itemsPerPage = 10;
  const pageCount = Math.ceil(data && data.length / itemsPerPage);

  const navigateto = useNavigate();
  const token = localStorage.getItem("accessToken");

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  


  const getOppApplications = async (id) =>{

    try {
      const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/oppapps?opportunityId=${id}`, token);

      return response.length;
      
    } catch (error) {
       console.log("Error fetching application data:", error);
    }
  }
 
 
    const getOpportunity = async () => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/opps`, token)
        
        console.log(response);
        setData(response.data);

        const newOppAppPromises = response.data.map((item) => getOppApplications(item.id));
        const newOppApp = await Promise.all(newOppAppPromises);
        setOppApp(newOppApp); 

        toast.dismiss(toastId);
        toast.success("Opportunities loaded successfully");
      } catch (error) {
        toast.dismiss(toastId);
        console.error("Error fetching opportunity data:", error);
        toast.error("Error fetching opportunity data");
      }
    };


  useEffect(() => {
    getOpportunity();
  }, []);

  const deleteOpportunity = async (id) => {
    console.log(id);
    const toastId = toast.loading("Loading...")
    try {
      const response = await fetch(`${BASE_URL}/admin/deleteopps?id=${id}`, {

        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const responsedata = await response.json();
      toast.dismiss(toastId);
      console.log(responsedata);

       getOpportunity();
      if(responsedata.success) toast.success("Successfully deleted opportunity");

    } catch (error) {
      toast.dismiss(toastId);
      console.error("Error fetching opportunity data:", error);
      toast.error(error);
    }
  };

  const handleSearch = () => {
    const filteredData = data.filter(
      (item) =>
        item.id.toLowerCase().includes(searchId.toLowerCase()) &&
        item.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        item.languages.toLowerCase().includes(searchLanguages.toLowerCase())
    );
    setData(filteredData);
  };

  function toggleBlock(e) {
    if (e.target.textContent === "Block") {
      e.target.style.color = "#00FF38";
      e.target.textContent = "Unblock";
    } else {
      e.target.style.color = "#FF0018";
      e.target.textContent = "Block";
    }
  }

  function toggleApproved(e) {
    if (e.target.textContent === "Rejected") {
      e.target.style.color = "#00FF38";
      e.target.textContent = "Approved";
    } else {
      e.target.style.color = "#FF0018";
      e.target.textContent = "Rejected";
    }
  }

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data && data.slice(indexOfFirstItem, indexOfLastItem);

  const Clicked = (id) => {
    navigateto("/OppProfile");
    localStorage.setItem("oppid", id);
  };

  return (
    <div className="usercontainer">
      <div className="row-container">
        <h2>Manage Opportunity</h2>

        <Link to="/UploadOpportunities">
          <FaPlus className="plus" title="Add Opportunity" />
        </Link>
      </div>
      <div className="filter-dropdown">
        <div className="searchbar">
          <IoSearch className="searchicon" />
          <input
            type="search"
            placeholder="Search "
            onChange={(e) => setSearchId(e.target.value)}
            onClick={handleSearch}
            className="search"
          />
        </div>
      </div>

      <table style={{ border: "none" }}>
        <thead>
          <tr>
            <th>Name of Opportunity</th>

            <th className="viewicon">
              <FaRegEdit title="Edit" className="edit" />
              <BsFillEyeFill title="View" className="view" />
              <RiDeleteBin6Line title="Delete" className="delete" />
            </th>

            <th>
              Block/ <br /> Unblock
            </th>
            <th>
              Approve/ <br /> Reject
            </th>
            <th>
              Language <br />
              of Event
            </th>
            <th>Budget</th>
            <th>Location</th>
            <th>Total Applications</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {data &&
            data.map((item, index) => (
               <tr key={index}>
                <td>{item.purpose}</td>
                <td className="viewicon">
                  <FaRegEdit
                    title="Edit"
                    className="edit"
                    onClick={() => {
                      localStorage.setItem("oppid", item.id);
                      navigateto("/EditOpportunity");
                    }}
                  />
                  <BsFillEyeFill
                    title="View"
                    className="view"
                    onClick={() => Clicked(item.id)}
                  />
                  <RiDeleteBin6Line
                    title="Delete"
                    className="delete"
                    onClick={() => deleteOpportunity(item.id)}
                  />

                </td>
                <td
                  className="block"
                  onClick={(e) => {
                    toggleBlock(e);
                  }}
                >
                  {item.blocked ? "Unblock" : "Block"}
                </td>
                <td
                  className="approve"
                  onClick={(e) => {
                    toggleApproved(e);
                  }}
                >
                  {item.approved ? "Approved" : "Rejected"}
                </td>
                <td>{item.languages}</td>
                <td>{item.budget}</td>
                <td>{item.location}</td>
                
                <td style={{textAlign: "center"}}>
                  <Link to="/OppApplications" onClick={() =>{
                    localStorage.setItem("oppApplicationsId", item.id);
                  }} title="View Applications" className="Opp_App_button">{
                      oppApp[index]
                    }
                  </Link>
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

export default ManageOpportunity;