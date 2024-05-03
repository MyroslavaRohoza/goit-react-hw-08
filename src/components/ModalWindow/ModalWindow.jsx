import Modal from "react-modal";
import { Button, ConfigProvider } from "antd";
import css from "./ModalWindow.module.css";
const ModalWindow = ({ onDeleteContact, closeModal, modalIsOpen, contact }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={css.contentStyle}
      style={{
        overlay: {
          backgroundColor: "rgba(35, 31, 31, 0.8)",
        },
      }}
    >
      <div className={css.modacontantContainer}>
        <p className={css.modalText}>
          You definitely want to delete contact <span className={css.contactNameAccent}>{contact.name}</span>?        
        </p>
        <div className={css.modalBtnContainer}>
      <Button
            type="primary"
            htmlType="button"
            onClick={() => onDeleteContact(contact.id)}
            size="large"
            danger
          >
          Yes
          </Button>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#91FF36",
              },
            }}
          >
            <Button type="primary" htmlType="button" onClick={closeModal} size="large">
           No
            </Button>
          </ConfigProvider>
          </div>
          </div>
    </Modal>
  );
};

export default ModalWindow;
