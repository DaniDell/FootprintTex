import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';

const InputComponent = ({ onInputChange, onTextileCompositionChange, onCalculateClick })  => {
  return (
    <div>
      <Box mb={1.5}>
        <FormControl fullWidth>
          <InputLabel>Composición del textil</InputLabel>
          <Select  label="Composición del textil" onChange={(e) => onTextileCompositionChange(e.target.value)}>
            <MenuItem value="algodon">Algodón</MenuItem>
            <MenuItem value="poliester">Poliéster</MenuItem>
            <MenuItem value="lana">Lana</MenuItem>
            {/* Agrega aquí más opciones según sea necesario */}
          </Select>
        </FormControl>
      </Box>
      <Box mb={1.5}>
        <TextField 
          type="number"
          onChange={(e) => onInputChange(e.target.value)}
          label="Kilos gestionados"
          fullWidth
        />
      </Box>
      <Box mb={1.5}>
        <Button variant="contained" color="primary" onClick={onCalculateClick}>
          Calcular
        </Button>
      </Box>
    </div>
  );
};

export default InputComponent;