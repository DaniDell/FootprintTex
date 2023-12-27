import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { Box } from '@mui/system';

const ResultComponent = React.memo(({ waterImpactLandfill, waterImpactCloseloop, carbonImpactLandfill, carbonImpactCloseloop }) => {
  const COLORS = ['#747373', '#5E7A64', '#ffffff'];

  const calculateReductionPercentage = (impactLandfill, impactCloseloop) => {
    if (impactLandfill === 0) return 0;
    return ((impactLandfill - impactCloseloop) / impactLandfill) * 100;
  };

  const waterReductionPercentage = useMemo(
    () => calculateReductionPercentage(waterImpactLandfill, waterImpactCloseloop),
    [waterImpactLandfill, waterImpactCloseloop]
  );

  const carbonReductionPercentage = useMemo(
    () => calculateReductionPercentage(carbonImpactLandfill, carbonImpactCloseloop),
    [carbonImpactLandfill, carbonImpactCloseloop]
  );

  const waterMitigated = waterImpactLandfill - waterImpactCloseloop;

  const dataCarbon = useMemo(
    () => [
      {
        name: '',
        landfill: carbonImpactLandfill.toFixed(2),
        closeloop: carbonImpactCloseloop.toFixed(2),
        difference: Math.abs(carbonImpactLandfill - carbonImpactCloseloop).toFixed(2),
      },
    ],
    [carbonImpactLandfill, carbonImpactCloseloop]
  );

  const renderLegendText = (value, entry) => {
    if (entry.dataKey === 'difference') {
      return <span style={{ color: '#4a4a46', fontWeight: 'bold' }}>{value}</span>;
    }
    return value;
  };

  function formatNumber(num) {
    return Number(num).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }

  return (
    <Card sx={{ backgroundColor: '#E6E6E6', width: '100%' }}>
      <CardContent sx={{ marginBottom: '0px' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '0px',
            fontSize: '1.2rem',
          }}
        >
          {Math.abs(dataCarbon[0].difference) < 0.0001
            ? "👆Descubrí el impacto positivo de gestionar tus descartes textiles"
            : `Mitiga ${formatNumber(dataCarbon[0].difference)} Kg de CO2 eq:`}
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dataCarbon} margin={{ top: 5, right: 5, left: 10, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis hide={true} />
            <Legend formatter={renderLegendText} />
            <Bar dataKey="landfill" fill={COLORS[0]} name="Huella vertedero">
              <LabelList dataKey="landfill" position="bottom" />
            </Bar>
            <Bar dataKey="closeloop" stackId="stack" fill={COLORS[1]} name="Gestión y reciclaje">
              <LabelList dataKey="closeloop" position="bottom" />
            </Bar>
            <Bar dataKey="difference" stackId="stack" fill={COLORS[2]} name={`CO2: Se reduce en ${formatNumber(carbonReductionPercentage)}%`}>
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <Box display="flex" justifyContent="center">
          <Box>
            {waterReductionPercentage > 0 && waterMitigated > 0 && (
              <>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.5 rem',
                    marginBottom: '5px',
                    textAlign: 'center',
                  }}
                >{`Realizando separación en origen y reciclaje mecánico, la huella hídrica se reduce en un ${formatNumber(waterReductionPercentage)}% para estas fibras** `}</Typography>
                <hr />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    marginBottom: '0px',
                    textAlign: 'center',
                  }}
                >{`💧${formatNumber(waterMitigated)} Lts. = ${formatNumber(waterMitigated / 900)} años de consumo humano`}</Typography>
              </>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ResultComponent;
