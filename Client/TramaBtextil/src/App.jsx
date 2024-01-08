import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CssBaseline from '@mui/material/CssBaseline'; 
import { SpeedInsights } from '@vercel/speed-insights/react';
import DemoCalculator from './Components/DemoCalculator';

function App() {
 

  return (
    <div>
      <CssBaseline />
      <Navbar />
     <DemoCalculator />
      <SpeedInsights />
      <div style={{ padding: '30px' }}></div>
      <Footer />
    </div>
  );
}

export default App;