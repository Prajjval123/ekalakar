import "./confirmationModal.css";
import cross from "./assets/cross.svg";
import ekalakaar from "./assets/ekalakaar.svg";
import OtpInput from "react-otp-input";
import { useState } from "react";


const countryCodes = [
  "+91",
  "+1",
  "+44",
  "+86",
  "+81",
  "+33",
  "+49",
  "+39",
  "+7",
  "+86",
  "+52",
  "+34",
  "+61",
  "+82",
  "+55",
  "+966",
  "+20",
  "+972",
  "+971",
  "+27",
  "+31",
  "+43",
  "+41",
  "+358",
  "+46",
  "+47",
  "+65",
  "+852",
  "+60",
  "+64",
  "+92",
  "+880",
  "+94",
  "+93",
  "+98",
  "+212",
  "+213",
  "+234",
  "+254",
  "+27",
];

function ConfirmationModal({ setConfirmationModal, confirmationModal }) {
  const [otp, setOtp] = useState("");


  const submitHandler = async(event)=>{
        event.preventDefault();
        if(confirmationModal.type === 'number'){
          setConfirmationModal({
            heading:'Enter verification code',
             subHeading:'We sent a 6-digit code to your number',
              type:'numberOtp',
               
          })
        }

        else if(confirmationModal.type === 'email'){
          setConfirmationModal({
            heading:'Enter verification code',
             subHeading:'We sent a 4-digit code to your number',
              type:'emailOtp',
               
          })
        }
  }

  return (
    <div class="confirmation-modal_wrapper">
      <div className={`confirmation_modal  `}>
        <div className="crossImg_container">
          <img
            onClick={() => {
              setConfirmationModal(null);
            }}
            src={cross}
            alt=""
            className="confirm_crossImg"
          />
        </div>

        <img src={ekalakaar} alt="" className="confirmation_ekalakaar" />

        <p className="confirm_heading">{confirmationModal.heading}</p>
        <p className="confirm_subHeading">{confirmationModal.subHeading}</p>

        <form  onSubmit={submitHandler} className="confirmation_form"
        >

          {/* for number */}
          {confirmationModal.type === "number" && (
            <div className="confirm_verify_input">
              {/* left part */}
              <select className="confirm_countryCode" name="countryCode" id="">
                {countryCodes.map((code, index) => (
                  <option key={index} value={code} selected={code === "+91"}>
                    {code}
                  </option>
                ))}
              </select>

              {/* line  */}
              <div className="verify_number_line"></div>

              {/* input section for number */}
              <input type="number" className="verify_number_input" />
            </div>
          )}

{/* for email */}
          {confirmationModal.type === "email" && (
            <input
              type="email"
              className="confirmModal_email"
              placeholder="Enter your email address"
            />
          )}

{/* add for upload file  */}


{/* for number otp input */}
{
  confirmationModal.type === 'numberOtp' && 
<OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              placeholder="-"
              style={{
                boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.75)",
              }}
              className="otpInput"
            />
          )}
          containerStyle={{
            justifyContent: "space-between",
            gap: "0 10px",
          }}
        />

}

{
  confirmationModal.type === 'emailOtp' && 
  <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => (
            <input
              {...props}
              placeholder="-"
              style={{
                boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.75)",
              }}
              className="otpInput"
            />
          )}
          containerStyle={{
            justifyContent: "space-between",
            gap: "0 10px",
          }}
        />

}


          <p className="confirm_downPara">{confirmationModal.downPara}</p>
          <button
            type="submit"
            className="confirm_nextButton"
          >
          {confirmationModal.type === 'numberOtp' ?('Submit'):(confirmationModal.type === 'emailOtp')?('Submit'):('Next')}  
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmationModal;
