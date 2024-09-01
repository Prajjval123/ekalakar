import './CourseSubscription.css';

const CourseSubscription = () => {
  return (
    <div id='complete-course-subscription-section'>
      <div id="course-subscription-box"></div>
      <div id="course-subscription-upper-part">
        <div id="course-subscription-text">COURSE <br /> SUBSCRIPTION</div>
        <div id="text-under-course-subscription-text">Get the best sent to your inbox, every month</div>
        <div id="course-subscription-input-and-subscribe-button">
            <input type="text" id='course-subscription-input' placeholder='Enter your email address here' />
            <button id='course-subscription-subscribe-button'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default CourseSubscription;
