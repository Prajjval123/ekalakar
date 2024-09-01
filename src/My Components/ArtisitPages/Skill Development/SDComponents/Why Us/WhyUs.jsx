import SingleBox from "./Every Box/SingleBox";
import "./WhyUs.css";

const every_Box_Data = [
    {
        id: 1,
        box_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136238/Ekalakaar/watch-screen-transparent-background-icon.png",
        box_heading : "Learn From Anywhere",
        box_summary : "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        id: 2,
        box_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136238/Ekalakaar/two-people-discuss-transparent-background-icon.png",
        box_heading : "Taught By Experts",
        box_summary : "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        id: 3,
        box_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136238/Ekalakaar/light-bulb-transparent-background-icon.png",
        box_heading : "Learn In-demand Skill",
        box_summary : "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
]

const WhyUs = () =>{
    return(
        <div id="complete-why-us-section">
            <div id="why-choose-us-text">Why Choose Us</div>
            <div id="why-choose-us-all-boxes">

                <SingleBox data={every_Box_Data[0]} />
                <SingleBox data={every_Box_Data[1]} />
                <SingleBox data={every_Box_Data[2]} />

            </div>
        </div>
    )
}

export default WhyUs;