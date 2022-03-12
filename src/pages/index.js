import * as React from "react";
import { Box, LinearProgress } from "@mui/material";

// Components
import About from "../components/about";
import AlertMessage from "../components/alertMessage";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Services from "../components/services";
import WorkWithMe from "../components/workWithMe";
import Projects from "../components/projects";
import Testimonials from "../components/testimonials";
import Questions from "../components/questions";
import Header from "../components/header";

const IndexPage = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [progress, setProgress] = React.useState(false);

  return (
    <>
      
      {progress ? (
        <Box
          sx={{
            width: "100%",
            position: "sticky",
            top: 0,
            zIndex: 1111,
          }}
        >
          <LinearProgress color="info" />
        </Box>
      ) : null}
      {open && <AlertMessage open={open} setOpen={setOpen} message={message} />}
      <Layout>
        <Header />
        <About />
        <Services />
        <WorkWithMe />
        <Projects />
        <Testimonials />
        <Questions />
        <Contact
          setProgress={setProgress}
          setOpen={setOpen}
          setMessage={setMessage}
        />
      </Layout>
    </>
  );
};

export default IndexPage;
