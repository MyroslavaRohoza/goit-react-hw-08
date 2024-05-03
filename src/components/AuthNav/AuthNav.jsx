import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
const AuthNav = ({buildLinkClass}) => {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={buildLinkClass}>Sign up</NavLink>
      <NavLink to="/login" className={buildLinkClass}>Log in</NavLink>
    </div>
  );
};

export default AuthNav;
