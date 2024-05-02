import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserName } from "../../redux/auth/selectors";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { logout } from "../../redux/auth/operations";

const UserMenu = ({buildLinkClass}) => {
  const dispatch = useDispatch();

  function onBtnClick(){
      dispatch(logout())
  }

  const userName = useSelector(selectUserName);
  return (
    <>
      <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>
      <div>
        <p>Welcome, {userName}</p>
       <LogOutBtn onBtnClick={onBtnClick}/>
      </div>
    </>
  );
};

export default UserMenu;
