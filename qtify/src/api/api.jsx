import axios from "axios";

export const AlbumEndpoints = {
  topAlbums: "https://qtify-backend-labs.crio.do/albums/top",
  newAlbums: "https://qtify-backend-labs.crio.do/albums/new",
  songs: "https://qtify-backend-labs.crio.do/songs",
};



export const fetchTopAlbums = async () => {
  try {
    const topAlbum = await axios.get(AlbumEndpoints.topAlbums);
    console.log((topAlbum.data))
    return topAlbum.data;
  } catch (error) {
    console.log(error.message);
  }
};



export const fetchNewAlbums = async () => {
  try {
    const newAlbum = await axios.get(AlbumEndpoints.newAlbums);
    return newAlbum.data;
  } catch (error) {
    console.log(error.message);
  }
};
