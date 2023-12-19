import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ResultComponent = ({ waterImpact, carbonImpact }) => {
    return (
        <Card sx={{ backgroundColor: '#f8f8f8', width: "100%" }}> 
            <CardContent>
                <Typography variant="h5" >
                    <u>Huella mitigada en:</u>
                </Typography>
                <Typography variant="h6">{waterImpact} litros de agua</Typography>
                <Typography variant="h6">{carbonImpact} Kg de CO2 eq</Typography>
            </CardContent>
        </Card>
    );
};

export default ResultComponent;