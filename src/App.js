import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav.js";
import HeroesFeatured from "./Components/HeroesFeatured/HeroesFeatured.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchView from "./Components/SearchView/SearchView.js";
import HeroDetails from "./Components/HeroDetails/HeroDetails.js";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <main>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<HeroesFeatured className="featured__list" />}
              />
              <Route path="/search/:name" element={<SearchView />} />
              <Route path="/hero" element={<HeroDetails />} />
              {/* <Route path="/hero/:id" element={<HeroDetails />} /> */}
            </Routes>
          </div>
        </main>

        <footer>
          <div className="container">
            {/* <img src={require("./menu.png")}></img> */}
            <p>
              This content is kindly provided by{" "}
              <a href="https://superheroapi.com/">Superhero API</a>
            </p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
