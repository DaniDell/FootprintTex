import React, { useMemo, lazy } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
const CarbonChart = lazy(() => import("../Utils/CarbonChartGrafic"));
import svgBackground from "../../assets/background.svg";

const ResultComponent = React.memo(({ waterImpactLandfill, waterImpact2dnChance, carbonImpactLandfill, carbonImpact2dnChance }) => {
  const waterReductionPercentage = useMemo(
    () => ((waterImpactLandfill - waterImpact2dnChance) / waterImpactLandfill) * 100,
    [waterImpactLandfill, waterImpact2dnChance]
  );

  const carbonReductionPercentage = useMemo(
    () => ((carbonImpactLandfill - carbonImpact2dnChance) / carbonImpactLandfill) * 100,
    [carbonImpactLandfill, carbonImpact2dnChance]
  );

  const waterMitigated = waterImpactLandfill - waterImpact2dnChance;

  const dataCarbon = useMemo(
    () => [
      {
        name: '',
        landfill: carbonImpactLandfill.toFixed(2),
        closeloop: carbonImpact2dnChance.toFixed(2),
        mitiga: Math.abs(carbonImpactLandfill - carbonImpact2dnChance).toFixed(2),
      },
    ],
    [carbonImpactLandfill, carbonImpact2dnChance]
  );

  function formatNumber(num) {
    return Number(num).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }

  return (

    <Card sx={{ 
      width: '100%', 
      backgroundImage: `url(${svgBackground})`, 
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain', // or 'cover', or a specific size like '100px 100px'
      backgroundPosition: 'start',
    
    }}>
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
          {Math.abs(dataCarbon[0].mitiga) < 0.0001
            ? "Descubrí el impacto positivo de gestionar tus descartes textiles"
            : `Mitiga ${formatNumber(dataCarbon[0].mitiga)} Kg de CO2 eq:`}
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
                >{`Realizando separación en origen la huella hídrica se reduce en un ${formatNumber(waterReductionPercentage)}% para estas fibras** `}</Typography>
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
                  style={{ fontSize: '12px', textAlign: 'center', display: 'block' }}
                >
                  **datos Fundación Ellen MacArthur.
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
