import React from 'react';
import Typography from '@mui/material/Typography';

const ResultComponent = ({ waterImpact, carbonImpact }) => {
  return (
    <div>
        <Typography variant="h6" gutterBottom >
         Tu acción ha evitado:
        </Typography>
      <Typography variant="h6">Huella hídrica: {waterImpact} litros</Typography>
      <Typography variant="h6">Huella de carbono: {carbonImpact} kg</Typography>
    </div>
  );
};

export default ResultComponent;