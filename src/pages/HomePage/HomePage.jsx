import css from "./HomePage.module.css";
import { MdOutlineContactPhone } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Home page</h1>
      <p className={css.homePageContent}>
        <span className={css.pageInfo}>
          This app was created to save your contacts.
          <MdOutlineContactPhone size={52} className={css.phoneIcon} />
        </span>
        <br />
        Sign up or log in and try.
      </p>
    </>
  );
};

export default HomePage;
