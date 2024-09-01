import './PortfolioPhotoSection.css';
import ReactPlayer from 'react-player'
function PortfolioVideoSection(props){
    const {v1,v2,v3} = props;

    console.log(v1);
    console.log(v2);
    console.log(v3);
    return (
        <>
        <div className="video">
          <ReactPlayer url={v1} height="250px"/>
          <ReactPlayer url={v2} height="250px"/>
          <ReactPlayer url={v3} height="250px"/>
        </div>
        </>
    )
}
export default PortfolioVideoSection;