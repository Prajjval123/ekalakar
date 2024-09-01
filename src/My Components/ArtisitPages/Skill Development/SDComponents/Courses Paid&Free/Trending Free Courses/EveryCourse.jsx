import '../Courses_Common_css.css';

const EveryCourse = (props) => {
  return (
    <>
      <div className="every-tranding-course">
        <img src={props.course.course_img} className='course-img' />
        <div className="course-name">{props.course.course_name}</div>
        <div className="course-posted-by">{props.course.by}</div>
      </div>
    </>
  );
};

export default EveryCourse;
