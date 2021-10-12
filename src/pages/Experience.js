import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import expApi from "../API/experienceApi";
import projectapi from "../API/projectsApi";

const Experience = () => {
  const [expData, setExpData] = useState(expApi);
  const [expProject, setExpProject] = useState(projectapi);
  return (
    <>
      <div className="row mx-2">
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-center flex-column">
          <img
            src="./images/experience.svg"
            alt="ExperienceImg"
            className="img-fluid"
          />
        </div>
        <div className="my-5 col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center flex-column">
          <h1 className="heading-exp height-100">Internships and Projects</h1>
        </div>

        {/* -------------------------------------------Accordion Start---------------------------------------------- */}

        <section className="accordion container-fluid mb-5 mt-5">
          {/* Accordion-1 Start */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2>Internships</h2>
            </AccordionSummary>
            {expData.map((expElem) => {
              const { company, duration, role, information } = expElem;
              return (
                <>
                  <AccordionDetails className="accdetails">
                    <div class="card">
                      <div class="card-header text-center">
                        {company} &emsp;|&emsp; {duration}
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{role}</h5>
                        <p class="card-text">{information}</p>
                      </div>
                    </div>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
          {/* Accordion-1 End */}

          {/* Accordion-2 Start */}
          <Accordion className="mt-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2>Projects</h2>
            </AccordionSummary>
            {expProject.map((projEle) => {
              const { name, desc, date, technology } = projEle;
              return (
                <>
                  <AccordionDetails className="accdetails">
                    <div class="card">
                      <div class="card-header">Build on : {date}</div>
                      <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{technology}</p>
                        <p class="card-text">{desc}</p>
                      </div>
                    </div>
                  </AccordionDetails>
                </>
              );
            })}
          </Accordion>
          {/* Accordion-2 End */}
        </section>

        {/* -------------------------------------------Accordion End------------------------------------------------- */}
      </div>
    </>
  );
};

export default Experience;
