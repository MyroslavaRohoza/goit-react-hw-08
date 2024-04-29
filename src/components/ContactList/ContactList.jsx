import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.ContactList}>
      {Array.isArray(filteredContacts) && filteredContacts.length === 0 && (
        <li>Please, add your contacts</li>
      )}
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
