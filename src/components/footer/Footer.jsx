import React from "react";
import "./footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <button className="btn btn-primary footer-btn">
          <a
            href="https://www.linkedin.com/in/yash-mistry-b33600112"
            target="#"
          >
            <BsLinkedin />
            <h4>LinkedIn</h4>
          </a>
        </button>

        <button className="btn btn-primary footer-btn">
          <a href="https://github.com/ymistry11" target="#">
            <BsGithub />
            <h4>GitHub</h4>
          </a>
        </button>
      </div>

      <div className="footer_copyright">
        <small>&copy; Yash Mistry All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
