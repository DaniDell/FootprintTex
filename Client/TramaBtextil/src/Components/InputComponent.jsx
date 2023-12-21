import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';

const InputComponent = ({ onInputChange, onTextileCompositionChange, onCalculateClick })  => {

  const [composition, setComposition] = useState('');

  return (
    <div>
      <Box mb={1.5}>
        <FormControl fullWidth>
          <InputLabel id="textile-composition-label">Composición base del textil</InputLabel>
          <Select  
            labelId="textile-composition-label"
            label="Composición base del textil"
            value={composition}
            onChange={(e) => {
              setComposition(e.target.value);
              onTextileCompositionChange(e.target.value); // Asegúrate de pasar el valor correcto
            }}>
              <MenuItem value="algodon">Algodón</MenuItem>
              <MenuItem value="poliester">Poliéster</MenuItem>
              <MenuItem value="Mezcla sin definición">Mezcla sin definición</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField 
            type="number"
            onChange={(e) => onInputChange(e.target.value)}
            label="kilos gestionados"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={onCalculateClick}>
            Calcular
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputComponent;