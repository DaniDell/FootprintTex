import React, { Suspense} from 'react';
import { CircularProgress } from '@mui/material';
import DemoCalculator from '../Components/DemoCalculator';

const Calculate = () => {
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw',  minHeight: "100vh", paddingTop: "60px", paddingBottom: "60px"}}>
            <Suspense fallback={<CircularProgress />}>
                <DemoCalculator />
            </Suspense>
        </div>
    );
};

export default Calculate;