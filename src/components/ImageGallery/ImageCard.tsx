import React from "react";
import { Image } from "../../api";

type Props = {
  image: Image;
  setImageModal: React.Dispatch<React.SetStateAction<Image>>;
  openModal: () => void;
};

const ImageCard = ({ image, setImageModal, openModal }: Props) => {
  const handleClick = () => {
    setImageModal(image);
    openModal();
  };

  return (
    <>
      <img
        onClick={handleClick}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </>
  );
};

export default ImageCard;
