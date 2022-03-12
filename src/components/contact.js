import * as React from "react";

// Styled MUI Components
import { Box, Typography, TextField } from "@mui/material";

const Contact = ({ setProgress, setOpen, setMessage }) => {
  const [mail, setMail] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setMail({
      ...mail,
      [name]: value,
    });
  };

  const handleSendMail = async (e) => {
    setProgress(true);
    e.preventDefault();
    const response = await fetch(`${process.env.GATSBY_API_URL}/sendmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    });
    const data = await response.json();
    setProgress(false);
    setOpen(true);
    setMessage(data.message);
    setMail({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      setOpen(false);
    }, 6000);
  };

  return (
    <Box id="contact" className="form-1 bg-gray w-100">
      <Box className="container">
        <Box className="row">
          <Box className="col-lg-12">
            <Typography variant="h4" color="black" className="mb-4 fw-bold">
              Contact me
            </Typography>
            <p className="p-heading">
              For any type of online project please don 't hesitate to get in
              touch with me.The fastest way is to send me your message using the
              following email
              <a
                className="blue no-line"
                href="mailto:justhanzala786@gmail.com"
              >
                justhanzala786 @gmail.com
              </a>
            </p>
          </Box>
        </Box>
        <Box className="row">
          <Box className="col-lg-12">
            <Box component="form" onSubmit={handleSendMail}>
              <Box className="d-flex w-100">
                <Box className="form-group w-50 me-2">
                  <TextField
                    type="text"
                    name="firstName"
                    label="First Name"
                    onChange={handleOnChange}
                    value={mail.firstName}
                    fullWidth
                    required
                  />
                </Box>
                <Box className="form-group w-50">
                  <TextField
                    type="text"
                    name="lastName"
                    label="Last Name"
                    onChange={handleOnChange}
                    value={mail.lastName}
                    fullWidth
                    required
                  />
                </Box>
              </Box>
              <Box className="form-group">
                <TextField
                  type="email"
                  name="email"
                  label="E-mail"
                  onChange={handleOnChange}
                  value={mail.email}
                  fullWidth
                  required
                />
              </Box>
              <Box className="form-group mb-3">
                <TextField
                  type="text"
                  name="message"
                  label="Message"
                  onChange={handleOnChange}
                  value={mail.message}
                  rows="5"
                  multiline
                  fullWidth
                  required
                />
              </Box>
              <Box className="form-group">
                <button type="submit" className="form-control-submit-button">
                  Submit
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
