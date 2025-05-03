import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../api";

type Props = {
  isOpen: boolean;
  imageModal: Image;
  closeModal: () => void;
};

const ImageModal = ({ isOpen, imageModal, closeModal }: Props) => {
  if (!imageModal) return;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div>
        <img src={imageModal.urls.regular} alt={imageModal.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
