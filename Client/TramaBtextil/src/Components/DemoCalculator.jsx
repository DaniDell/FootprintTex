import React, { useState, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateImpact } from './../Funtions/calculateImpact';
import { setImpact } from './../redux/actions'
import { Container, Grid, Typography, Box } from '@mui/material';
const InputComponent = lazy(() => import('./Utils/InputComponent'));
const ResultComponent = lazy(() => import('./Utils/ResultComponent'));

function DemoCalculator() {
 // Redux dispatch function
 const dispatch = useDispatch();

 // Selecting state from Redux store
 const { waterImpactLandfill, waterImpactCloseloop, carbonImpactLandfill, carbonImpactCloseloop } = useSelector(state => state.impact);

 // Local state for composition and kilograms
 const [composition, setComposition] = useState('algodon'); 
 const [kilograms, setkilograms] = useState(0);

 // Handler for input change
 const handleInputChange = (value) => {
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
 };

 return (
<Box maxWidth={800} margin="auto">
<Container>
  <div style={{  marginTop: '80px' }}>
    <Typography variant="h6" gutterBottom>
      {waterImpactLandfill === 0 && (
        <p style={{ fontWeight: 'normal', fontSize: 'smaller', marginLeft: '10px' }}>Realizá tu calculo en vivo*:</p>
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
      waterImpactCloseloop={waterImpactCloseloop} 
      carbonImpactLandfill={carbonImpactLandfill} 
      carbonImpactCloseloop={carbonImpactCloseloop} 
    />
              
    </Grid>
    
  
</Container>
</Box>
  );
}

export default DemoCalculator;