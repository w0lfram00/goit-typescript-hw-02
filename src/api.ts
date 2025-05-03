import axios from "axios";

export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

export type ImageFetch = {
  total: number;
  total_pages: number;
  results: Image[];
};

export const fetchPhotos = async (
  query: string,
  page: number = 1
): Promise<ImageFetch> => {
  const result = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page: page,
      per_page: 20,
      lang: "en",
    },
    headers: {
      Authorization: "Client-ID PAw1xzDv4lVsmWo-nxt5BAI2oOR2p3OabjrFogoXDIA",
    },
  });
  console.log(1);
  return result.data;
};
