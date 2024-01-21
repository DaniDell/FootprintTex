import React, { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

const FeedbackForm = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "40px" }}>
            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}><CircularProgress /></div>}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSsF-rvmafpmX2f5bHGXGD5ELbzBbG_6N6sB0YKuX2MPA8Ng/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </Suspense>
        </div>
    );
};

export default FeedbackForm;


