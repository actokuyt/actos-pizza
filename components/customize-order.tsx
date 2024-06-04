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
        Order Custom Pizza
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="card p-4 rounded-lg max-h-[95%] w-[95%] absolute top-[50%] left-[50%]
        -translate-x-2/4 -translate-y-2/4 overflow-auto"
        >
          <div onClick={handleClose} className="relative">
            <span className="fixed top-4 right-4 cursor-pointer">
              <CloseOutlinedIcon />
            </span>
          </div>

          <div className="mt-12">
            <h1 className="text-center text-xl font-semibold mb-4">
              Customize Your Pizza
            </h1>
            <CustomizeOrderForm />
          </div>
        </div>
      </Modal>
    </div>
  );
}
