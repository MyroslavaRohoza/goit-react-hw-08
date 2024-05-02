import Modal from "react-modal";
import css from './ModalWindow.module.css'
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
      <div>
        <p>You definitely want to delete that contact?</p>
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          Yes
        </button>
        <button type="button" onClick={closeModal}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
