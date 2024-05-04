import { Card, ConfigProvider } from "antd";
import { Button } from "antd";
import css from "./Contact.module.css";
import { FaPhoneSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useState } from "react";
import ModalWindowCard from "../ModalWindowCard/ModalWindowCard";

const Contact = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
    setModalIsOpen(false);
    toast.success(<span>Your contact was successfully deleted.</span>);
  };
  function openModalWindow(modalType) {
    setModalIsOpen(true);
    setModalType(modalType);
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
          <div className={css.cardBtnContainer}>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => openModalWindow("delete")}
            className={css.deleteBtn}
            danger
            ghost
          >
            Delete
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => openModalWindow("edit")}
            className={css.deleteBtn}
            ghost
          >
            Edit
          </Button></div>
        </Card>
      </ConfigProvider>
      {modalIsOpen && modalType === "delete" && (
        <ModalWindow
          onDeleteContact={onDeleteContact}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          contact={contact}
        />
      )}
      {modalIsOpen && modalType === "edit" && (
        <ModalWindowCard
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          contact={contact}
        />
      )}
    </li>
  );
};

export default Contact;
