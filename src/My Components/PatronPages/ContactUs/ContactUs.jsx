import "./contactUs.css";
import darkFilter from "./assets/darkFilter.svg"
import imagePart from "./assets/imagePart.svg"
import doorImage from "./assets/doorImage.svg"
import location from "./assets/location.svg"
import phone from "./assets/phone.svg"
import mail from "./assets/mail.svg"
import { useState,useEffect } from "react";
import { contactUsPoints,patronProfilePoints } from "../../../services/apis";
import { makeAuthenticatedPOSTRequest,makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import Patron_Navbar from "../Patron_Navbar"

const formDetail = [
    {
        placeholder:"Enter your name" , 
        type:"text" , 
        name:"name"
    },
    {
        placeholder:"Enter your email" , 
        type:"email" , 
        name:"email"
    },
    {
        placeholder:"Enter your contact number",
        type:'number' , 
        name:"phoneNumber"
    },
    {
        placeholder:"Enter subject",
        type:"text",
        name:"subject"
    },


]

const boxDetail = [
    {
        image:phone , 
        text:"Phone",
        detail:"+914785236987"
    },
    {
        image:mail , 
        text:"Email",
        detail:"supportekalakaar@gmail.com"
    },
    {
        image:location , 
        text:"Address",
        detail:"123, Random Street, Random City, Mumbai - 123456"
    },

]



function ContactUs() {

    const {accessToken} = useSelector((state)=>state.auth)

    const [formData , setFormData ] = useState({
        name:"",
        email:"",
        message:"",
        phoneNumber:"" , 
        subject:""
    })

    const fetchPatronProfileData = async () => {
        try {
          const response = await makeAuthenticatedGETRequest(
            patronProfilePoints.FETCH_PATRON_APPLI_API,
            accessToken
          );
          console.log("res", response);
          if (response.status === "success") {
            const { address, contactDetails, personalInfo } = response.data;

            const newFormData = {
              name: personalInfo.authorizedPerson,
              email: contactDetails.email,
              phoneNumber: contactDetails.contactNumber,
            };

            setFormData(newFormData);
            // console.log(formData);
          } else {
            toast.error(response.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("something went wrong , please try again");
        }
      };
      useEffect(() => {
        fetchPatronProfileData();
      }, []);
    
    const changeHandler = (event)=>{
        const {name , value} = event.target;
        setFormData((prev)=>({
            ...prev , 
            [name]:value
        }))
    }
    console.log('fir' ,formData);
    

    const submitHandler = async(event)=>{
      const toastId =  toast.loading('Loading...');
        event.preventDefault();
        try{

            const response = await makeAuthenticatedPOSTRequest(contactUsPoints.POST_QUERY_API , formData ,accessToken );
            console.log('res' , response);
            if(response.success === 'success'){
                toast.success('Successfully send' , {
                    position:"top-center"
                });
                setFormData({
                    name:"",
                    subject:"",
                    message:"",
                    email:"",
                    phoneNumber:""
                })
            }
            else{
                toast.error(response.message , {
                    position:"top-center"
                });
            }

        }catch(error){
            console.log(error);
            toast.error('something went wrong ,please try again' , {
                position:"top-center"
            });
        }

        toast.dismiss(toastId);
    }

  return (
    <>
    <Patron_Navbar />
    <div className="contactUs_wrapper">
      {/* actual navbar section */}
      <nav className="actual_navbar"></nav>

      {/* contactUs section  */}
      <section className="contactUs_container">
        {/* image part */}
        <div className="image_container">
             <img src={imagePart} alt="" className="contact_img" />
              <img src={darkFilter} alt="" className="filter_img" />
              <p className="contactUs_text">Contact Us</p>
        </div>

        {/* image and form container */}
        <main className="image_form_container">
           <img src={doorImage} alt="" className="contact_doorImg" />

           {/* form */}
           <form onSubmit={submitHandler} className="form_container" >
               {formDetail.map((detail , index)=>(
                <input required key={index} name={detail.name} value={formData[detail.name]} onChange={changeHandler} type={detail.type} placeholder={detail.placeholder} className="contactUs_input" />
               ))}

               <textarea required rows={9} name="message" value={formData.message} onChange={changeHandler} placeholder="Your message" className="contactUs_textarea" />

               <button type="submit" className="contactUs_sendBtn">Send</button>
           </form>
        </main>

{/* three box */}
        {/* <div className="contact_details_box">
             {
                boxDetail.map((box , index)=>(
                    <div key={index} className="contactUs_single_box">
                       <div className="box_image_container">
                        <img src={box.image} alt="image"  />
                       </div>

                       <p className="contact_box_text">{box.text}</p>
   <p className="contact_box_detail">{box.detail}</p>
                    </div>
                ))
             }
        </div> */}

      </section>


    </div>
  </>
  );
}

export default ContactUs;
