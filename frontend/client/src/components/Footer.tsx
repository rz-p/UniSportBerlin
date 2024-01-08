import React from "react";

const footerStyle: React.CSSProperties = {
  backgroundColor: "#5D1F4C",
  padding: "15px",
  color: "white",
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  width: "100%",
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <p style={{ margin: "2px", fontSize: "15px" }}>
        © 2024 Berlin
      </p>
    </div>
  );
}