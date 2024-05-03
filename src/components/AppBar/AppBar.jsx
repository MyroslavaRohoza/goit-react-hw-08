import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
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
  );
};

export default AppBar;
