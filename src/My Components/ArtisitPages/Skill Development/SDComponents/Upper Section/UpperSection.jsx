import './UpperSection.css';
import PopularCourses from './UpperSection PopularCourses/PopularCourses';
import UpperText from './UpperSection UpperText/UpperText'; 

const UpperSection = () => {
  return (
    <div id='SD-parent'>
      <div id="complete-upper-section"></div>

      <div id="complete-upper-section-text-courses">
        <div id="upper-section-text">
            <UpperText />
        </div>
        <div id="upper-section-popular-courses">
            <PopularCourses />
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
