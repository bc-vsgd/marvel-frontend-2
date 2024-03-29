import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
// Pages
import Home from "./assets/pages/Home/Home";
import Characters from "./assets/pages/Characters/Characters";
import Comics from "./assets/pages/Comics/Comics";
import Favorites from "./assets/pages/Favorites/Favorites";
import ComicsByChar from "./assets/pages/ComicsByChar/ComicsByChar";
// Components
import Header from "./assets/components/Header/Header";
import Pagination from "./assets/components/Pagination/Pagination";
// Style
import "./App.css";

const serverUrl = "http://localhost:3000";
Cookies.set("favorites", "");
function App() {
  // console.log("App, favorites >>> ", Cookies.get("favorites"));
  return (
    <Router>
      <Header />
      <Pagination />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/marvel/characters"
          element={<Characters marvelUrl={`${serverUrl}/marvel/characters`} />}
        />
        <Route
          path="/marvel/comics"
          element={<Comics marvelUrl={`${serverUrl}/marvel/comics`} />}
        />
        <Route path="/marvel/favorites" element={<Favorites />} />
        <Route
          path="/marvel/comics/:charId"
          element={<ComicsByChar marvelUrl={`${serverUrl}/marvel/comics`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
