import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yash-mistry-b33600112" target="#">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ymistry11" target="#">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
