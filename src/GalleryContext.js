import { createContext, use } from "react";

export const GalleryContext = createContext();

export const useGallery = () => use(GalleryContext);
