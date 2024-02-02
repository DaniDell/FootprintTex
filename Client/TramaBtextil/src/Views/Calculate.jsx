import React, { Suspense, useState } from "react";
import { CircularProgress, Fab, Tooltip } from "@mui/material";
import DemoCalculator from "../Components/DemoCalculator";
import AlertDialog from "../Components/AlertDialog";
import InfoIcon from "@mui/icons-material/Info";

const Calculate = () => {
  const [openDialog, setOpenDialog] = useState(false);

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
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <Suspense fallback={<CircularProgress />}>
        <DemoCalculator />
      </Suspense>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title="Ver información adicional">
          <Fab color="custom" onClick={handleOpenDialog}>
            <InfoIcon style={{ fontSize: "2em", color: "#F8F8F8" }} />
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
