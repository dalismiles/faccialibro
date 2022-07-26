import Button from "../Button";

import "./index.css";

const Modal = (Yes, isModalVisible, setIsModalVisible, deleteFn) => {
  return (
    isModalVisible && (
      <div className="Modal">
        <h3> Sicuro di voler cancellare il messaggio? </h3>
        <div className="Modal__buttons">
          <Button
            onClick={() => {
              isModalVisible(false);
            }}
            textContent="Si"
            color="lightseagreen"
            handler={Yes}
          />
          <Button
            onClick={() => {
              isModalVisible(true);
              deleteFn();
            }}
            textContent="No"
            color="lightcoral"
            handler={() => setIsModalVisible(false)}
          />
        </div>
      </div>
    )
  );
};

export default Modal;
