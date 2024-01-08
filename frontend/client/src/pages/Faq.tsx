import React from "react";
import { Container, Typography } from "@mui/material";

const faqStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "50px",
  paddingBottom: "100px", 
  width: "80%", 
  margin: "auto",
};

const questionBlockStyle: React.CSSProperties = {
    padding: "0 20px",
    maxWidth: "2000px", 
    width: "100%",
  };

export default function Faq() {
  return (
    <Container sx={faqStyle}>
      <Typography variant="h2" gutterBottom>
        FAQ
      </Typography>
      <div style={questionBlockStyle} >
        <Typography variant="h5" paragraph sx={{ fontWeight: 700, color: "#5D1F4C", fontSize: "25px", textAlign: "center", fontFamily: 'monospace' }}>
          How does this website function?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: "20px", textAlign: "center", fontFamily: 'monospace' }}>
          This website consolidates the university sports portals of Beuth, FU, HTW, HU, and TU. It allows browsing through all courses offered in Berlin. The search results are not live but are updated once a day.
        </Typography>
      </div>
      <div>
        <Typography variant="h5" paragraph sx={{ fontWeight: 700, color: "#5D1F4C", fontSize: "25px", textAlign: "center", fontFamily: 'monospace' }}>
          How can I book a course?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: "20px", textAlign: "center", fontFamily: 'monospace' }}>
          Since UniSportBerlin functions as a search engine, you cannot directly book your course on the site. However, in the search results, you will find a link to the university portal offering the course. There, you can proceed to book your favorite course.
        </Typography>
      </div>
      <div>
        <Typography variant="h5" paragraph sx={{ fontWeight: 700, color: "#5D1F4C", fontSize: "25px", textAlign: "center", fontFamily: 'monospace' }}>
          I have a question about a course, who can I contact?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: "20px", textAlign: "center", fontFamily: 'monospace' }}>
          Unfortunately, there is no central point of contact. The contact person is usually found on the websites of the universities.
        </Typography>
      </div>
      <div>
        <Typography variant="h5" paragraph sx={{ fontWeight: 700, color: "#5D1F4C", fontSize: "25px", textAlign: "center", fontFamily: 'monospace' }}>
          What do the different prices mean?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: "20px", textAlign: "center", fontFamily: 'monospace' }}>
          The goal of university sports is to offer sports courses for students. However, it is often possible for others to book the courses, with varying prices. The pricing differs by university, but usually, the first price is for students from cooperating universities (a list can often be found in the universities' terms and conditions, e.g., in the terms and conditions of FU). The additional prices are for other groups (such as university employees, school students, alumni, and external individuals) and differ in their distribution between the universities. Details can be found on the universities' websites (these become visible on almost all pages after clicking on the prices of a course).
        </Typography>
      </div>
      <div>
        <Typography variant="h5" paragraph sx={{ fontWeight: 700, color: "#5D1F4C", fontSize: "25px", textAlign: "center", fontFamily: 'monospace' }}>
          Any other questions?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: "20px", textAlign: "center", fontFamily: 'monospace' }}>
          As UniSportBerlin is not involved in organizing the courses, you need to contact the responsible individuals at each university directly.
        </Typography>
      </div>
    </Container>
  );
}
