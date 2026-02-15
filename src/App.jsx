import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Animals from "./pages/Animals";
import Contact from "./pages/Contact";
import farmBackground from "./assets/Farmpic.JPG";

function App() {
  return (
    <div
  style={{
    backgroundImage: `url(${farmBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh"
  }}
>
  <div className="overlay">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</div>
  );
}

export default App;
