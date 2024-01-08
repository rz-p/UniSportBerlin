import { CardActions, IconButton } from "@mui/material";
import DeleteButton from "./DeleteButton";
import LikeCounter from "./LikeCounter";

export default function CardButtons() {
  return (
    <CardActions disableSpacing>
      <LikeCounter />
      <DeleteButton />
    </CardActions>
  );
}
