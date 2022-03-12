import * as React from "react";

const Footer = () => {
  const socialMediaLinks = [
    {
      link: "https://www.facebook.com/justhanzala",
      iconClass: "fab fa-facebook-f",
    },
    {
      link: "https://twitter.com/justhanzala",
      iconClass: "fab fa-twitter",
    },
    {
      link: "https://www.linkedin.com/in/hanzala-/",
      iconClass: "fab fa-linkedin",
    },
    {
      link: "https://www.instagram.com/just_hanzala/",
      iconClass: "fab fa-instagram",
    },
    {
      link: "https://join.skype.com/invite/xNOYFg7bGhdM",
      iconClass: "fab fa-skype",
    },
  ];

  return (
    <>
      <div className="footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="social-container">
                
                {socialMediaLinks.map(({ link, iconClass }, index) => {
                  return (
                    <span className="fa-stack" key={index}>
                      <a href={link} target="_blank" rel="noreferrer">
                        <i className="fas fa-circle fa-stack-2x"> </i>
                        <i className={`${iconClass} fa-stack-1x`}> </i>
                      </a>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-small">
                Copyright©
                <p className="fw_bold text-white d-inline"> Hanzala </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
