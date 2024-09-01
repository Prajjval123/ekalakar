import { useSelector } from "react-redux";
import "./chatInboxSection.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setCurrentChat} from "../../../reducer/slices/chatSlice";
import { useDispatch } from "react-redux";
import man from "./assets/man.svg"

function ChatInboxSection() {
  const navigate = useNavigate();
  const { chatUser, currentChat } = useSelector((state) => state.chatUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentChat) {
      localStorage.setItem("currentChat", JSON.stringify(currentChat));
    }
  }, [currentChat]);

  function checkAndAction(user) {
    if (window.innerWidth > 750) {
        console.log("indisd");
      dispatch(setCurrentChat(user));
    } else {
      navigate(`/viewChat/${user.id}`);
    }
  }

  return (
    <div className="chatInbox_wrapper">
      <p className="inbox_text">Inbox</p>
      <div className="all_inbox_users">
        {chatUser?.map((user, index) => (
          <div
            key={index}
            onClick={() => checkAndAction(user)}
            className="single_user_inbox"
          >
            <p className="chat_inbox_time">{user.Time}</p>
            {/*image and name   */}
            <header>
              {/* image */}
              <div className="user_inbox_image"> <img src={man} alt="" className="userimg" /> </div>
              <p className="chat_inbox_userName">{user.Username}</p>
              {/* <p className="chat_inbox_time">{user.Time}</p> */}
            </header>
            <p className="chat_inbox_event">{user.Event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatInboxSection;
