import * as React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

// Small Images
import EpleyerImage from "../assets/images/projects/epleyer.webp";
import NickelfoxImage from "../assets/images/projects/nickelfox.webp";
import HeliosImage from "../assets/images/projects/helios.webp";
import NutrackerImage from "../assets/images/projects/nutracker.webp";
import BooksRoomImage from "../assets/images/projects/booksroom.webp";
import GymnovateImage from "../assets/images/projects/gymnovate.webp";

// Full Screen Images
import EpleyerImageLarge from "../assets/images/projects/epleyer_full.webp";
import NickelfoxImageLarge from "../assets/images/projects/nickelfox_full.webp";
import HeliosImageLarge from "../assets/images/projects/helios_full.webp";
import NutrackerImageLarge from "../assets/images/projects/nutracker_full.webp";
import BooksRoomImageLarge from "../assets/images/projects/booksroom_full.webp";
import GymnovateImageLarge from "../assets/images/projects/gymnovate_full.webp";

const Works = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(992));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(767));

  const projectData = [
    {
      id: 1,
      name: "Epleyer",
      projectWebLink: "https://epleyer.gg",
      projectImage: isSmallScreen
        ? EpleyerImage
        : isMediumScreen
        ? EpleyerImageLarge
        : EpleyerImage,
      projectDetails:
        "Live Streaming, Game Stats, Videos, Photos, Social Media and so much more…",
      projectFor: "Esports and Gaming",
    },
    {
      id: 2,
      name: "NickelFox",
      projectWebLink: "https://www.nickelfox.com/",
      projectImage: isSmallScreen
        ? NickelfoxImage
        : isMediumScreen
        ? NickelfoxImageLarge
        : NickelfoxImage,
      projectDetails:
        "Nickelfox is a indian based company for full stack software development, and web design.",
      projectFor: "Company Website",
    },
    {
      id: 3,
      name: "Helios",
      projectWebLink: "https://helioslife.enterprises/",
      projectImage: isSmallScreen
        ? HeliosImage
        : isMediumScreen
        ? HeliosImageLarge
        : HeliosImage,
      projectDetails:
        "The new way to analyse meaning using the true metric of the human nature the voice.",
      projectFor: "Voice of the Community",
    },
    {
      id: 4,
      name: "Nutracker",
      projectWebLink: "https://dev.vsnstech.com/",
      projectImage: isSmallScreen
        ? NutrackerImage
        : isMediumScreen
        ? NutrackerImageLarge
        : NutrackerImage,
      projectDetails:
        "Track the projects and the sites you are working on and see the progress of your projects.",
      projectFor: "tracking Projects",
    },
    {
      id: 5,
      name: "Books Room",
      projectWebLink: "https://booksroom.herokuapp.com/explore",
      projectImage: isSmallScreen
        ? BooksRoomImage
        : isMediumScreen
        ? BooksRoomImageLarge
        : BooksRoomImage,
      projectDetails:
        "That's a books room, a place where you can find books for your reading pleasure.",
      projectFor: "Books Library",
    },
    {
      id: 6,
      name: "Gymnovate",
      projectWebLink: "https://gymnovate.herokuapp.com/",
      projectImage: isSmallScreen
        ? GymnovateImage
        : isMediumScreen
        ? GymnovateImageLarge
        : GymnovateImage,
      projectDetails:
        "Tracking gym memberships, workout plans, and workout sessions.",
      projectFor: "Gym business",
    },
  ];

  return (
    <>
      <div className="basic-4">
        <div className="container">
          <div className="row">
            
            {projectData.map((project) => (
              <div className="col-lg-4" key={project.id}>
                <div className="text-container bg-light p-2 rounded shadow-sm">
                  <div className="image-container w-100">
                    <a
                      href={project.projectWebLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="img-fluid rounded d-block mx-auto"
                        src={project.projectImage}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  <p>
                    <strong> For: </strong> {project.projectFor} <br />
                    <strong> Project: </strong> {project.projectDetails}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
