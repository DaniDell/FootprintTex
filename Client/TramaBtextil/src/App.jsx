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
  const dispatch = useDispatch();
  const { waterImpact, carbonImpact } = useSelector(state => state.impact);
  const [composition, setComposition] = useState(''); 
  const [kilos, setKilos] = useState(0);

  const handleInputChange = (value) => {
    setKilos(value); // Almacena el valor actual de kilos gestionados
  };

  const handleCalculateClick = () => {
    const impact = calculateImpact(kilos, composition);
    dispatch(setImpact(impact));
  };

  const handleCompositionChange = (value) => {
    setComposition(value);
    handleInputChange(kilos);
  };

  return (
    <div >
      <CssBaseline />
      <Navbar />
      <Container >
      <div style={{ padding: '10px' }}>
        <Typography variant="h6" gutterBottom >
          Mitigación de tu huella textil.
        </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputComponent onInputChange={handleInputChange} onTextileCompositionChange={handleCompositionChange} onCalculateClick={handleCalculateClick} />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <ResultComponent waterImpact={waterImpact} carbonImpact={carbonImpact} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;