import * as React from "react";

// Styled MUI Components
import { Box, Typography } from "@mui/material";

// Images
import pooja_aggarwal from "../assets/images/testimonials/pooja_aggarwal.png";
import ali_jaber from "../assets/images/testimonials/ali_jaber.png";
import amit_dammani from "../assets/images/testimonials/amit_dammani.png";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      clientImage: pooja_aggarwal,
      description:
        "Hanzala is a skilled developer which will do everything possible to deliver the project on time and I really appreciate that for sure",
      clientName: "Pooja Aggarwal",
      clientTitle: "Director Technology - Vsnstech",
    },
    {
      id: 2,
      clientImage: ali_jaber,
      description:
        "Loved to work with Hanzala he's such an awesome developer with great attention to details. He also has a great eye for design",
      clientName: "Ali Jaber",
      clientTitle: "Director Technology - Plotsy",
    },
    {
      id: 3,
      clientImage: amit_dammani,
      description:
        "So glad we started working with Hanzala. We've used many times his development skills for our inhouse online projects",
      clientName: "Amit Dammani",
      clientTitle: "Product Manager - Epleyer",
    },
  ];

  return (
    <>
      <Box className="cards-1 bg-light">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-12">
              <Typography
                variant="h4"
                color="black"
                className="text-center h2-heading mx-auto fw_bold"
              >
                A few words from people that chose to work with me
              </Typography>
            </Box>
          </Box>
          <Box className="d-flex justify-content-center w-100">
            <Box className="row">
              <Box className="col-lg-12">
                
                {testimonialsData.map((testimonial) => (
                  <Box className="card rounded shadow p-3" key={testimonial.id}>
                    <Box className="card-body d-flex flex-column align-items-center justify-content-center">
                      <div className="details mb-3">
                        <img
                          className="shadow"
                          src={testimonial.clientImage}
                          alt="alternative"
                        />
                        <div className="text">
                          <div className="testimonial-author">
                            
                            {testimonial.clientName}
                          </div>
                          <div className="occupation">
                            
                            {testimonial.clientTitle}
                          </div>
                        </div>
                      </div>
                      <p className="testimonial-text border-top text-center pt-3 p-2">
                        "{testimonial.description}"
                      </p>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
