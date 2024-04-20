import React, { useState, useEffect, Suspense } from "react";
import FullScreenComponent from "../Components/FullScreenComponent";
import { Container } from "@mui/material";

import "./Landing.css";
const HeadingComponent = React.lazy(() =>
  import("../Components/HeadingComponent")
);

const Calculate = React.lazy(() => import('./Calculate'));

const Landing = () => {
  const [showCalculate, setShowCalculate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCalculate(true);
    }, 8000); // Change this to the desired delay in milliseconds

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);



  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 3rem)",
        width: "100vw",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        
        <Suspense fallback={<FullScreenComponent />}>
        <div style={{
      
      transition: 'top 0.5s ease-in-out'
    }}>
      <HeadingComponent />
    </div>
        </Suspense>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "50%" }}>
          <Suspense fallback={<div>"Solo se puede mejorar lo que se puede medir"</div>}>
        {showCalculate && <Calculate />}
      </Suspense>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Landing;