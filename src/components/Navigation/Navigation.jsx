import { NavLink } from "react-router-dom";
const Navigation = ({buildLinkClass}) => {
  return <NavLink to="/" className={buildLinkClass}>Home</NavLink>;
};
export default Navigation;
