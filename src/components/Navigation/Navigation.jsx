import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
const Navigation = ({buildLinkClass}) => {
  return <NavLink to="/" className={buildLinkClass}>Home</NavLink>;
};
export default Navigation;
