import React from "react";

const Logo = () => {
  return (
    <img
      src={require("../../assets/logo.png")}
      alt="logo"
      width={67}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Logo;
