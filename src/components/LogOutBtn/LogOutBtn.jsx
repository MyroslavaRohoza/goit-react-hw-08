import { useDispatch } from "react-redux";

const LogOutBtn = ({onBtnClick}) => {
  
  return <button type="button" onClick={onBtnClick}>Log out</button>;
};

export default LogOutBtn;
