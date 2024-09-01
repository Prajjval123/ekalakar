import "./chatViewSection.css";
import sendBtn from "./assets/sendBtn.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCurrentChat } from "../../../reducer/slices/chatSlice";
import { useDispatch } from "react-redux";

function ChatViewSection({hideChatView=false , showViewChat=false} ) {

    const {chatUser , currentChat} = useSelector((state)=>state.chatUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // these two useEffect is for navigating the page to /chatApp when screen size is greater than 750px
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(`width:`, screenWidth);

    if (screenWidth > 750) {
      console.log("inside if navigate");
      navigate('/chatApp');
    }
  }, [navigate, screenWidth]);


  // this is to set the setCurrentChat 
    useEffect(()=>{
     const newChat = chatUser?.find((chat)=> chat.id == id);
      dispatch(setCurrentChat(newChat));
    },[id])

  return currentChat == null ? (
    <div className={`chatView_noData_wrapper ${hideChatView && 'hideChatView'} ${showViewChat && 'hideViewChat showViewChat_wrapper'}`}>
      <div >
        Send and receive message , with end-to-end encrypted
      </div>
    </div>
  ) : (
    <div className={`chatView_wrapper ${hideChatView && 'hideChatView'} ${showViewChat && 'hideViewChat phone_view_chat_wrapper'} `}>
      <header>
        {/* for name and time */}
        <div className={`name_time_wrapper ${showViewChat && "phn_view_nameTime_wrapper"} `}>
          <p className={`chatView_Username ${showViewChat && "phn_view_userName"}`}>{currentChat.Username}</p>
          <p className={`chatView_AppliedOn ${showViewChat && "phn_view_appliedOn"} `}>{currentChat.AppliedOn}</p>
        </div>
        <div className={`event_viewDetail_wrapper`}>
          <p className={`eventDetail_text ${showViewChat && "phn_view_event"} `}>{currentChat.Event}</p>
          <button className={`view_detail_btn ${showViewChat && "phn_view_detail_btn"} `}>View Details</button>
        </div>
      </header>

      {/* all chats  */}
      <main className="users_chats"></main>

      <footer>
        <input
          type="text"
          placeholder="Write your message here"
          className={`chatView_input`}
        />
        {/* image */}
        <div className={`sendBtn_wrapper`}>
          <img src={sendBtn} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default ChatViewSection;
