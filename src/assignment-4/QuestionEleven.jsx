/*

11.Design a modal dialog component using Material-UI's Dialog component. 
Use it to display additional information or capture user input within your app.

*/

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const QuestionEleven = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Your Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hi<span style={{fontWeight:'bold'}}> {name} </span> Welcome to modal dialog component
          </Typography>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter your name"
            value={name}
            name="name"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default QuestionEleven;
