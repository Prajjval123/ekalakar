import './Pcourse.css';

const Pcourse = (props) => {
  return (
    <div className="popular-course-image-type">
      <img src={props.course.course_img} className="popular-course-image" />
      <div className="popular-course-type">{props.course.course_name}</div>
    </div>
  );
};

export default Pcourse;