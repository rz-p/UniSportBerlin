import React from "react";
import { IconButton, TextField, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerStyle: React.CSSProperties = {
  backgroundColor: "#5D1F4C",
  padding: "15px 50px",
  color: "white",
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between", 
  alignItems: "center",
};

const socialIconsStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={socialIconsStyle}>
        <IconButton color="inherit" component="a" href="https://www.facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://www.twitter.com">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://www.instagram.com">
          <InstagramIcon />
        </IconButton>
      </div>
      <div>
      <TextField
        label="Subscribe to newsletter"
        variant="outlined"
        size="small"
        style={{ backgroundColor: "white", borderRadius: "4px" }}
        />
      <Button
        variant="contained"
        color="secondary"
        style={{ marginLeft: "11px" }}
      >
        Subscribe
      </Button>
      </div>
      <p style={{ margin: "2px", fontSize: "10px" }}>
        © 2024 Berlin
      </p>

    </footer>
  );
}