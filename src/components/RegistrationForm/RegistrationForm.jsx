import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import {
  MAX_CHAR_VALIDATION,
  MIN_CHAR_VALIDATION,
  MIN_PASSWORD_CHAR_VALIDATION,
} from "../../validationValues";

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
  email: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
  password: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_PASSWORD_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
});
const RegistrationForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };
  const FormInitialValues = {
    name: "",
    email: "",
    password: "",
  };
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  return (
    <Formik
      initialValues={FormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={registerUserSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" />

        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <ErrorMessage name="password" component="span" />
        
        <button type="submit">Sign up</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
