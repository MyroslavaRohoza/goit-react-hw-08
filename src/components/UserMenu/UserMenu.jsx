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
    <div className={css.userMenuContainer}>
      <span className={css.userName}>Welcome, {userName}</span>
      <div className={css.userMenuInfo}>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
        <LogOutBtn onBtnClick={onBtnClick} />
      </div>
    </div>
  );
};

export default UserMenu;
