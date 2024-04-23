import React, { useMemo, lazy } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
const CarbonChart = lazy(() => import("../Utils/CarbonChartGrafic"));
import svgBackground from "../../assets/background.svg";


function formatNumber(num) {
  return Number(num).toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
}

const ResultComponent = React.memo(
  ({
    waterImpactLandfill,
    waterImpact2dnChance,
    carbonImpactLandfill,
    carbonImpact2dnChance,
  }) => {
    const waterReductionPercentage = useMemo(
      () =>
        ((waterImpactLandfill - waterImpact2dnChance) / waterImpactLandfill) *
        100,
      [waterImpactLandfill, waterImpact2dnChance]
    );

    const carbonReductionPercentage = useMemo(
      () =>
        ((carbonImpactLandfill - carbonImpact2dnChance) /
          carbonImpactLandfill) *
        100,
      [carbonImpactLandfill, carbonImpact2dnChance]
    );

  
    const waterMitigated = useMemo(
      () => waterImpactLandfill - waterImpact2dnChance,
      [waterImpactLandfill, waterImpact2dnChance]
    );

    const dataCarbon = useMemo(
      () => [
        {
          name: "",
          landfill: carbonImpactLandfill.toFixed(2),
          closeloop: carbonImpact2dnChance.toFixed(2),
          mitiga: Math.abs(
            carbonImpactLandfill - carbonImpact2dnChance
          ).toFixed(2),
        },
      ],
      [carbonImpactLandfill, carbonImpact2dnChance]
    );

    return (
      <Card
        sx={{
          width: "100%",
          height: "80%",
          background: `url(${svgBackground})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "start",
          borderRadius: "25px",
          border: "1px solid #0000",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent sx={{ marginBottom: "0px" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              paddingLeft: "6px",
              paddingRight: "6px",
              fontSize: "1rem",
              fontFamily: "Poppins",
            }}
          >
            {Math.abs(dataCarbon[0].mitiga) < 0.0001
              ? ""
              : `Mitiga ${formatNumber(
                  carbonReductionPercentage
                )}% de las emisiones CO₂☁eq. mediante el ♻️ reciclaje mecánico, en comparación con su disposición final en vertedero*:`}
          </Typography>

          <CarbonChart
            data={dataCarbon}
            carbonReductionPercentage={carbonReductionPercentage}
            formatNumber={formatNumber}
          />

          <Box display="flex" justifyContent="center">
            <Box>
              {waterReductionPercentage > 0 && waterMitigated > 0 && (
                <>
                  <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1rem",
                      marginBottom: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      padding: "0.5rem",
                      lineHeight: "1.2",
                      fontFamily: "Poppins",
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                  >{`💧 Ahorrando ${formatNumber(
                    waterMitigated
                  )} litros de agua =  ${Math.floor(
                    waterMitigated / 900
                  ).toLocaleString("de-DE", {
                    minimumFractionDigits: 0,
                  })} años de consumo humano`}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1.2 rem",
                      marginBottom: "5px",
                      textAlign: "center",
                      padding: " 0 0.5rem 0.5rem 0.5rem",
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      lineHeight: "1",
                    }}
                  >{`Se reduce en un ${formatNumber(
                    waterReductionPercentage
                  )}% la huella hídrica realizando separación en origen.`}
                  <a
                    href="https://emf.thirdlight.com/link/2axvc7eob8zx-za4ule/@/preview/1?o"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    (datos hídricos Fund. Ellen MacArthur)
                  </a> </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "0.8em",
                      marginTop: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                  
                  </div>
                </>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
);

export default ResultComponent;
