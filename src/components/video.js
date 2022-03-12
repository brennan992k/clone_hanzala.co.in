import React from "react";
import HeroBgVideo from "../assets/video/hero-bg.mp4";

const Video = () => {
  return (
    <video autoPlay className="video" loop muted playsInline>
      <source src={HeroBgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
