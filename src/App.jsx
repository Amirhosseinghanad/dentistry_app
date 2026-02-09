import { useState } from "react";
import reactLogo from "./assets/TeamLogo.png";
import viteLogo from "./assets/TeamLogo.png";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen font-estead">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
