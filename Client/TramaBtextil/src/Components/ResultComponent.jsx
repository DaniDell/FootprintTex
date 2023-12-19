import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ResultComponent = ({ waterImpact, carbonImpact }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" >
                    <u>Mitigación de huella</u>
                </Typography>
                <Typography variant="h6">{waterImpact} litros de agua</Typography>
                <Typography variant="h6">{carbonImpact} Kg CO2 equivalente</Typography>
            </CardContent>
        </Card>
    );
};

export default ResultComponent;