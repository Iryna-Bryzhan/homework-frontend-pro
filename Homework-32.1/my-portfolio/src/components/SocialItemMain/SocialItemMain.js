import React from 'react';
import { Box, IconButton } from '@mui/material';
import mail from '../../img/mail.svg';
import github from '../../img/github-fill.svg';
import linkedin from '../../img/in.svg';
import inst from '../../img/instagram.svg';
import { styled } from '@mui/system';

const SocialContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  zIndex: 100,
  right: 0,
  top: '25%',
  width: '70px',
  background: '#0e087bf0',
  textAlign: 'center',
  borderRadius: '10px 0 0 10px',
  padding: '20px 0',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '41px',
  },
}));

const SocialItems = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const SocialIcon = styled(IconButton)(({ theme }) => ({
  marginBottom: '40%',
  '&:last-child': {
    marginBottom: 0,
  },
  '& img': {
    width: '28px',
  },
}));

const SocialItemMain = () => {
  return (
    <SocialContainer className="socials-main">
      <SocialItems className="social-items-main">
        <SocialIcon className="social-main" href="mailto:ira97brig@gmail.com">
          <img src={mail} alt="mail" />
        </SocialIcon>
        <SocialIcon
          className="social-main"
          href="https://github.com/Iryna-Bryzhan?tab=repositories"
          target="_blank"
        >
          <img src={github} alt="github" />
        </SocialIcon>
        <SocialIcon
          className="social-main"
          href="https://www.linkedin.com/in/%D1%96%D1%80%D0%B8%D0%BD%D0%B0-%D0%B1%D1%80%D0%B8%D0%B6%D0%B0%D0%BD%D1%8C-bab7a3229/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </SocialIcon>
        <SocialIcon
          className="social-main"
          href="https://www.instagram.com/iryna_bryzhan/?igshid=NzZlODBkYWE4Ng%3D%3D"
          target="_blank"
        >
          <img src={inst} alt="inst" />
        </SocialIcon>
      </SocialItems>
    </SocialContainer>
  );
};

export default SocialItemMain;
