import React, { Suspense, useState, useEffect } from "react";
import { CircularProgress, Fab, Tooltip } from "@mui/material";
import DemoCalculator from "../Components/DemoCalculator";
import AlertDialog from "../Components/AlertDialog";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

const StyledFab = styled(Fab)({
  fontSize: "25px",
  float: "left",
  "&:hover": {
    backgroundColor: "#00947A",
  },
});

const Calculate = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  const bottomValue =
    scrollPosition > 100 || window.innerWidth <= 1100 ? "5rem" : "10vh";
  const rightValue =
    scrollPosition > 100 || window.innerWidth <= 1100 ? "5vw" : "5vw";

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Suspense fallback={<CircularProgress size={200} aria-label="Loading" />}>
        <DemoCalculator />
      </Suspense>
      <div style={{ height: "2rem" }}></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          position: "fixed",
          bottom: bottomValue,
          right: rightValue,
          transition: "bottom 1s ease-out, right 1s ease-out",
        }}
      >
        <Tooltip title="Conocé más sobre reciclaje textil" placement="top">
          <StyledFab
            color=""
            onClick={handleOpenDialog}
            style={{
              fontSize: "30px",
              height: "48px",
              width: "48px",
              float: "left",
            }}
          >
            ♻️
          </StyledFab>
        </Tooltip>

        <AlertDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title="Gestión y Reciclaje en Argentina:"
          content={
            <>
              <strong>Hebra Circular</strong> puede reciclar todo tipo de fibras
              mediante el reciclaje mecánico, generando paños reconstituidos
              para variados usos. Gestionando el remanente textil desde la mesa
              de corte con trazabilidad.
              <br />
              <br />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7uAJWs8KeIIxCZ-CLyKvJ-rNxPp67bLku3n_NLhwZbMLsGQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Si deseas más información, completá el formulario haciendo click
                en este enlace.
              </a>
            </>
          }
          confirmText="Cerrar"
          onConfirm={handleCloseDialog}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddinqTop: "1rem",
          }}
        >
          <>
            <Tooltip title="¿Qué es el CO₂☁ equivalente?" arrow>
              <StyledFab
                color="secondary"
                onClick={handleOpen}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  height: "48px",
                  width: "48px",
                  float: "left",
                  padding: "4px 0 4px 0",
                  lineHeight: "1",
                }}
              >
                <InfoOutlined style={{ margin: 0, padding: 0 }} />
                co₂
              </StyledFab>
            </Tooltip>
            <AlertDialog
              open={open}
              handleClose={handleClose}
              title="¿Qué el valor de CO2 equivalente?"
              content="Los valores de CO2 equivalente representan una medida utilizada para comparar las emisiones de diferentes gases de efecto invernadero (GEI) en función de su potencial de calentamiento global (GWP). 

        El CO2 es el gas de referencia y se le asigna un valor de 1. Los demás gases se comparan con el CO2 y se les asigna un valor de equivalencia en función de su potencial de calentamiento global. Por ejemplo, el metano (CH4) tiene un potencial de calentamiento global 25 veces mayor que el CO2, por lo que se le asigna un valor de 25."
              confirmText="Más info en greenpeace.com"
              cancelText="Cerrar"
              onConfirm={() =>
                window.open(
                  "https://www.greenpeace.org/mexico/blog/9386/huella-de-carbono/",
                  "_blank"
                )
              }
              onCancel={handleClose}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
