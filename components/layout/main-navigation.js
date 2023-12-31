import Link from "next/link";
import Logo from "./logo";
import styles from "./main-navigation.module.css";
import { useAuth, UserButton } from "@clerk/nextjs";

const MainNavigation = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        {" "}
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href={"/posts"}>Posts</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/contact"}>Contact</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/"}></Link>{" "}
          </li>
          {!isSignedIn && (
            <>
              <li>
                {" "}
                <Link href={"/sign-in"}>Login</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/sign-up"}>Sign-up</Link>{" "}
              </li>
            </>
          )}
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
