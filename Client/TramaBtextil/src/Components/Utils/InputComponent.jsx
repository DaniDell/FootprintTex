import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid, FormHelperText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box } from '@mui/material';

const InputComponent = ({ onInputChange, onTextileCompositionChange, onCalculateClick })  => {

  const [composition, setComposition] = useState('');
  const [kilos, setKilos] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [compositionError, setCompositionError] = useState('');
  const [open, setOpen] = useState(false);
  const [newKilosError, setNewKilosError] = useState('');

  useEffect(() => {
    setIsValid(composition !== '' && kilos !== '' && kilos >= 0.001);
  }, [composition, kilos]);

  const handleKilosChange = (e) => {
    const value = e.target.value;
    if (value === '' || isNaN(value) || value < 0 || value.includes('e')) {
      setError('El valor debe ser un número mayor o igual a 0 y no puede contener la letras.');
    } else {
      setKilos(Number(value));
      onInputChange(Number(value));
      setError('');
    }
  };

  const handleCompositionChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setCompositionError('Debe seleccionar una composición textil.');
    } else {
      setComposition(value);
      onTextileCompositionChange(value);
      setCompositionError('');
    }
  };





  const handleCalculateClick = () => {
    let isValid = true;
    let newCompositionError = '';
    let newKilosError = '';
  
    if (!composition) {
      isValid = false;
      newCompositionError = 'Seleccione una composición.';
    }
  
    if (!kilos) {
      isValid = false;
      newKilosError = 'Introduzca los kilos.';
    }
  
    setCompositionError(newCompositionError);
    setNewKilosError(newKilosError);
  
    if (!isValid) {
      setOpen(true);
    } else {
      onCalculateClick();
      setTimeout(() => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 0);
    }
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box mb={1.5}>
        <FormControl fullWidth error={!!compositionError}>
          <InputLabel id="textile-composition-label">Composición fibra textil </InputLabel>
          <Select  
            labelId="textile-composition-label"
            label="Composición base fibra textil"
            value={composition}
            onChange={handleCompositionChange}
            sx={{ fontSize: '0.9rem', textAlign: 'left' }}> 
            <MenuItem value="algodon Reciclado">♻️ Algodón gestión para Reciclado </MenuItem>
            <MenuItem value="poliester Reciclado">♻️ Poliéster gestión para Reciclado</MenuItem>
            <MenuItem value="Mezcla sin definición Reciclado">♻️ Mezcla de fibras para Reciclado</MenuItem>
            <MenuItem value="algodon Reutilizado">🔄 Tela de algodón recirculado</MenuItem>
            <MenuItem value="poliester Reutilizado">🔄 Tela de Poliéster recirculado</MenuItem>
            <MenuItem value="Mezcla sin definición Reutilizado">🔄 Tela mezcla de fibras recirculado</MenuItem>
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
  error={!!newKilosError}
  helperText={newKilosError}
/>
        </Grid>
     
        <Grid item xs={4}>
  <Button fullWidth variant="contained" color="primary" onClick={handleCalculateClick} >
    Calcular
  </Button>
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Por favor, rellene todos los campos correctamente
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
</Grid>
      </Grid>

    </div>
  );
};

export default InputComponent;