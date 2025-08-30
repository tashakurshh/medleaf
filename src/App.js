import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./App.css";
import Species from "./components/Species";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="top-section">
        <Navbar />
        <div id="home">
          <HeroSection />
        </div>
      </div>

      <div id="species">
        <Species />
      </div>

      <div id="about">
        <About />
      </div>

      <Footer />
    </>
  );
}

export default App;
