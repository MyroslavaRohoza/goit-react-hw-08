import css from './LogOutBtn.module.css';
const LogOutBtn = ({onBtnClick}) => {
  return <button type="button" onClick={onBtnClick} className={css.logOutBtn}>Log out</button>;
};

export default LogOutBtn;
