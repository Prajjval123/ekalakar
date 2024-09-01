import "./portfolioUpdateForm.css";
import "../ProfilePages/Artist_Profile.css";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
  makeAuthenticatedPOSTRequest,
} from "../../../services/serverHelper";
import { artistProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  specialization,
  languages,
  artform,
  performanceduration,
  artTypeData,
  performancetype,
  natureofArt,
  nameofart,
  courses,
  categories,
  disabilitiesArray,
  highestLevelOfPerformance,
  ChargesPerPerformance,
  artInfo1,
} from "../../../Data/artistProfile";
import Select from "react-select";
import Facebook from "../ProfilePages/assets/Facebook.svg";
import Globe from "../ProfilePages/assets/Globe.svg";
import LinkedIn from "../ProfilePages/assets/LinkedIn.svg";
import TwitterX from "../ProfilePages/assets/TwitterX.svg";
import YouTube from "../ProfilePages/assets/YouTube.svg";
import Instagram from "../ProfilePages/assets/Instagram.svg";
import DatePicker from "react-datepicker";

function PortfolioUpdateForm() {
  const { accessToken } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  //multiple select languages
  const languageoptions = languages.map((item) => ({
    value: item,
    label: item,
  }));
  const [languagesoptions, setlanguagesoptions] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: {
      countryCode: "",
      number: "",
    },
    age: "",
    gender: "",
    languages: [],
    category: "",
    natureOfArt: "",

    aboutJourney: "",
    address: {
      pincode: "123456",
      state: "",
    },
    eventType: "",
    yearOfExperience: "",
    artName: "",

    performanceType: "",
    totalNoOfPerformance: "",
    chargePerPerformance: "",
    talent: "",
    minimumBudget: "",
    location: "",
    handles: {
      instagram: "",
      facebook: "",
      youtube: "",
    },
    idProof: {
      name: "",
      num: "",
    },
    panNumber: "",
    passwordNumber: "",
    upiId: "",
  });

  const fetchPortfolioData = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        artistProfilePoints.FETCH_PROFILE_DATA_API,
        accessToken
      );
      const { address, socialLinks, personalInfo, artInfo, performanceInfo } =
        response.data;
      console.log("res1", response);

      setFormData({
        contactNumber: personalInfo?.contactNumber,
        email: personalInfo?.email,
        address: address,
        handles: socialLinks,
        firstName: personalInfo?.firstName,
        lastName: personalInfo?.lastName,
        natureOfArt: artInfo?.artNature,
        age: personalInfo?.age,
        chargePerPerformance: performanceInfo?.perfCharge,
        yearOfExperience: performanceInfo?.experience,
        eventType: performanceInfo?.perfEvent,
        minimumBudget: personalInfo?.monthlyIncome,
        noOfPerformance: performanceInfo?.lastYearPerfs,
        performanceType: performanceInfo?.perfType,
        artName: artInfo?.artName,
        aboutJourney: personalInfo?.about,
        location: address?.details,
      });
      console.log(formData);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again", {
        position: "top-center",
      });
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("handles.")) {
      setFormData((prevData) => ({
        ...prevData,
        handles: {
          ...prevData.handles,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const submitHandler = async (event) => {
    const toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    event.preventDefault();

    try {
      const {
        location,
        handles,
        firstName,
        lastName,
        aboutJourney,
        contactNumber,
        email,
        age,
        minimumBudget,
        artName,
        natureOfArt,
        performanceType,
        totalNoOfPerformance,
        chargePerPerformance,
      } = formData;

      let address = {
        location,
      };
      let socialLinks = handles;

      let personalInfo = {
        firstName,
        lastName,
        about: aboutJourney,
        contactNumber,
        email,
        age,
        monthlyIncome: minimumBudget,
      };

      let artInfo = {
        artNature: natureOfArt,
        artName,
        perfType: performanceType,
      };

      let performanceInfo = {
        totalPerfs: totalNoOfPerformance,
        perfCharge: chargePerPerformance,
      };

      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { personalInfo, socialLinks, artInfo, performanceInfo, address },
        accessToken
      );

      console.log("res", response);

      if (response.status === "success") {
        toast.success("successfully update", {
          position: "top-center",
        });

        navigate(-1);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again", {
        position: "top-center",
      });
    }
    toast.dismiss(toastId);
  };

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <form onSubmit={submitHandler} className="edit_portfolio_form_wrapper">
      <h4 className="form_title">BASIC PROFILE</h4>
      <div className="portfolio_row">
        <label className="single_form_label">
          <p className="sinle_form_title">First Name </p>

          <input
            required
            placeholder="Enter the name of Card"
            name="firstName"
            value={formData.firstName}
            className="single_form_input"
            onChange={changeHandler}
          />
        </label>
        <label className="single_form_label">
          <p className="sinle_form_title">Last Name </p>

          <input
            required
            placeholder="Enter the name of Card"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            className="single_form_input"
          />
        </label>
      </div>
      {/* <label className="single_form_label">
        <p className="sinle_form_title">Category</p>

        <input
          value={formData.category}
          placeholder="Enter your performance category"
          
          onChange={changeHandler}
          name="category"
          className="single_form_input"
        />
      </label> */}

      <div className="portfolio_row">
        <label className="single_form_label">
          <p className="sinle_form_title">Email Id</p>
          <input
            disabled
            placeholder="Enter your Email"
            value={formData.email}
            name="email"
            required
            onChange={changeHandler}
            className="single_form_input"
          />
        </label>
        <label
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <p className="sinle_form_title">Contact Number</p>
          <div
            className=""
            style={{
              display: "flex",
              height: "60px",
              marginTop: "-10px",
              gap: "10px",
            }}
          >
            <select
              onChange={changeHandler}
              name="countryCode"
              value={formData.contactNumber.countryCode}
              style={{
                width: "15%",
                marginRight: "4px",
                paddingRight: "2px",
                border: "1px solid black",
              }}
            >
              <option value="+91">+91</option>
              <option value="+355">+355</option>
              <option value="+213">+213</option>
              <option value="+376">+376</option>
              <option value="+244">+244</option>
              <option value="+1268">+1268</option>
              <option value="+54">+54</option>
              <option value="+374">+374</option>
              <option value="+61">+61</option>
              <option value="+43">+43</option>
              <option value="+994">+994</option>
              <option value="+1242">+1242</option>
              <option value="+973">+973</option>
              <option value="+880">+880</option>
              <option value="+1246">+1246</option>
              <option value="+375">+375</option>
              <option value="+32">+32</option>
              <option value="+501">+501</option>
              <option value="+229">+229</option>
              <option value="+975">+975</option>
              <option value="+591">+591</option>
              <option value="+387">+387</option>
              <option value="+267">+267</option>
              <option value="+55">+55</option>
              <option value="+673">+673</option>
              <option value="+359">+359</option>
              <option value="+226">+226</option>
              <option value="+257">+257</option>
              <option value="+855">+855</option>
              <option value="+237">+237</option>
              <option value="+1">+1</option>
              <option value="+238">+238</option>
              <option value="+236">+236</option>
              <option value="+235">+235</option>
              <option value="+56">+56</option>
              <option value="+86">+86</option>
              <option value="+57">+57</option>
              <option value="+269">+269</option>
              <option value="+242">+242</option>
              <option value="+506">+506</option>
              <option value="+385">+385</option>
              <option value="+53">+53</option>
              <option value="+357">+357</option>
              <option value="+420">+420</option>
              <option value="+45">+45</option>
              <option value="+253">+253</option>
              <option value="+1767">+1767</option>
              <option value="+1809">+1809</option>
              <option value="+670">+670</option>
              <option value="+593">+593</option>
              <option value="+20">+20</option>
              <option value="+503">+503</option>
              <option value="+240">+240</option>
              <option value="+291">+291</option>
              <option value="+372">+372</option>
              <option value="+251">+251</option>
              <option value="+679">+679</option>
              <option value="+358">+358</option>
              <option value="+33">+33</option>
              <option value="+241">+241</option>
              <option value="+220">+220</option>
              <option value="+995">+995</option>
              <option value="+49">+49</option>
              <option value="+233">+233</option>
              <option value="+30">+30</option>
              <option value="+1473">+1473</option>
              <option value="+502">+502</option>
              <option value="+224">+224</option>
              <option value="+245">+245</option>
              <option value="+592">+592</option>
              <option value="+509">+509</option>
              <option value="+504">+504</option>
              <option value="+36">+36</option>
              <option value="+354">+354</option>
              <option value="+91">+91</option>
              <option value="+62">+62</option>
              <option value="+98">+98</option>
              <option value="+964">+964</option>
              <option value="+353">+353</option>
              <option value="+972">+972</option>
              <option value="+39">+39</option>
              <option value="+225">+225</option>
              <option value="+1876">+1876</option>
              <option value="+81">+81</option>
              <option value="+962">+962</option>
              <option value="+7">+7</option>
              <option value="+254">+254</option>
              <option value="+686">+686</option>
              <option value="+383">+383</option>
              <option value="+965">+965</option>
              <option value="+996">+996</option>
              <option value="+856">+856</option>
              <option value="+371">+371</option>
              <option value="+961">+961</option>
              <option value="+266">+266</option>
              <option value="+231">+231</option>
              <option value="+218">+218</option>
              <option value="+423">+423</option>
              <option value="+370">+370</option>
              <option value="+352">+352</option>
              <option value="+389">+389</option>
              <option value="+261">+261</option>
              <option value="+265">+265</option>
              <option value="+60">+60</option>
              <option value="+960">+960</option>
              <option value="+223">+223</option>
              <option value="+356">+356</option>
              <option value="+692">+692</option>
              <option value="+222">+222</option>
              <option value="+230">+230</option>
              <option value="+52">+52</option>
              <option value="+691">+691</option>
              <option value="+373">+373</option>
              <option value="+377">+377</option>
              <option value="+976">+976</option>
              <option value="+382">+382</option>
              <option value="+212">+212</option>
              <option value="+258">+258</option>
              <option value="+95">+95</option>
              <option value="+264">+264</option>
              <option value="+674">+674</option>
              <option value="+977">+977</option>
              <option value="+31">+31</option>
              <option value="+64">+64</option>
              <option value="+505">+505</option>
              <option value="+227">+227</option>
              <option value="+234">+234</option>
              <option value="+850">+850</option>
              <option value="+47">+47</option>
              <option value="+968">+968</option>
              <option value="+92">+92</option>
              <option value="+680">+680</option>
              <option value="+507">+507</option>
              <option value="+675">+675</option>
              <option value="+595">+595</option>
              <option value="+51">+51</option>
              <option value="+63">+63</option>
              <option value="+48">+48</option>
              <option value="+351">+351</option>
              <option value="+974">+974</option>
              <option value="+40">+40</option>
              <option value="+7">+7</option>
              <option value="+250">+250</option>
              <option value="+1869">+1869</option>
              <option value="+1758">+1758</option>
              <option value="+1784">+1784</option>
              <option value="+685">+685</option>
              <option value="+378">+378</option>
              <option value="+239">+239</option>
              <option value="+966">+966</option>
              <option value="+221">+221</option>
              <option value="+381">+381</option>
              <option value="+248">+248</option>
              <option value="+232">+232</option>
              <option value="+65">+65</option>
              <option value="+421">+421</option>
              <option value="+386">+386</option>
              <option value="+677">+677</option>
              <option value="+252">+252</option>
              <option value="+27">+27</option>
              <option value="+82">+82</option>
              <option value="+211">+211</option>
              <option value="+34">+34</option>
              <option value="+94">+94</option>
              <option value="+249">+249</option>
              <option value="+597">+597</option>
              <option value="+268">+268</option>
              <option value="+46">+46</option>
              <option value="+41">+41</option>
              <option value="+963">+963</option>
              <option value="+886">+886</option>
              <option value="+992">+992</option>
              <option value="+255">+255</option>
              <option value="+66">+66</option>
              <option value="+228">+228</option>
              <option value="+676">+676</option>
              <option value="+1868">+1868</option>
              <option value="+216">+216</option>
              <option value="+90">+90</option>
              <option value="+993">+993</option>
              <option value="+688">+688</option>
              <option value="+256">+256</option>
              <option value="+380">+380</option>
              <option value="+971">+971</option>
              <option value="+44">+44</option>
              <option value="+1">+1</option>
              <option value="+598">+598</option>
              <option value="+998">+998</option>
              <option value="+678">+678</option>
              <option value="+379">+379</option>
              <option value="+58">+58</option>
              <option value="+84">+84</option>
              <option value="+967">+967</option>
              <option value="+260">+260</option>
              <option value="+263">+263</option>
            </select>
            <input
              placeholder="Enter your contact Number"
              required
              name="contactNumber"
              value={formData.contactNumber.number}
              onChange={changeHandler}
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "12px",
                border: "1px solid black",
              }}
            />
          </div>
        </label>
      </div>

      <div className="portfolio_row" style={{ gap: "5%" }}>
        <div className="portfolio_subrow">
          <label className="single_form_label" style={{}}>
            <p className="sinle_form_title">Age (Year)</p>

            <select
              name="age"
              required
              onChange={changeHandler}
              value={formData.age}
              className="single_form_input"
            >
              {Array.from({ length: 100 - 17 }, (_, index) => (
                <option key={index} value={index + 18}>
                  {index + 18}
                </option>
              ))}
            </select>
          </label>
          <label className="single_form_label" style={{}}>
            <p className="sinle_form_title">Gender</p>

            <select
              style={{
                width: "100%",
                fontFamily: "Poppins",
                background: "transparent",
                color: "black",
                height: "60px",
                border: "1px solid black",
                marginTop: "-10px",
              }}
              onChange={changeHandler}
              value={formData.gender}
            >
              <option selected hidden>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Any Other">Any Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </label>
        </div>

        <label
          className="single_form_label"
          style={{ width: "50%", backgroundColor: "white", color: "black" }}
        >
          <p className="sinle_form_title">Languages Known</p>

          <Select
            defaultValue={languagesoptions}
            value={languagesoptions}
            isMulti
            onChange={setlanguagesoptions}
            options={languageoptions}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                marginTop: "-10px",
                border: "1px solid black",
              }),
            }}
          />
        </label>
      </div>

      <h4 className="form_title">ADDRESS</h4>

      <div className="portfolio_row">
        <label
          className="single_form_label"
          style={{ width: "50%", backgroundColor: "white", color: "black" }}
        >
          <p className="sinle_form_title">PIN CODE</p>

          <input
            maxLength={6}
            pattern="[0-9]{6}"
            min="100000"
            max="999999"
            // onChange={}
            value={formData.address.pincode}
            name="address.pincode"
            type="number"
            style={{ width: "100%" }}
            required
            className="single_form_input"
          />
        </label>
        <label
          className="single_form_label"
          style={{ width: "50%", backgroundColor: "white", color: "black" }}
        >
          <p className="sinle_form_title">State</p>

          <select
            onChange={changeHandler}
            name="address.state"
            value={formData.address.state}
            style={{ width: "100%" }}
            className="single_form_input"
          >
            <option selected hidden>
              Select State
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </label>
        <label
          className="single_form_label"
          style={{ width: "50%", backgroundColor: "white", color: "black" }}
        >
          <p className="sinle_form_title">District</p>

          <input
            className="single_form_input"
            placeholder="Enter City/District Name"
            value={formData.address.district}
            onChange={changeHandler}
          />
        </label>
      </div>

      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Social Category </label>
          <select
            onChange={changeHandler}
            name="socialCategory"
            value={formData.socialCategory}
          >
            <option selected hidden>
              Select social Category
            </option>
            <option value="General">General</option>
            <option value="OBC">OBC (Other Backward Classes)</option>
            <option value="SC">SC (Scheduled Caste)</option>
            <option value="ST">ST (Scheduled Tribe)</option>
            <option value="Any Other">Any Other</option>
          </select>
        </div>
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">
            Person With Disability (PwD)
          </label>
          <select onChange={changeHandler} name="pwd" value={formData.pwd}>
            <option selected hidden>
              Select
            </option>
            <option value="No">No</option>
            {disabilitiesArray.map((index, option) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>{" "}
        </div>
      </div>

      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Primary Source Of Income</label>
          <select
            onChange={changeHandler}
            name="incomeSrc"
            value={formData.incomeSrc}
          >
            <option selected hidden>
              Select income Source
            </option>
            {categories.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="BasicProfile_inputfield">
          <label className="single_form_label">
            Annual Income from Performing Art (INR)
          </label>
          <select
            onChange={changeHandler}
            name="anunalIncomeByPerf"
            value={formData.anunalIncomeByPerf}
          >
            <option selected hidden>
              Select Income
            </option>
            <option value="<5000">below ₹5,000</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000-20000">₹10,000 - ₹20,000</option>
            <option value="20000-50000">₹20,000 - ₹50,000</option>
            <option value="50000-100000">₹50,000 - ₹100,000</option>
            <option value="100000-250000">₹100,000 - ₹250,000</option>
            <option value="250000-500000">₹250,000 - ₹500,000</option>
            <option value=">500000">above ₹500,000</option>
          </select>
        </div>
      </div>

      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Identity Proof</label>
          <select
            onChange={changeHandler}
            name="idProof.name"
            // value={formData.idProof.name}
            className="single_form_input"
          >
            <option selected hidden>
              Select ID Proof
            </option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="Bank Statement">Bank Statement</option>
            <option value="Birth Certificate">Birth Certificate</option>
            <option value="Driver's License">Driver's License</option>
            <option value="National ID Card">National ID Card</option>
            <option value="PAN Card">PAN Card</option>
            <option value="Passport">Passport</option>
            <option value="Social Security Card">Social Security Card</option>
          </select>
        </div>
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">ID Proof No</label>
          <input
            onChange={changeHandler}
            // value={formData.idProof.num}
            placeholder="Enter Id Num"
            name="idProof.num"
            type="text"
            className="single_form_input"
          />
        </div>
      </div>

      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Pan Card</label>
          <input
            onChange={changeHandler}
            value={formData.panNumber}
            placeholder="Enter Pan Number"
            name="panNumber"
            type="text"
            className="single_form_input"
          />
        </div>
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Valid Passport</label>
          <DatePicker
            id="date"
            name="Date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="single_form_input"
          />
        </div>
      </div>

      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">UPI Id (Optional)</label>
          <input
            onChange={changeHandler}
            value={formData.upiId}
            placeholder="Enter UPI Id"
            name="upiId"
            type="text"
            className="single_form_input"
          />
        </div>
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">GSI IN</label>
          <input
            onChange={changeHandler}
            value={formData.gstIn}
            placeholder="Enter GST IN"
            name="gstIn"
            type="text"
            className="single_form_input"
          />
        </div>
      </div>

      <h4 className="form_title">SOCIAL MEDIA</h4>

      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Instagram</label>
          <input
            onChange={changeHandler}
            value={formData?.handles?.instagram}
            name="handles.instagram"
            type="text"
            className="single_form_input"
          />
          <img src={Instagram} alt="Instagram" />
        </div>
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Facebook</label>
          <input
            onChange={changeHandler}
            value={formData?.handles?.facebook}
            name="handles.facebook"
            type="text"
            className="single_form_input"
          />
          <img src={Facebook} alt="Facebook" />
        </div>
      </div>
      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Youtube</label>
          <input
            onChange={changeHandler}
            value={formData?.handles?.youtube}
            name="handles.youtube"
            type="text"
            className="single_form_input"
          />
          <img src={YouTube} alt="Youtube" />
        </div>
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">LinkedIn</label>
          <input
            onChange={changeHandler}
            value={formData?.handles?.linkedIn}
            name="handles.linkedIn"
            type="text"
            className="single_form_input"
          />
          <img src={LinkedIn} alt="LinkedIn" />
        </div>
      </div>

      <div className="portfolio_row">
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">Website</label>
          <input
            onChange={changeHandler}
            value={formData?.handles?.website}
            name="handles.website"
            type="text"
            className="single_form_input"
          />
          <img src={Globe} alt="Globe" />
        </div>
        <div className="BasicProfile_inputfield">
          <label className="single_form_label">X</label>
          <input
            onChange={changeHandler}
            value={formData?.handles?.twitter}
            name="handles.twitter"
            type="text"
            className="single_form_input"
          />
          <img src={TwitterX} alt="TwitterX" />
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "20px" }}>
        <label className="single_form_label">About My Journey</label>
        <textarea
          name="about"
          value={formData?.about}
          onChange={changeHandler}
          style={{
            width: "100%",
            border: "2px solid rgb(0,0,0,0.5)",
            padding: "10px",
            borderRadius: "10px",
            resize: "none",
            height: "166px",
          }}
        />
      </div>
      {/* <h4 className="form_title">ART PROFILE</h4> */}

      <ApplicationButton
        type={"submit"}
        text={"Update"}
        className={"edit_portfolio_updateButton"}
      />
      <button
        onClick={() => {
          navigate(-1);
        }}
        type="button"
        className="edit_portfolio_cancelButton"
      >
        Cancel
      </button>
    </form>
  );
}

export default PortfolioUpdateForm;
