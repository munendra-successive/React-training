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

  const [openhome, setOpenHome] = useState(false);
  const [openabout, setOpenAbout] = useState(false);
  const [opencontact, setOpenContact] = useState(false);

  return (
    <>
      <div>
        <Button onClick={() => setOpenHome(true)}>Open Home</Button>
        <Modal open={openhome}>
          <Box sx={style}>
            <Typography>{home}</Typography>
            <Button onClick={() => setOpenHome(false)}>Close Modal</Button>
          </Box>
        </Modal>
      </div>
      <div>
        <Button onClick={() => setOpenAbout(true)}>Open About</Button>
        <Modal open={openabout}>
          <Box sx={style}>
            <Typography>{about}</Typography>
            <Button onClick={() => setOpenAbout(false)}>Close Modal</Button>
          </Box>
        </Modal>
      </div>
      <div>
        <Button onClick={() => setOpenContact(true)}>Open Contact</Button>
        <Modal open={opencontact}>
          <Box sx={style}>
            <Typography>{contact}</Typography>
            <Button onClick={() => setOpenContact(false)}>Close Modal</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default ModalComp;
