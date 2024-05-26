import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import AlertDialog from '../Components/AlertDialog';

const SetfinalImpact = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const impact = useSelector(state => state.impact);

  const formatNumber = (num, unit) => {
    const formatter = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return `${formatter.format(num)} ${unit}`;
  };

  const { waterImpact, carbonImpact } = useMemo(() => {
    return { 
      waterImpact: formatNumber(impact.waterImpactLandfill, 'litros'), 
      carbonImpact: formatNumber(impact.carbonImpactLandfill, 'kilos de CO2e') 
    };
  }, [impact]);

  if (
    impact.waterImpactLandfill === 0 &&
    impact.waterImpact2dnChance === 0 &&
    impact.carbonImpactLandfill === 0 &&
    impact.carbonImpact2dnChance === 0
  ) {
    return null;
  }

  const handleOpenDialog = (option) => { 
    setSelectedOption(option); 
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
 
  let dialogTitle = selectedOption;

if (openDialog === 'Recircular') {
  dialogTitle = "Recircular";
} else if (openDialog === 'Reciclar') {
  dialogTitle = "Reciclar";
} else if (openDialog === 'Reutilizar con impacto social') {
  dialogTitle = "Reutilizar con impacto social";
}
 
 let customContent = (
  <>
    <Typography component="div">Huella Hídrica: {waterImpact}</Typography>
    <Typography component="div">Huella de Carbono: {carbonImpact}</Typography>
  </>
);

if (selectedOption === 'Recircular') {
  customContent = (
    <>
     
<Typography component="div">
  Recircular es una estrategia que busca reintroducir los materiales en el ciclo de producción, evitando su descarte. Esto puede incluir el reuso de productos o materiales en su forma original.
</Typography>
<br />
{customContent}
<div style={{ height: '100px', overflow: 'hidden' }}>
  <img 
    src="https://acdn.mitiendanube.com/stores/953/193/categories/tienda-banner2x-378cbd8bc38717e3cd16881489773839-1920-1920.png" 
    alt="Recircular" 
    style={{ height: '100%', width: 'auto' }} 
  />
</div>
<Typography component="div">
  Un ejemplo de un gestor de esta práctica es <a href="https://www.segundasoportunidades.com.ar/" target="_blank" rel="noopener noreferrer">Segundas oportunidades</a>, si tenés metros de tela o retazos grandes podrás colocarlos a venta en su plataforma.
</Typography>

    </>
  );
} else if (selectedOption === 'Reciclar') {
  customContent = (
    <>
      
      <Typography component="div">
        Reciclar implica convertir los materiales en nuevos productos o materias primas, reduciendo la necesidad de utilizar recursos naturales. Es una forma efectiva de reducir la cantidad de residuos enviados a vertederos y contribuir a la conservación del medio ambiente.
      </Typography>
      <br />
      {customContent}
    </>
  );
} else if (selectedOption === 'Reutilizar con impacto social') {
  customContent = (
    <>
      
      <Typography component="div">
        Reutilizar con impacto social se refiere a la práctica de dar nueva vida a los productos o materiales, a menudo a través de procesos de reparación o remanufactura. Esta práctica no solo reduce el impacto ambiental de la producción de nuevos productos, sino que también puede generar oportunidades económicas y sociales para comunidades vulnerables.
      </Typography>
      <br />
      {customContent}
    </>
  );
}
  return (
<div style={{ maxWidth: '700px', marginBottom: "2rem" }}>
  <Paper elevation={3} sx={{ borderRadius: 5, padding: '1.2rem' }}>
 
      <Typography sx={{fontFamily: "Poppins",  marginBottom: '1rem' }}>
      El<strong> mejor descarte</strong> es el que <strong>no</strong> se genera y que la <strong>'basura'</strong> es un recurso en el lugar incorrecto.<br></br><br></br> Mientras ideamos una nueva forma de generar productos textiles 100% circulares: monomaterial, biodegradable o de larga durabilidad reciclables... <strong>Gestioná tus remanentes con responsabilidad</strong> para mitigar su costo ambiental y generar impacto social positivo <br></br><br></br> Elegí la forma para comenzar: 
            </Typography>
{['Recircular', 'Reciclar', 'Reutilizar con impacto social'].map((label, index) => (
  <Button 
    key={index} 
    variant="contained" 
    color="primary" 
    onClick={() => handleOpenDialog(label)} 
    sx={{ margin: '0.5rem' }}
  >
    {label}
  </Button>
))}
      </Paper>
      <AlertDialog
  open={openDialog}
  handleClose={handleCloseDialog}
  title={dialogTitle}
  content={customContent}
  confirmText="Cerrar"
  onConfirm={handleCloseDialog}
/>



    </div>
  );
};

SetfinalImpact.propTypes = {
  impact: PropTypes.shape({
    waterImpactLandfill: PropTypes.number,
    waterImpact2dnChance: PropTypes.number,
    carbonImpactLandfill: PropTypes.number,
    carbonImpact2dnChance: PropTypes.number,
  }),
};

export default React.memo(SetfinalImpact);