import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Typography, Container } from "@mui/material";

import "./Landing.css";
const HeadingComponent = React.lazy(() =>
  import("../Components/HeadingComponent")
);

import Calculate from "./Calculate";

const Landing = () => {
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
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <Suspense fallback={<CircularProgress />}>
          <HeadingComponent />
        </Suspense>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "50%" }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              style={{
                padding: " 0 30px 8vw 30px",
                opacity: 0.8,
                lineHeight: "1.1",
              }}
            >
              Conocer la huella de la industria textil es el primer paso
            </Typography>

            <Calculate />

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
