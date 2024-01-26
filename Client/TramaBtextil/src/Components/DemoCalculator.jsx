import React, { useState, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateImpact } from './../Funtions/calculateImpact';
import { setImpact, clearImpact } from './../redux/actions'
import { Container, Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const InputComponent = lazy(() => import('./Utils/InputComponent'));
const ResultComponent = lazy(() => import('./Utils/ResultComponent'));

function DemoCalculator() {
 // Redux dispatch function
 const dispatch = useDispatch();
 const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

 // Selecting state from Redux store
 const { waterImpactLandfill, waterImpact2dnChance, carbonImpactLandfill, carbonImpact2dnChance } = useSelector(state => state.impact);

 // Local state for composition and kilograms
 const [composition, setComposition] = useState('algodon'); 
 const [kilograms, setkilograms] = useState(0);

 // Handler for input change
 const handleInputChange = (value) => {
  dispatch(clearImpact()); 
   setkilograms(value); // Store the current value of managed kilograms
 };

 // Handler for calculate button click
 const handleCalculateClick = () => {
   if (!kilograms || !composition) {
     return;
   }

   const impact = calculateImpact(kilograms, composition);
   dispatch(setImpact(impact));
 };

 // Handler for composition change
 const handleCompositionChange = (value) => {
  setComposition(value || '');
   handleInputChange(kilograms);
   dispatch(clearImpact()); 
 };

  // Use useEffect to dispatch clearImpact action when component unmounts
  useEffect(() => {
    return () => {
      dispatch(clearImpact());
    };
  }, [dispatch]);

  return (
    <Box maxWidth={1000} style={{ height: isSmallScreen ? 'auto' : 'auto',
    overflowY: isSmallScreen ? 'auto' : 'hidden', paddingTop: isSmallScreen ? '50px' : '80px', }}>
            <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: isSmallScreen ? '0px' : '0px',
        }}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <InputComponent 
              onInputChange={handleInputChange} 
              onTextileCompositionChange={handleCompositionChange} 
              onCalculateClick={handleCalculateClick} 
            />
            <Typography variant="body2" sx={{ fontSize: '10px', margin: '10px', textAlign: 'center', fontStyle: 'italic', color: 'black' }}>
              *en base a datos de <a href="http://www.idematapp.com" target="_blank" rel="noopener noreferrer">Idemat</a>. Sustainability (Universidad Tecnológica de Delft) licenciada bajo CC BY-4.0.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <ResultComponent 
              waterImpactLandfill={waterImpactLandfill} 
              waterImpact2dnChance={waterImpact2dnChance} 
              carbonImpactLandfill={carbonImpactLandfill} 
              carbonImpact2dnChance={carbonImpact2dnChance} 
            />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8em', marginTop: '8px', flexWrap: 'wrap' }}>
              <p style={{ lineHeight: '1', marginBottom: '0' }}>**♻️ Gestión y reciclaje remanentes de tizada.</p>
              <p style={{ lineHeight: '1', marginTop: '0' }}>**🔄 Textiles por metro para reutilizacion.</p>
            </div> 
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DemoCalculator;