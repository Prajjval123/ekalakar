import React from "react";
import "./RequestCard.css";
import { Link, useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

function RequestCard({
  name,
  Verified,
  VerficationTag,
  ApprovedRequests,
  RejectedRequests,
  VerificationRequest,
  id,
  role,
}) {
  console.log(role);
  return (
    <div className="requestcard-container">
      <Avatar />
      <h2>{name}</h2>
      <div className="req-btn-divider">
        <Link to={`/admin/view-user/${id}`} state={{ id: id, role: role }}>
          View Profile
        </Link>
        <Link to="#">Edit Profile</Link>
      </div>

      {/* All users */}
      {VerficationTag && (
        <p
          className="verification-check"
          style={{
            backgroundColor: `${Verified === true ? "#25D366" : "#ED250A"}`,
          }}
        >
          {Verified ? "Verified User" : "Not Verified"}
        </p>
      )}
      {/* Approve and Reject Request */}
      {VerificationRequest && (
        <>
          <button>Approve Verification Request</button>
          <button>Reject Verification Request</button>
        </>
      )}
      {ApprovedRequests && <p className="Approved-req">Approved Requests</p>}
      {RejectedRequests && <p className="Approved-req">Rejected Requests</p>}
    </div>
  );
}

export default RequestCard;
