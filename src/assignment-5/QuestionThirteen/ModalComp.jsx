import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
/*

13.Design and implement a Modal component in React.
Allow customization of the modal content and provide options to open, close, and toggle the modal.
Use this component to display various types of content.

*/

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

const ModalComp = (props) => {
  const { about, home, contact } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open Home</Button>
        <Modal open={open}>
          <Box sx={style}>
            <Typography>{home}</Typography>
            <Button onClick={handleClose}>Close Modal</Button>
          </Box>
        </Modal>
      </div>
      <div>
        <Button onClick={handleOpen}>Open About</Button>
        <Modal open={open}>
          <Box sx={style}>
            <Typography>{about}</Typography>
            <Button onClick={handleClose}>Close Modal</Button>
          </Box>
        </Modal>
      </div>
      <div>
        <Button onClick={handleOpen}>Open Contact</Button>
        <Modal open={open}>
          <Box sx={style}>
            <Typography>{contact}</Typography>
            <Button onClick={handleClose}>Close Modal</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default ModalComp;
