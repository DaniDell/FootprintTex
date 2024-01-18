import React from "react";
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardActions, Box } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Label from './Utils/Label';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const StackedCard = ({
    title,
    subtitle,
    description,
    image,
    redirection,
    ods,
    ...props
}) => {
    return (
        <Card sx={{ width: 340, height: 500, margin: '1rem', display: 'flex', flexDirection: 'column', boxShadow: '5px 5px 10px rgba(0,0,0,0.3)' }}>
        {Array.isArray(image) && image.length > 1 ? (
            <Carousel dynamicHeight={false} showThumbs={false}>
                {image.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={title} />
                    </div>
                ))}
            </Carousel>
        ) : (
            <CardMedia
                component="img"
                height="200px"
                width="200px"
                image={Array.isArray(image) ? image[0] : image}
                alt={title}
                style={{ objectFit: 'contain', marginTop: '15px' }}
            />
        )}

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
                <Button size="small" component={Link} to={redirection}>Conocer más</Button>
            </CardActions>
        </Card>
    );
};

export default StackedCard;