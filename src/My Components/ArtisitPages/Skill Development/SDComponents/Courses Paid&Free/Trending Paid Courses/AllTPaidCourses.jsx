import EveryCourse from './EveryCourse';
import './AllTPaidCourses.css';


const PaidCourses = [
    {
        id: 1,
        course_name: "Western Dance",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/western-dance-pose.png",
        by: "B Author Name",
    },
    {
        id: 2,
        course_name: "Guitar Tune",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/girl-with-guitar.png",
        by: "B Author Name",
    },
    {
        id: 3,
        course_name: "Solo Act",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/movie-big-camera.png",
        by: "B Author Name",
    }
]

const AllTPaidCourses = () =>{
    return(
        <div id="AllTPaidCourses">
            <div id="tranding-paid-courses-back-icon" className='tranding-paid-courses-icons'>
                <svg className='all-TPCourses-next-back-icons' xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" >
                    <path d="M9 1L2 8L9 15" stroke="white" strokeWidth="2" />
                </svg>
            </div>

            <EveryCourse course={PaidCourses[0]} />
            <EveryCourse course={PaidCourses[1]} />
            <EveryCourse course={PaidCourses[2]} />
            
            <div id="tranding-paid-courses-back-icon" className='tranding-paid-courses-icons'>
                <svg className='all-TPCourses-next-back-icons' xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" >
                    <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="2" />
                </svg>
            </div>
        </div>
    )
}

export default AllTPaidCourses;