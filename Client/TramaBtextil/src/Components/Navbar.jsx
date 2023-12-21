import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, marginLeft: '10px' }}>
                       Calculadora de reciclaje </Typography>
                <IconButton edge="start" color="inherit" aria-label="ver más">
                    <a href="https://sites.google.com/view/tramabtextil/inicio" target="_blank" rel="noopener noreferrer">
                        <img src="/logo.svg" alt="Logo" style={{ marginRight: '0px', height: '50px', width: '50px', flexGrow: 1, color: 'inherit' }} />
                    </a>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;