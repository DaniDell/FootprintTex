import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Caluladora de reciclaje textil
                </Typography>
                {/* Puedes agregar enlaces de navegación aquí */}
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <a href="https://sites.google.com/view/tramabtextil/inicio" target="_blank" rel="noopener noreferrer">
                        <img src="/logo.svg" alt="Logo" style={{ marginRight: '10px', height: '50px', flexGrow: 1, color: 'inherit' }} />
                    </a>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};


export default Navbar;
