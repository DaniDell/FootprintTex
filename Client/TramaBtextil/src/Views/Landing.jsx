import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Button, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "108vh",
      }}
    >
      <Suspense fallback={<CircularProgress />}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "35px" }}>
            <h1 className="h1-landing1">Impulsando cadenas de valor</h1>
            <h1 className="h1-landing2">de triple impacto textil</h1>
          </div>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            style={{ opacity: 0.5 }}
          >
            Calculá tu impacto CO2 y posible mitigación
          </Typography>
          <Button
            variant=""
            color="primary"
            component={Link}
            to="/calculadora"
            style={{ marginTop: "20px" }}
          >
            🧮 Probar calculadora demo
          </Button>
          <Button
            variant=""
            color="primary"
            component={Link}
            to="/home"
            style={{ marginTop: "20px" }}
          >
            🕸️ Encontrar proyectos alineados
          </Button>

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            style={{
              margin: "30px",
              position: "relative",
              bottom: "0",
              backgroundColor: "#f2f2f2",
              width: "90vw",
            }}
          >
            <Typography variant="h6" gutterBottom style={{ opacity: 0.5, marginTop:"10px" }}>
              Sumate a esta red
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/registro"
              style={{ margin: "10px" }}
            >
              Regístrate Ahora
            </Button>
            <Typography variant="h8" gutterBottom style={{ opacity: 0.5 }}>
              si llegas por primera vez o
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/iniciar-sesion"
              style={{ margin: "10px" }}
            >
              Iniciar Sesión
            </Button>
            <Typography variant="h8" gutterBottom style={{ opacity: 0.5 }}>
              si ya estás registrado
            </Typography>
          </Box>
        </Container>
      </Suspense>
    </div>
  );
};

export default Landing;
