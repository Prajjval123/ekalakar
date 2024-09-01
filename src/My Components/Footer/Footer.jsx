import './Footer.css';

const Footer = () => {
  return (
    <>
      <div id="footer">
            <div id="copyright">©2023 eKalakaar, All Right Reserved</div>
        <div id="ekalakaar-and-texts">
          <div id="ekalakaar-section">
            <img id="ek-logo" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692277608/Ekalakaar/Ekalakaar_Logo_w8o1vc.png" />
            <div id="ekalakaar-text">
              <div id="eka">eka</div>
              <div id="lak">lak</div>
              <div id="aar">aar</div>
            </div>
          </div>

          <div id="footer-texts">
            <div id="footer-texts-1">
              <div className="every-footer-text">Home</div>
              <div className="every-footer-text">Benefits</div>
              <div className="every-footer-text">Service</div>
              <div className="every-footer-text">Gallery</div>
              <div className="every-footer-text">Events</div>
            </div>
            <div id="footer-texts-1">
              <div className="every-footer-text">Profile</div>
              <div className="every-footer-text">Portfolio</div>
              <div className="every-footer-text">Opportunities</div>
              <div className="every-footer-text">Courses</div>
              <div className="every-footer-text">Latest New</div>
            </div>
          </div>

          <img id="footer-circle-img" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692278019/Ekalakaar/footer-circul-img_srd10g.png" />
        </div>
        <div id="social-media">
          <div className="every-social-media-icon">
            <img className="social-media-icon" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692278204/Ekalakaar/Instagram_rbjs3x.png" />
          </div>
          <div className="every-social-media-icon">
            <img className="social-media-icon" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692278204/Ekalakaar/Facebook_mfwxzn.png" />
          </div>
          <div className="every-social-media-icon">
            <img className="social-media-icon" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692278204/Ekalakaar/TwitterX_mpoa7g.png" />
          </div>
          <div className="every-social-media-icon">
            <img className="social-media-icon" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692278204/Ekalakaar/YouTube_pckmun.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
