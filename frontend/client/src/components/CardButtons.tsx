import {CardActions} from "@mui/material";
import DeleteButton from "./DeleteButton";
import LikeCounter from "./LikeCounter";
import * as React from "react";

interface IProps {
    slug: string;
}

export default function CardButtons(props: IProps) {
    const isUserLoggedIn = JSON.parse(localStorage.getItem("userLogged") || 'false');
    const {slug} = props;
    return (
        <CardActions disableSpacing>
            <LikeCounter/>
            {isUserLoggedIn ? <DeleteButton slug={slug}/> : null}
        </CardActions>
    );
}
