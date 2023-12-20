import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ p: 1, position: 'fixed', bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8', width: "100%" }}>
      <Typography variant="body1" align="center">
        Trama B Textil
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 1}}>
        <Link href="https://www.instagram.com/trama_b_textil/" target="_blank" rel="noopener">
          <InstagramIcon />
        </Link>
        <Link href="https://www.linkedin.com/company/trama-b-textil/" target="_blank" rel="noopener">
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;