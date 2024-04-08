"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Modal from "@mui/material/Modal";
import CustomizeOrderForm from "./customize-order-form";

export default function CustomizeOrder() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="grid">
      <Button
        onClick={handleOpen}
        className="bg-[#ed4734] p-2 rounded-lg mx-auto"
      >
        Customize Your Order
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="card">
          <div onClick={handleClose}>
            <CloseOutlinedIcon />
          </div>

          <div>
            <h1>Customize Your Pizza</h1>
            <CustomizeOrderForm />
          </div>
        </div>
      </Modal>
    </div>
  );
}
