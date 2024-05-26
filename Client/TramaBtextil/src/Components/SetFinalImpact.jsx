import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '25px',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const SetfinalImpact = () => {
    const [expanded, setExpanded] = useState('panel1');
    const impact = useSelector(state => state.impact);
  
    // Si los valores de impacto son 0, no renderizar el componente
    if (impact.waterImpactLandfill === 0 && impact.waterImpact2dnChance === 0 && impact.carbonImpactLandfill === 0 && impact.carbonImpact2dnChance === 0) {
      return null;
    }
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    const waterImpact = expanded === 'panel1' ? impact.waterImpactLandfill : impact.waterImpact2dnChance;
    const carbonImpact = expanded === 'panel1' ? impact.carbonImpactLandfill : impact.carbonImpact2dnChance;
  
  return (
    <div style={{ maxWidth: '700px' }}>
      <Typography>Desde Trama B creemos que el mejor descarte es el que no se genera y que la 'basura' es un error de diseño. Pero mientras ideamos una nueva forma de generar productos textiles 100% circulares monomaterial biodegradable o de larga durabilidad(libre de tóxicos)... Podemos gestionar los remanentes inivitables con responsabilidad. Elegí una forma.</Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>REcircular</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Impacto del agua: {waterImpact}</Typography>
          <Typography>Impacto del carbono: {carbonImpact}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>REciclar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Impacto del agua: {waterImpact}</Typography>
          <Typography>Impacto del carbono: {carbonImpact}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>REutilizar con impacto social</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Impacto del agua: {waterImpact}</Typography>
          <Typography>Impacto del carbono: {carbonImpact}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SetfinalImpact;