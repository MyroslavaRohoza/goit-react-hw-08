import css from "./Contact.module.css";
import { FaPeopleArrows } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useState } from "react";

const Contact = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
    setModalIsOpen(false);
    toast.success(<span>Your contact was successfully deleted</span>);
  };
  function openModalWindow() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <li className={css.contactItem}>
      <h2>
        <FaPeopleArrows /> {contact.name}
      </h2>
      <p>
        <FaPhoneSquare /> {contact.number}
      </p>
      <button
        type="button"
        // onClick={() => onDeleteContact(contact.id)}
        onClick={openModalWindow}
        className={css.delBtn}
      >
        Delete
      </button>
      {modalIsOpen && (
        <ModalWindow
          onDeleteContact={onDeleteContact}
          closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            contact={contact}
        />
      )}
    </li>
  );
};

export default Contact;
