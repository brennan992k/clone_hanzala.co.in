import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "react-scroll";

// Components
import MobileNavbarMenu from "./mobileNavbarMenu";

// Styled MUI Components
// import { Menu, MenuItem } from "@mui/material"

const Nav = ({ activeLink }) => {
  // const [anchorEl, setAnchorEl] = React.useState(null)
  const [isMobileView, setIsMobileView] = React.useState(false);

  // const open = Boolean(anchorEl)
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  if (typeof window !== "undefined") {
    if (window.innerWidth > 992) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 60) {
          document.getElementById("navbar").classList.add("top-nav-collapse");
          document.getElementById("navbar").classList.remove("pt-4");
        } else {
          document
            .getElementById("navbar")
            .classList.remove("top-nav-collapse");
          document.getElementById("navbar").classList.add("pt-4");
        }
      });
    }
  }

  React.useEffect(() => {
    typeof window !== "undefined" && setIsMobileView(window.innerWidth < 992);
  }, [isMobileView]);

  return (
    <>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg fixed-top navbar-dark ${
          isMobileView ? "pt-2" : "pt-4"
        }`}
      >
        <div className="container">
          <GatsbyLink
            className="navbar-brand logo-image text-light my-3"
            to="/"
            role="button"
          ></GatsbyLink>
          <div className="navbar-toggler p-0 border-0">
            <MobileNavbarMenu activeLink={activeLink} />
            <span className="social-icons ms-2">
              <span className="fa-stack">
                <a
                  href="https://www.linkedin.com/in/hanzala-/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-circle fa-stack-2x"> </i>
                  <i className="fab fa-linkedin fa-stack-1x"> </i>
                </a>
              </span>
              <span className="fa-stack">
                <a
                  href="https://twitter.com/justhanzala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-circle fa-stack-2x"> </i>
                  <i className="fab fa-twitter fa-stack-1x"> </i>
                </a>
              </span>
            </span>
          </div>
          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link fs-6"
                  to="header"
                  activeClass="active"
                  spy
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-6"
                  to="about"
                  activeClass="active"
                  spy
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-6"
                  to="services"
                  activeClass="active"
                  spy
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-6"
                  to="projects"
                  activeClass="active"
                  spy
                >
                  Projects
                </Link>
              </li>
              {/* <div className="nav-item dropdown">
                            <span
                              className="nav-link dropdown-toggle"
                              onClick={handleClick}
                              onKeyPress={() => null}
                              aria-hidden="true"
                            >
                              Statements
                            </span>
                          </div> */}
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link fs-6"
                  activeClass="active"
                  spy
                >
                  Contact
                </Link>
              </li>
            </ul>
            <span className="social-icons">
              <span className="fa-stack">
                <a
                  href="https://www.linkedin.com/in/hanzala-/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-circle fa-stack-2x"> </i>
                  <i className="fab fa-linkedin fa-stack-1x"> </i>
                </a>
              </span>
              <span className="fa-stack">
                <a
                  href="https://twitter.com/justhanzala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-circle fa-stack-2x"> </i>
                  <i className="fab fa-twitter fa-stack-1x"> </i>
                </a>
              </span>
            </span>
            &nbsp;&nbsp;&nbsp;
            <a
              className="btn-solid-reg"
              target="__blank"
              href="https://meetings.hubspot.com/hanzala"
              role="button"
            >
              Consultation Call
            </a>
          </div>
        </div>
      </nav>
      {/* Dropdown */}
      {/* <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <GatsbyLink
                      className="text-decoration-none text-dark"
                      to="/project-details"
                    >
                      <MenuItem onClick={handleClose}>Project Details</MenuItem>
                    </GatsbyLink>
                    <GatsbyLink
                      className="text-decoration-none text-dark"
                      to="/terms-and-conditions"
                    >
                      <MenuItem onClick={handleClose}>Terms Conditions</MenuItem>
                    </GatsbyLink>
                    <GatsbyLink
                      className="text-decoration-none text-dark"
                      to="/privacy-policy"
                    >
                      <MenuItem onClick={handleClose}>Privacy Policy</MenuItem>
                    </GatsbyLink>
                  </Menu> */}
    </>
  );
};

export default Nav;
