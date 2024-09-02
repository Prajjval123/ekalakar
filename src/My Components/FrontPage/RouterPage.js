import { HomePage } from "./HomePage";
import { EkPhotos } from "./EkPhotos";
import { EkVideos } from "./EkVideos";
import { EkPrint } from "./EkPrint";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Ekevents } from "./Ekevents";
import HowItWorks from "./HowItWorks";
import TermAndCondition from "./TermAndCondition";
import Privacypolicy from "./Privacypolicy";

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/HowItWorks" exact element={<HowItWorks />} />
        <Route path="/EkPhotos" exact element={<EkPhotos />} />
        <Route path="/termAndCondition" element={<TermAndCondition />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/EkVideos" exact element={<EkVideos />} />
        <Route path="/EkPrint" exact element={<EkPrint />} />
        <Route path="/Ekevents" exact element={<Ekevents />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
