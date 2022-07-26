import { DELETE } from "../../utils/api";
import { useState } from "react";
import Modal from "../Modal";
import "./index.css";

const MessageCard = ({ textContent, isRenderedList, onDeleteBtn }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onBtnClick = () => {
    DELETE("messages", textContent.id).then(() => onDeleteBtn(!isRenderedList));
  };

  return (
    <div className="MessageCard">
      <button onClick={onBtnClick} className="MessageCard__delete">
        X
      </button>
      <p className="MessageCard__text">{textContent.text}</p>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">{textContent.sender}</p>
        <p className="MessageCard__info--date">{textContent.date}</p>
      </div>
      {isModalVisible && (
        <Modal deleteFn={onBtnClick} setIsModalVisible={setIsModalVisible} />
      )}
    </div>
  );
};

export default MessageCard;
