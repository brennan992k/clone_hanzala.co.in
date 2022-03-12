import * as React from "react";

// Styled MUI Components
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box id="about" className="basic-1 bg-gray">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-4">
              <Box className="text-container first">
                <Typography
                  variant="h4"
                  color="black"
                  className="h2-heading fw_bold"
                >
                  Hi there I 'm Hanzala,
                </Typography>
                <p>
                  And I love to create beautiful and efficient websites for my
                  customers.I love going through the entire process with the
                  customer from concept, to design and then development and
                  launch
                </p>
              </Box>
            </Box>
            <Box className="col-lg-4">
              <Box className="text-container second">
                <div className="time"> 2021 - PRESENT </div>
                <h4 className="text-dark fw-bold">
                  Full - Stack Software Developer
                </h4>
                <p> Working happily on my own web projects </p>
                <div className="time"> 2020 - 2021 </div>
                <h4 className="text-dark fw-bold"> Lead Web Developer </h4>
                <p> Beautiful project for a major digital agency </p>
              </Box>
            </Box>
            <Box className="col-lg-4">
              <Box className="text-container third">
                <div className="time"> 2020 - 2021 </div>
                <h4 className="text-dark fw-bold"> Web Developer </h4>
                <p> Web developer for web agency </p>
                <div className="time"> 2019 - 2020 </div>
                <h4 className="text-dark fw-bold"> Junior Developer </h4>
                <p> Junior web Developer for small web agency </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
