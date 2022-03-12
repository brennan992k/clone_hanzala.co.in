import * as React from "react";
import { Alert, Snackbar } from "@mui/material";

const AlertMessage = ({ open, setOpen, message }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
          }}
          color="success"
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
