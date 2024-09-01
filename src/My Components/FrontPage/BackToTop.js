import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./BackToTop.css";

function BackToTop() {
  const [showBtT, setshowBtT] = useState(false);

  useEffect(() => {
    function handleScroll() {
      let scrolled = window.scrollY;

      if (scrolled > 2000) {
        setshowBtT(true);
      } else {
        setshowBtT(false);
      }
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="navright-backToTop">
        {showBtT ? (
          <a href="#HomePage">
            <FontAwesomeIcon color="white" icon={faHouse} className="backToTop-icon" />
          </a>
        ) : (
          <a href="#Joinus">
            <FontAwesomeIcon color="white" icon={faHouse} className="backToBottom-icon" />
          </a>
        )}
      </div>
    </>
  );
}

export default BackToTop;
