import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { CardActionArea, Checkbox } from "@mui/material";
import React, { useEffect } from "react";

export default function LikeCounter() {
  const [like, setLike] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);

  useEffect(() => {
    if (clicked) {
      setLike((prevLike) => prevLike + 1);
    } else {
      setLike((prevLike) => Math.max(prevLike - 1, 0));
    }
  }, [clicked]);

  return (
    <CardActionArea>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={(event) => setClicked(event.target.checked)}
      />
      {like}
    </CardActionArea>
  );
}
