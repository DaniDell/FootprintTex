import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Button, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Landing.css";
const HeadingComponent = React.lazy(() => import('../Components/HeadingComponent'));
import desktopImage from '../../src/assets/landing.png';

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 146px)",
        width: "100vw",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: '40px',
        }}
      >
        <Suspense fallback={<CircularProgress />}>
          <HeadingComponent />
        </Suspense>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ flex: '50%' }}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{margin: "10px", opacity: 0.8 }}
        >
          Calculá tu huella textil y descubrir formas mitigar tu impacto.
        </Typography>
        <Button
          variant="contained"
          color="custom2"
          component={Link}
          to="/calculadora"
          style={{ marginTop: "20px", fontSize: "19px", color: '#fff', backgroundColor: '#00947a'}}
        >
          Medí tu huella textil aquí
        </Button>
        </div>
      <img 
  src={desktopImage} 
  alt="Description of image" 
  className="desktopImage"
/>
</div>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          style={{
            marginTop: "4rem",
            backgroundColor: "#D6D6D6",
            width: "auto",
            borderRadius: "25px",
            padding: "30px"
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            component="h1"
            style={{ opacity: 0.8 , padding: "8px",}}
          >
            Para sumarte y conocer más sobre el desarrollo de esta plataforma:
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/iniciar-sesion"
            style={{ margin: "10px" }}
          >
            Completá el cuestionario
          </Button>
        </Box>
 
      </Container>

    </div>
  );
};

export default Landing;
