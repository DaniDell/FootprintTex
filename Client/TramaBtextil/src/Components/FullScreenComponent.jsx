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
      backgroundColor: '#f2f2f2',
      zIndex: 9999 
    }}>
<h1>Trama B Textil</h1>
    </div>
  );
};

export default FullScreenComponent;