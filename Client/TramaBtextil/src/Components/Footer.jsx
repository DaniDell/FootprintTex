import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { AiFillGoogleCircle } from 'react-icons/ai';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 0, pb: '0', display: 'flex', gap: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.palette.secondary.main, width: "100%", height: "3rem" }}>
<Typography variant="h3" align="center" sx={{ fontFamily: 'Poppins, sans-serif', color: theme.palette.custom2.main, fontSize: '1rem' }}>
  Desarrollado por Trama B Textil  
</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, p: 1}}>
        <Link href="https://www.instagram.com/trama_b_textil/" target="_blank" rel="noopener" aria-label="Instagram de Trama B Textil">
          <InstagramIcon style={{ color: theme.palette.custom2.main }} />
        </Link>

        <div>
          <Link href="https://sites.google.com/view/tramabtextil/inicio" target="_blank" rel="noopener" aria-label="Google Site Trama B Textil">
            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AiFillGoogleCircle size={0} style={{ color: theme.palette.custom2.main }} />
<Typography variant="body1" sx={{ color: theme.palette.custom2.main, fontWeight: 'bold', fontSize: '18px' }}>sites</Typography>
            </Box> */}
          </Link>
        </div>
        <Link href="https://www.linkedin.com/company/trama-b-textil/" target="_blank" rel="noopener" aria-label="LinkedIn de Trama B Textil">
          <LinkedInIcon style={{ color: theme.palette.custom2.main }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;