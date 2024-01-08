import React from 'react';
import DemoCalculator from '../Components/DemoCalculator';

const Landing = () => {
   
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <p>Landing</p>
            <DemoCalculator />
            
        </div>
    );
};

export default Landing;
