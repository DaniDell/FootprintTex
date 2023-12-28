import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ p: 1, position: 'fixed', bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff', width: "100%" }}>
       
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, p: 0}}>
      <Typography variant="h6" align="center" sx={{ color: '#8B5982', fontSize: '1rem' }}>
        Descubrí Trama B Textil en: 
      </Typography>
        <Link href="https://www.instagram.com/trama_b_textil/" target="_blank" rel="noopener" aria-label="Instagram de Trama B Textil">
          <InstagramIcon />
        </Link>
        <Link href="https://www.linkedin.com/company/trama-b-textil/" target="_blank" rel="noopener" aria-label="LinkedIn de Trama B Textil">
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;