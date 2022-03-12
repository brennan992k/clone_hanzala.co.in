import * as React from "react";
import { Link } from "gatsby";

// Component
import MobileNavbarMenu from "./mobileNavbarMenu";

const NavRoute = ({ activeLink }) => {
  const [isMobileView, setIsMobileView] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null)
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
          <Link
            className="navbar-brand logo-image my-3"
            to="/"
            role="button"
          ></Link>
          <div
            className="navbar-toggler p-0 border-0"
            type="button"
            data-toggle="offcanvas"
          >
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
                <Link className="nav-link fs-6" to="/#header">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" to="/#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" to="/#services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" to="/#projects">
                  Projects
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                            <span
                              className="nav-link dropdown-toggle"
                              onClick={handleClick}
                              onKeyPress={() => null}
                              aria-hidden="true"
                            >
                              Statements
                            </span>
                          </li> */}
              <li className="nav-item">
                <Link className="nav-link fs-6" to="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
            <span className="nav-item social-icons">
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
                    <Link className="text-decoration-none text-dark" to="/project-details">
                      <MenuItem onClick={handleClose}>Project Details</MenuItem>
                    </Link>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/terms-and-conditions"
                    >
                      <MenuItem onClick={handleClose}>Terms Conditions</MenuItem>
                    </Link>
                    <Link className="text-decoration-none text-dark" to="/privacy-policy">
                      <MenuItem onClick={handleClose}>Privacy Policy</MenuItem>
                    </Link>
                  </Menu> */}
    </>
  );
};

export default NavRoute;
