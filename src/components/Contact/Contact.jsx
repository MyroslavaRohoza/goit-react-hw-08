import { Card, ConfigProvider } from "antd";
import { Button } from "antd";
import css from "./Contact.module.css";
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
    toast.success(<span>Your contact was successfully deleted.</span>);
  };
  function openModalWindow() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <li className={css.contactItem}>
      <ConfigProvider
        theme={{
          token: {
            colorTextHeading: "#3f36ff",
            fontSize: 16,
          },  
        }}
      >
        <Card title={contact.name} bordered={false} className={css.card}>
          <div className={css.contactNumInfoContainer}>
            <FaPhoneSquare className={css.contactNumInfo} />
            <p className={css.contactNumInfo}>{contact.number}</p>
          </div>
          <Button
            type="primary"
            htmlType="button"
            onClick={openModalWindow}
            className={css.deleteBtn}
            danger
            ghost
          >
            Delete
          </Button>
        </Card>
      </ConfigProvider>
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
