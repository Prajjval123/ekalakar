import React, { useState } from "react";
import "./LoginPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthTemplate from "../Common/AuthTemplate";
import { useNavigate } from "react-router-dom";
import google from "./Images/Google.svg";
import facebook from "./Images/Facebook.svg";
import { endpoints } from "../../services/apis";
import {
  makeUnauthenticatedPOSTRequest,
} from "../../services/serverHelper";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setRole,
  setRefreshToken,
} from "../../reducer/slices/authSlice";

export function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
const Otp_Send = async ( email) => {
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
      toast.success("Otp has been send... " , {
            position:"top-center"
          });
    }
    }catch (error) {
    console.log(error);
    toast.error(error);
    
  }

}
  const submitHandler = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        endpoints.LOGIN_API,
        formData
      );
      console.log(`response`, response);
      if (response.status === "error") {
        if (response.message?.includes("Invalid user credentials")) {
          toast.error("please enter valid password ");
        }
        if(response.message === "User is not verified. Please complete the verification process."){
          Otp_Send(formData.email)
        navigate(`/verifyCode/${formData.email}`);
        }
      }

      
      if (response.status === "success") {
        toast.success("successfully Login");
        const { accessToken, refreshToken, role } = response.data;
        dispatch(setAccessToken(accessToken));
        dispatch(setRefreshToken(refreshToken));
        dispatch(setRole(role));
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role);

        if (role === "Artist") {
          // navigate("/artist_profile");
          navigate("/Artist_limited_Profile");
          // navigate("/Artist_Profile");
          // navigate("/artist_profile");
        } else if(role === "Admin"){
          navigate("/AdminDashboard");
        } else {
          navigate("/Patron_Profile");
        }
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("internal server error");
    }

    toast.dismiss(toastId);
  };
  const googleLogin = async () => {
    navigate("https://api.ekalakaar.com/api/v1/auth/google/");
    // try {
    //   const response = await makeUnauthenticatedGETRequest(
    //     artistProfilePoints.LOGIN_WITH_GOOGLE_API
    //   );
    //   console.log("googleRes", response);
    // } catch (error) {
    //   toast.error("Something went wrong , please try again");
    //   console.log(error);
    // }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <AuthTemplate justifyFlag={false}>
      <div className="loginWrapper">
        <h1 className="loginHeading">Welcome Back!</h1>
        <p className="loginPara">Login to your Account</p>
      </div>

      <form onSubmit={submitHandler} className="loginForm">
        <label htmlFor="email" className="loginFormLabel">
          <p className="loginFormPara">Email</p>
          <input
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            name="email"
            className="loginFormInput"
            placeholder="Enter your email address"
          />
        </label>
        <label htmlFor="password" className="loginFormLabel">
          <p className="loginFormPara">Password</p>
          <input
            required
            onChange={changeHandler}
            value={formData.password}
            type={passwordVisible ? "text" : "password"}
            name="password"
            className="loginFormInput"
            placeholder="Enter your password"
          />
          <span
            onClick={togglePasswordVisibility}
            className={`fa fa-fw field-icon toggle-password ${
              passwordVisible ? "fa-eye-slash" : "fa-eye"
            }`}
          ></span>
        </label>

        <div className="checkbox_forgetPassword_container">
          {/* checkbox */}
          <div className="checkboxContainer">
            <input type="checkbox" />
            <p className="login_rememberMe_Text">Remember me</p>
          </div>

          {/* forgetpassword  */}
          <p
            onClick={() => navigate("/forgetPassword")}
            className="forgotPasswordText"
          >
            Forgot Password
          </p>
        </div>

        <button type="submit" className="loginButton">
          Login
        </button>

 

        {/* google and facebook button */}
        {/*
        <div className="googleFacebookButton">
          <a href="https://api.ekalakaar.com/api/v1/auth/google">
            <img
              onClick={googleLogin}
              src={google}
              alt=""
              className="loginImage"
            />
          </a>

          <img src={facebook} alt="" className="loginImage" />
        </div>
          */}
        

        <p className=" navigateRegisterPara">
          Don’t have an account?
          <span onClick={() => navigate("/register")}> Register</span>
        </p>
      </form>
    </AuthTemplate>
  );
}
