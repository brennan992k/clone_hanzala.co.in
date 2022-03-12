import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "react-scroll";

// Styled MUI Components
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  // Menu,
  // MenuItem,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const MobileNavbarMenu = ({ activeLink }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null)
  // const open = Boolean(anchorEl)
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  const scrollLinks = [
    {
      id: 1,
      title: "Home",
      to: "header",
    },
    {
      id: 2,
      title: "About",
      to: "about",
    },
    {
      id: 3,
      title: "Services",
      to: "services",
    },
    {
      id: 4,
      title: "Projects",
      to: "projects",
    },
  ];
  const pagesLinks = [
    {
      id: 1,
      title: "Home",
      to: "/#header",
    },
    {
      id: 2,
      title: "About",
      to: "/#about",
    },
    {
      id: 3,
      title: "Services",
      to: "/#services",
    },
    {
      id: 4,
      title: "Projects",
      to: "/#projects",
    },
  ];

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List className="w-100 px-4 text-center">
          
          {typeof window !== "undefined" && window.location.pathname === "/" ? (
            <>
              
              {scrollLinks.map((link) => (
                <Link
                  to={link.to}
                  className="text-decoration-none"
                  key={link.id}
                  spy
                  activeClass="active"
                >
                  <ListItem
                    className="text-center rounded"
                    onClick={() => setOpenDrawer(false)}
                    button
                    sx={{
                      bgcolor: activeLink === link.to ? blueGrey[900] : "white",
                    }}
                  >
                    <ListItemText
                      className={`text-${
                        activeLink === link.to ? "white" : "dark"
                      } text-center nav-links`}
                    >
                      {link.title}
                    </ListItemText>
                  </ListItem>
                </Link>
              ))}
              <Link
                to="contact"
                className="text-decoration-none"
                spy
                activeClass="active"
              >
                <ListItem
                  className="text-center rounded"
                  onClick={() => setOpenDrawer(false)}
                  button
                  sx={{
                    bgcolor: activeLink === "contact" ? blueGrey[900] : "white",
                  }}
                >
                  <ListItemText
                    className={`text-${
                      activeLink === "contact" ? "white" : "dark"
                    } text-center nav-links`}
                  >
                    Contact
                  </ListItemText>
                </ListItem>
              </Link>
              <a
                className="btn-solid-reg mt-2"
                target="__blank"
                href="https://meetings.hubspot.com/hanzala"
                role="button"
              >
                Consultation Call
              </a>
            </>
          ) : (
            <>
              
              {pagesLinks.map((link) => (
                <GatsbyLink
                  to={link.to}
                  className="text-decoration-none"
                  key={link.id}
                >
                  <ListItem
                    className="text-center rounded"
                    onClick={() => setOpenDrawer(false)}
                    button
                    sx={{
                      bgcolor: activeLink === link.to ? blueGrey[900] : "white",
                    }}
                  >
                    <ListItemText
                      className={`text-${
                        activeLink === link.to ? "white" : "dark"
                      } nav-links`}
                    >
                      {link.title}
                    </ListItemText>
                  </ListItem>
                </GatsbyLink>
              ))}
              <GatsbyLink to="/#contact" className="text-decoration-none">
                <ListItem
                  className="text-center rounded"
                  onClick={() => setOpenDrawer(false)}
                  button
                >
                  <ListItemText className={`text-dark text-center`}>
                    Contact
                  </ListItemText>
                </ListItem>
              </GatsbyLink>
            </>
          )}
          {/* <ListItem
                        className="text-center rounded"
                        onClick={handleClick}
                        role="button"
                      >
                        <ListItemText>Statements</ListItemText>
                      </ListItem> */}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className="text-white"
      >
        <i className="fas fa-bars"> </i>
      </IconButton>
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
export default MobileNavbarMenu;
