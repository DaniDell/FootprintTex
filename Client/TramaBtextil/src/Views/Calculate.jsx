import React, { Suspense} from 'react';
import { CircularProgress } from '@mui/material';
import DemoCalculator from '../Components/DemoCalculator';

const Calculate = () => {
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Suspense fallback={<CircularProgress />}>
                <DemoCalculator />
            </Suspense>
        </div>
    );
};

export default Calculate;