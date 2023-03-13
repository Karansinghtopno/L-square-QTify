import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Albums from "./components/Albums/Albums";

export const AlbumEndpoints = {
  topAlbums: "https://qtify-backend-labs.crio.do/albums/top",
  newAlbums: "https://qtify-backend-labs.crio.do/albums/new",
  songs: "https://qtify-backend-labs.crio.do/songs",
};

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Albums />
    </div>
  );
}

export default App;
