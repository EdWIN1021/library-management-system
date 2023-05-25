"use client";
import Modal from "@mui/material/Modal";
import { ModalWrapperProps } from "./types";

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  openModal,
  onClose,
}) => {
  return (
    <Modal  open={openModal} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
