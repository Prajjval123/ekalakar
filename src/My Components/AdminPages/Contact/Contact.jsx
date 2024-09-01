import React from "react";
import Chat from "../AdmiChatPage/Chat";
import { useLocation } from "react-router-dom";
import RootContact from "./ContactComponent/Root/RootContact";
// import Artist_navbar from "../../../My Components/ArtisitPages/Artist_navbar";

function Contact() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname == "/admin/contact" && <RootContact />}
      {pathname == "/admin/contact/chat" && <Chat />}
    </>
  );
}

export default Contact;
