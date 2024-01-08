import React from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import Text from "@mui/material/Typography";
import { deleteSport } from "../actions/SportActions";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
    slug: string
}

export default function DeleteButton(props: IProps) {
const { slug } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const deleteModal = (
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
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          margin={"10px"}
        >
          Are you sure you want to delete this sport?
        </Typography>
        <Button
          style={{ backgroundColor: "red", margin: "10px" }}
          onClick={() => {
            deleteSport(slug);
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
      {deleteModal}
      <IconButton
        onClick={() => setIsModalOpen(true)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
