import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Button, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Landing.css";
const HeadingComponent = React.lazy(() => import('../Components/HeadingComponent'));
import desktopImage from '../../src/assets/landing.png';
import Calculate from "./Calculate";

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
          marginBottom: '30px',
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
          style={{padding: " 0 30px 0 30px", opacity: 0.8 , lineHeight: '1.2', }}
        >
          Conocer la huella de la industria textil es el primer paso</Typography>
        
        <Calculate />
        {/* <Button
          variant="contained"
          color="custom2"
          component={Link}
          to="/calculadora"
          style={{ marginTop: "20px", fontSize: "19px", color: '#fff', backgroundColor: '#00947a'}}
        >
          Medí tu impacto textil aquí
        </Button> */}
        </div>
      
</div>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          style={{
            marginTop: "1rem",
            backgroundColor: "#FFFFFF",
            width: "90%",
            borderRadius: "25px",
            padding: "10px"
          }}
        >
          <Typography
            variant="h8"
            gutterBottom
            component="h4"
            style={{ opacity: 0.8 , padding: "6px", color: '#000', lineHeight: '1.2',  }}
          >
            Para conocer más sobre este proyecto, completá nuestra encuesta:
          </Typography>
<Button
  variant="outlined"
  color="secondary"
  component="a"
  href="https://docs.google.com/forms/d/1-hE4D2OTIx7QY-lo98m_69NQtqIQyxht5oaV9RHzXFk/viewform?edit_requested=true"
  target="_blank"
  rel="noopener noreferrer"
  style={{ margin: "10px" }}
>
  link al cuestionario
</Button>
        </Box>
 
      </Container>

    </div>
  );
};

export default Landing;
