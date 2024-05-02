import { useDispatch } from "react-redux";
import { Button, ConfigProvider } from "antd";
import { TinyColor } from '@ctrl/tinycolor';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { MAX_CHAR_VALIDATION } from "../../components/../validationValues.js";
import { MIN_CHAR_VALIDATION } from "../../components/../validationValues.js";
import { addContact } from "../../redux/contacts/operations.js";
import toast from "react-hot-toast";

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
const colors1 = ['#a436ff', '#3f36ff'];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());
const ContactForm = () => {
  
  const dispatch = useDispatch();
  function onAddContact(formContact) {
    const finalFormContact = {
      ...formContact,
    };
    dispatch(addContact(finalFormContact));
    toast.success(<span>Your contact was successfully added.</span>);
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
        <div className={css.inputFormWrapper}>
          <div className={css.inputContainer}>
            <label htmlFor={nameId} className={css.formLabel}>
              Name
            </label>
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
          </div> 
          <div className={css.inputContainer}>
            <label htmlFor={nameId} className={css.formLabel}>
              Number
            </label>
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
          </div>
        </div>
        <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button type="primary" htmlType="submit" className={css.addContactBtn}>
       Add contact
      </Button>
    </ConfigProvider>
      </Form>
    </Formik>
  );
};

export default ContactForm;
