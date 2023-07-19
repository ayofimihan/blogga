import MainNavigation from "./main-navigation";
import { ClerkProvider } from "@clerk/nextjs";

const Layout = (props) => {
  return (
    <>
      <ClerkProvider>
        {" "}
        <MainNavigation />
        {props.children}
      </ClerkProvider>
    </>
  );
};

export default Layout;
