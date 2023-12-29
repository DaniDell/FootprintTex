// ExplanationView.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const ExplanationView = () => {
  return (
    <Container>
      <Typography variant="h4">Explicación del proceso de reciclaje mecánico</Typography>
      <Typography variant="body1">
        Aquí puedes agregar la explicación de los cálculos y el proceso de reciclaje mecánico.
      </Typography>
      <div>
        <iframe 
          width="560" 
          height="315" 
          src="URL_DEL_VIDEO" 
          title="Video de explicación"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

export default ExplanationView;