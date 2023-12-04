import { FavoriteBorder, Favorite } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";
import React from "react";

export default function LikeCounter() {
  const [like, setLike] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);

/*   const handleCheckboxChange = (event) => {
    setClicked(event.target.checked);
    if (event.target.checked) {
      handleNewLike();
    } else {
      handleDislike();
    }
  }; */

  function handleNewLike() {
    setLike(like + 1);
  }

  function handleDislike() {
    setLike(like - 1);
  }

  return (
    <div>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={() => handleNewLike()}
      />
      <Typography variant="body2" color="text.secondary">
        {like}
      </Typography>
    </div>
  );
}
