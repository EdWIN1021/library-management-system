"use client";
import Modal from "@mui/material/Modal";
import { ModalWrapperProps } from "./types";

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  openModal,
  onClick,
}) => {
  return (
    <Modal open={openModal} onClose={onClick}>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
