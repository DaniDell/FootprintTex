import React from 'react';

const FullScreenComponent = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      backgroundColor: 'white',
      zIndex: 9999 // Add this line
    }}>
      <h1 style={{
        padding: "10vw 30px 8vw 30px",
        opacity: 0.8,
        lineHeight: "1.1",
        color: '#000', 
        textAlign: 'center'
      }}>
        Conocer la huella de la industria textil es el primer paso hacia la transición circular
      </h1>
    </div>
  );
};

export default FullScreenComponent;