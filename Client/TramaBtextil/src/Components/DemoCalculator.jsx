import React, { useState, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateImpact } from './../Funtions/calculateImpact';
import { setImpact, clearImpact } from './../redux/actions'
import { Container, Grid, Typography, Box } from '@mui/material';
const InputComponent = lazy(() => import('./Utils/InputComponent'));
const ResultComponent = lazy(() => import('./Utils/ResultComponent'));

function DemoCalculator() {
 // Redux dispatch function
 const dispatch = useDispatch();

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
<Box maxWidth={800} height="auto">
<Container>
  <div >
    <Typography variant="h6" gutterBottom>
      {waterImpactLandfill === 0 && (
        <p style={{ fontWeight: 'normal', fontSize: 'large', marginLeft: '10px' }}>Realizá tu calculo en vivo*:</p>
      )}
    </Typography>
  </div>
  
      <InputComponent 
        onInputChange={handleInputChange} 
        onTextileCompositionChange={handleCompositionChange} 
        onCalculateClick={handleCalculateClick} 
      />
      <Typography variant="body2" sx={{ fontSize: '12px', margin: '25px', textAlign: 'center', fontStyle: 'italic', color: 'black' }}>
        *en base a datos de <a href="http://www.idematapp.com" target="_blank" rel="noopener noreferrer">Idemat</a>. Sustainability (Universidad Tecnológica de Delft) licenciada bajo CC BY-4.0.
         
      </Typography>
             <Grid item xs={12} sm={6}>
    <ResultComponent 
      waterImpactLandfill={waterImpactLandfill} 
      waterImpact2dnChance={waterImpact2dnChance} 
      carbonImpactLandfill={carbonImpactLandfill} 
      carbonImpact2dnChance={carbonImpact2dnChance} 
    />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '0', fontSize: '0.8em', marginTop: '8px' }}>
      <p>**♻️ Gestión y reciclaje remanentes de tizada.</p>
      <p>**🔄 Textiles por metro para reutilizacion.</p>
    </div>       
    </Grid>
    
  
</Container>
</Box>
  );
}

export default DemoCalculator;