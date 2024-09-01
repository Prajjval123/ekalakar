import './SingleBox.css';

const SingleBox = (props) => {
  return (
    <>
      <div className="every-box">
        <div className="every-icon-bg"><img className="every-icon" src={props.data.box_img} /></div>
        <div className="every-box-heading">{props.data.box_heading}</div>
        <div className="every-box-summary">{props.data.box_summary}</div>
      </div>
    </>
  );
};

export default SingleBox;
