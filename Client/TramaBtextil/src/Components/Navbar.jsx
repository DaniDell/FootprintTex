import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const Navbar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, marginLeft: '9px' }}>
                       Calculadora de reciclaje textil </Typography>
                <IconButton edge="start" color="inherit" aria-label="ver más">
                    <a href="https://sites.google.com/view/tramabtextil/inicio" target="_blank" rel="noopener noreferrer">
                        <img src="/logo.svg" alt="Logo" style={{ marginRight: '0px', height: '50px', width: '50px', flexGrow: 1, color: 'inherit' }} />
                        <Box component="span" sx={{clipPath: 'inset(100%)', clip: 'rect(1px, 1px, 1px, 1px)', height: '1px', overflow: 'hidden', position: 'absolute', whiteSpace: 'nowrap', width: '1px'}}>
                            Conocer más sobre Trama B Textil
                        </Box>
                    </a>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;