import AuthTemplate from "../../Common/AuthTemplate";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import "./verificationCode.css";
import { makeUnauthenticatedPOSTRequest } from "../../../services/serverHelper";
import { endpoints } from "../../../services/apis";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setRole,
  setRefreshToken,
} from "../../../reducer/slices/authSlice";

function VerificationCode() {
  const {email} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
 const [token, setToken] = useState('');
  const { resetEmail } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(endpoints.FORGOTPASSWORD_VERIFYOTP_API,{
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify({
        otp,
      })
    })
    let responce = await res.json();

    if(res.status === 200){
        console.log(responce.data.accessToken);
        const { accessToken, refreshToken } = responce.data;
        localStorage.setItem("forgetToken", accessToken);
        toast.success("OTP Verifyed Successfull")
        navigate("/resetPassword");
    }else{
            toast.error("Wronge OTP")
            console.log(res);
    }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    // if (!resetEmail) {
    //   navigate("/login");
    // }
  }, []);

  const resendOtpHandler = async (event) => {
    event.preventDefault();
    console.log(email);
    const toastId = toast.loading("Loading...");
     try {
     const responce = await fetch(endpoints.REGISTER_OTP_SEND,{
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify({
        email,
      })
    } )
    if(responce.status === 200){
      toast.success("Otp has been Resend... " , {
            position:"top-center"
          });
    }
    } catch (error) {
      toast.error(error)
    }
    toast.dismiss(toastId);
  };
  return (
    <AuthTemplate>
      <div className="verifyCodeWrapper">
        <h1 className="verifyCodeHeading ">Enter Verification code</h1>
        <p className="verifyCodePara   ">We have send a code to your email (<span style={{color:"blue"}}> {email} </span>)</p>
      </div>
      <form onSubmit={submitHandler} className="verifyCodeForm ">
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

        <button type="submit" className="continueButton">
          Continue
        </button>
        <p className="verifyCodeResend">
          Didn’t receive any code?{" "}
          <span onClick={resendOtpHandler} className="Resend_OTP_text">
            Resend
          </span>
        </p>
      </form>
    </AuthTemplate>
  );
}

export default VerificationCode;
