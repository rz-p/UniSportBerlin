import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Sport } from "../common/types";
import getAllSports from "../actions/SportActions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function HomePage() {
    const [likes, setLikes] = React.useState(0);
    const data = getAllSports();

    return (
        <div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
            {Object.values(data).map((sport) => (
                <Card key={sport.slug} sx={{ maxWidth: 345, margin: "10px" }}>
                    <CardActionArea>
                        <CardMedia sx={{ height: 250 }} image={sport.image} />
                        <CardContent sx={{ height: 150 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {sport.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {sport.details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                        <Checkbox
                            {...label}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onChange={() => setLikes(likes + 1)}
                        />
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}
