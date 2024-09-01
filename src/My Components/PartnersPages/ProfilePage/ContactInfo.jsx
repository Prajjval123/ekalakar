import "./contactInfo.css"
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

function ContactInfo({setConfirmationModal}){
    return (
        <section className="contact_info_wrapper">
        <p className="basic_info_text">Contact Information</p>

        <form className="partner_contact_form">
          {/* for phone number */}
          <div className="patron_number_verify_wrapper">
            <div className="verify_input_text_container">
              <div className="verify_input">
                {/* left part */}
                <select className="verfiyCode_select" name="countryCode" id="">
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

              <p className="verify_input_para">
                (Your number is never shared with external parties)
              </p>
            </div>

            <p onClick={()=>{
              setConfirmationModal({
                heading:'Enter your contact number to get verified',
                 subHeading:'We’ll send you a verification code to your number',
                  type:'number',
                   downPara:'Your email is never shared with external parties'
              })
              } }    className="verify_text">Verify</p>
          </div>

          {/* .verify for email */}
          <div className="patron_number_verify_wrapper">
            <div className="verify_input_text_container">
              <input
                type="email"
                className="verify_email"
                placeholder="Enter your email"
              />

              <p className="verify_input_para">
                (Your email is never shared with external parties)
              </p>
            </div>

            <p onClick={()=>{
              setConfirmationModal({
                heading:'Enter your email to verify your account',
                 subHeading:'We’ll send you a conformation code to your email',
                  type:'email',
                   downPara:'Your email is never shared with external parties'
              })
              } } className="verify_text">Verify</p>
          </div>
        </form>
      </section>
    )
}

export default ContactInfo;