import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import {
  MAX_CHAR_VALIDATION,
  MIN_CHAR_VALIDATION,
} from "../../validationValues";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
  password: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
});
const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };
  const FormInitialValues = {
    email: "",
    password: "",
  };
  const emailId = useId();
  const passwordId = useId();
  return (
    <Formik
      initialValues={FormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" />
        <label htmlFor={passwordId}>Password</label>
        <Field type="text" name="password" id={passwordId} />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
