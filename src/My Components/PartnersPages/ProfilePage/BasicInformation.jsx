import "./basicInfo.css";

function BasicInformation() {
  return (
    <section className="partner_basic_info_wrapper">
      <p className="basic_info_text">Basic Information</p>
      <form className="partner_form_data">
        <label htmlFor="firstName" className="partner_form_label">
          <p className="partner_form_para">First Name</p>
          <input
            type="text"
            name="firstName"
            className="partner_form_input"
            placeholder="Enter First Name"
          />
        </label>

        <label htmlFor="lastName" className="partner_form_label">
          <p className="partner_form_para">Last Name</p>
          <input
            type="text"
            name="lastName"
            className="partner_form_input"
            placeholder="Enter Last Name"
          />
        </label>
        <label htmlFor="profession" className="partner_form_label">
          <p className="partner_form_para">Profession</p>
          <input
            type="text"
            name="profession"
            className="partner_form_input"
            placeholder="Enter Name of the Company"
          />
        </label>
        <label htmlFor="Language" className="partner_form_label">
          <p className="partner_form_para">Language</p>
          <select className="partner_form_select" name="language" id="">
            <option value="" disabled selected>
              Select language
            </option>
          </select>
        </label>
        <label htmlFor="Language" className="partner_form_label">
          <p className="partner_form_para">Country / Region</p>
          <select className="partner_form_select" id="">
            <option value="" disabled selected>
              Select Country
            </option>
          </select>
        </label>
        <label htmlFor="Language" className="partner_form_label">
          <p className="partner_form_para">State</p>
          <select className="partner_form_select" id="">
            <option value="" disabled selected>
              Select State
            </option>
          </select>
        </label>

        <div className="company_gender_wrapper partner_form_label ">
          <label htmlFor="companyName" className="partner_company_input" >
            <p className="partner_form_para">Name of the Company</p>
            <input
              type="text"
              className="partner_form_input"
              placeholder="Enter Name of the Company"
            />
          </label>

          <label htmlFor="gender">
            <p className="partner_form_para">Gender</p>
            <div className="gender_options_wrapper">
              <label className="single_gender">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  style={{ marginTop: "-15px" }}
                />
                <p className="partner_form_para">Male</p>
              </label>
              <label className="single_gender">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  style={{ marginTop: "-15px" }}
                />
                <p className="partner_form_para">Female</p>
              </label>
              <label className="single_gender">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  style={{ marginTop: "-15px" }}
                />
                <p className="partner_form_para">Others</p>
              </label>
            </div>
          </label>
        </div>
        <label htmlFor="aboutCompany" className="partner_textarea_label" >
          <p className="partner_form_para">About the Company</p>
          <textarea
            className="partner_form_textarea"
            placeholder="Tell us about your company / product you sell"
          />
        </label>
      </form>
    </section>
  );
}

export default BasicInformation;
