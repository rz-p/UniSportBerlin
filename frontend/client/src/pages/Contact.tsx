import React from "react";
import { Container, Typography } from "@mui/material";

const contactStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "50px",
};

const contactInfoStyle: React.CSSProperties = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: 'monospace',
};

const emphasizedText: React.CSSProperties = {
  color: "#5D1F4C", 
  fontWeight: 700, 
};

export default function Contact() {
  return (
    <Container sx={contactStyle}>
      <Typography variant="h2" gutterBottom>
        Contact
      </Typography>
      <div>
        <Typography variant="body1" paragraph sx={contactInfoStyle}>
          <span style={emphasizedText}>Design and Technical Implementation:</span>
          <p>
            Ekaterina Kuritsyna, Rizki Pramadhan
          </p>
        </Typography>
        <Typography variant="body1" paragraph sx={contactInfoStyle}>
          <span style={emphasizedText}>Phone:</span>
          <p>
          +49 (0)12 345-6
          </p>
        </Typography>
        <Typography variant="body1" paragraph sx={contactInfoStyle}>
          <span style={emphasizedText}>Email:</span>
          <p>
          student@htw-berlin.de 
          </p>
        </Typography>
      </div>
    </Container>
  );
}
