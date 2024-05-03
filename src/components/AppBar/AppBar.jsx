import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import css from "./AppBar.module.css";
const AuthNav = lazy(() => import("../AuthNav/AuthNav"));
const Navigation = lazy(() => import("../Navigation/Navigation"));
const UserMenu = lazy(() => import("../UserMenu/UserMenu"));
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import Loader from "../Loader/Loader";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <Suspense fallback={<Loader />}>
      <nav className={css.headerNav}>
       
        <Navigation buildLinkClass={buildLinkClass} />
        <div className={css.authContainer}>
          {isLoggedIn ? (
            <UserMenu buildLinkClass={buildLinkClass} />
          ) : (
            <AuthNav buildLinkClass={buildLinkClass} />
          )}
        </div>
      </nav>
    </Suspense>
  );
};

export default AppBar;
