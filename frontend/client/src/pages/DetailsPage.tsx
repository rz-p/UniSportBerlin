import React, {useEffect, useState} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import {Sport} from "../common/types";
import {getSport} from "../actions/SportActions";
import {useParams} from 'react-router';

const DetailsPage: React.FC = () => {
    const {id} = useParams();
    useEffect(() => {
        console.log({id});
    }, [id]);

    const [sport, setSports] = useState<Sport>();

    useEffect(() => {
        const fetchSport = async () => {
            try {
                const sportsData = await getSport(id || "");
                console.log("sportsData:", sportsData);
                setSports(sportsData);
            } catch (error) {
                console.error("Error fetching sport:", error);
            }
        };
        fetchSport();
    }, []);
    console.log("sport:", sport);
    if (sport != null) {
        return (
            <Card key={sport.slug} sx={{margin: "10px"}}>
                <CardActionArea>
                    {sport.image ? (
                        <CardMedia sx={{height: 250}} image={sport.image}/>
                    ) : (
                        <div
                            style={{
                                height: 250,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >Image Not Available
                        </div>
                    )}
                    <CardContent sx={{height: 200}}>
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
                </CardActionArea>
            </Card>
        );
    } else {
        return (<Card/>)
    }
};

export default DetailsPage;
