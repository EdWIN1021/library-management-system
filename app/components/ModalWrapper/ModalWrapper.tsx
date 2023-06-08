"use client";
import Modal from "@mui/material/Modal";
import { ModalWrapperProps } from "./types";
import ClearIcon from "@mui/icons-material/Clear";
import Card from "@mui/material/Card";
import styles from "./styles.module.scss";

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  openModal,
  onClose,
}) => {
  return (
    <Modal open={openModal} onClose={onClose}>
      <Card className={styles.container}>
        <div className={styles.close} onClick={onClose}>
          <ClearIcon />
        </div>
        {children}
      </Card>
    </Modal>
  );
};

export default ModalWrapper;
