import './CourseCategories.css';
import Category from './Every Category/Category';
import { Link } from "react-router-dom";

const AllCategories = [
  {
    id: 1,
    category_name: 'Dance',
    category_img:  'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/dance-categories_qqix1n.png',
      
  },
  {
    id: 2,
    category_name: 'Music',
    category_img:
    'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/boy-guitar-mic.png',
  },
  // {
  //   id: 3,
  //   category_name: 'Drama',
  //   category_img:
  //     'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/drama-white-mask.png',
  // },
  // {
  //   id: 4,
  //   category_name: 'Acting',
  //   category_img:
  //     'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136235/Ekalakaar/acting.png',
  // },
  // {
  //   id: 5,
  //   category_name: 'Fine Art',
  //   category_img:
  //     'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/girl-hand-and-painting.png',
  // },
  // {
  //   id: 6,
  //   category_name: 'Comedy',
  //   category_img:
  //     'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136235/Ekalakaar/comedy-store-logo.png',
  // },

  {
    id: 3,
    category_name: 'Song',
    category_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136235/Ekalakaar/microphone-and-music-note.png',
  },
  {
    id: 4,
    category_name: 'Theater',
    category_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136236/Ekalakaar/theater-stage-curtains.png',
  },
  {
    id: 5,
    category_name: 'Any Other',
    category_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692136235/Ekalakaar/other-category-icon.png',
  }
  
];

const CourseCategories = (props) => {
  return (
    <div id="course-categories-section">
      <div id="course-categories-heading">Course Categories</div>
      <div id="course-categories-summary">Provide most popular courses that your want to join and lets start the course for the most simply way in here</div>

      {/* <Categories /> */}
      <div className="categories">
        <Category category={AllCategories[0]} />
        <Category category={AllCategories[1]} />
        <Category category={AllCategories[2]} />
      </div>
      <div className="categories">
        <Category category={AllCategories[3]} />
        <Category category={AllCategories[4]} />
        <Category category={AllCategories[5]} />
        {/* <Category category={AllCategories[6]} /> */}
      </div>
      {/* <Categories /> */}

    <Link to="/CourseCategories" style={{textDecoration:"none"}}> <button id="course-categories-explore-more-button">Explore All</button></Link> 
    </div>
  );
};

export default CourseCategories;
