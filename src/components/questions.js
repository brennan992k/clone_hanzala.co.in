import * as React from "react";

// Styled MUI Components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const Questions = () => {
  const questions = [
    {
      question:
        "How can I contact you and quickly get a quote for my online project?",
      answer:
        "The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure you provide complete details.",
    },
    {
      question:
        "Do you create designs from the ground up or you are using themes?",
      answer:
        "Yes, I do create, and I can use Photoshop and Figma, Illustrator, and Adobe XD for making the designs",
    },
    {
      question:
        "Will I receive any included maintenance or warranty after project delivery?",
      answer:
        "Yes, I do provide free support after every delivery, and the support time depends on the project",
    },
    {
      question:
        "If something goes wrong with the project can I have my money back?",
      answer:
        "Yes, If it happen 50% of your amount will be send to you right away",
    },
    {
      question:
        "What's your preferred method of payment and do you need an advance?",
      answer:
        "I do have a policy of 5 days working without any advance payment, and I do reveive payment through your preffered platform",
    },
  ];

  return (
    <>
      <Box className="accordion-1 bg-white">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-12">
              <Typography
                className="text-center mb-4 fw_bold"
                variant="h4"
                color="black"
              >
                Frequent questions
              </Typography>
            </Box>
          </Box>
          <Box className="row">
            <Box className="col-lg-12">
              <div className="accordion">
                
                {questions.map((question, i) => (
                  <Accordion className="my-3" key={i}>
                    <AccordionSummary
                      className="border-bottom"
                      expandIcon={<i className="fas fa-chevron-down"> </i>}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography> {question.question} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography> {question.answer} </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Questions;
