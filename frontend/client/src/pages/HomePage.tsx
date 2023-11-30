import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import { data} from "../data";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function HomePage() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {data.map((sport)=> (
                <Card key={sport.id} sx={{ maxWidth: 345, margin: "10px" }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={sport.image}
                    />
                    <CardContent
                        sx={{ height: 150 }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            {sport.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {sport.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: '#5D1F4C'}} />} />
                </CardActions>
                </Card>
            ))}
        </div>
    );
}
