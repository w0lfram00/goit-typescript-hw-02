import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";
import { Image } from "../../api";

type Props = {
  photos: Image[];
  setImageModal: React.Dispatch<React.SetStateAction<Image>>;
  openModal: () => void;
};

const ImageGallery = ({ photos, setImageModal, openModal }: Props) => {
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            image={photo}
            setImageModal={setImageModal}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
