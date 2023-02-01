import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Translate from "./Components/Translate/Translate";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Translate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
