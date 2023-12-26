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
  const COLORS = ['#747373', '#538D60', '#68BEC6'];

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
      name: '',
      landfill: (carbonImpactLandfill).toFixed(2),
      closeloop: (carbonImpactCloseloop).toFixed(2),
      difference: Math.abs(carbonImpactLandfill - carbonImpactCloseloop).toFixed(2),
    },
  ];

  const renderLegendText = (value, entry) => {
    if (entry.dataKey === 'difference') {
      return <span style={{ color: '#4a4a46'}}>{value}</span>;
    }
    return value;
  };

  return (
    <Card sx={{ backgroundColor: '#F6E2C5', width: '100%' }}>
      <CardContent sx={{  marginBottom: '0px'}}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: '1.2rem' }}>
          {Math.abs(dataCarbon[0].difference) < 0.0001 ? "Descubrí el impacto positivo de gestionar tus descartes textiles" : `Mitigación de ${dataCarbon[0].difference} CO2 eq:`}
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dataCarbon} margin={{ top: 5, right: 5, left: 10, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis hide={true} />
            <Tooltip />
            <Legend formatter={renderLegendText} />
            <Bar dataKey="landfill" fill={COLORS[0]} name="Huella vertedero">  
              <LabelList dataKey="landfill" position="bottom" />
            </Bar>
            <Bar dataKey="closeloop" stackId="stack" fill={COLORS[1]} name="Gestión y reciclaje">
              <LabelList dataKey="closeloop" position="bottom" />
            </Bar>
           
             <Bar dataKey="difference" stackId="stack" fill={COLORS[2]} name={`Reducción del ${carbonReductionPercentage.toFixed(2)}% en CO2 eq`}>
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <Box display="flex" justifyContent="center">
          <Box>
            {waterReductionPercentage > 0 && waterMitigated > 0 && (
              <>
                <Typography variant="body2" sx={{ fontSize: '0.1 rem', marginBottom: '5px', textAlign: 'center' }}>{`Realizando separación en origen y reciclaje mecánico, la huella hídrica se reduce en un ${waterReductionPercentage.toFixed(2)}% para las fibras elegidas `}</Typography>
                <hr />
        <Typography variant="h6" sx={{ fontSize: '0.85rem', marginBottom: '0px', textAlign: 'center' }}>
          {`💧${Number((waterMitigated).toFixed(1)).toLocaleString('es-ES')} Lts. = ${Number((waterMitigated / 900).toFixed(1)).toLocaleString('es-ES')} años de consumo humano`}
        </Typography>
              </>
            )} </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResultComponent;
