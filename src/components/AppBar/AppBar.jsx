import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import clsx from "clsx";


const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.headerNav}>
      <Navigation buildLinkClass={buildLinkClass}/>
      <div className={css.authContainer}>{isLoggedIn ? <UserMenu buildLinkClass={buildLinkClass}/> : <AuthNav buildLinkClass={buildLinkClass}/>}</div>
    </nav>
  );
};

export default AppBar;

