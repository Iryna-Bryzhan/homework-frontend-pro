import React from "react";
import Title from "../Title/Title";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";

import iconsLink from "../../img/akar-icons_link-chain.png";
import iconsGithub from "../../img/akar-icons_github-fill.png";
import card1 from "../../img/Screenshot_2.png";
import card2 from "../../img/Screenshot_5.png";
import card3 from "../../img/rick-and_Morty.png";
import card4 from "../../img/Screenshot_24.png";
import card5 from "../../img/Screenshot_1.png";
import card6 from "../../img/Screenshot_psy.png";
import card7 from "../../img/Screenshot_4.png";

const PortfolioContainer = styled(Container)(({ theme }) => ({
  padding: "50px 0",
}));

const PortfolioGrid = styled(Grid)(({ theme }) => ({
  marginTop: "20px",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const Portfolio = () => {
  const cardsData = [
    {
      image: card1,
      title: "Pet-project Star Wars",
      description: "Working with the API, receiving and displaying data",
      stack: "Tech stack: HTML, CSS, JavaScript, React, Redux, Redux-thunk",
      links: [
        {
          url: "https://swapi-gules.vercel.app/",
          text: "Live Preview",
          img: iconsLink,
        },
        {
          url: "https://github.com/Iryna-Bryzhan/homework-frontend-pro/tree/master/Homework-30.1/swapi-redux",
          text: "View Code",
          img: iconsGithub,
        },
      ],
    },
    {
      image: card2,
      title: "Pet-project To Do List",
      description: "Implementation of To Do List on the React framework",
      stack: "Tech stack: HTML, CSS, JavaScript",
      links: [
        {
          url: "https://todo-list-sigma-seven.vercel.app/",
          text: "Live Preview",
          img: iconsLink,
        },
        {
          url: "https://github.com/Iryna-Bryzhan/homework-frontend-pro/tree/master/Homework-31.1/todo",
          text: "View Code",
          img: iconsGithub,
        },
      ],
    },
    {
      image: card3,
      title: "Pet-project Rick and Morty",
      description: "Working with the API, receiving and displaying data",
      stack: "Tech stack: HTML, CSS, JavaScript, React",
      links: [
        {
          url: "https://homework-react-rick-and-morty-edpz.vercel.app/",
          text: "Live Preview",
          img: iconsLink,
        },
        {
          url: "https://github.com/Iryna-Bryzhan/homework_react_rick_and_morty",
          text: "View Code",
          img: iconsGithub,
        },
      ],
    },
    {
      image: card4,
      title: "Landing page for NRG.SPACE",
      description: "Page development, deployment on hosting, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript",
      links: [
        {
          url: "https://nrgspace.com.ua/",
          text: "Live Preview",
          img: iconsLink,
        },
        {
          url: "https://github.com/Iryna-Bryzhan/NRG.space",
          text: "View Code",
          img: iconsGithub,
        },
      ],
    },
    {
      image: card5,
      title: "Landing page for NEXT-ENERGY",
      description:
        "Making changes to the website, adding sections, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript",
      links: [
        {
          url: "https://www.next-energy.pro/",
          text: "Live Preview",
          img: iconsLink,
        },
        {
          url: "https://github.com/Iryna-Bryzhan/Iryna-Bryzhan.next-energy.github.io",
          text: "View Code",
          img: iconsGithub,
        },
      ],
    },
    {
      image: card6,
      title: "Landing page for a psychologist",
      description: "Creating a design, developing a page, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript, WOW.js library",
      links: [
        {
          url: "https://iryna-bryzhan.github.io/psychologist-Bryzhan-Tetiana/",
          text: "Live Preview",
          img: iconsLink,
        },
        {
          url: "https://github.com/Iryna-Bryzhan/psychologist-Bryzhan-Tetiana",
          text: "View Code",
          img: iconsGithub,
        },
      ],
    },
    {
      image: card7,
      title: "Pet-project Portfolio",
      description: "Implementation of adaptive layout",
      stack: "Tech stack: HTML, CSS",
      links: [
        {
          url: "https://iryna-bryzhan.github.io/Pet-project-Portfolio/",
          text: "Live Preview",
          img: iconsLink,
        },
        {
          url: "https://github.com/Iryna-Bryzhan/Pet-project-Portfolio",
          text: "View Code",
          img: iconsGithub,
        },
      ],
    },
  ];

  return (
    <PortfolioContainer id="portfolio" style={{ padding: "80px 0" }}>
      <Title title="Portfolio" />
      <PortfolioGrid
        container
        spacing={4}
        style={{ marginTop: "50px", justifyContent: "center" }}
      >
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <CardMedia
                component="img"
                alt={card.title}
                height="180"
                image={card.image}
              />
              <CardContentWrapper>
                <Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{
                      margin: "20px auto",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{ marginTop: "30px" }}
                  >
                    <strong>{card.stack}</strong>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  marginTop="20px"
                >
                  {card.links.map((link, linkIndex) =>
                    link.component ? (
                      <RouterLink
                        key={linkIndex}
                        to={link.to}
                        style={{ textDecoration: "none", color: "#2E73E3" }}
                      >
                        <Box display="flex" alignItems="center">
                          <img
                            src={link.img}
                            alt={link.text}
                            style={{ marginRight: "5px" }}
                          />
                          <Typography variant="body2">{link.text}</Typography>
                        </Box>
                      </RouterLink>
                    ) : (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#2E73E3" }}
                      >
                        <Box display="flex" alignItems="center">
                          <img
                            src={link.img}
                            alt={link.text}
                            style={{ marginRight: "5px" }}
                          />
                          <Typography variant="body2">{link.text}</Typography>
                        </Box>
                      </a>
                    )
                  )}
                </Box>
              </CardContentWrapper>
            </StyledCard>
          </Grid>
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
