import { useDispatch} from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { MAX_CHAR_VALIDATION } from "../../components/../validationValues.js";
import { MIN_CHAR_VALIDATION } from "../../components/../validationValues.js";
import { addContact } from "../../redux/contacts/operations.js";


const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
  number: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
});
const ContactForm = () => {
  const dispatch = useDispatch();
  function onAddContact(formContact) {
    const finalFormContact = {
      ...formContact,
    };
    dispatch(addContact(finalFormContact));
  }

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  const FormInitialValues = {
    name: "",
    number: "",
  };
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={FormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameId}
          className={css.contactInput}
        />
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />
        <label htmlFor={numberId}>Number</label>
        <Field
          type="text"
          name="number"
          id={numberId}
          className={css.contactInput}
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />
        <button type="submit" className={css.AddContactBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
