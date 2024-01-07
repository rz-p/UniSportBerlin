import React from "react";
import { Container, Typography } from "@mui/material";

const aboutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "50px",
};

export default function About() {
  return (
    <Container  sx={aboutStyle}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontWeight: 700, mb: 2, color: "#5D1F4C", fontFamily: 'monospace' }}>
        Welcome to UniSportBerlin, your go-to platform for sports enthusiasts!
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontFamily: 'monospace' }}>
        We're dedicated to bringing together sports lovers, providing a
        community where you can discover your favorite sports and connect with
        like-minded individuals.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontFamily: 'monospace' }}>
        Whether you're a seasoned athlete or just getting started, UniSportBerlin
        offers a variety of sports activities to suit every interest and skill level.
      </Typography>
    </Container>
  );
}
