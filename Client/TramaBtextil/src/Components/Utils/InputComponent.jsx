import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid, FormHelperText } from '@mui/material';

const InputComponent = ({ onInputChange, onTextileCompositionChange, onCalculateClick })  => {

  const [composition, setComposition] = useState('');
  const [kilos, setKilos] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [compositionError, setCompositionError] = useState('');

  useEffect(() => {
    setIsValid(composition !== '' && kilos !== '' && kilos >= 0);
  }, [composition, kilos]);

  const handleKilosChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && !value.includes('e')) {
      setKilos(Number(value));
      onInputChange(Number(value));
      setError('');
    } else {
      setError('El valor debe ser un número mayor o igual a 0 y no puede contener la letras.');
    }
  };

  const handleCompositionChange = (e) => {
    const value = e.target.value;
    if (value !== '') {
      setComposition(value);
      onTextileCompositionChange(value);
      setCompositionError('');
    } else {
      setCompositionError('Debe seleccionar una composición textil.');
    }
  };

  const handleCalculateClick = () => {
    onCalculateClick();
    setTimeout(() => {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 0);
  };
  
  return (
    <div>
      <Box mb={1.5}>
        <FormControl fullWidth error={!!compositionError}>
          <InputLabel id="textile-composition-label">Composición base del textil</InputLabel>
          <Select  
            labelId="textile-composition-label"
            label="Composición base del textil"
            value={composition}
            onChange={handleCompositionChange}>
              <MenuItem value="algodon Reciclado">Algodón para Reciclado ♻️</MenuItem>
              <MenuItem value="poliester Reciclado">Poliéster para Reciclado ♻️</MenuItem>
              <MenuItem value="Mezcla sin definición Reciclado">Mezcla de fibras para Reciclado ♻️</MenuItem>
              <MenuItem value="algodon Reutilizado">Tela de algodón Recuperados 🔄</MenuItem>
              <MenuItem value="poliester Reutilizado">Tela de Poliéster Recuperados 🔄</MenuItem>
              <MenuItem value="Mezcla sin definición Reutilizado">Tela Mezcla s/definición Recuperados 🔄</MenuItem>
          </Select>
          <FormHelperText>{compositionError}</FormHelperText>
        </FormControl>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField 
            type="number"
            onChange={handleKilosChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            label="kilos gestionados"
            fullWidth
            size="small"
            error={!!error}
            helperText={error}
          />
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleCalculateClick} disabled={!isValid}>
            Calcular
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputComponent;