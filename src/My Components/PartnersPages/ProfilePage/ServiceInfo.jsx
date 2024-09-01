import "./serviceInfo.css"

function ServiceInfo(){
    return (
        <section className="service_info_wrapper">
        <p className="basic_info_text">Services</p>

        <form className="service_form_container">
          <label htmlFor="category" className="partner_form_label">
            <p className="partner_form_para">What are you Planning to Sell</p>
            <select className="partner_form_select" name="" id="">
              <option value="">Select Category</option>
            </select>
          </label>

          <label htmlFor="category" className="partner_form_label">
            <p className="partner_form_para">List of Product</p>
            <select className="partner_form_select" name="" id="">
              <option value="">Select multiple item</option>
            </select>
          </label>

          <label htmlFor="category" className="partner_form_label">
            <p className="partner_form_para">Current Revenue</p>
            <input
              type="number"
              className="partner_form_input"
              placeholder="Enter Revenue"
            />
          </label>

          <label htmlFor="">
            <p className="partner_form_para">
              Detail About the Product You Sell
            </p>
            <textarea
              placeholder="Enter details about the product you sell"
              className="service_textarea"
            />
          </label>

          <label htmlFor="category">
            <p className="partner_form_para">
              Do you Offer Special Provision for eK user
            </p>
            <div className="service_radio_container">
              <label htmlFor="" className="service_radio_label partner_form_label" >
                <input type="radio" name="SpecialProvision" />
                <p className="partner_form_para" style={{ marginTop: "15px" }}>
                  Yes
                </p>
              </label>
              <label htmlFor="" className="service_radio_label">
                <input type="radio" name="SpecialProvision" />
                <p className="partner_form_para" style={{ marginTop: "15px" }}>
                  No
                </p>
              </label>
            </div>
          </label>

          <label htmlFor="category" className="selectOfferLabel partner_form_label">
            <p className="partner_form_para">If Yes, Select The Offer</p>
            <select className="partner_form_select" name="" id="">
              <option value="" selected disabled>
                Select Offer
              </option>
            </select>
          </label>
        </form>
      </section>
    )
}

export default ServiceInfo;