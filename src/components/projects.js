import * as React from "react";
import Works from "../components/works";

// Styled MUI ComponentsÌ
import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <>
      <Box id="projects" className="basic-3 bg-white">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-12">
              <Typography
                className="text-center mb-3 fw-bold"
                variant="h4"
                color="black"
              >
                Delivered projects
              </Typography>
              <p className="p-heading">
                Listed below are some of the most representative projects I 've
                worked on.They range from basic web design for presentation
                sites to advanced web development for companies.
              </p>
            </Box>
          </Box>
          <Works />
        </Box>
      </Box>
    </>
  );
};

export default Projects;
