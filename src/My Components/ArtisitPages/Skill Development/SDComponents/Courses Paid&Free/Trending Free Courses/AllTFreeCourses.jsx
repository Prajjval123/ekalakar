import EveryCourse from './EveryCourse';
import './AllTFreeCourses.css';

const FreeCourses = [
    {
        id: 1,
        course_name: "Group Dance",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/multiple-girl-with-dark-and-red-theme-pose.png",
        by: "B Author Name",
    },
    {
        id: 2,
        course_name: "Piano",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/piano-fingers.png",
        by: "B Author Name",
    },
    {
        id: 3,
        course_name: "Cinematography",
        course_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136237/Ekalakaar/blur-boy-girl-cinematography-shoot.png",
        by: "B Author Name",
    }
]


const AllTFreeCourses = () =>{
    return(
        <div id="AllTFreeCourses">
            <div id="tranding-free-courses-back-icon" className='tranding-free-courses-icons'>
                <svg className='all-TFCourses-next-back-icons' xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" >
                    <path d="M9 1L2 8L9 15" stroke="white" strokeWidth="2" />
                </svg>
            </div>

            <EveryCourse course={FreeCourses[0]} />
            <EveryCourse course={FreeCourses[1]} />
            <EveryCourse course={FreeCourses[2]} />
            
            <div id="tranding-free-courses-back-icon" className='tranding-free-courses-icons'>
                <svg className='all-TFCourses-next-back-icons' xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" >
                    <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="2" />
                </svg>
            </div>
        </div>
    )
}

export default AllTFreeCourses;