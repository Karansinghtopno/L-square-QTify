import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <Logo />
        <Search />
        <Button text="Give Feedback" />
      </div>
    </div>
  );
};

export default Navbar;
