import React from "react";
import { Button, Modal, Box, IconButton } from "@mui/material";
import Text from "@mui/material/Typography";
import { updateSport } from "../actions/SportActions";
import EditIcon from "@mui/icons-material/Edit";

interface IProps {
  slug: string;
}

export default function DeleteButton(props: IProps) {
  const { slug } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const editModal = (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Box
        sx={{
          width: 600,
          height: 100,
          backgroundColor: "white",
          margin: "10px",
          float: "center",
        }}
      >
        <Button
          style={{ backgroundColor: "red", margin: "10px" }}
          onClick={() => {
            updateSport(slug);
            setIsModalOpen(false);
          }}
        >
          <Text style={{ color: "white" }}>Delete</Text>
        </Button>
      </Box>
    </Modal>
  );

  return (
    <div>
      {editModal}
      <IconButton onClick={() => setIsModalOpen(true)}>
        <EditIcon />
      </IconButton>
    </div>
  );
}
