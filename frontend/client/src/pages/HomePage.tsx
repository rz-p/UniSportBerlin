import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Sport } from "../common/types";
import { getAllSports, addLike, dislike } from "../actions/SportActions";
import LikeCounter from "../components/LikeCounter";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function HomePage() {
  const [likes, setLikes] = useState(0);
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const sportsData = await getAllSports();
        setSports(sportsData);
      } catch (error) {
        console.error("Error fetching sports:", error);
      }
    };

    fetchSports();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {sports.map((sport) => (
        <Card key={sport.slug} sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            {sport.image ? (
              <CardMedia sx={{ height: 250 }} image={sport.image} />
            ) : (
              <div
                style={{
                  height: 250,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Image Not Available
              </div>
            )}
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                {sport.name}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {sport.location}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {sport.schedule}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {sport.details}
              </Typography>
            </CardContent>
            <LikeCounter />
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
