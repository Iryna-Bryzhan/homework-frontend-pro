import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import SocialItem from "./SocialItem";

const Footer = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        height: "auto",
        background: "#0e087bf0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1% 5%",
        flexDirection: { xs: "column", sm: "row" },
        color: "white",
      }}
    >
      <Box>
        <MuiLink href="/" color="inherit" underline="none">
          <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
            Iryna Bryzhan
          </Typography>
        </MuiLink>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <MuiLink
          component="button"
          onClick={() => handleScrollToSection("screen-main")}
          color="inherit"
          underline="none"
        >
          <Typography variant="body1" component="span">
            Home
          </Typography>
        </MuiLink>
        <MuiLink
          component="button"
          onClick={() => handleScrollToSection("skills")}
          color="inherit"
          underline="none"
        >
          <Typography variant="body1" component="span">
            About
          </Typography>
        </MuiLink>
        <MuiLink
          component="button"
          onClick={() => handleScrollToSection("skills")}
          color="inherit"
          underline="none"
        >
          <Typography variant="body1" component="span">
            Skills
          </Typography>
        </MuiLink>
        <MuiLink
          component="button"
          onClick={() => handleScrollToSection("portfolio")}
          color="inherit"
          underline="none"
        >
          <Typography variant="body1" component="span">
            Portfolio
          </Typography>
        </MuiLink>
      </Box>

      <SocialItem />
    </Box>
  );
};

export default Footer;
