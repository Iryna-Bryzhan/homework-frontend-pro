import React, { useEffect } from 'react';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialItemMain from '../SocialItemMain/SocialItemMain';
import MyPhoto from '../../img/photo_my.png';


const ScreenMainContainer = styled(Box)(({ theme }) => ({
  height: '90vh',
  display: 'flex',
  boxSizing: 'border-box',
  color: 'black',
'.container-screen-main': {
    width: '75%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '.css-1pqm26d-MuiAvatar-img': {
    width: '71%',

  },
  '.css-popajl-MuiAvatar-root':{
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  '.info-left': {
    width: '60%',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'start',
    top: '5%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  '.name': {
    fontSize: '75px',
    fontWeight: 800,
    marginBottom: '6%',
  },
  '.main-text': {
    fontSize: '50px',
    fontWeight: 600,
    marginBottom: '5%',
  },
  '.prof': {
    color: '#909090',
    fontSize: '25px',
    fontWeight: 800,
    marginBottom: '9%',
  },
  '.profile-pic': {
    width: '40%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  '.profile-pic img': {
    borderRadius: '10px',
    width: '100%',
    maxWidth: '500px',
  },
  '.myCV': {
    textAlign: 'center',
    border: 'none',
    background: '#0e087bf0',
    textTransform: 'uppercase',
    padding: '18px 25px',
    width: '30%',
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    transition: '0.1s',
    borderRadius: '10px',
    '&:hover': {
      background: '#2e73e3dc',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
    },
    '.myCV-text': {
      fontFamily: 'Lato, sans-serif',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      display: 'inline-block',
    },
  },
  
}));

const ScreenMain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ScreenMainContainer className="screen-main"  id="screen-main"> 
      <Box className="container-screen-main">
        <Box className="info-left">
          <Typography
            className="main-text"
            component="h3"
          >
            Hello, I am
          </Typography>
          <Typography
            className="name"
            data-aos="fade-right"
            data-aos-delay="300"
            component="h1"
          >
            Iryna Bryzhan
          </Typography>
          <Typography
            className="prof"
            data-aos="fade-up-left"
            data-aos-delay="1000"
            component="p"
          >
            Front-end Developer
          </Typography>
          <Box
            component="a"
            href="https://drive.google.com/file/d/18pAWFWflsDDh1EQ18xOMTgr0FP6pFe1h/view?usp=sharing"
            target="_blank"
            className="myCV"
          >
            <Box className="myCV-text">
              My CV
            </Box>
          </Box>
        </Box>
        <Grid item xs={12} md={4} style={{ width: '40%' }}>
        <Avatar
          alt="Your Name"
          src={MyPhoto}
          sx={{ width: 550, height: 700, mx: 'auto' }}
        />
      </Grid>
        <SocialItemMain />
      </Box>
    </ScreenMainContainer>
  );
};

export default ScreenMain;
