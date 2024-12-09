import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import AuthNav from "../AuthNav/AuthNav";
import { Header } from "antd/es/layout/layout";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <Header
      style={{ backgroundColor: "#203175", color: "#fff" }}
      className={css.header}
    >
      <nav className={css.headerNav}>
        <Navigation buildLinkClass={buildLinkClass} />
        <div className={css.authContainer}>
          {isLoggedIn ? (
            <UserMenu buildLinkClass={buildLinkClass} />
          ) : (
            <AuthNav buildLinkClass={buildLinkClass} />
          )}
        </div>
      </nav>
    </Header>
  );
};

export default AppBar;
