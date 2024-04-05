import {CardActions} from "@mui/material";
import DeleteButton from "./DeleteButton";
import LikeCounter from "./LikeCounter";
import * as React from "react";
import EditButton from "./EditButton";
import {useAuth} from "../auth-context";

interface IProps {
    slug: string;
}

export default function CardButtons(props: IProps) {
    const auth = useAuth();
    const {slug} = props;
    return (
        <CardActions disableSpacing>
            <LikeCounter/>
            {auth.status == "true" ? <DeleteButton slug={slug}/> : null}
            {auth.status == "true" ? <EditButton slug={slug}/> : null}
        </CardActions>
    );
}
