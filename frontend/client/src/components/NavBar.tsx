import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from "@mui/icons-material/Search";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import {styled, alpha} from "@mui/material/styles";
import {Link, useLocation} from "react-router-dom";
import AddSportPage from "./AddSportPage";
import {useEffect, useState} from "react";
import {useAuth} from "../auth-context";

const pages = ["Home", "About", "FAQ", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 32,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));
const SearchIconWrapper = styled("div")(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

function NavBar() {
    //const { user, updateState } = useContext(AuthContext);
    //updateState(AuthContext);

    const auth = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="sticky" sx={{backgroundColor: "#5D1F4C"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component={Link}
                                to={page.toLowerCase().match('home') ? '' : `/${page.toLowerCase()}`}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: "white", display: "block"}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center", flexGrow: 1}}>
                        <SportsVolleyballIcon
                            sx={{display: {xs: "none", md: "flex"}, mr: 2, fontSize: 44}}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#uni-sport-berlin"
                            sx={{
                                mr: 2,
                                display: {xs: "none", md: "flex"},
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            UniSportBerlin
                        </Typography>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: "block", md: "none"},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#uni-sport-berlin"
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}>
                        UniSportBerlin
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{"aria-label": "search"}}
                        />
                    </Search>
                    { auth.status == "true" ? <UserMenu /> : null }
                    { auth.status == "true" ? <Button
                        style={{margin: '20px'}}
                        variant="contained"
                        color="secondary"
                        startIcon={<AddIcon/>}
                        component={Link} to="/add">
                        Add Sport
                    </Button> : null }
                    <AuthButton/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

function UserMenu() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return <Box sx={{flexGrow: 0}}>
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
            </IconButton>
        </Tooltip>
        <Menu
            sx={{mt: "45px"}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>;
}

function AuthButton() {
    const auth = useAuth();
    if (auth.status == "true") {
        return <Button
            style={{margin: '20px'}}
            variant="contained"
            color="secondary"
            onClick={() => auth.logOut()}
            startIcon={<LogoutIcon/>}>
            Logout
        </Button>;
    } else {
        return <Button
            style={{margin: '20px'}}
            variant="contained"
            color="secondary"
            component={Link}
            to={{pathname: '/login'}}
            startIcon={<LoginIcon/>}>
            Login
        </Button>;
    }
}
export default NavBar;
