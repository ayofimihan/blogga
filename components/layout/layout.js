import MainNavigation from "./main-navigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      {props.children}
    </>
  );
};

export default Layout;
