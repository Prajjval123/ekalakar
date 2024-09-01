import React, { useState } from "react";
import "./RootContact.css";
import PortfolioDisplayTemplate from "../../../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";

function RootContact() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="admin-view-User-cont iii">
      <div className="admin-view-cont-tab iiio">
        <button
          className={
            activeTab === 1
              ? `admin-status-btn-user active-bbt`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(1)}
        >
          Artist
        </button>
        <button
          className={
            activeTab === 2
              ? `admin-status-btn-user active-bbt`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(2)}
        >
          Patron
        </button>
        <button
          className={
            activeTab === 3
              ? `admin-status-btn-user active-bbt`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(3)}
        >
          Partner
        </button>
        <button
          className={
            activeTab === 4
              ? `admin-status-btn-user active-bbt`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(4)}
        >
          Art Lover
        </button>
      </div>
      <div className="root-content-connnt">
        <div>
          <PortfolioDisplayTemplate />
        </div>
        <div>
          <PortfolioDisplayTemplate />
        </div>

        <div>
          <PortfolioDisplayTemplate />
        </div>
        <div>
          <PortfolioDisplayTemplate />
        </div>
        <div>
          <PortfolioDisplayTemplate />
        </div>
        <div>
          <PortfolioDisplayTemplate />
        </div>
      </div>
    </div>
  );
}

export default RootContact;
