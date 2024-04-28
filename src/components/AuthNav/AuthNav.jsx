import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </>
  );
};

export default AuthNav;
