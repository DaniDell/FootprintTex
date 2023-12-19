import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';


const InputComponent = ({ onInputChange, onTextileCompositionChange, onCalculateClick })  => {

  const [composition, setComposition] = useState('');

  return (
    <div>
      <Box mb={1.5}>
        <FormControl fullWidth>
          <InputLabel>Composición del textil</InputLabel>
          <Select  label="Composición del textil"
          value={composition}
          onChange={(e) => {
            setComposition(e.target.value);
            onTextileCompositionChange(e.target.value); // Asegúrate de pasar el valor correcto
          }}>
            <MenuItem value="algodon">Algodón</MenuItem>
            <MenuItem value="poliester">Poliéster</MenuItem>
            <MenuItem value="Mix de composiciones">Mix de composiciones</MenuItem>
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