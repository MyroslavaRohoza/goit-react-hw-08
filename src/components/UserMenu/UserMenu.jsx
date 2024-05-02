import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { NavLink } from "react-router-dom";
import { selectUserName } from "../../redux/auth/selectors";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { logout } from "../../redux/auth/operations";

const UserMenu = ({ buildLinkClass }) => {
  const dispatch = useDispatch();

  function onBtnClick() {
    dispatch(logout());
  }

  const userName = useSelector(selectUserName);
  return (
    <>
      <div className={css.userMenuInfo}>
        <p>Welcome, {userName}</p>
     
      <NavLink to="/contacts" className={buildLinkClass}>
        Contacts
      </NavLink>
 </div>
      <LogOutBtn onBtnClick={onBtnClick} />
    </>
  );
};

export default UserMenu;
