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
                  display: { md: 'flex' },
                  fontFamily: 'serif',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '35px',
                  mt: '15px',
                }}
                >
                <Avatar alt="Sheglam" 
                  src="https://d15d3imw3mjndz.cloudfront.net/5ompw27pxt0vgh6cpcgn47tvnfjo"  
                  sx={{
                    width: '80px',
                    height: '90px'
                    }}/>
                 Sheglam
                 <div className='Login'>
                  <Button href="login">Login</Button>
                </div>
                <div className='cadastrar'>
                  <Button href="Produtos">Cadastro de Produtos</Button>
                </div>
                <div className='Lprodutos'>
                  <Button href="Produtos">Cadastro de Produtos</Button>
                </div>
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