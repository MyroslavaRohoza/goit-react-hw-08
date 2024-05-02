import { useDispatch } from "react-redux";
import { RxAvatar } from "react-icons/rx";
import { Button, ConfigProvider } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import {
  MAX_CHAR_VALIDATION,
  MIN_CHAR_VALIDATION,
  MIN_PASSWORD_CHAR_VALIDATION,
} from "../../validationValues";
import { register } from "../../redux/auth/operations";

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
    .min(
      MIN_CHAR_VALIDATION,
      `At least ${MIN_PASSWORD_CHAR_VALIDATION} characters`
    )
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));

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
      <Form className={css.registrationForm}>
        <div className={css.inputFormWrapper}>
          <div className={css.inputContainer}>
            <label htmlFor={nameId} className={css.formLabel}>
              Name
            </label>
            <div className={css.InputIconContainer}>
              <RxAvatar className={css.formIcon} size={24} />
              <Field
                type="text"
                name="name"
                id={nameId}
                className={css.inputField}
              />
            </div>
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={emailId} className={css.formLabel}>
              Email
            </label>
            <div className={css.InputIconContainer}>
              <MdOutlineMailOutline className={css.formIcon} size={24} />
              <Field
                type="email"
                name="email"
                id={emailId}
                className={css.inputField}
              />
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMessage}
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={passwordId} className={css.formLabel}>
              Password
            </label>
            <div className={css.InputIconContainer}>
              <RiLockPasswordLine className={css.formIcon} size={24} />
              <Field
                type="password"
                name="password"
                id={passwordId}
                className={css.inputField}
              />
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className={css.errorMessage}
            />
          </div>
        </div>
        <div className={css.registrationBtnContainer}>
          <Button
            type="primary"
            htmlType="reset"
            className={css.resetBtn}
            danger
          >
            Clear
          </Button>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#91FF36",
              },
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </ConfigProvider>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
