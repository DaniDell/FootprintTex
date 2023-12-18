import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ p: 3, position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f8f8f8' }}>
      <Typography variant="body1" align="center">
        Trama B Textil
      </Typography>
    </Box>
  );
};

export default Footer;