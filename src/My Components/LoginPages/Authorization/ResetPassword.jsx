import "./resetPassword.css";
import AuthTemplate from "../../Common/AuthTemplate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
import { endpoints } from "../../../services/apis";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

  
function ResetPassword() {
  const navigate = useNavigate();
  let accessToken = localStorage.getItem("accessToken") || Cookies.get("accessToken");
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function cancelHandler() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      return toast.error("Password do not match" , {
        position:"top-center"
      });
    }

    try {
      const token = localStorage.getItem('forgetToken');
      console.log(token);
      const response = await makeAuthenticatedPOSTRequest(endpoints.RESETPASSWORD_API, formData, token);
      console.log(response);
      if (response.status === 'success') {
        toast.success("successfuly reset password" , {
          position:"top-center"
        });
        localStorage.removeItem("accessToken");
        navigate("/login");
      } else {
        toast.error(response.message , {
          position:"top-center"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (!accessToken) {
    //   return navigate("/login");
    // }
  }, []);
  return (
    <AuthTemplate>
      <div className="resetPasswordWrapper ">
        <h1 className="resetPasswordHeading">Reset your Password</h1>
        <p className="resetPasswordPara  ">The password must be different than before</p>
      </div>

      <form onSubmit={submitHandler} className=" resetPasswordForm ">
        <input onChange={changeHandler} required type="password" value={formData.password} name="password" className="resetPasswordInput" placeholder="Enter your new password" />
        <input onChange={changeHandler} required type="password" name="passwordConfirm" value={formData.passwordConfirm} className="resetPasswordInput" placeholder="confrim new password" />
        <div className="resetPasswordButtonWrapper">
          <button type="submit" className="continueButton">
            Continue
          </button>
          <button onClick={cancelHandler} type="button" className="ResetPasswordcancelButton">
            Cancel
          </button>
        </div>
      </form>
    </AuthTemplate>
  );
}

export default ResetPassword;
