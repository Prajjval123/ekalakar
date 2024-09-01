import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import './JoinUs.css';
const JoinUs = () => {
  const [inputData, setInputData] = useState({});

  const inputChangeHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputData);

    fetch('http://localhost:4000/api/join', {
      method: 'POST',
      body: JSON.stringify(inputData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // setInputData(res.data);
        console.log(res);
      });
  };

  return (
    <div className="footer">
      <div className="row">
        <div className="col-lg-6">
          <div className="foot-1-parent">
            <img className="foot-1-icon" alt="" src="assets/JoinUs/footer.png" />

            <div className="connect-with-us-parent">
              <b className="connect-with-us">Connect With Us</b>
              <div className="facebookcolor-parent">
                <a
                  className="facebookcolor"
                  href="https://www.facebook.com/eKalakaarIndia"
                >
                  <img
                    className="JoinUs_frame-icon"
                    alt=""
                    src="assets/JoinUs/facebook.svg"
                  />
                </a>
                <a
                  className="facebookcolor"
                  href="https://twitter.com/eKalakaarIndia"
                >
                  <img
                    className="JoinUs_frame-icon"
                    alt=""
                    src="assets/JoinUs/twitter.svg"
                  />
                </a>
                <a
                  className="facebookcolor"
                  href="https://www.youtube.com/@eKalakaarIndia"
                >
                  <img
                    className="JoinUs_frame-icon"
                    alt=""
                    src="assets/JoinUs/youtube.svg"
                  />
                </a>
                <a
                  className="facebookcolor"
                  href="https://www.instagram.com/ekalakaarindia/"
                >
                  <img
                    className="JoinUs_frame-icon"
                    alt=""
                    src="assets/JoinUs/instagram.svg"
                  />
                </a>
                <a
                  className="facebookcolor"
                  href="https://www.linkedin.com/in/ekalakaar-india-a0b697272/"
                >
                  <img
                    className="JoinUs_frame-icon"
                    alt=""
                    src="assets/JoinUs/linkedin.svg"
                  />
                </a>
                <a
                  className="whatsappcolor"
                  href="https://wa.me/917701872112?text="
                >
                  <img
                    className="JoinUs_frame-icon"
                    alt=""
                    src="assets/JoinUs/whatsapp.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-5">
          <div className="JoinUs_frame-parent mt-2">
            <div className="JoinUs_frame-group">
              <form onSubmit={formSubmitHandler}>
                <div className="row">
                  {/* Full Name */}
                  <div className="col">
                    <div className="full-name">
                      Full Name <span className="required-asterisk">*</span>
                    </div>
                    <input
                      className="JoinUs_frame-item"
                      type="text"
                      onChange={inputChangeHandler}
                      value={inputData.full_name || ''}
                      name="full_name"
                      style={{ color: 'white' }}
                      required
                    />
                  </div>

                  {/* Organization */}
                  <div className="col">
                    <div className="full-name">
                      Organization <span className="required-asterisk">*</span>
                    </div>
                    <input
                      className="JoinUs_frame-item"
                      type="text"
                      onChange={inputChangeHandler}
                      value={inputData.organization || ''}
                      name="organization"
                      style={{ color: 'white' }}
                      required
                    />
                  </div>
                </div>
                <div className="row ml-3">
                  {/* E-Mail */}
                  <div className="col">
                    <div className="full-name">
                      E-Mail <span className="required-asterisk">*</span>
                    </div>
                    <input
                      className="JoinUs_frame-item"
                      type="text"
                      name="email"
                      onChange={inputChangeHandler}
                      value={inputData.email || ''}
                      style={{ color: 'white' }}
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="col">
                    <div className="full-name">
                      Phone Number <span className="required-asterisk">*</span>
                    </div>
                    <input
                      className="JoinUs_frame-item"
                      type="text"
                      onChange={inputChangeHandler}
                      value={inputData.phone_number || ''}
                      name="phone_number"
                      style={{ color: 'white' }}
                      required
                    />
                  </div>
                </div>
                <div className="attachment-parent ml-3 ">
                  <label htmlFor="cars" className="full-name ml-0">
                    Subject : <span className="required-asterisk ">*</span>
                  </label>
                  <select
                    id="Subject"
                    name="subject"
                    onChange={inputChangeHandler}
                    value={inputData.subject || ''}
                    required
                  >
                    <option value="Business">Business Enquiry</option>
                    <option value="General">General Enquiry</option>
                    <option value="Media">Media Enquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Tech">Tech Support</option>
                    <option value="Suggestion">Suggestions</option>
                    <option value="Work">Work with us</option>
                  </select>
                </div>
                <div className="how-do-you-want-to-associate-w-parent ml-3">
                  <div className="full-name">
                    Write your message{' '}
                    <span className="required-asterisk">*</span>
                  </div>
                  <textarea
                    className="JoinUs_frame-item"
                    name="message"
                    onChange={inputChangeHandler}
                    value={inputData.message || ''}
                    style={{
                      color: 'white',
                      height: '100px',
                      resize: 'none',
                      fontSize: '16px',
                    }}
                    required
                  />
                </div>

                <div className="row ml-3">
                  {/* Link (optional) */}
                  <div className="col">
                    <div className="full-name">Link (optional)</div>
                    <input
                      className="JoinUs_frame-item"
                      type="text"
                      onChange={inputChangeHandler}
                      value={inputData.link || ''}
                      name="link"
                      style={{ color: 'white' }}
                    />
                  </div>

                  <div className="col">
                    <div className="full-name">
                      Location <span className="required-asterisk">*</span>
                    </div>
                    <input
                      className="JoinUs_frame-item"
                      type="text"
                      onChange={inputChangeHandler}
                      value={inputData.location || ''}
                      name="location"
                      style={{ color: 'white' }}
                      required
                    />
                  </div>
                </div>

                <button className="msg-1 ml-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
