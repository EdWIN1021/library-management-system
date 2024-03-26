"use client";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import Card from "@mui/material/Card";

import { JSXElementConstructor, ReactElement } from "react";

export interface ModalWrapperProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  openModal: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  openModal,
  onClose,
}) => {
  return (
    <Modal open={openModal} onClose={onClose}>
      <Card className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 gap-4">
        <div className="cursor-pointer" onClick={onClose}>
          <ClearIcon />
        </div>
        {children}
      </Card>
    </Modal>
  );
};

export default ModalWrapper;
