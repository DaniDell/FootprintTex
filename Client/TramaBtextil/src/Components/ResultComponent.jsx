import React, { useMemo, lazy } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
const CarbonChart = lazy(() => import("./CarbonChartGrafic"));

const ResultComponent = React.memo(({ waterImpactLandfill, waterImpactCloseloop, carbonImpactLandfill, carbonImpactCloseloop }) => {
  const waterReductionPercentage = useMemo(
    () => ((waterImpactLandfill - waterImpactCloseloop) / waterImpactLandfill) * 100,
    [waterImpactLandfill, waterImpactCloseloop]
  );

  const carbonReductionPercentage = useMemo(
    () => ((carbonImpactLandfill - carbonImpactCloseloop) / carbonImpactLandfill) * 100,
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
            ? "Descubrí el impacto positivo de gestionar tus descartes textiles"
            : `Mitiga ${formatNumber(dataCarbon[0].difference)} Kg de CO2 eq:`}
        </Typography>

        <CarbonChart data={dataCarbon} carbonReductionPercentage={carbonReductionPercentage} formatNumber={formatNumber}/>

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
                <a 
                  href="https://emf.thirdlight.com/link/2axvc7eob8zx-za4ule/@/preview/1?o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.5rem', textAlign: 'center', display: 'block' }}
                >
                  **Cálculo estimado con datos proporcionados por la Fundación Ellen MacArthur.
                </a>
              </>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ResultComponent;
