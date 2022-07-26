import { useState, useEffect } from "react";
import MessageCard from "../MessageCard";
import { GET } from "../../utils/api";
import "./index.css";

const MessageCardList = ({ isRenderedList, setRenderedList }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data));
  }, [isRenderedList]);

  const sortDates = (a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  };

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .sort(sortDates)
          .map((message) => (
            <MessageCard
              isRenderedList={isRenderedList}
              onDeleteBtn={setRenderedList}
              textContent={message}
              key={message.id}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
