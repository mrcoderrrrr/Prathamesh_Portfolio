import React from "react";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { pink } from "@mui/material/colors";

const Home = () => {
  return (
    <>
      {/* Home Intro - Starts */}
      <div className="row mx-2">
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-center flex-column">
          <img src="./images/homeImg.svg" alt="HomeImg" className="img-fluid" />
        </div>
        <div className="main-hero-container col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center flex-column">
          <h1>Prathamesh Satardekar</h1>
          <p className="main-hero-para">
            I’m an Android Developer with having experience in creating projects
            and working professionally. I am fond of learning new technologies
            and love to convert those learnings into awesome projects.
          </p>
          <section className="social-icons">
            <a
              href="https://www.linkedin.com/in/prathamesh-satardekar-a64573212"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon
                className="icon"
                sx={{ fontSize: 45 }}
                color="primary"
              />
            </a>
            <a
              href="https://github.com/mrcoderrrrr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon
                className="icon"
                sx={{ fontSize: 45 }}
                color="action"
              />
            </a>
            <a
              href="https://twitter.com/MCoderrrrr"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon
                className="icon"
                sx={{ fontSize: 45 }}
                color="primary"
              />
            </a>
            <a
              href="https://instagram.com/2000.pratham?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon
                className="icon"
                sx={{ fontSize: 45, color: pink[500] }}
              />
            </a>
          </section>
        </div>
      </div>
      {/* Home Intro - Starts */}

      <h1 className="skill-head">Skills I have</h1>
      {/* Skills Section - Start */}
      {/* ----------------------------------------Android Skill - Start--------------------------------------- */}
      <div className="row mx-2" id="row1">
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-center flex-column">
          <img
            src="./images/androidHome.svg"
            alt="androidHome"
            className="img-fluid"
          />
        </div>
        <div className="main-hero-container col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center flex-column">
          <h1>Android Development</h1>
          <p className="main-hero-para">
            ➡️ Experience in building highly scalable android application using
            java. <br />
            <br />
            ➡️ Familiar with cloud services like Firebase or Parse provide simple APIs to store data in the cloud and make it available across devices.
          </p>
        </div>
      </div>
      {/* ----------------------------------------Android Skill - End--------------------------------------- */}

      {/* ----------------------------------------Web Dev Skills - Start--------------------------------------- */}
      <div className="row mx-2" id="row2">
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-center flex-column">
          <img
            src="./images/webImg.svg"
            alt="androidHome"
            className="img-fluid"
          />
        </div>
        <div className="main-hero-container col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center flex-column">
          <h1>Web Development</h1>
          <p className="main-hero-para">
            ➡️ Can build projects using Html, Css and Javascript. <br />
            <br />
            ➡️ Have good understanding of Javascript Language.
          </p>
        </div>
      </div>
      {/* ----------------------------------------Web Dev Skills - End--------------------------------------- */}

      {/* ----------------------------------------Design Skills - Start--------------------------------------- */}

      <div className="row mx-2" id="row3">
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-center flex-column">
          <img
            src="./images/designImg.svg"
            alt="webHome"
            className="img-fluid"
          />
        </div>
        <div className="main-hero-container col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center flex-column">
          <h1>Designing</h1>
          <p className="main-hero-para">
            ➡️ Designing high quality attractive UI for mobile devices. <br />
            <br />
            ➡️ Familiar with figma, adobe illustrator for designing.
          </p>
        </div>
      </div>

      {/* ----------------------------------------Design Skills - End--------------------------------------- */}

      {/* Skills Section - End */}
    </>
  );
};

export default Home;
