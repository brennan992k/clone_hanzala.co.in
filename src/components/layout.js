import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { scroller } from "react-scroll";
import { Helmet } from "react-helmet";

// Components
import Nav from "./nav";
import NavRoute from "./navRoute";
import Footer from "./footer";

// CSS
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = React.useState("");
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setActiveLink(scroller.getActiveLink());
    });
  }
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  const { title, siteUrl } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <title> {title} </title>
        <meta
          name="description"
          content="I'm an experienced software engineer helping companies & next-gen startups build the future of digital with mobile, web, & emerging tech."
        />
        <meta name="keywords" content="full-stack software developer" />
        <meta name="url" content={siteUrl} />
        <meta name="utf-8" content="utf-8" />
        <meta name="canonical" content={siteUrl} />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:image"
          content="https://hanzala.co.in/static/hanzala-8484369054e04d80be39e10c6cfcc6f5.webp"
        />
        <meta
          property="og:description"
          content="I help companies & next-gen startups build the future of digital with mobile, web, & emerging tech.
        I 'm a full-stack developer with a passion for building beautiful, responsive, and accessible websites and applications."
        />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="I help companies & next-gen startups build the future of digital with mobile, web, & emerging tech.
        I 'm a full-stack developer with a passion for building beautiful, responsive, and accessible websites and applications."
        />
        <meta
          name="twitter:image"
          content="https://hanzala.co.in/static/hanzala-8484369054e04d80be39e10c6cfcc6f5.webp"
        />
        <meta name="twitter:site" content="@justhanzala" />
        <meta name="twitter:creator" content="@justhanzala" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="index, follow" />
        <meta name="googlebot-news" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/21595466.js"
        ></script>
      </Helmet>
      {typeof window !== "undefined" && window.location.pathname === "/" ? (
        <Nav activeLink={activeLink} />
      ) : (
        <NavRoute activeLink={activeLink} />
      )}
      <main className="overflow-hidden"> {children} </main> <Footer />
    </>
  );
};

export default Layout;
