import { useState } from "react";
import reactLogo from "./assets/TeamLogo.png";
import viteLogo from "./assets/TeamLogo.png";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import About from "./pages/About";

function App() {
  return (
    <main className="min-h-screen font-estead">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/about_us" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
