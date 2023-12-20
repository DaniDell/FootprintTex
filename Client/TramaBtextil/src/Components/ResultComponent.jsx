import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/system';

const ResultComponent = ({
  waterImpactLandfill,
  waterImpactCloseloop,
  carbonImpactLandfill,
  carbonImpactCloseloop,
}) => {
  const dataWater = [
    { name: 'Litros de agua', closeloop: waterImpactCloseloop, landfill: waterImpactLandfill },
  ];

  const dataCarbon = [
    { name: 'Kilos CO2 eq', closeloop: carbonImpactCloseloop, landfill: carbonImpactLandfill },
  ];

  // Intercambiar colores
  const COLORS = ['#808080', '#5E7A64']; // Gris oscuro y celeste claro

  const calculateReductionPercentage = (impactLandfill, impactCloseloop) => {
    if (impactLandfill === 0) return 0;
    return ((impactLandfill - impactCloseloop) / impactLandfill) * 100;
  };

  const waterReductionPercentage = calculateReductionPercentage(waterImpactLandfill, waterImpactCloseloop);
  const carbonReductionPercentage = calculateReductionPercentage(
    carbonImpactLandfill,
    carbonImpactCloseloop
  );

  // Calcular litros de agua mitigados
  const waterMitigated = waterImpactLandfill - waterImpactCloseloop;

  // Calcular kilos de CO2 mitigados
  const carbonMitigated = carbonImpactLandfill - carbonImpactCloseloop;

  return (
    <Card sx={{ backgroundColor: '#f8f8f8', width: '100%' }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: '1.5rem' }}>
          Huella mitigada en:
        </Typography>

        
          <Box>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dataCarbon}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="closeloop" fill={COLORS[1]} name="Ciclo cerrado" />
                <Bar dataKey="landfill" fill={COLORS[0]} name="Vertedero" />
              </BarChart>
            </ResponsiveContainer>
            <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '35px', textAlign: 'center' }}>{`Reducción CO2: ${carbonReductionPercentage.toFixed(2)}%`}</Typography>
          </Box>

          <Box display="flex" justifyContent="center" flexWrap="wrap">
          <Box sx={{ marginRight: '20px' }}>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dataWater}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="closeloop" fill={COLORS[1]} name="Ciclo cerrado" />
                <Bar dataKey="landfill" fill={COLORS[0]} name="Vertedero" />
              </BarChart>
            </ResponsiveContainer>
            <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '5px', textAlign: 'center' }}>{`Reducción hídrica: ${waterReductionPercentage.toFixed(2)}%`}</Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem', marginBottom: '10px', textAlign: 'center' }}>{`${Math.round(waterMitigated).toLocaleString('es-ES')} Litros de agua ahorrados`}</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', marginBottom: '10px', fontWeight: 'bold', textAlign: 'center' }}>{`${Math.round(waterMitigated / 900).toLocaleString('es-ES')} Años de consumo humano`}</Typography>
          </Box>
        </Box>
        
    
      </CardContent>
    </Card>
  );
};

export default ResultComponent;
