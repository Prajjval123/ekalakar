import "./noDataTemplate.css"
import ApplicationButton from "./ApplicationButton";

function NoDataTemplate({image , para , patronAppli = false}){
    return (
        <div className="noData_container">
        <img src={image} alt=""  />
        {
          !patronAppli &&  
        <p className="oops_text">Oops!</p>
        }
        {
          !patronAppli && 
        <p className="noData_para">
{para}
        </p>
        }
        {
          !patronAppli && 
        <ApplicationButton text={"View Events"} />
        }
      </div>
    )
}

export default NoDataTemplate;