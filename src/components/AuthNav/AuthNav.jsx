import { NavLink } from "react-router-dom";

const AuthNav = ({buildLinkClass}) => {
  return (
    <>
      <NavLink to="/register" className={buildLinkClass}>Sign up</NavLink>
      <NavLink to="/login" className={buildLinkClass}>Log in</NavLink>
    </>
  );
};

export default AuthNav;
