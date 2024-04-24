// InfoButton.jsx
import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AlertDialog from "./AlertDialog";

const InfoButton = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} style={{ fontSize: "16px", textAlign: "center" }}>
        <Tooltip title={title} arrow>
          <InfoOutlinedIcon style={{ fontSize: "16px", textAlign: "center" }} />
        </Tooltip>
      </IconButton>

      <AlertDialog
        open={open}
        handleClose={handleClose}
        title={title}
        content={content}
        confirmText="Cerrar"
        onConfirm={handleClose}
      />
    </>
  );
};

export default InfoButton;
