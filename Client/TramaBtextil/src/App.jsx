import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputComponent from './Components/InputComponent';
import ResultComponent from './Components/ResultComponent';
import { calculateImpact } from './Funtions/calculateImpact';
import { setImpact } from './redux/actions';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Container, Grid, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'; 

function App() {
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
      alert('Por favor, rellene todos los campos.');
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
    <div>
      <CssBaseline />
      <Navbar />
      <Container>
        <div style={{ padding: '10px' }}>
          <Typography variant="h6" gutterBottom>
            <p style={{ fontWeight: 'normal', fontSize: 'smaller' }}>Realizá tu calculo en vivo*:</p>
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputComponent 
              onInputChange={handleInputChange} 
              onTextileCompositionChange={handleCompositionChange} 
              onCalculateClick={handleCalculateClick} 
            />
             <Typography variant="body2" sx={{ fontSize: '0.55rem', marginTop: '20px', textAlign: 'center', fontStyle: 'italic', color: 'gray' }}>
             Datos de CO2 proporcionados por Idemat Sustainability (Universidad Tecnológica de Delft). La información está licenciada bajo CC BY-4.0 (Creative Commons Attribution 4.0 International License).
 Más información en <a href="http://www.idematapp.com" target="_blank" rel="noopener noreferrer">Idemat</a>.
        </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <ResultComponent 
            waterImpactLandfill={waterImpactLandfill} 
            waterImpactCloseloop={waterImpactCloseloop} 
            carbonImpactLandfill={carbonImpactLandfill} 
            carbonImpactCloseloop={carbonImpactCloseloop} 
          />
            <p>*Versión para educación ambiental. </p>
          
          </Grid>
          
        </Grid>
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;