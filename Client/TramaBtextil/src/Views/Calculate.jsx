import React, { Suspense} from 'react';
import { CircularProgress } from '@mui/material';
import DemoCalculator from '../Components/DemoCalculator';

const Calculate = () => {
    

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vw', height: '100vh'}}>
            <Suspense fallback={<CircularProgress />}>
                <DemoCalculator />
            </Suspense>
        </div>
    );
};

export default Calculate;