import './EveryReview.css';

const EveryReview = (props) => {
    return (
        <div className="review-box">
          <img className="review-giver-user-image" src={props.reviewer.user_img} />
          <div className="star-summary-userName">
            <div className="starts">
              <img className="every-single-start" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/star.png" />
              <img className="every-single-start" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/star.png" />
              <img className="every-single-start" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/star.png" />
              <img className="every-single-start" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/star.png" />
              <img className="every-single-start" src="https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/star.png" />
            </div>
            <div className="user-review-summary">{props.reviewer.user_review}</div>
            <div className="review-userName">{props.reviewer.user_name}</div>
          </div>
        </div>
    );
};

export default EveryReview;
