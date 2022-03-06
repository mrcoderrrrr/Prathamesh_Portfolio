import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { pink } from "@mui/material/colors";
// import Contactimg from ""

const Contact = () => {
  return (
    <>
      <div className="row mx-2">
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-center flex-column">
          <img src="./images/contact.jpg" alt="" className="contact-img" />
        </div>
        <div className="main-hero-container col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center flex-column">
          <h1>Thank You!</h1>
          <p className="main-hero-para">
            I am glad that you are here. You can find me on socials or drop an email
            on given email address below.
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
              href=https:"//twitter.com/pratham_0110?t=FjZW-08J57gTxW_DVkZqrA&s=08"
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
              href="https://www.instagram.com/_.pratham._0110/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon
                className="icon"
                sx={{ fontSize: 45, color: pink[500] }}
              />
            </a>
          </section>
          <h1 className="contact_email">Email</h1>
          <p className="email">psatardekar0192000@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
