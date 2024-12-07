import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main className={css.main}>{children}</main>
    </>
  );
};

export default Layout;
