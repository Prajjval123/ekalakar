import './EveryCourse.css';

const EveryCourse = (props) => {
  console.log("===>1",props.course);
  return (
    <>
      <div className="every-course">
        <img src={props.course.course_img} className="every-course-img" />
        <div className="every-course-name">{props.course.course_name}</div>
        <div className="every-course-price">
          <div className="every-course-price-text">Price:</div>
          <div className="every-course-price-free">{props.course.price}</div>
        </div>
        <div className="every-course-rating">
          <div className="every-course-rating-text">Ratings: </div>
          <div className="every-course-rating-all-stars">
            <div className="every-course-rating-single-star"></div>
            <div className="every-course-rating-single-star"></div>
            <div className="every-course-rating-single-star"></div>
            <div className="every-course-rating-single-star"></div>
            <div className="every-course-rating-single-star"></div>
          </div>
        </div>
        <div className="every-course-posted-by">
          <div className="every-course-posted-by-text">Posted By: </div>
          <div className="every-course-posted-by-username"> {props.course.posted_by} </div>
        </div>
        <a href={props.course.course_link} target="_blank" className="every-course-start-learning-link" >
          <button className="every-course-start-learning-button">Start Learning</button>
        </a>
      </div>
    </>
  );
};

export default EveryCourse;
