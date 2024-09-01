import "./applicationButton.css"

function ApplicationButton({text , background_flag=false , onclick , className , type}){
    return (
        <button type={type} onClick={onclick} className={`appli_button ${background_flag && 'appli_button_background'} ${className} `}>{text}</button>
    )
}

export default ApplicationButton;

