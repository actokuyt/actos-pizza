"use client";

import React from "react";

type CustomizeOrderProviderTypes = {
  children: React.ReactNode;
};

export interface CustomizeOrderContextTypes {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const defaultState = {} as CustomizeOrderContextTypes;

export const CustomizeOrderContext = React.createContext(defaultState);

export default function CustomizeOrderProvider({
  children,
}: CustomizeOrderProviderTypes) {
  const [open, setOpen] = React.useState(false);
  console.log(open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <CustomizeOrderContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </CustomizeOrderContext.Provider>
  );
}
