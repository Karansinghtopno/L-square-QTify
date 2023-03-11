import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import Albums from "./components/Albums/Albums";

export const AlbumEndpoints = {
  topAlbums: `https://qtify-backend-gye4ebhsbpfea8g9.z01.azurefd.net/albums/top`,
  newAlbums: `https://qtify-backend-gye4ebhsbpfea8g9.z01.azurefd.net/albums/new`,
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
