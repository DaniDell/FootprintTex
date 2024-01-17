import React from "react";
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardActions } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';


const StackedCard = ({
    title,
    subtitle,
    description,
    image,
    redirection,
    ...props
}) => {
    return (
        <Card sx={{ width: 340, height: 450, margin: '1rem', display: 'flex', flexDirection: 'column', boxShadow: '5px 5px 10px rgba(0,0,0,0.3)' }}>
            <CardMedia
                component="img"
                height="200px"
                width="200px"
                image={image}
                alt={title}
                style={{ objectFit: 'contain', marginTop: '15px' }}
            />
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
            <CardActions>
                <Button size="small" component={Link} to={redirection}>Conocer más</Button>
            </CardActions>
        </Card>
    );
};

export default StackedCard;