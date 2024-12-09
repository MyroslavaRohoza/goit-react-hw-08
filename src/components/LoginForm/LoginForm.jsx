import { useDispatch } from "react-redux";
import { Button, ConfigProvider } from "antd";
import css from "./LoginForm.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import {
  MAX_CHAR_VALIDATION,
  MIN_CHAR_VALIDATION,
  MIN_PASSWORD_CHAR_VALIDATION,
} from "../../validationValues";
import { login } from "../../redux/auth/operations";

const logInUserSchema = Yup.object().shape({
  email: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
  password: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(
      MAX_CHAR_VALIDATION,
      `Up to ${MIN_PASSWORD_CHAR_VALIDATION} characters`
    )
    .required("Required!"),
});
const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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
      validationSchema={logInUserSchema}
    >
      <Form className={"form"}>
        <div className={css.inputFormWrapper}>
          <div className={css.inputContainer}>
            <label htmlFor={emailId} className={css.formLabel}>
              Email
            </label>
            <div className={"InputIconContainer"}>
              <MdOutlineMailOutline className={`formIcon`} size={26} />
              <Field
                type="email"
                name="email"
                id={emailId}
                className={"inputField"}
              />
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className={'errorMessage'}
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={passwordId}>Password</label>
            <div className={"InputIconContainer"}>
              <RiLockPasswordLine className={`formIcon`} size={26} />
              <Field
                type="password"
                name="password"
                id={passwordId}
                className={"inputField"}
              />
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className={'errorMessage'}
            />
          </div>
        </div>
        <div className={css.logInBtnContainer}>
          <Button
            type="primary"
            htmlType="reset"
            size="large"
            className={css.resetBtn}
            ghost
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
            <Button type="primary" htmlType="submit" size="large" ghost>
              Sign up
            </Button>
          </ConfigProvider>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
