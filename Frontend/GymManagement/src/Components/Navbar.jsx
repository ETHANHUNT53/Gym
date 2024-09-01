import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { keyframes } from '@mui/system';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pages = ['Workouts', 'Coaches'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activePage, setActivePage] = React.useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  const underlineAnimation = keyframes`
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  `;

  return (
    <AppBar position="fixed" sx={{backgroundColor: "white", boxShadow: "none", margin: 0, padding: 0, left: 0, top: 0 , }} >
      <Box sx={{  padding: 0 , marginLeft: "2.5rem" , marginRight: "2rem"}}>
        <Toolbar disableGutters sx={{ width: "100%", padding: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0, height:"80px" }}>
            <ElectricBoltIcon sx={{ display: { xs: 'none', md: 'flex' }, color: "black", fontWeight: 800, fontSize: "2rem" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: {  md: 'flex' },
                fontFamily: 'Lexend',
                fontWeight: 600,
                color: 'black',
                textDecoration: 'none',
                ml: 1,
              }}
            >
              EnergyX
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4, paddingX: 8 }}>
              {pages.map((page) => (
                <Typography
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontWeight: 500,
                    fontSize: "1.2rem",
                    fontFamily: "Lexend",
                    marginTop: "18px",
                    mr: 4,
                    position: "relative",
                    cursor: "pointer",
                    '&::after': {
                      content: '""',
                      position: "absolute",
                      bottom: "-3px",
                      left: "0",
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#8ec42b",
                      transform: activePage === page ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease-in-out",
                      animation: activePage === page ? `${underlineAnimation} 0.5s forwards` : "none",
                    },
                  }}
                >
                  {page}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ml: 'auto' }}>
            <NotificationsNoneIcon sx={{ color: "black", fontSize: "1.8rem", marginRight: "15px", fontWeight: 200,marginTop: "4px", cursor: "pointer" }} />
            <Tooltip title="">
              
              <FontAwesomeIcon icon={faCircleUser} onClick={handleOpenUserMenu} style={{ color:"black", fontSize: "1.7rem",marginRight: "0.5rem", cursor:"pointer",marginTop: "4px"}}/>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;
