import React from "react";
import { Link } from 'react-router-dom';
import { IconButton, Button, Typography, Card, CardContent, CardActions } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
        <Card sx={{ width: 220, height: 450, margin: '1rem', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="200px"
                width= "200px"
                image={image}
                alt={title}
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