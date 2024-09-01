import "./additionalInfo.css"
import InputMask from 'react-input-mask';


function AdditionalInfo({setConfirmationModal}){
    return (
        <section className="additional_info_wrapper">
        <p className="basic_info_text">Additional Informations</p>

        <form className="partner_additional_wrapper"> 

          <div className="pan_vote_card">
          <label htmlFor="category" className="partner_form_label">
            <p className="partner_form_para">PAN Card</p>
            <input
              type="number"
              className="partner_form_input"
              placeholder="Enter Revenue"
            />
          </label>
          <label htmlFor="category" className="partner_form_label">
            <p className="partner_form_para">Voter Id</p>
            <input
              type="number"
              className="partner_form_input"
              placeholder="Enter Revenue"
            />
          </label>
          </div>

          <div className="more_card_container">
             
          <label htmlFor="category" className="partner_form_label">
            <p className="partner_form_para">Aadhar Number</p>
            <InputMask className="partner_form_input"
        mask="9 9 9 9          9 9 9 9          9 9 9 9          9 9 9 9"
        placeholder="Aadhaar Number"
    
      />
          </label>
          <label htmlFor="category" className="partner_form_label">
            <p className="partner_form_para">Passport</p>
            <input
              type="number"
              className="partner_form_input"
            />
          </label>
          <label htmlFor="category" className="partner_upload_label">
            <p className="partner_form_para">Company Registration Certificate</p>
            <button type="button" onClick={()=>{
              setConfirmationModal({
                heading:'Please upload your company certificate',
                 subHeading:'Select relevant documents to complete your kyc',
                  type:'file',
                 
              })
              } }  className="partner_upload_file">Upload File</button>
          </label>

          </div>

        </form>
      </section>
    )
}

export default AdditionalInfo;