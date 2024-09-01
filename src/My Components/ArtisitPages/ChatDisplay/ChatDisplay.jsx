import "./chatDisplay.css";
import ChatViewSection from "./ChatViewSection";
import ChatInboxSection from "./ChatInboxSection";
import { setChatUser } from "../../../reducer/slices/chatSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCurrentChat } from "../../../reducer/slices/chatSlice";
import Artist_navbar from "../Artist_navbar";

function ChatDisplay() {
  const dispatch = useDispatch();

  const { currentChat } = useSelector((state) => state.chatUsers);

  //   const [chatViewData, setChatViewData] = useState(null);

  const data = [
    {
      id: 1,
      Username: "Random1 Username",
      Event: "Dancer for Entertain the Regular Audience",
      Time: "Yesturday",
      AppliedOn: "Applied On : 06/08/23",
    },
    {
      id: 2,
      Username: "Random2 Username",
      Event: "Dancer for Entertain the Regular Audience",
      Time: "Yesturday",
      AppliedOn: "Applied On : 06/08/23",
    },
    {
      id: 3,
      Username: "Random3 Username",
      Event: "Dancer for Entertain the Regular Audience",
      Time: "Yesturday",
      AppliedOn: "Applied On : 06/08/23",
    },
    {
      id: 4,
      Username: "Random4 Username",
      Event: "Dancer for Entertain the Regular Audience",
      Time: "Yesturday",
      AppliedOn: "Applied On : 06/08/23",
    },
    {
      id: 5,
      Username: "Random5 Username",
      Event: "Dancer for Entertain the Regular Audience",
      Time: "Yesturday",
      AppliedOn: "Applied On : 06/08/23",
    },
    {
      id: 6,
      Username: "Random6 Username",
      Event: "Dancer for Entertain the Regular Audience",
      Time: "Yesturday",
      AppliedOn: "Applied On : 06/08/23",
    },
  ];

  useEffect(() => {
    dispatch(setChatUser(data));
    const isData = localStorage.getItem("currentChat");

    if (JSON.parse(isData) !== null) {
      const data = localStorage.getItem("currentChat");
      dispatch(setCurrentChat(JSON.parse(data)));
    }
  }, []);

  return (
    <>
      <Artist_navbar />
      <div className="chat_UI_wrapper">
        <ChatInboxSection

        />
        <ChatViewSection
          hideChatView={true}

        />
      </div>
    </>
  );
}

export default ChatDisplay;
