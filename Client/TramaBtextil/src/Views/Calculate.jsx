import React, { Suspense, useState, useEffect } from "react";
import { CircularProgress, Fab, Tooltip, IconButton } from "@mui/material";
import DemoCalculator from "../Components/DemoCalculator";
import AlertDialog from "../Components/AlertDialog";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

const StyledFab = styled(Fab)({
  fontSize: "25px",
  float: "left", // Añade esta línea
  "&:hover": {
    backgroundColor: "#f2f2f2",
  },
});

const Calculate = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000); // 3000ms = 3s

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

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
    scrollPosition > 100 || window.innerWidth <= 1100 ? "10rem" : "10vh";
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

      <div
        style={{
          position: "fixed",
          bottom: bottomValue,
          right: rightValue,
          transition: "bottom 1s ease-out, right 1s ease-out",
          
        }}
      >
        <Tooltip title="Ver información adicional" placement="top">
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
              <strong>Hebra Circular</strong> puede reciclar todo tipo de fibras mediante el
              reciclaje mecánico, generando paños reconstituidos para variados
              usos. Gestionando el remanente textil  desde la mesa de corte con trazabilidad.
              <br />
              <br />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7uAJWs8KeIIxCZ-CLyKvJ-rNxPp67bLku3n_NLhwZbMLsGQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
              Si deseas más información, completá el formulario haciendo click en este enlace.
              </a>
            </>
          }
          confirmText="Cerrar"
          onConfirm={handleCloseDialog}
        />
      </div>


<div
style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "90vw",
  minHeight: "5rem",
  marginTop: '10px'
}}
>
  {show && (
    <>
    
<IconButton onClick={handleOpen} style={{ display: 'flex', alignItems: 'flex-start', paddingRight: "30px" }}>
  <InfoOutlined style={{ cursor: 'pointer', margin: '0px', fontSize: '20px'}} />
  <p style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', }}> ¿Qué es el CO₂☁ equivalente?</p>
</IconButton>

      

      <AlertDialog 
        open={open} 
        handleClose={handleClose} 
        title="¿Qué el valor de CO2 equivalente?" 
        content="Los valores de CO2 equivalente representan una medida utilizada para comparar las emisiones de diferentes gases de efecto invernadero (GEI) en función de su potencial de calentamiento global (GWP). 

        El CO2 es el gas de referencia y se le asigna un valor de 1. Los demás gases se comparan con el CO2 y se les asigna un valor de equivalencia en función de su potencial de calentamiento global. Por ejemplo, el metano (CH4) tiene un potencial de calentamiento global 25 veces mayor que el CO2, por lo que se le asigna un valor de 25." 
        confirmText="Más info en greenpeace.com"
        cancelText="Cerrar" 
        onConfirm={() => window.open('https://www.greenpeace.org/mexico/blog/9386/huella-de-carbono/', '_blank')}
        onCancel={handleClose} 
      />
    </>
  )}
</div>
    </div>
  );
};

export default Calculate;
