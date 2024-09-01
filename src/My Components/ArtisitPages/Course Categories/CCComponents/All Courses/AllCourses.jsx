import './AllCourses.css';
import EveryCourse from './EveryCourse';
import { useState } from 'react';


const AllCourses = ({CategoryName}) => {

  for (var i = 0; i < 4; i++) {}
  return (
    <>
      <div id="AllCourses">
      {CategoryName.map(course => (
          <EveryCourse key={course.id} course={course} />
        ))}
        {/* multipages */}
      </div>
      <div id="multiple-pages">
        <div id="back-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="23px" viewBox="0 0 14 23" fill="none" >
            <path d="M12.5 1L2 11.5L12.5 22" stroke="black" strokeWidth="2" />
          </svg>
        </div>
        <div id="page-number-box">
          <div className="page-number">1</div>
          {/* <div className="page-number">2</div> */}
          {/* <div className="page-number">3</div> */}
        </div>
        <div id="next-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="23px" viewBox="0 0 14 23" fill="none" >
            <path d="M1 1L11.5 11.5L1 22" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </>
  );
};
export default AllCourses;
