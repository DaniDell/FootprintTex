import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { Box } from '@mui/system';

const ResultComponent = ({
  waterImpactLandfill,
  waterImpactCloseloop,
  carbonImpactLandfill,
  carbonImpactCloseloop,
}) => {
  const COLORS = ['#4a4a46', '#5e7a64', '#68BEC6'];

  const calculateReductionPercentage = (impactLandfill, impactCloseloop) => {
    if (impactLandfill === 0) return 0;
    return ((impactLandfill - impactCloseloop) / impactLandfill) * 100;
  };

  const waterReductionPercentage = calculateReductionPercentage(waterImpactLandfill, waterImpactCloseloop);
  const carbonReductionPercentage = calculateReductionPercentage(
    carbonImpactLandfill,
    carbonImpactCloseloop
  );

  const waterMitigated = waterImpactLandfill - waterImpactCloseloop;

  const dataCarbon = [
    {
      name: 'Kilos CO2 eq',
      landfill: carbonImpactLandfill,
      closeloop: carbonImpactCloseloop,
      difference: Math.abs(carbonImpactLandfill - carbonImpactCloseloop).toFixed(2),
    },
  ];

  return (
    <Card sx={{ backgroundColor: '#f8f8f8', width: '100%' }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: '1.5rem' }}>
          Mitigación de huella:
        </Typography>

        <Box>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dataCarbon} margin={{ top: 5, right: 15, left: 2, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="landfill" fill={COLORS[0]} name="Vertedero">  
              </Bar>
              <Bar dataKey="closeloop" stackId="stack" fill={COLORS[1]} name="Ciclo cerrado">
                <LabelList dataKey="closeloop" position="top" />
              </Bar>
              <Bar dataKey="difference" stackId="stack" fill={COLORS[2]} name={`Reducción de CO2 del ${carbonReductionPercentage.toFixed(2)}%`}>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <Typography variant="h5" sx={{ marginBottom: '5px', textAlign: 'center' }}></Typography>
        </Box>

        <Box display="flex" justifyContent="center">
          <Box>
            <Typography variant="body2" sx={{ fontSize: '0.8 rem', marginBottom: '5px', textAlign: 'center' }}>{`Mediante el reciclaje mecánico con separación en origen la huella hídica se reduce en un ${waterReductionPercentage.toFixed(2)}% en esta fibra representando:`}</Typography>
            <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '10px', textAlign: 'center' }}>{`💧${(waterMitigated.toFixed(0)).toLocaleString('es-ES')} Lts. = ${(waterMitigated.toFixed(1) / 900).toLocaleString('es-ES')} Años de consumo humano`}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResultComponent;
