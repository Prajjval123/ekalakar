import './AllReviews.css'
import EveryReview from './Every Review/EveryReview';


const reviewData = [
    {
        id: 1,
        user_name: "Jhon Doe",
        user_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/boy-smiling-face.png",
        user_review: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley”`
    },
    {
        id: 2,
        user_name: "Campbell",
        user_img: "https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/girl-with-short-hair.png",
        user_review: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley”`
    }
]


const AllReviews = () =>{
    return(
        <div id="AllReviews">
            <div id="aboutUs">What Our Artists Say <br /> About Us</div>

            <div id="users-and-reviews">
                <EveryReview reviewer={reviewData[0]} />
                <EveryReview reviewer={reviewData[1]} />
            </div>

            <div id="circuls-under-reviews">
                <div className="every-circul-under-reviews big-circle"></div>
                <div className="every-circul-under-reviews" ></div>
                <div className="every-circul-under-reviews" ></div>
                <div className="every-circul-under-reviews" ></div>
                <div className="every-circul-under-reviews" ></div>
                <div className="every-circul-under-reviews" ></div>
            </div>
        </div>
    )
}

export default AllReviews;