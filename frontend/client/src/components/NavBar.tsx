import React, {FC} from "react";
import { Button } from "@mui/material";
import Logo from "../logo.png";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


const NavBar:FC = () => {
    const helloButtonStyle = {
        color: "#FCF9F2"
      };
    
    return (
        <>
        <div style={{ backgroundColor: '#5D1F4C', height: 80, color: '#FCF9F2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '100px', height: '100px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Button variant="text" style={helloButtonStyle}>
              HOME
            </Button>
            <Button variant="text" style={helloButtonStyle}>
              ABOUT
            </Button>
            <Button variant="text" style={helloButtonStyle}>
              LOGIN
            </Button>
            <Button variant="text" style={helloButtonStyle}>
              SEARCH
            </Button>
          </div>
        </div>
      </>
    )
}

export default NavBar; 