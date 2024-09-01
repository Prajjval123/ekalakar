import Pcourse from './Pcourse';
import "./PopularCourses.css"


const Pdata = [
    {
        id: 1,
        course_name: "Free Moves",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/hip-hop-boy-pose.png"
    },
    {
        id: 2,
        course_name: "Bharathyam",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/multiple-small-girl-classic-dancer.png"
    },
    {
        id: 3,
        course_name: "Vocal Practice",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/girl-singing.png"
    },
    {
        id: 4,
        course_name: "Mime Act",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/girl-black-shadow-on-red-curtain.png"
    }
]

const PopularCourses = () =>{
    return(
        <div id="popular-courses">
            <div id="popular-courses-text">Popular Courses</div>
            <div id="courses">
                <div className="popular-courses-moving-icon" id="popular-courses-back">
                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" >
                        <path d="M9 1L2 8L9 15" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
                {/* popular courses images and types */}
                
                <Pcourse course={Pdata[0]} />
                <Pcourse course={Pdata[1]} />
                <Pcourse course={Pdata[2]} />
                <Pcourse course={Pdata[3]} />

                {/* popular courses images and types */}
                <div className="popular-courses-moving-icon" id="popular-courses-next">
                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" >
                        <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;