import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Styled MUI Components
import { Box, Typography } from "@mui/material";

const WorkWithMe = () => {
  return (
    <>
      <Box className="split">
        <Box className="area-1"> </Box>
        <Box className="area-2 bg-gray">
          <Box className="container">
            <Box className="row">
              <Box className="col-lg-12">
                <Box className="text-container">
                  <Typography className="fw_bold" variant="h4" color="black">
                    Why Work With Me
                  </Typography>
                  <p>
                    I am a great communicator and love to invest the necessary
                    time to understand the customer 's problem very well
                  </p>
                  <Typography variant="h6" color="black" className="fw_bold">
                    DESIGN TOOLS
                  </Typography>
                  <p>
                    My favorite design tools are Photoshop and Figma but I can
                    create designs in Illustrator, and Adobe XD as well
                  </p>
                  <div className="icons-container my-3">
                    <StaticImage
                      src="../assets/images/icons/details-icon-figma.png"
                      alt="alternative"
                      placeholder="alternative"
                      className="img-fluid rounded icon shadow-lg"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-photoshop.png"
                      alt="alternative"
                      placeholder="alternative"
                      className="img-fluid rounded icon shadow-lg"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-illustrator.png"
                      alt="alternative"
                      placeholder="alternative"
                      className="img-fluid rounded icon shadow-lg"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-adobe.png"
                      alt="alternative"
                      placeholder="alternative"
                      className="img-fluid rounded icon shadow-lg"
                      quality={100}
                    />
                  </div>
                  <Typography variant="h5" color="black" className="fw_bold">
                    DEVELOPMENT SKILLS
                  </Typography>
                  <p>
                    I am familiar and work on a daily basis with JavaScript,
                    React, Gatsby, React native, Node and other modern
                    frameworks
                  </p>
                  <Box className="icons-container my-3">
                    <StaticImage
                      src="../assets/images/icons/details-icon-javascript.png"
                      alt="alternative"
                      placeholder="alternative"
                      className="img-fluid rounded icon"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-react.png"
                      alt="alternative"
                      className="img-fluid rounded icon"
                      placeholder="alternative"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-gatsby.png"
                      alt="alternative"
                      className="img-fluid rounded icon"
                      placeholder="alternative"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-node.png"
                      alt="alternative"
                      className="img-fluid rounded icon"
                      placeholder="alternative"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-mongodb.png"
                      alt="alternative"
                      className="img-fluid rounded icon"
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-html.png"
                      alt="alternative"
                      className="img-fluid rounded icon"
                      placeholder="alternative"
                      quality={100}
                    />
                    <StaticImage
                      src="../assets/images/icons/details-icon-css.png"
                      alt="alternative"
                      className="img-fluid rounded icon"
                      placeholder="alternative"
                      quality={100}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WorkWithMe;
