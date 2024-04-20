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
<img src="/logo.png" alt="logo Trama B" style={{ width: '160px', height: '160px' }} />
    </div>
  );
};

export default FullScreenComponent;