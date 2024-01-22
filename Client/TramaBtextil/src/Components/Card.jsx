import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardActions, Box, MobileStepper, IconButton } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Label from './Utils/Label';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const StackedCard = ({
    title,
    subtitle,
    description,
    image,
    redirection,
    ods,
    ...props
}) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = Array.isArray(image) ? image.length : 0;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Card sx={{ width: 340, height: 500, margin: '1rem', display: 'flex', flexDirection: 'column', boxShadow: '5px 5px 10px rgba(0,0,0,0.3)' }}>
            <>
                <CardMedia
                    component="img"
                    height="200px"
                    width="200px"
                    image={image[activeStep]}
                    alt={title}
                    style={{ objectFit: 'contain', marginTop: '15px' }}
                />
                {Array.isArray(image) && image.length > 1 ? (
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="text"
                        activeStep={activeStep}
                        sx={{ '& .MuiMobileStepper-dot': { width: '10px', height: '10px' } }}
                        nextButton={
                            <IconButton 
                                size="small" 
                                onClick={handleNext} 
                                disabled={activeStep === maxSteps - 1}
                                aria-label="Siguiente imagen"
                            >
                                <KeyboardArrowRight />
                            </IconButton>
                        }
                        backButton={
                            <IconButton 
                                size="small" 
                                onClick={handleBack} 
                                disabled={activeStep === 0}
                                aria-label="Imagen anterior"
                            >
                                <KeyboardArrowLeft />
                            </IconButton>
                        }
                    />
                ) : <div style={{ marginTop: '20px' }} />}
            </>

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary" fontWeight="bold">
                    {subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, margin: 2, justifyContent: 'center' }}>
                {Array.isArray(ods) && ods.map((od, index) => (
                    <Label key={index} text={od.text} backgroundColor={od.color} />
                ))}
            </Box>
            <CardActions>
                <Button size="small" component={Link} to={redirection} aria-label={`Conocer más sobre ${title}`}>Conocer más</Button>
            </CardActions>
        </Card>
    );
};

export default StackedCard;