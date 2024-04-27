import css from "./Contact.module.css";
import { FaPeopleArrows } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";


const Contact = ({ contact}) => { 
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
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
        onClick={() => onDeleteContact(contact.id)}
        className={css.delBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
