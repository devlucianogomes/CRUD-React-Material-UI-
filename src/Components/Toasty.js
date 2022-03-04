import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Toasty = ({ open, onClose, severity, message }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar open={open} onClose={handleClose}>
      <MuiAlert
        autoHideDuration={3000}
        elevation={6}
        variant="filled"
        severity={severity}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Toasty;
