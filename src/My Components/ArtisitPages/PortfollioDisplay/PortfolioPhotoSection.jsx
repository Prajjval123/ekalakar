import React from 'react';
import './PortfolioPhotoSection.css'; // Import your CSS file.
import Vector from "./assets/Vector.svg"
import Vector1 from "./assets/Vector1.svg"
import instagram from './assets/instagram.svg'
import images from "./assets/images.png"

class PortfolioPhotoSection extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  goNext = () => {
    const container = this.containerRef.current;
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
  };

  goPrevious = () => {
    const container = this.containerRef.current;
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
  };
  render() {
    const { pic1,pic2,pic3,pic4,pic5 } = this.props;

    return (
      <div className="container" ref={this.containerRef}>
        <img src={pic1} className="box" alt="img" />
        {/* <div className="box">second</div> */}
        <img src={pic2} className="box" alt="img" />
        <img src={pic3} className="box" alt="img" />
        <img src={pic4} className="box" alt="img" />
        {/* <div className="box">third</div> */}
        <img src={pic5} className="box" alt="img" />
        <img src={images} className="box" alt="img" />
        {/* <div className="box">fourth</div>
        <div className="box">fifth</div>
        <div className="box">sixth</div> */}
        {/* <div className="box">seventh</div>
        <div className="box">eighth</div>
        <div className="box">nineth</div>
        <div className="box">tenth</div>
        <div className="box">eleventh</div>
        <div className="box">twelfth</div>
        <div className="box">thirteenth</div>
        <div className="box">fourteenth</div>
        <div className="box">fifteenth</div> */}
        <a className="prev1" onClick={this.goPrevious}><img src={Vector} alt="vector" /></a>
        <a className="next1" onClick={this.goNext}><img src={Vector1} alt="vector" /></a>
      </div>
    );
  }
}

export default PortfolioPhotoSection;
