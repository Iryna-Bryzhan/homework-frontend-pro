import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import {
  FaBrain,
  FaCode,
  FaUsers,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import Title from "../Title/Title";

const AboutContainer = styled(Container)(({ theme }) => ({
  padding: "80px 0",
  textAlign: "center",
}));

const AboutContent = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "80%",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  textAlign: "justify",
  margin: "5% auto",
  ".about-text": {
    fontSize: "21px",
    margin: "30px 0",
  },
  ".about-title": {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "20px 0",
    textAlign: "center",
  },
  ".about-content-list": {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
    margin: "20px auto",
    "& li": {
      fontSize: "21px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      textAlign: "justify",
      gap: "10px",
    },
  },
  ".icon": {
    color: "#2E73E3",
    fontSize: "35px",
    marginRight: "10px",
  },
}));

const About = () => {
  return (
    <AboutContainer id="about">
      <Title title="About me" />
      <AboutContent>
        <Typography className="about-text" variant="body1">
          My name is Iryna, I am a Junior Front-end Developer. I completed
          courses in web development, JavaScript and React at SevenEducation
          under the guidance of a mentor and now I am studying at Hillel IT
          School for the Front-end Pro course.
        </Typography>
        <ul className="about-content-list">
          <li data-aos="fade-right" data-aos-delay="300" data-aos-once="true">
            <FaTools className="icon" />I have a strong interest in website
            development, able to provide responsive and aesthetic layout,
            according to requirements and standards.
          </li>
          <li data-aos="fade-right" data-aos-delay="400" data-aos-once="true">
            <FaCode className="icon" />I am organized, flexible and passionate
            as a developer, and my desire is to make websites look top notch and
            convert visitors into leads.
          </li>
          <li data-aos="fade-right" data-aos-delay="500" data-aos-once="true">
            <FaBrain className="icon" />I know how to find the necessary
            information, I can independently solve problems and make decisions.
          </li>
          <li data-aos="fade-right" data-aos-delay="600" data-aos-once="true">
            <FaGraduationCap className="icon" />I give priority to constant
            self-improvement and professional development.
          </li>
          <li data-aos="fade-right" data-aos-delay="700" data-aos-once="true">
            <FaUsers className="icon" />I am communicative and able to work in a
            team.
          </li>
        </ul>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
