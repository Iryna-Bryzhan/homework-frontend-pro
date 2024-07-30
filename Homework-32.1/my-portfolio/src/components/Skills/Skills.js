import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import html from "../../img/html5.svg";
import css from "../../img/Css3.svg";
import sass from "../../img/Sass.svg";
import js from "../../img/js.svg";
import react from "../../img/React.svg";
import bootstrap from "../../img/bootstrap.svg";
import git from "../../img/git.svg";
import github from "../../img/github.svg";
import figma from "../../img/figma.svg";
import "../../index.css";
import Title from "../Title/Title";

const SkillsContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  boxSizing: "border-box",
  height: "100vh",
  padding: "10%",
  background:
    "linear-gradient(-20deg, rgba(162, 181, 223, 0.5) 22%, rgb(81, 141, 237, 0.4) 100%)",
  ".skills-list": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px 10px",
    width: "90%",
    margin: "75px auto",
  },
  ".skills-item": {
    textAlign: "center",
    width: "150px",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column'
    },
    "& img": {
      width: "100%",
      maxWidth: "80px",
      marginBottom: "10px",
      height: "90px",
    },
    "& .skills-item-text": {
      fontSize: "25px",
      fontWeight: "bold",
    },
  ".using": {
    fontSize: "20px",
    margin: "20px 0",
    fontWeight: "bold",
  },
}));

const skills = [
  { img: html, text: "HTML5", delay: 500 },
  { img: css, text: "CSS3", delay: 600 },
  { img: sass, text: "SASS", delay: 700 },
  { img: js, text: "JAVASCRIPT", delay: 800 },
  { img: react, text: "REACT", delay: 900 },
  { img: bootstrap, text: "BOOTSTRAP", delay: 1000 },
  { img: git, text: "GIT", delay: 1100 },
  { img: github, text: "GitHub", delay: 1200 },
  { img: figma, text: "FIGMA", delay: 1300 },
];

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title title="Skills" />
      <Box className="skills-list">
        {skills.map((skill, index) => (
          <Box
            key={index}
            className="skills-item"
            data-aos="zoom-in"
            data-aos-delay={skill.delay}
            data-aos-once="true"
          >
            <Box className="skills-item-img">
              <img src={skill.img} alt={skill.text} />
            </Box>
            <Typography className="skills-item-text">{skill.text}</Typography>
          </Box>
        ))}
      </Box>
    </SkillsContainer>
  );
};

export default Skills;
