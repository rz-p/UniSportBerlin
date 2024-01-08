import { CardActions, IconButton } from "@mui/material";
import DeleteButton from "./DeleteButton";
import LikeCounter from "./LikeCounter";
import EditButton from "./EditButton";

interface IProps {
  slug: string;
}

export default function CardButtons(props: IProps) {
    const { slug } = props;
  return (
    <CardActions disableSpacing>
      <LikeCounter />
      
      <DeleteButton slug={slug} />
      <EditButton slug={slug} />
    </CardActions>
  );
}
