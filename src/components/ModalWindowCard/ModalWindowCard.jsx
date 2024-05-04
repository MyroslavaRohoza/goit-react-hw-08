import Modal from "react-modal";
import css from "./ModalWindowCard.module.css";
import { Button, ConfigProvider } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MAX_CHAR_VALIDATION } from "../../components/../validationValues.js";
import { MIN_CHAR_VALIDATION } from "../../components/../validationValues.js";
import { useId } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations.js";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`),
  number: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`),
});
const ModalWindowCard = ({
  onUpdateContact,
  closeModal,
  modalIsOpen,
  contact,
}) => {
  const dispatch = useDispatch();
  function onUpdateContact(newFormContact) {
    dispatch(updateContact(newFormContact));
    toast.success(<span>Your contact was successfully update.</span>);
  }

  const handleSubmit = (values, actions) => {
    if (values.name === "" || values.number === "") return;
    onUpdateContact({ ...values, id: contact.id });
    actions.resetForm();
  };
  const FormInitialValues = {
    name: "",
    number: "",
  };
  const nameId = useId();
  const numberId = useId();
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
      <div className={css.modalUpdateContact}>
        <Formik
          initialValues={FormInitialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.updateContactForm}>
            <div className={css.inputFormWrapper}>
              <div className={css.inputInfoContainer}>
                <div className={css.inputContainer}>
                  <label htmlFor={nameId} className={css.formLabelName}>
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id={nameId}
                    className={css.contactInput + " " + css.contactInputName}
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.errorMessage}
                  />
                </div>
                <div className={css.inputContainer}>
                  <label htmlFor={nameId} className={css.formLabelNumber}>
                    Number
                  </label>
                  <Field
                    type="text"
                    name="number"
                    id={numberId}
                    className={css.contactInput + " " + css.contactInputNumber}
                  />
                  <ErrorMessage
                    name="number"
                    component="span"
                    className={css.errorMessage}
                  />
                </div>
              </div>
              <div className={css.modalBtnContainer}>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#91FF36",
                    },
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="button"
                    danger
                    onClick={closeModal}
                    size="large"
                  >
                    Exit
                  </Button>
                  <Button type="primary" htmlType="submit" size="large">
                    Save
                  </Button>
                </ConfigProvider>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};
export default ModalWindowCard;
