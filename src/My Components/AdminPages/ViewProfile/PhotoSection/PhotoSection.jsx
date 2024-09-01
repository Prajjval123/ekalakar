import React from "react";
import "./PhotoSection.css";
import { Button, Card } from "react-bootstrap";
// import Carousel from "react-grid-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PhotoSection({ imageData }) {
  console.log(imageData);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      className="addvp"
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      <div className="admin-vp-caraussel">
        <img
          src="https://img1.exportersindia.com/product_images/bc-full/2020/9/7877003/s-a-cricket-leather-ball-1599995680-5582817.jpeg"
          alt="Image 2"
        />
      </div>
      <div className="admin-vp-caraussel">
        <img
          src="https://img1.exportersindia.com/product_images/bc-full/2020/9/7877003/s-a-cricket-leather-ball-1599995680-5582817.jpeg"
          alt="Image 2"
        />
      </div>
      <div className="admin-vp-caraussel">
        <img
          src="https://img1.exportersindia.com/product_images/bc-full/2020/9/7877003/s-a-cricket-leather-ball-1599995680-5582817.jpeg"
          alt="Image 2"
        />
      </div>
      <div className="admin-vp-caraussel">
        <img
          src="https://img1.exportersindia.com/product_images/bc-full/2020/9/7877003/s-a-cricket-leather-ball-1599995680-5582817.jpeg"
          alt="Image 2"
        />
      </div>
    </Carousel>
  );
}

export default PhotoSection;
