import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Button, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Landing.css";
const HeadingComponent = React.lazy(() => import('../Components/HeadingComponent'));

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh", // 100% of the viewport height
        width: "100%", // 100% of the viewport width
      
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Suspense fallback={<CircularProgress />}>
        <HeadingComponent />
        </Suspense>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{ opacity: 0.8 }}
        >
          Calculá tu huella textil y descubrir formas mitigar tu impacto.
        </Typography>
        <Button
          variant="contained"
          color="custom2"
          component={Link}
          to="/calculadora"
          style={{ marginTop: "30px", fontSize: "15px" }} // Aumenta el tamaño de la fuente a 20px
        >
        Probá la calculadora demo
        </Button>
        <Button
          variant="contained"
          color="custom2"
          component={Link}
          to="/home"
          style={{ marginTop: "20px", fontSize: "15px"}} // Aumenta el tamaño de la fuente a 20px
        >
          🕸️ Encontrar aliados
        </Button>
        <Box
  display="flex"
  flexDirection="row"
  flexWrap="wrap"
  alignItems="center"
  justifyContent="center"
  style={{
    marginTop: "2rem",
    backgroundColor: "#f2f2f2",
    width: "100%",
    borderRadius: "25px",
    padding: "15px"
  }}
>
          <Typography
            variant="h5"
            gutterBottom
            component="h1"
            style={{ opacity: 0.8 , padding: "5px",  marginTop: "0px",}}
          >
            Entrá en esta red:
          </Typography>
          <div style={{ padding: "2px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          
          <Typography variant="h8" gutterBottom style={{ opacity: 0.8 }}>
            si es tu primera vez 
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/registro"
            style={{ margin: "10px" }}
          >
            Regístrate aquí
          </Button>
          
          <Typography variant="h8" gutterBottom style={{ opacity: 0.8 }}>
            o si ya estás registrado podrás
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/iniciar-sesion"
            style={{ margin: "10px" }}
          >
            Iniciar sesión
          </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Landing;
