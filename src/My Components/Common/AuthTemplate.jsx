import ekalakaar from "./assets/ekalakaar.png";
import background from "../LoginPages/Images/LoginpageBG.png";
import bgPic from "../LoginPages/Images/Homepage_bg.jpg"

import "./authTemplate.css"
import {Navbar_frontpage} from "../FrontPage/Navbar";


function AuthTemplate({children , justifyFlag = false ,signupFlag=false } ) {


  return (
    <div className="authTemplateWrapper">     
      <Navbar_frontpage  />
      
      <div className={`whiteBlockWrapper ${justifyFlag?('whiteBlockWrapperActive'):('minimizeHeight')}`}>
        <img src={ekalakaar} alt="" className={`whiteBlockWrapperImg ${signupFlag && 'hideImage'}`} />

        {children}
      </div>
      <img loading="lazy" src={background} alt="backgroundImg"  className="authTemplateBackgroundImg" />
      <img loading="lazy" src={bgPic} alt="bgpic" className=" authTemplateBgPic"   />
    </div>
  );
}

export default AuthTemplate;
