import React from "react";
import {IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useNavigate} from "react-router";

interface IProps {
    slug: string
}

export default function EditButton(props: IProps) {
    const {slug} = props;
    const navigate = useNavigate();

    return (
        <IconButton onClick={() => navigate("/edit/" + slug)}>
            <EditIcon/>
        </IconButton>
    );
}
