import React from "react";
import { Box, Link as MuiLink } from "@mui/material";
import inst from "../../img/instagram.svg";
import linkedin from "../../img/in.svg";
import github from "../../img/github-fill.svg";
import mail from "../../img/mail.svg";

const SocialItem = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: 2 }}>
      <Box className="social" sx={{ marginRight: { sm: 2 } }}>
        <MuiLink href="tel:+380951587302" color="inherit" underline="none">
          +380 (95) 158 73 02
        </MuiLink>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <MuiLink href="mailto:ira97brig@gmail.com" color="inherit" underline="none">
          <img src={mail} alt="mail" style={{ width: 24, height: 24 }} />
        </MuiLink>
        <MuiLink href="https://github.com/Iryna-Bryzhan?tab=repositories" target="_blank" rel="noopener noreferrer" color="inherit" underline="none">
          <img src={github} alt="github" style={{ width: 24, height: 24 }} />
        </MuiLink>
        <MuiLink href="https://www.linkedin.com/in/iryna-bryzhan/" target="_blank" rel="noopener noreferrer" color="inherit" underline="none">
          <img src={linkedin} alt="linkedin" style={{ width: 24, height: 24 }} />
        </MuiLink>
        <MuiLink href="https://www.instagram.com/iryna_bryzhan/" target="_blank" rel="noopener noreferrer" color="inherit" underline="none">
          <img src={inst} alt="inst" style={{ width: 24, height: 24 }} />
        </MuiLink>
      </Box>
    </Box>
  );
};

export default SocialItem;
