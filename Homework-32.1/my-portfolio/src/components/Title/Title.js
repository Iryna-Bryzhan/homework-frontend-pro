import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const TitleContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  margin: "20px 0",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#333",
}));

function Title(props) {
  return (
    <TitleContainer>
      <TitleText
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-once="true"
      >
        {props.title}
      </TitleText>
    </TitleContainer>
  );
}

export default Title;
