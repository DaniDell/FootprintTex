import React, { Suspense, useState, useEffect } from "react";
import { CircularProgress, Fab, Tooltip } from "@mui/material";
import DemoCalculator from "../Components/DemoCalculator";
import AlertDialog from "../Components/AlertDialog";

const Calculate = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const bottomValue = (scrollPosition > 100 || window.innerWidth <= 768) ? '5.5rem' : '3.5rem';

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        minHeight: "calc(100vh - 145px)",
        paddingTop: "1vh",
        paddingBottom: "1vh",
      }}
    >
      <Suspense fallback={<CircularProgress />}>
        <DemoCalculator />
      </Suspense>
      <div style={{ position: "fixed", right: "15px", bottom: bottomValue, transition: 'bottom 0.3s ease-out'  }}>
  <Tooltip title="Ver información adicional">
    <Fab color="custom" onClick={handleOpenDialog}>
      <span style={{ fontSize: "3em", color: "#F8F8F8" }}>♻</span>
    </Fab>
        </Tooltip>

        <AlertDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title="Gestión y Reciclaje Hebra:"
          content={
            <>
              Hebra Circular puede reciclar todo tipo de fibras mediante el
              reciclaje mecánico, generando paños reconstituidos para variados
              usos.
              <br />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7uAJWs8KeIIxCZ-CLyKvJ-rNxPp67bLku3n_NLhwZbMLsGQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Podés recibir más información aquí
              </a>
            </>
          }
          confirmText="Cerrar"
          onConfirm={handleCloseDialog}
        />
      </div>
    </div>
  );
};

export default Calculate;
