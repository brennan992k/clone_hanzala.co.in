import * as React from "react";
import { Link } from "react-scroll";
import Video from "./video";

const Header = () => {
  return (
    <>
      <header id="header" className="header h-screen">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1 className="h1-large fw_bold">
                  I love to create beautiful and efficient websites
                </h1>
                <Link className="btn-solid-lg" to="about" role="button">
                  Discover
                </Link>
                <Link className="btn-outline-lg" to="contact" role="button">
                  <i className="fas fa-user"> </i>Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Video />
    </>
  );
};

export default Header;
