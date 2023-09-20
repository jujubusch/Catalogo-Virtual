import { AppBar, Box, Container, IconButton, Toolbar, Typography, Avatar, Button } from '@mui/material';
import { useState } from 'react';
import "./global.css"


function MenuResponsivo() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { md: 'flex', xs: 'none' },
                  fontFamily: 'serif',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  height: '100px',
                }}
                >
                <Avatar alt="Sheglam" 
                  src="https://d15d3imw3mjndz.cloudfront.net/5ompw27pxt0vgh6cpcgn47tvnfjo"  
                  sx={{
                    width: '20px',
                    height: '50px'
                    }}/>
                 Sheglam
                  <Button 
                  href="login" 
                  sx={{
                    my: 2, 
                    color: 'white', 
                    display: 'block',
                    ml: 20
                  }}>
                  Login
                  </Button>
                  <Button 
                  href="Produtos"
                  sx={{
                    my: 2, 
                    color: 'white', 
                    display: 'block',
                    ml: 20
                  }}>
                  Cadastro de Produtos
                  </Button>
                  <Button  
                  href="https://br.shein.com/pdsearch/sheglam/?ici=s1`RecentSearch`sheglam`_fb`d0`PageHome&search_source=1&search_type=all&src_identifier=st%3D5%60sc%3Dsheglam%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1695211555814"
                  sx={{
                    my: 2, 
                    color: 'white', 
                    display: 'block',
                    ml: 20
                  }}>
                  Mais produtos da nossa marca
                  </Button>
                    <Avatar 
                      sx={{ 
                      bgcolor: '#F0DDD5',
                      color: 'black',
                      my: 1,
                      ml: 23
                      }}>
                    AB
                    </Avatar>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                    </IconButton>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default MenuResponsivo;