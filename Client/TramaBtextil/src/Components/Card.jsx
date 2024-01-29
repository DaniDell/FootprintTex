import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  Box } from "@mui/material";
import Label from './Utils/Label';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const StackedCard = ({
    title,
    subtitle,
    description,
    image,
    redirection,
    ods,
    category,
    ...props
}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, borderRadius: 5, boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",}}>
            <CardHeader
                avatar={
                    <Avatar 
                        aria-label="recipe" 
                        src={image[0]}
                        sx={{ 
                            width: 100, 
                            height: 100,
                            img: {
                                objectFit: 'contain',
                            },
                        }}
                    >
                        {image}
                    </Avatar>
                }
                action={
                    <IconButton
                        aria-label="share"
                        onClick={async () => {
                            if (navigator.share) {
                                try {
                                    await navigator.share({
                                        title: document.title,
                                        text: 'Check out this page!',
                                        url: window.location.href,
                                    });
                                } catch (error) {
                                    console.error('Error sharing:', error);
                                }
                            } else {
                                console.log('Web Share API not supported.');
                            }
                        }}
                    >
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
                sx={{ padding: '8px' }} // reduce padding here
            />
            
            
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, padding:1, justifyContent: 'center' }}>
                {Array.isArray(ods) && ods.map((od, index) => (
                    <Label key={index} text={od.text} backgroundColor={od.color} />
                ))}
            </Box>  
        
            <CardActions disableSpacing sx={{ height: '50px', backgroundColor: 'transparent' }}>
            <Typography variant="body1" align="center" style={{ marginLeft: 12, fontSize: '13px' }}>
{Array.isArray(category) && category.map(cat => cat.symbol).join(' | ')}
  
</Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    

                    <ExpandMoreIcon fontSize="large" />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <CardMedia
                component="img"
                height="280"
                image={image.length > 1 ? image[1] : image[0]}
                alt={title}
            />
                    <Typography paragraph></Typography>
                    <Typography paragraph>
                        {description}
                    </Typography>
                    <a href={redirection} target="_blank" rel="noopener noreferrer">
  Conocer más
</a>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default StackedCard;