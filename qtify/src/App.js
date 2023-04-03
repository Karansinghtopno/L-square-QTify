import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Albums from "./components/Albums/Albums";
import Faq from "./components/Faq/Faq";

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
