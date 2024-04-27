import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
