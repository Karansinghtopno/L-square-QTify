import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import cardImage from "./assets/cardImage.jpeg";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div
        style={{
          width:"100%",
          display: "flex",
          gap: "20px",
          background: "#121212",
          height: "300px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Card img={cardImage} follows="100" title="New English Songs" />
        <Card img={cardImage} follows="100" title="New English Songs" />
        <Card img={cardImage} follows="100" title="New English Songs" />
        <Card img={cardImage} follows="100" title="New English Songs" />
        <Card img={cardImage} follows="100" title="New English Songs" />
        <Card img={cardImage} follows="100" title="New English Songs" />
        <Card img={cardImage} follows="100" title="New English Songs" />
      </div>
    </div>
  );
}

export default App;
