import * as React from "react";

// Styled MUI Components
import { Box, Typography } from "@mui/material";

const Services = () => {
  return (
    <>
      <Box id="services" className="basic-2 bg-white">
        <Box className="container">
          <Box className="row">
            <div className="col-lg-12">
              <Typography
                variant="h4"
                color="black"
                className="text-center mb-3 fw_bold"
              >
                Offered services
              </Typography>
              <p className="p-heading">
                Web design and development have been my bread and butter for
                more than 3 years.During that time I 've discovered that I can
                help startups and companies with the following services
              </p>
            </div>
          </Box>
          <Box className="row">
            <Box className="col-lg-4">
              <div className="text-box bg-light rounded-3 text-center shadow">
                <div className="icon">
                  <i className="far fa-gem"> </i>
                </div>
                <Typography
                  variant="h5"
                  color="black"
                  sx={{
                    fontWeight: "bold",
                  }}
                  className="mb-3"
                >
                  DESIGN
                </Typography>
                <p>
                  Successful online projects start with good design.It
                  establishes a solid foundation for future development and
                  allows for long term growth
                </p>
              </div>
            </Box>
            <Box className="col-lg-4">
              <div className="text-box bg-light rounded-3 text-center shadow">
                <div className="icon">
                  <i className="fas fa-code"> </i>
                </div>
                <Typography
                  variant="h5"
                  color="black"
                  sx={{
                    fontWeight: "bold",
                  }}
                  className="mb-3"
                >
                  DEVELOPMENT
                </Typography>
                <p>
                  I can code my own designs or even use the customer 's design
                  as base.My focus is to generate clean code that 's well
                  structured for reliability
                </p>
              </div>
            </Box>
            <Box className="col-lg-4">
              <div className="text-box bg-light rounded-3 text-center shadow">
                <div className="icon">
                  <i className="fas fa-tv"> </i>
                </div>
                <Typography
                  variant="h5"
                  color="black"
                  sx={{
                    fontWeight: "bold",
                  }}
                  className="mb-3"
                >
                  BASIC SEO
                </Typography>
                <p>
                  I can setup your project to use basic SEO principles which
                  will push your project to the first page on search engines and
                  save you ads money
                </p>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Services;
