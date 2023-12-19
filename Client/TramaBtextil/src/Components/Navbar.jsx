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
                <img src="/logo.svg" alt="Logo" style={{ marginRight: '10px', height: '50px', flexGrow: 1, color: 'inherit' }} />
                   
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};


export default Navbar;
