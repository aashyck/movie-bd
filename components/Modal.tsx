import MuiModal from "@mui/material/Modal";
import React from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilValue(modalState);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} close={handleClose}>
      <>Modal</>
    </MuiModal>
  );
};

export default Modal;
