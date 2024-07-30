import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0e087bf0', padding: '10px 5%', position: 'sticky',
      top: '0', zIndex: '100' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Iryna Bryzhan
        </Typography>
        <Box> 
          <Button color="inherit" style={{ fontSize: '20px', marginRight: '20px' }} onClick={() => handleScrollToSection('screen-main')}>Home</Button>
          <Button color="inherit" style={{ fontSize: '20px', marginRight: '20px' }} onClick={() => handleScrollToSection('about')}>About</Button>
          <Button color="inherit" style={{ fontSize: '20px', marginRight: '20px' }} onClick={() => handleScrollToSection('skills')}>Skills</Button>
          <Button color="inherit" style={{ fontSize: '20px' }} onClick={() => handleScrollToSection('portfolio')}>Portfolio</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
